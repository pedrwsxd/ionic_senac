import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private apiUrl = 'http://localhost:8000/api/professores';
  constructor(private http: HttpClient) { }

  //método listar
  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listar`);
  }

  listarPorId(id: any): Observable<any>{
    return this.http.get<any[]>(`${this.apiUrl}/listar/${id}`);
  }

}
