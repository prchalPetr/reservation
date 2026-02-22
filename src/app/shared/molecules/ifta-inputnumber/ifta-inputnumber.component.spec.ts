import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftaInputnumberComponent } from './ifta-inputnumber.component';

describe('IftaInputnumberComponent', () => {
  let component: IftaInputnumberComponent;
  let fixture: ComponentFixture<IftaInputnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftaInputnumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftaInputnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
