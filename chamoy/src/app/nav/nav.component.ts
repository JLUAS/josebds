import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  index_show=false;
  title = 'chamoy';
  showDiv = false;
  isSmallScreen = false;
  ngOnInit(): void {
    this.checkScreenWidth();
  }

  toggle() {
    this.showDiv = !this.showDiv;
  }

  checkScreenWidth() {
    this.isSmallScreen = window.innerWidth < 767;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 767) {
        this.isSmallScreen = true;
        this.showDiv = false; // reiniciar valor
      } else {
        this.isSmallScreen = false;
      }
    });
  }
}
