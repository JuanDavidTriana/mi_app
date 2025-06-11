import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
<<<<<<< HEAD
    this.isScrolled = window.scrollY > 50;
=======
    this.isScrolled = window.scrollY > 50; 
>>>>>>> 50e55f725a5636754bbf2754fde4ac22c3e4d092
  }
}
