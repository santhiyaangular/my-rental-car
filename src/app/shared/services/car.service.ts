import { Injectable } from '@angular/core';
import {CarModel} from '../models/car.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  carsSubject = new Subject<CarModel[]>();

  carList = [
    new CarModel('HONDA', 'ACCORD', 2019, 12000, 10000, 'https://i.ytimg.com/vi/U17zDef8UTs/maxresdefault.jpg'),
    new CarModel('HONDA', 'CIVIC', 2014, 14000, 20000, 'https://spectrum.ieee.org/image/MzAzNzgzNQ.jpeg'),
    new CarModel('HONDA', 'CRV', 2012, 8000, 11000, 'https://i.ytimg.com/vi/2TBaTY7KfDU/maxresdefault.jpg'),
    new CarModel('TOYOTA', 'CAMRY', 2013, 5000, 15000, 'https://cars.usnews.com/static/images/Auto/izmo/i159163966/2020_toyota_camry_angularfront.jpg'),
    new CarModel('TOYOTA', 'COROLLA', 2019, 10000, 12000, 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USD00TOC041B021001.jpg'),
    new CarModel('TOYOTA', 'RAV4', 2015, 15000, 21000, 'https://global.toyota/pages/news/images/2019/11/20/1405/20191120_02_31_s.jpg'),
    new CarModel('TOYOTA', 'HIGHLANDER', 2013, 12000, 190000, 'https://www.kindpng.com/picc/m/607-6076180_2020-toyota-highlander-2020-toyota-highlander-le-hd.png'),
    new CarModel('NISSAN', 'ALTIMA', 2018, 17000, 190000, 'https://cars.usnews.com/static/images/Auto/izmo/i118190851/2019_nissan_altima_angularfront.jpg'),
    new CarModel('NISSAN', 'ROGUE', 2011, 11000, 140000, 'https://inventory-dmg.assets-cdk.com/7/0/6/21185772607.jpg'),
    new CarModel('NISSAN', 'SENTRA', 2014, 16000, 140000, 'https://electrodealpro.com/wp-content/uploads/2019/11/2020-Nissan-Sentra-revealed-to-join-the-39race-track39-with-Mazda3-and-Toyota-Corolla-Altis.jpg'),
    new CarModel('FORD', 'MUSTANG', 2019, 18000, 22000, 'https://di-uploads-pod14.dealerinspire.com/kingsford/uploads/2019/10/2020-Ford-Mustang-Cincinnati-OH-Red-Left.jpg'),
    new CarModel('FORD', 'FIESTA', 2012, 13000, 11000, 'https://media.ford.com/content/fordmedia/feu/en/news/2016/11/30/next-generation-ford-fiesta--worlds-most-technologically-advance/_jcr_content/image.img.881.495.jpg/1500239857015.jpg'),
    new CarModel('FORD', 'FUSION', 2014, 18000, 15000, 'https://media.ford.com/content/fordmedia/fna/us/en/news/2018/03/20/sleeker-smarter-2019-ford-fusion/jcr:content/image.img.881.495.jpg/1550178169079.jpg'),
    new CarModel('FORD', 'ESCAPE', 2016, 15000, 14000, 'https://www.ford.ca/cmslibs/content/dam/vdm_ford/live/en_ca/ford/nameplate/escape/2020/collections/3-2/20_frd_esp_ps34_tnm_fhev_32.jpg/_jcr_content/renditions/cq5dam.web.1440.1440.jpeg'),
    new CarModel('BMW', 'M5', 2013, 20000, 23000, 'https://media.hatla2eestatic.com/uploads/ncarmodel/1798/big-up_02a9b2bdde387228676986a4e5e27564.png'),
    new CarModel('BMW', 'X6', 2017, 19000, 27000, 'https://s.aolcdn.com/commerce/autodata/images/USD00BMS231B021001.jpg'),
  ];

  // tslint:disable-next-line:typedef
  getAllBrands() {
      // debugger
     return this.carList.map((car) => car.brand)
      .filter((value, index, self) => self.indexOf(value) === index );
  }

  // tslint:disable-next-line:typedef
  getAllModels() {
    return this.carList.map((car) => car.model)
      .filter((value, index, self) => self.indexOf(value) === index );
  }

  getAllYears() {
    // debugger
    return this.carList.map((car) => car.year)
    .filter((value, index, self) => self.indexOf(value) === index).sort((x,y)=> x-y);
  }
  getAllMiles(){
    return this.carList.map((car) => car.miles)
    .filter((value,index,self) => self.indexOf(value) === index);
  }

  // tslint:disable-next-line:typedef
  getModelNamesByBrand(selectedBrand: string) {
    let  filteredCars = this.carList;
    if (selectedBrand !== 'none') {
      filteredCars = this.carList.filter(car => car.brand === selectedBrand )
    }
    this.carsSubject.next(filteredCars)
    return filteredCars.map(car => car.model);
  }
  getCarNamesByYear(selectedYear: string) {
    let  filteredCars = this.carList;
    if (selectedYear !== 'none') {
      const selectedYearNum = +selectedYear;
      const sortYear = +selectedYear;
      filteredCars = this.carList.filter(car => car.year === selectedYearNum )
      // filteredCars = this.carList.filter(car => car.year) .sort((car, car) => car.year === selectedYearNum )
    }
    this.carsSubject.next(filteredCars);
  }
}
