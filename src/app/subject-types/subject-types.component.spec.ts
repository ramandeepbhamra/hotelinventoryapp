import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTypesComponent } from './subject-types.component';

describe('SubjectTypesComponent', () => {
  let component: SubjectTypesComponent;
  let fixture: ComponentFixture<SubjectTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
