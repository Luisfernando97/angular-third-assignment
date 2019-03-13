import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:[`
  .morethanfive{
    color: white;
    background-color: blue;
  }
  `]
})
export class AppComponent {

  showDetails = false;
  amountOfClicks = [];

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.amountOfClicks.push((this.amountOfClicks.length +1));
  }
}
