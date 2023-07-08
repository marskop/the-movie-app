import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { SkeletonModule } from 'primeng/skeleton';

import { MovieDetailsComponent } from './movie-details.component';


@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,

    // PrimeNG
    ButtonModule,
    CardModule,
    ImageModule,
    SkeletonModule
  ],
  exports: [
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule { }
