import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterLogComponent } from './disaster-log.component';

describe('DisasterLogComponent', () => {
  let component: DisasterLogComponent;
  let fixture: ComponentFixture<DisasterLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
