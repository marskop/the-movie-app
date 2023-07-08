import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  /** Emits the search term when user clicks 'search' */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /** The search term the user typed */
  searchTerm: string = '';

  /**
   * Called when user clicks the search button and emits the typed
   * search term using the search EventEmitter.
   */
  onSearchTermChange(): void {
    this.search.emit(this.searchTerm);
  }
}
