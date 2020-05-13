import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIdComponent } from './filter-id.component';

describe('FilterIdComponent', () => {
  let component: FilterIdComponent;
  let fixture: ComponentFixture<FilterIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
