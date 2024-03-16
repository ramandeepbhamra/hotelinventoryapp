import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBottomComponent } from './view-bottom.component';

describe('ViewBottomComponent', () => {
  let component: ViewBottomComponent;
  let fixture: ComponentFixture<ViewBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
