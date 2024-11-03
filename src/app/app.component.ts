import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { HomeComponent } from './pages/home/home.component';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        RouterModule,
        HomeComponent
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'candy-shop';
    showModal: boolean = false;

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
}
