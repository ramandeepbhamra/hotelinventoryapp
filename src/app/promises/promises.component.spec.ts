import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesComponent } from './promises.component';

describe('PromicesComponent', () => {
  let component: PromisesComponent;
  let fixture: ComponentFixture<PromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
