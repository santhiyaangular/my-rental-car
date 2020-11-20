import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/shared/models/car.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
card = new CarModel('','',0,0,0,'');
  constructor(private router: Router, private route: ActivatedRoute) {
    this.card = this.router.getCurrentNavigation().extras.state as CarModel;
    console.log(this.card);
   }

  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['../buy-car'], {relativeTo:this.route});
  }
}
