import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDetailsComponent } from './technical-details.component';

describe('TechnicalDetailsComponent', () => {
  let component: TechnicalDetailsComponent;
  let fixture: ComponentFixture<TechnicalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
