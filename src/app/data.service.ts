import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Ninja } from "src/app/models/Ninja";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ninjaList: AngularFireList<any>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  fetchData(){
    return this.ninjaList = this.db.list('/');
  }

  postData(ninja: Ninja){
    this.ninjaList.push({name: ninja.name, belt: ninja.belt});
  }

  removeData($key:string){
    this.ninjaList.remove($key);
  }



}
