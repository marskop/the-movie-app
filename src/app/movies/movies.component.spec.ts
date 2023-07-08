import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { MoviesComponent } from './movies.component';
import { MoviesService } from './movies.service';
import { Movie } from './movie';
import { SearchModule } from '../components/search/search.module';
import { CategoryFilterModule } from '../components/category-filter/category-filter.module';

fdescribe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MoviesComponent
      ],
      imports: [
        HttpClientTestingModule,
        SearchModule,
        CategoryFilterModule
      ],
      providers: [
        MoviesService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('filterMoviesByCategory', () => {
    it('should update selectedCategory and fetch movies', () => {
      const category = 'action';
      const fetchMoviesSpy = spyOn(component, 'fetchMovies');

      component.filterMoviesByCategory(category);

      expect(component.selectedCategory).toEqual(category);
      expect(fetchMoviesSpy).toHaveBeenCalled();
    });
  });

  describe('searchMovies', () => {
    it('should show prompt and clear movies when search term is empty', () => {
      component.movies = [{ Title: 'Movie 1' }] as Movie[];
      component.searchMovies('');

      expect(component.showPrompt).toBeTrue();
      expect(component.movies).toEqual([]);
    });

    it('should update search term, fetch movies, and hide prompt when search term is not empty', () => {
      const searchTerm = 'action';
      const fetchMoviesSpy = spyOn(component, 'fetchMovies');

      component.searchMovies(searchTerm);

      expect(component.searchTerm).toEqual(searchTerm);
      expect(fetchMoviesSpy).toHaveBeenCalled();
      expect(component.showPrompt).toBeFalse();
    });
  });
});
