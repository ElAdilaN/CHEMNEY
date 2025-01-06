import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zaza';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleActive() {
    const hamburgerElement = this.el.nativeElement.querySelector('.hamburger');

    // Check if the 'active' class exists
    if (hamburgerElement.classList.contains('active')) {
      this.renderer.removeClass(hamburgerElement, 'active'); // Remove the class if it exists
    } else {
      this.renderer.addClass(hamburgerElement, 'active'); // Add the class if it doesn't exist
    }
  }
}
