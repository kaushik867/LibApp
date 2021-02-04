import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosLibComponent } from './photos-lib.component';

describe('PhotosLibComponent', () => {
  let component: PhotosLibComponent;
  let fixture: ComponentFixture<PhotosLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
