import { Component } from '@angular/core';
import { ThemeToggleService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  title = 'movies-app';

  checked: boolean;

  /**
   * Constructs an instance of the AppComponent.
   * @param themeToggleService The ThemeToggleService instance for managing the theme.
   */
  constructor(private themeToggleService: ThemeToggleService) { }

  /**
   * Retrieves the current theme state and initializes the theme.
   */
  ngOnInit(): void {
    this.checked = this.themeToggleService.isDarkTheme();
    this.themeToggleService.initializeTheme();
  }

  /**
   * Toggles the theme between light and dark.
   */
  toggleTheme(): void {
    this.themeToggleService.toggleTheme();
  }


}
