import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenteResponse } from '../interfaces/gente.interfaz';

const API_BASE_URL = 'https://swapi.dev/api';

@Injectable({
  providedIn: 'root'
})


export class GenteService {

  constructor(private http: HttpClient){}

    public getGente(): Observable<GenteResponse>{
      return this.http.get<GenteResponse>(`${API_BASE_URL}/people/`);
    }
  
}

