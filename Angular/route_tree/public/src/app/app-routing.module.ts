import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'brand/:brand', component: BrandComponent },
      { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewsComponent, children: [
      { path: 'details/:id', component: ReviewDetailComponent },
      { path: 'author/:id', component: AuthorComponent },
      { path: 'all/:id', component: AllreviewsComponent }]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
