import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayselectedbookComponent } from './displayselectedbook.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule } from '@angular/material/snack-bar';

describe('DisplayselectedbookComponent', () => {
  let component: DisplayselectedbookComponent;
  let fixture: ComponentFixture<DisplayselectedbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayselectedbookComponent],
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayselectedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
