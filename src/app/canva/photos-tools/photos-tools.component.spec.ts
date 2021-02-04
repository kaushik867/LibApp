import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosToolsComponent } from './photos-tools.component';

describe('PhotosToolsComponent', () => {
  let component: PhotosToolsComponent;
  let fixture: ComponentFixture<PhotosToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
