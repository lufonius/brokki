import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FullPageNavigationComponent} from './full-page-navigation.component';

describe('FullPageNavigationComponent', () => {
  let component: FullPageNavigationComponent;
  let fixture: ComponentFixture<FullPageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullPageNavigationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
