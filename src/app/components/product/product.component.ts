import { ProductDetails } from './../models/product-details.interface';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 's20p-product',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  rupeeHTMLIcon: string = '&#8377';
  productDetails: ProductDetails = {
    name: "Dolo 650mg",
    mrp: "33.60",
    tabletsCount: 15,
    imageSrc: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    mfg: "Micro Labs",
    uses: "Pain and Fever"
  };

  async ngOnInit() {
  }

}
