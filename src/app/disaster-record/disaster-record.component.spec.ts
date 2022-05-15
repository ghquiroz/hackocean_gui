import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterRecordComponent } from './disaster-record.component';

describe('DisasterRecordComponent', () => {
  let component: DisasterRecordComponent;
  let fixture: ComponentFixture<DisasterRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
