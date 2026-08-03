import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {

  isScrolled = false;

  menuOpen = false;

  @HostListener('window:scroll')

  onScroll(){

    this.isScrolled = window.scrollY > 40;

  }

  toggleMenu(){

    this.menuOpen = !this.menuOpen;

  }

  closeMenu(){

    this.menuOpen = false;

  }

  scrollToContact(): void {

  const section = document.getElementById('contact');

  if (section) {

    section.scrollIntoView({

      behavior: 'smooth',
      block: 'start'

    });

  }

}

}
