import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, NgIf, FilterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
}