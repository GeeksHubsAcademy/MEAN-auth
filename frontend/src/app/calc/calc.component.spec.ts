import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalcComponent]
    })
      .compileComponents();// compila también el html y el css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the calc component', () => {
    expect(component).toBeTruthy();
  });
  it('should add two numbers and return the result', () => {
    const result1 = component.sum(2, 2);
    expect(result1).toBe(4);
    const result2 = component.sum(3, 2);
    expect(result2).toBe(5);
  });
  it('should divid a number by another number and return the result', () => {
    const result = component.divide(Math.PI, 2);
    expect(result).toBeCloseTo(1.5707963267948961);
    expect(result).not.toBeCloseTo(9);
  })
});
