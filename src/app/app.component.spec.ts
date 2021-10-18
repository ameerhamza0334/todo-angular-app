import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent
      ],

    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });


  it('should render todo UI', () => {
    let rowFlex = fixture.debugElement.query(By.css('.flex-container-row'))
    expect(rowFlex).toBeTruthy()
    let divChildren = rowFlex.childNodes
    expect(divChildren.length).toBe(2)

    let todoInput = fixture.debugElement.query(By.css('input'));
    expect(todoInput).toBeTruthy();

    let todoButton = fixture.debugElement.query(By.css('button'));
    expect(todoButton).toBeTruthy();
    expect(todoButton.nativeElement.innerHTML).toBe('Add')

    let todoList = fixture.debugElement.query(By.css('ul'));
    expect(todoList).toBeTruthy();
  })

  it('should add todo item to list', async () => {
    await component.addItemtoTodo('pass acceptance test').then(resp => {
      fixture.detectChanges()
      expect(resp).toBeTrue()
    })
  })

  it('should not proceed on empty input', async () => {
    await component.addItemtoTodo('').then(resp => {
      fixture.detectChanges()
      expect(resp).toBeFalse()
    }
    )
  })


});
