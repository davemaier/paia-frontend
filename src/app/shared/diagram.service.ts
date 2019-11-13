import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { Diagram } from 'src/model/diagram';
import { JsonConvert } from 'json2typescript';

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  apiServer = 'http://localhost:8080'
  
  constructor(private http: HttpClient) { }

  loadDiagrams(userId: String):any{
    let jsonConvert: JsonConvert = new JsonConvert();
    return this.http.get(this.apiServer + "/diagrams?userId=bernd").pipe(
      tap(diagrams => console.log(diagrams))
      //map(diagrams => jsonConvert.deserializeObject(diagrams, Diagram))
    )
  }
  
}
