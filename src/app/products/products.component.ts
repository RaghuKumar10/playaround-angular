import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products :any = [];

  constructor(private http : HttpClient) { }

  ngOnInit() {
    console.log("products component OnInit hook");
    this.http.get("/api/products")
    .subscribe(response => {
      console.log(response);
      this.products = response
    });
  }
}
