import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadomyComponent } from './acadomy.component';

describe('AcadomyComponent', () => {
  let component: AcadomyComponent;
  let fixture: ComponentFixture<AcadomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadomyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
