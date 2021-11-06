import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class AppPage {

  addTodo(todoString: string) {
    let EC = protractor.ExpectedConditions
    browser.debuggerServerPort = 1444
    let todoInput = element(by.tagName('input'))
    todoInput.sendKeys(todoString)
    let todoSubmitBtn = element(by.tagName('button'))
    todoSubmitBtn.click()
    browser.wait(EC.invisibilityOf(element(by.css("ngx-spinner div"))))
    let todoItem = element(by.css('ul li'))
    return todoItem.isPresent()
  }
}
