import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuRightComponent } from './side-menu-right.component';

describe('SideMenuRightComponent', () => {
  let component: SideMenuRightComponent;
  let fixture: ComponentFixture<SideMenuRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideMenuRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
