import { Component, OnInit } from '@angular/core';
import {CarService} from '../../../shared/services/car.service';

@Component({
  selector: 'app-car-card-list',
  templateUrl: './car-card-list.component.html',
  styleUrls: ['./car-card-list.component.css']
})
export class CarCardListComponent implements OnInit {

  constructor( private carService: CarService) { }

  carList = [];
  ngOnInit(): void {
    this.carList = this.carService.carList;
    this.carService.carsSubject.subscribe(filteredCarList => {
      this.carList = filteredCarList;
    });
  }

}
