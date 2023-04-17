import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
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
  navSelector(){
    this.index_show=true;
  }

}
