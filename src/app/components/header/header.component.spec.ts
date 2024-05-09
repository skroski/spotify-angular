import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<HeaderComponent>;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent]
    });
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('teste de propriedade testedashboardid', () => { 
    fixture.detectChanges();

    expect(component.title)
    .toEqual('Dashboard')

    const nativeElementText = nativeElement.querySelector(
      '[data-testid=title]'
    )?.textContent;

    expect(nativeElementText).toEqual('Dashboard');
  });
 
});
