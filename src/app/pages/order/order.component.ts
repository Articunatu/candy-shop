import { Component } from '@angular/core';
import { Order } from '../../models/order.model';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  user: Order = {
    id: 0,
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
    eMail: '',
    phoneNumber: ''
  };

  onSubmit(): void {
    console.log('Form submitted', this.user);
  }
}
