import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CandyCardComponent } from '../../components/candy-card/candy-card.component';
import { CandyList } from '../../view-models/candy-list';

@Component({
  selector: 'app-candy-list',
  standalone: true,
  imports: [NgFor, CandyCardComponent],
  templateUrl: './candy-list.component.html',
  styleUrl: './candy-list.component.scss'
})
export class CandyListComponent {

  candyList: CandyList = {
    candies: [],
    currentCategory: ''
  }
}
