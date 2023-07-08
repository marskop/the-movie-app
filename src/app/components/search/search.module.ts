import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    SearchComponent,

  ],
  imports: [
    FormsModule,

    // PrimeNG
    ButtonModule,
    InputTextModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
