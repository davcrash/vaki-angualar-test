import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardContainerComponent } from './reward-container.component';

describe('RewardContainerComponent', () => {
  let component: RewardContainerComponent;
  let fixture: ComponentFixture<RewardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
