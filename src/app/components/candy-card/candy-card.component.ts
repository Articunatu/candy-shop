import { Component, Input } from '@angular/core';
import { Candy } from '../../models/candy.model';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-candy-card',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './candy-card.component.html',
  styleUrl: './candy-card.component.scss'
})
export class CandyCardComponent {
  @Input() candy!: Candy;

  showAddToCart = false;

  addToCart(id : number): void {
    //Tan Stack query
  }
}
