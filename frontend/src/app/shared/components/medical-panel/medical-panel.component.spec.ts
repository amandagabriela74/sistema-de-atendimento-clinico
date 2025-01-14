import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPanelComponent } from './medical-panel.component';

describe('MedicalPanelComponent', () => {
  let component: MedicalPanelComponent;
  let fixture: ComponentFixture<MedicalPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
