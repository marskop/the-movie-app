import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {

  /** Movies array to display */
  @Input() movies: Movie[];

  /**
   * Constructs an instance of the MovieListComponent.
   * @param router The Router instance for navigation.
   */
  constructor(private router: Router) { }

  /**
   * Navigates to the movie details page.
   * @param id The ID of the movie to navigate to.
   */
  goToMovie(id: string): void {
    this.router.navigate(['movie-details', id])
  }

}

