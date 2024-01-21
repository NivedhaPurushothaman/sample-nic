import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedUserComponent } from './requested-user.component';

describe('RequestedUserComponent', () => {
  let component: RequestedUserComponent;
  let fixture: ComponentFixture<RequestedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
