import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedPapTijComponent } from './pied-pap-tij.component';

describe('PiedPapTijComponent', () => {
  let component: PiedPapTijComponent;
  let fixture: ComponentFixture<PiedPapTijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedPapTijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedPapTijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
