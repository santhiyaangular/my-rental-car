import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from '../../../shared/models/car.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() carModel: CarModel;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClickCard(selectedCard: CarModel){
    this.router.navigate(['../car-detail'], {relativeTo:this.route, state: selectedCard });
  }
}
