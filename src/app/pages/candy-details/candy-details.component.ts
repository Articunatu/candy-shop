import { Component, Input } from '@angular/core';
import { CandyExtended } from '../../models/candy.model';

@Component({
  selector: 'app-candy-details',
  standalone: true,
  imports: [],
  templateUrl: './candy-details.component.html',
  styleUrl: './candy-details.component.scss'
})
export class CandyDetailsComponent {
  @Input() candy!: CandyExtended;
}
