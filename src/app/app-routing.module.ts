import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; 
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component'; 
import { CandyListComponent } from './pages/candy-list/candy-list.component'; 
import { OrderComponent } from './pages/order/order.component'; 

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'filter', component: CandyListComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'order', component: OrderComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }