import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTopComponent } from './view-top.component';

describe('ViewTopComponent', () => {
  let component: ViewTopComponent;
  let fixture: ComponentFixture<ViewTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
