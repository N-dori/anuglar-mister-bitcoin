import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgBlockSizeComponent } from './avg-block-size.component';

describe('AvgBlockSizeComponent', () => {
  let component: AvgBlockSizeComponent;
  let fixture: ComponentFixture<AvgBlockSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgBlockSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgBlockSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
