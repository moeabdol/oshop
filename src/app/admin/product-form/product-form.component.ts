import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(categoryService: CategoryService,
              private _productService: ProductService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }

  save(product) {
    this._productService.create(product);
  }
}
