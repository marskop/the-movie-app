import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    });

    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve movies based on search term', () => {
    const searchTerm = 'Avengers';
    const mockResponse = { Search: [{ Title: 'Avengers', Year: '2012' }, { Title: 'Avengers: Endgame', Year: '2019' }] };

    service.getMovies(searchTerm).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}&s=${searchTerm}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should retrieve movies based on search term and category', () => {
    const searchTerm = 'Batman';
    const category = 'movie';
    const mockResponse = { Search: [{ Title: 'Batman Begins', Year: '2005' }, { Title: 'The Dark Knight', Year: '2008' }] };

    service.getMovies(searchTerm, category).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}&type=${category}&s=${searchTerm}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should retrieve movie details based on ID', () => {
    const id = 'tt0372784';
    const mockResponse = { Title: 'Batman Begins', Year: '2005', Plot: 'The story of Batman begins.' };

    service.getMovieDetails(id).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpMock.expectOne(`${service['baseUrl']}&i=${id}&plot=full`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });
});
