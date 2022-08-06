import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products : any;

  constructor(private service : ProductService) {

      this.products = service.getProducts();

   }

  ngOnInit() {

    this.products = this.service.getProducts();

  }

}
