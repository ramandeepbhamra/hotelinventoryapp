import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableVsPromiseComponent } from './observable-vs-promise.component';

describe('ObservableVsPromiceComponent', () => {
  let component: ObservableVsPromiseComponent;
  let fixture: ComponentFixture<ObservableVsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableVsPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableVsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
