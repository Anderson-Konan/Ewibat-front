import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedmodelsComponent } from './sharedmodels.component';

describe('SharedmodelsComponent', () => {
  let component: SharedmodelsComponent;
  let fixture: ComponentFixture<SharedmodelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedmodelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
