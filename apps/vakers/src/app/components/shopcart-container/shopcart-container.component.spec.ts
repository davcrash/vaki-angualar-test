import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcartContainerComponent } from './shopcart-container.component';

describe('ShopcartContainerComponent', () => {
  let component: ShopcartContainerComponent;
  let fixture: ComponentFixture<ShopcartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopcartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
