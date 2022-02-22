import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ApiServiceModule {
  constructor(private http: HttpClient) {}
  getPoems() {
    const url = `https://poetrydb.org/random/20`;
    return this.http.get(url);
  }
}
