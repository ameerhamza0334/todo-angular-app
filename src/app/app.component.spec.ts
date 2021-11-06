import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule],
      declarations: [
        AppComponent
      ],

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  describe('Todo Unit Tests', () => {

    it('UI should contain input', () => {
      let todoInput = fixture.debugElement.query(By.css('input'));
      expect(todoInput).toBeTruthy();
    })

    it('UI should contain button', () => {
      let todoButton = fixture.debugElement.query(By.css('button'));
      expect(todoButton).toBeTruthy();
      expect(todoButton.nativeElement.innerHTML).toBe('Add')
    })

    it('UI should contain an empty list', () => {
      let todoList = fixture.debugElement.query(By.css('ul'));
      expect(todoList).toBeTruthy();
      expect(todoList.nativeNode.childElementCount).toBe(0)
    })

    it('should render todo UI', () => {
      let rowFlex = fixture.debugElement.query(By.css('.flex-container-row'))
      expect(rowFlex).toBeTruthy()
      let divChildren = rowFlex.childNodes
      expect(divChildren.length).toBe(3)
    })
  })

  describe('Todo Integration Tests', () => {
    it('should add todo item to list using API', async () => {
      await component.addItemtoTodo('pass acceptance test').then(resp => {
        fixture.detectChanges()
        let todoList = fixture.debugElement.query(By.css('ul'));
        expect(todoList.nativeNode.childElementCount).toBeGreaterThan(0)
        expect(resp).toBeTrue()
      })
    })
  })

});
