import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { PaginatorModule } from 'primeng/paginator';
import { CategoryFilterModule } from '../components/category-filter/category-filter.module';
import { MovieListModule } from './movies-list/movie-list.module';
import { SearchModule } from '../components/search/search.module';

import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    // Angular
    CommonModule,

    // features
    CategoryFilterModule,
    MovieListModule,
    SearchModule,

    // PrimeNg
    SkeletonModule,
    PaginatorModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }
