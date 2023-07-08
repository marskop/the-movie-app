import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { SkeletonModule } from 'primeng/skeleton';
import { MovieDetailsModule } from '../movie-details/movie-details.module';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    // Angular
    CommonModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    ImageModule,
    SkeletonModule,

    MovieDetailsModule
  ],
  exports: [
    MovieListComponent
  ]
})
export class MovieListModule { }
