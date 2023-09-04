import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPlaneComponent } from './pricing-plane.component';

describe('PricingPlaneComponent', () => {
  let component: PricingPlaneComponent;
  let fixture: ComponentFixture<PricingPlaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingPlaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingPlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
