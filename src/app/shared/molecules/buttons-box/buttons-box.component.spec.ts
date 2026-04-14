import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsBoxComponent } from './buttons-box.component';

describe('ButtonsBoxComponent', () => {
  let component: ButtonsBoxComponent;
  let fixture: ComponentFixture<ButtonsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
