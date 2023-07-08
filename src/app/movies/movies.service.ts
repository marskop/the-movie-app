import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly apiKey = environment.omdbApiKey;
  private readonly baseUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;

  /**
   * Constructs an instance of the MoviesService.
   * @param http The HttpClient instance for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves movies based on the provided search term and optional category.
   * @param searchTerm The search term for querying movies.
   * @param category The optional category to filter movies by.
   * @returns An observable of the HTTP response containing the movie search results.
   */
  getMovies(searchTerm: string, category?: string, parameters?) {
    let url: string = this.baseUrl;

    if (category) {
      url = `${this.baseUrl}&type=${category}`;
    }

    if (parameters && parameters['page']) {
      url = url + `&page=${parameters?.page}`
    }

    return this.http.get(`${url}&s=${searchTerm}`);
  }

  /**
   * Retrieves the details of a specific movie based on the provided ID.
   * @param id The ID of the movie to fetch details for.
   * @returns An observable of the HTTP response containing the movie details.
   */
  getMovieDetails(id: string) {
    return this.http.get(`${this.baseUrl}&i=${id}&plot=full`);
  }
}
