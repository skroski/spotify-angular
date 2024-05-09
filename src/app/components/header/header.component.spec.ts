import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it("button's label should be equal to Label Input", () => {

    fixture.componentInstance.label = 'fake-label'; //Input
    fixture.detectChanges();
    // get the button's text
    const buttonText = fixture.nativeElement.querySelector(
      '[data-testbuttonid=botao]'
    )?.textContent;
    expect(buttonText).toEqual('fake-label');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('teste de propriedade data-testeid', () => {
    fixture.detectChanges();

    expect(component.title).toEqual('Dashboard');

    const nativeElementText = nativeElement.querySelector(
      '[data-testid=title]'
    )?.textContent;

    expect(nativeElementText).toEqual('Dashboard');
  });


 /*  it('click event should be emitted when the button is clicked',  () => {
    const spy = jest.spyOn(component, 'onClick');

    fixture.componentInstance.labelChange.subscribe(spy);
    fixture.debugElement
    .query(By.css('[data-testbuttonid="button'))
    .triggerEventHandler('click');
    expect(spy).toHaveBeenCalled();
  }); */

});
