import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VakiContainerComponent } from './vaki-container.component';

describe('VakiContainerComponent', () => {
  let component: VakiContainerComponent;
  let fixture: ComponentFixture<VakiContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VakiContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VakiContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
