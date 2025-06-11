import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCourseComponent } from './youtube-course.component';

describe('YoutubeCourseComponent', () => {
  let component: YoutubeCourseComponent;
  let fixture: ComponentFixture<YoutubeCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YoutubeCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
