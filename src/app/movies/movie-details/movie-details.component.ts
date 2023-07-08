import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.less']
})
export class MovieDetailsComponent {

  /** Holds the movie ID */
  id: string;

  /** Holds the movie details */
  movie: Movie;

  /** Indicates if the movie details are being loaded */
  loading: boolean;


  /**
   * @param moviesService The service for retrieving movie details.
   * @param route The ActivatedRoute instance for accessing route parameters.
   * @param router The Router instance for navigation.
   */
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Fetches the movie details if the ID is available.
   */
  ngOnInit(): void {
    this.loading = true;
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.fetchMovieDetails();
    }
  }

  /**
   * Fetches the movie details from the service based on the ID.
   * Updates the movie variable and stops loading.
   */
  fetchMovieDetails(): void {
    this.moviesService.getMovieDetails(this.id)
      .subscribe((value) => {
        this.loading = false;
        this.movie = value as Movie;
      });
  }

  /**
   * Navigates to the movies page.
   */
  goToMovies(): void {
    this.router.navigate(['movies']);
  }
}
