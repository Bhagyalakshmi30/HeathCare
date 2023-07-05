import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookappComponent } from './bookapp.component';

describe('BookappComponent', () => {
  let component: BookappComponent;
  let fixture: ComponentFixture<BookappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookappComponent]
    });
    fixture = TestBed.createComponent(BookappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
