import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreviewsComponent } from './allreviews.component';

describe('AllreviewsComponent', () => {
  let component: AllreviewsComponent;
  let fixture: ComponentFixture<AllreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
