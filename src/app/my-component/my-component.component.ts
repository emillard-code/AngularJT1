import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
})
export class MyComponentComponent implements OnInit {

  constructor(service : ProductService) { }

  ngOnInit() {
  }

}
