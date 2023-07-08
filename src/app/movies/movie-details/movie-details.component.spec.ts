import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { MovieDetailsComponent } from './movie-details.component';


describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let moviesService: jasmine.SpyObj<MoviesService>;
  let route: jasmine.SpyObj<ActivatedRoute>;
  let router: jasmine.SpyObj<Router>;

  const mockMovie: Movie = {
    Title: 'Test Movie',
    Year: '2023',
    Released: 'July 1, 2023',
    Genre: 'Action',
    Director: 'John Doe',
    Actors: 'Actor 1, Actor 2',
    Plot: 'Test plot',
    Poster: 'poster-url',
    imdbRating: '7.5',
    imdbID: 'tt1234',
    Runtime: '130min'
  };

  beforeEach(async () => {
    const moviesServiceSpy = jasmine.createSpyObj('MoviesService', ['getMovieDetails']);
    const routeSpy = jasmine.createSpyObj('ActivatedRoute', [], { snapshot: { paramMap: { get: () => '123' } } });
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        { provide: MoviesService, useValue: moviesServiceSpy },
        { provide: ActivatedRoute, useValue: routeSpy },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService) as jasmine.SpyObj<MoviesService>;
    route = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch movie details on component initialization', () => {
    moviesService.getMovieDetails.and.returnValue(of(mockMovie));

    component.ngOnInit();

    expect(component.loading).toBeFalse();
    expect(component.movie).toEqual(mockMovie);
    expect(moviesService.getMovieDetails).toHaveBeenCalledWith('123');
  });

  it('should navigate to movies page', () => {
    component.goToMovies();

    expect(router.navigate).toHaveBeenCalledWith(['movies']);
  });
});
