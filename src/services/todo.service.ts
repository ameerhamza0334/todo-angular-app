import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { todoModel } from 'src/models/todoRequestModel';
import { listItem } from 'src/models/listItemModel';
import { environment } from '../../src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private BASE_URL = environment.apiUrl
  constructor(private _httpService: HttpClient) { }

  create(requestModel: todoModel | listItem): Observable<listItem> {
    return this._httpService.post(`${this.BASE_URL}todo/`, requestModel).pipe(
      map((data: any) => {
        console.log(data)
        return data.hasOwnProperty('id') ? data : data.data
      })
    )
  }

  delete(id: string) {
    return this._httpService.delete(`${this.BASE_URL}todo/${id}`)
  }


}
