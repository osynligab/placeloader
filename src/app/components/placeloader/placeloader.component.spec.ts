import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceloaderComponent } from './placeloader.component';

describe('PlaceloaderComponent', () => {
  let component: PlaceloaderComponent;
  let fixture: ComponentFixture<PlaceloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
