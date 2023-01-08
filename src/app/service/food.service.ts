import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IFood } from '../model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  @Output() event = new EventEmitter();
  constructor(private http: HttpClient) { }

  public create(food: IFood): Observable<IFood> {
    return this.http.post<IFood>(environment.createUrl, food);
  }

  public getallfood(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.apiUrl).pipe(map((res: any) => {
      return res;
    }))
  }
  public increase(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.increase);
  }

  public decrease(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.decrease);
  }

  public category1(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.category1);
  }

  public category2(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.category2);
  }

  public category3(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.category3);
  }

  public category4(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.category4);
  }
  
  public category5(): Observable<IFood[]> {
    return this.http.get<IFood[]>(environment.category5);
  }
}
