import { HttpClient } from "@angular/common/http";
import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

export const BASE_PATH = new InjectionToken<string>('basePath');

interface ApiResponse<T> {
  Success: boolean;
  Data: T[];
}

@Injectable({
  providedIn: 'root'
})
export class GenericService<TEntity, TId> {
  private baseUrl = ""; 

  constructor(
    private http: HttpClient,
    @Inject(BASE_PATH) private path: string 
  ) {
    this.loadBaseUrl();
  }

  private loadBaseUrl(): void {
    this.http.get<{ baseUrl: string }>('/assets/credentials.json')
      .pipe(
        map(response => response.baseUrl),
        catchError(() => of(""))
      )
      .subscribe(url => {
        this.baseUrl = url; 
        console.log("Base URL loaded:", this.baseUrl);
      });
  }

  private get fullUrl(): string {
    return `${this.baseUrl}/${this.path}`;
  }

  findValues(id?: TId): Observable<ApiResponse<TEntity>> {
    const url = id ? `${this.fullUrl}/${id}` : this.fullUrl;
    return this.http.get<ApiResponse<TEntity>>(url);
  }

  add(entity: TEntity): Observable<ApiResponse<TEntity>> {
    return this.http.post<ApiResponse<TEntity>>(this.fullUrl, entity);
  }
}
