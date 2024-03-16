import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapVsSwitchMapComponent } from './merge-map-vs-switch-map.component';

describe('MergeMapVsSwitchMapComponent', () => {
  let component: MergeMapVsSwitchMapComponent;
  let fixture: ComponentFixture<MergeMapVsSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapVsSwitchMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapVsSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
