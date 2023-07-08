import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        FormsModule,
        ButtonModule
      ],
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the search term', () => {
    const search = 'harry potter';
    spyOn(component.search, 'emit');
    component.searchTerm = search;

    component.onSearchTermChange();

    expect(component.search.emit).toHaveBeenCalledWith(search);
  });
});
