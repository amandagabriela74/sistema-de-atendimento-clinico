import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuichePanelComponent } from './guiche-panel.component';

describe('GuichePanelComponent', () => {
  let component: GuichePanelComponent;
  let fixture: ComponentFixture<GuichePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuichePanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuichePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
