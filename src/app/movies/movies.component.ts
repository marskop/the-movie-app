import { Component } from '@angular/core';
import { Movie } from './movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less']
})
export class MoviesComponent {

  /** Holds an error message */
  errorMessage: string;

  /** First page count */
  first: number = 0;

  /** Number of results to display */
  rows: number = 10;

  /** Loading indicator */
  loading: boolean;

  /** Array of movies to display */
  movies: Movie[] = [];

  /** Search term the user inputs */
  searchTerm: string;

  /** The selected category */
  selectedCategory: string;

  /** When set to true displays an info message for the user. */
  showPrompt: boolean = true;

  /** Loading skeletons */
  skeletonMovies = Array(10).fill(null);

  /** total movies count */
  totalRecords: number = 0;

  /**
   * @param moviesService makes the api requests
   */
  constructor(private moviesService: MoviesService) { }

  /**
   * Filters the movies based on the selected category.
   * @param category The selected category to filter movies.
   */
  filterMoviesByCategory(category: string): void {
    this.selectedCategory = category;
    this.fetchMovies();
  }

  /**
   * Fetches the movies from the service based on the search term and selected category.
   * Updates the movies list and loading status.
   */
  fetchMovies(parameters?): void {
    this.loading = true;

    this.moviesService.getMovies(this.searchTerm, this.selectedCategory, parameters)
      .subscribe({
        next: (response: any) => {
          if (response.Response === 'True') {
            this.movies = response.Search;
            this.totalRecords = parseInt(response.totalResults);
            this.loading = false;
          }
          else {
            this.errorMessage = response.Error;
            this.movies = [];
            this.loading = false;
          }
        }
      });
  }

  /**
   * Fetch the movies of the requested page.
   * @param event page change event
   */
  onPageChange(event): void {
    this.first = event.first;
    this.rows = event.rows;
    this.fetchMovies({ page: event.page })
  }

  /**
   * Handles the search action triggered by the search component.
   * @param searchTerm The search term entered by the user.
   */
  searchMovies(searchTerm: string): void {
    if (searchTerm.trim() === '') {
      this.showPrompt = true; // Show the prompt again if the search term is empty
      this.movies = []; // Clear the movie list
    } else {
      this.searchTerm = searchTerm;
      this.fetchMovies();
      this.showPrompt = false; // Hide the prompt when a non-empty search term is entered
    }
  }

}

