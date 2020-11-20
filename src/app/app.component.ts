import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dream-cars';
  cars = ['Honda', 'Toyota', 'Nissan', 'Honda', 'Nissan'];

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnInit(): void {

    this.cars.filter((value, index, array) => {
      // tslint:disable-next-line:prefer-const no-debugger
      //debugger;
      let indexOfValue = array.indexOf(value)
      let result = indexOfValue === index;
      return result;
    });
  }

}
