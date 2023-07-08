import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeToggleService {

  private renderer: Renderer2;
  private readonly themeKey = 'theme';

  /**
   * Constructs an instance of the ThemeToggleService.
   * @param rendererFactory The RendererFactory2 instance for creating a renderer.
   */
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * Initializes the theme based on the saved theme in local storage.
   * Adds the theme class to the body element if the saved theme is 'dark'.
   */
  initializeTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey);

    if (savedTheme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
    }
  }

  /**
   * Checks if the current theme is set to 'dark'.
   * @returns True if the current theme is 'dark', false otherwise.
   */
  isDarkTheme(): boolean {
    return localStorage.getItem(this.themeKey) === 'dark';
  }

  /**
   * Toggles the theme between light and dark.
   * Updates the theme class on the body element and saves the theme in local storage.
   */
  toggleTheme(): void {
    const currentTheme = localStorage.getItem(this.themeKey);

    if (currentTheme === 'dark') {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.setItem(this.themeKey, 'light');
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem(this.themeKey, 'dark');
    }
  }

}
