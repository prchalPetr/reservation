import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftaInputtextComponent } from './ifta-inputtext.component';

describe('IftaInputtextComponent', () => {
  let component: IftaInputtextComponent;
  let fixture: ComponentFixture<IftaInputtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftaInputtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftaInputtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
