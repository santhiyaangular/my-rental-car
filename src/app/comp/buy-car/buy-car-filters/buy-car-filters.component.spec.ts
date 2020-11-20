import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCarFiltersComponent } from './buy-car-filters.component';

describe('BuyCarFiltersComponent', () => {
  let component: BuyCarFiltersComponent;
  let fixture: ComponentFixture<BuyCarFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCarFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCarFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
