import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { listItem } from 'src/models/listItemModel';
import { environment } from 'src/environments/environment';

describe('TodoService', () => {
  let service: TodoService;
  let http: HttpClient
  let addResp: listItem
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoService]
    });

    service = TestBed.inject(TodoService);
    http = TestBed.inject(HttpClient)
  });

  describe('add todo', () => {

    it('contract test at Frontend code', async () => {
      const expectedResult = {
        todo: "this is from postman again but from test",
        id: "61674761e1b0f4b883e65490",
        createdAt: "2021-10-13T20:53:53.795Z",
        updatedAt: "2021-10-13T20:53:53.795Z"
      }
      await http.post(`${(environment as any).testUrl}todo/`, expectedResult).toPromise().then((resp: any) => {
        expect(resp).toBeDefined()
        expect(resp['id']).not.toEqual("NaN")
        expect(resp).toEqual(expectedResult)
        http.delete(`${(environment as any).testUrl}todo/`)
      }).catch(err => {
        expect(err).toThrowError('test fails due to exception')
      })
    })

    it('should add todo using API call', async () => {
      const mockBody = {
        todo: 'testing api todo'
      }
      await service.create(mockBody).toPromise().then((resp: listItem) => {
        addResp = resp
        expect(resp).toBeDefined()
        expect(resp.id).not.toEqual("NaN")
        expect(resp.todo).toEqual(mockBody.todo)
      })
    })
  })

  it('should delete todo after adding', async () => {
    await service.delete(addResp.id)
  })
});
