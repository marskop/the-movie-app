import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFilterComponent } from './category-filter.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


describe('CategoryFilterComponent', () => {
  let component: CategoryFilterComponent;
  let fixture: ComponentFixture<CategoryFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryFilterComponent
      ],
      imports: [
        FormsModule,
        DropdownModule
      ],
    });

    fixture = TestBed.createComponent(CategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected category when category changes', () => {
    const category = 'movie';
    spyOn(component.category, 'emit');
    component.selectedCategory = category;

    component.onCategoryChange();

    expect(component.category.emit).toHaveBeenCalledWith(category);
  });
});
