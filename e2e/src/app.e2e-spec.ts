import { AppPage } from './app.po';
import { browser, logging } from 'protractor';



describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should add a todo in the list', async () => {
    let uiResponse = page.addTodo('end to end testing todos')
    uiResponse.then(resp => {
      expect(resp).toBe(true)
    })
  })

  it('should not add a todo in the list', async () => {
    let uiResp = page.addTodo('')
    uiResp.then(resp => {
      expect(resp).toBe(false)
    })
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
