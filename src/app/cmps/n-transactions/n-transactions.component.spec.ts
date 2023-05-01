import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTransactionsComponent } from './n-transactions.component';

describe('NTransactionsComponent', () => {
  let component: NTransactionsComponent;
  let fixture: ComponentFixture<NTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
