import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftaDatepickerComponent } from './ifta-datepicker.component';

describe('IftaDatepickerComponent', () => {
  let component: IftaDatepickerComponent;
  let fixture: ComponentFixture<IftaDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftaDatepickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
