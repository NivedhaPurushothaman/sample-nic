import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IOTDeviceComponent } from './iot-device.component';

describe('IOTDeviceComponent', () => {
  let component: IOTDeviceComponent;
  let fixture: ComponentFixture<IOTDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IOTDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IOTDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
