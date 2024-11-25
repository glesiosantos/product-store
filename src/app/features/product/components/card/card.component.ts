import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  product = input.required<Product>();

}
