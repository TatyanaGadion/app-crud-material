import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  createData(data: any) {
    return this.httpClient.post('http://localhost:3000/productList', data);
  }

  readData() {
    return this.httpClient.get('http://localhost:3000/productList');
  }

  updateData(data: any, id: number) {
    return this.httpClient.put(`http://localhost:3000/productList/${id}`, data);
  }

  deleteData(id: number) {
    return this.httpClient.delete(`http://localhost:3000/productList/${id}`);
  }
}
