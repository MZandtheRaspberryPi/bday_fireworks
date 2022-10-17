import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayMessageComponent } from './bday-message.component';

describe('BdayMessageComponent', () => {
  let component: BdayMessageComponent;
  let fixture: ComponentFixture<BdayMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdayMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BdayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
