import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisplaybooksComponent } from './admindisplaybooks.component';

describe('AdmindisplaybooksComponent', () => {
  let component: AdmindisplaybooksComponent;
  let fixture: ComponentFixture<AdmindisplaybooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindisplaybooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindisplaybooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
