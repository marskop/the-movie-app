import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

type CategoryOption = {
  label: string;
  value: string;
}

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryFilterComponent {

  /** Emits the selected category when it changes. */
  @Output() category: EventEmitter<string> = new EventEmitter();

  /** Available category options */
  readonly categoryOptions: CategoryOption[] = [
    { label: 'Movie', value: 'movie' },
    { label: 'Series', value: 'series' },
    { label: 'Episode', value: 'episode' }
  ];

  /** The selected option. */
  selectedCategory: string;

  /**
   * Called when the value of the select element changes and
   * emits the selected category value using the category EventEmitter.
   */
  onCategoryChange(): void {
    this.category.emit(this.selectedCategory);
  }

}
