import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparecodesComponent } from './comparecodes.component';

describe('ComparecodesComponent', () => {
  let component: ComparecodesComponent;
  let fixture: ComponentFixture<ComparecodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparecodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparecodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
