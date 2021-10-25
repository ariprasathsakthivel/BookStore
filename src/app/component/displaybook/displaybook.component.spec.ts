import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybookComponent } from './displaybook.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DisplaybookComponent', () => {
  let component: DisplaybookComponent;
  let fixture: ComponentFixture<DisplaybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplaybookComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
