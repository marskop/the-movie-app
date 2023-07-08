import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { CategoryFilterComponent } from './category-filter.component';


@NgModule({
  declarations: [
    CategoryFilterComponent
  ],
  imports: [
    // Angular
    FormsModule,

    // PrimeNG
    DropdownModule
  ],
  exports: [
    CategoryFilterComponent
  ]
})
export class CategoryFilterModule { }
