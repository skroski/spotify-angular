import { DiretivaTestDirective } from './diretiva-test.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
selector: 'app-diretiva-test',
standalone: true,
imports: [DiretivaTestDirective],
template: `
  <button appDiretivaTest> Normal </button>
  <button appDiretivaTest fontColor="orange"> Color Orange </button>
  <button appDiretivaTest bgColor="red"> Bg Red </button>
  <button appDiretivaTest fontColor="green" bgColor="orange"> Color Purple</button>
  `
})
class TestComponent {}
describe('DiretivaTestDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  let defaultButton: DebugElement;
  let customBackgroundButton: DebugElement;
  let customFontColorButton: DebugElement;
  let completelyCustomizedButton: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();

    [
      defaultButton,
      customFontColorButton,
      customBackgroundButton,
      completelyCustomizedButton,
    ] = fixture.debugElement.queryAll(By.directive(DiretivaTestDirective));
  });

  describe('default button', () => {
    it("background's button should be blue", () => {
      expect(defaultButton.nativeElement.style.background).toBe('yellow');
    });

    it("font color's button should be white", () => {
      expect(defaultButton.nativeElement.style.color).toBe('purple');
    });
  });

  describe('custom font color button', () => {
    it("background's button should be blue", () => {
      expect(customFontColorButton.nativeElement.style.background).toBe('orange');
    });

    it("font color's button should be green", () => {
      expect(customFontColorButton.nativeElement.style.color).toBe('purple');
    });
  });

  describe('custom background button', () => {
    it("background's button should be pink", () => {
      expect(customBackgroundButton.nativeElement.style.background).toBe('yellow');
    });

    it("font color's button should be white", () => {
      expect(customBackgroundButton.nativeElement.style.color).toBe('red');
    });
  });

  describe('button with background and font color customized', () => {
    it("background's button should be blue", () => {
      expect(completelyCustomizedButton.nativeElement.style.background).toBe('green');
    });

    it("font color's button should be white", () => {
      expect(completelyCustomizedButton.nativeElement.style.color).toBe('orange');
    });
  });
});
