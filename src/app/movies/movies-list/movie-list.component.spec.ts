import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to movie details page when a movie is clicked', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const movieId = '123';
    component.goToMovie(movieId);

    expect(navigateSpy).toHaveBeenCalledWith(['movie-details', movieId]);
  });
});
