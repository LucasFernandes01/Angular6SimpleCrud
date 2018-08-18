import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

//Service
import { DataService } from '../data.service';

//Ninja Model
import { Ninja } from '../models/Ninja';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {

  ninjas: Ninja[];

  constructor(private dataService: DataService) {}

  getData(){
    this.dataService.fetchData()
      .snapshotChanges()
      .subscribe(
        (ninja) => {
          this.ninjas = [];
          ninja.forEach(element => {
            let x = element.payload.toJSON();
            x['$key'] = element.key;
            this.ninjas.push(x as Ninja)
          })
        }
      );
  }
  
  onSubmit(ninjaForm: NgForm){
    this.dataService.postData(ninjaForm.value);
    this.resetForm(ninjaForm);
    
  }

  removeData($key: string){
    this.dataService.removeData($key);
  }

  resetForm(ninjaForm?: NgForm){
    if(ninjaForm != null){
      ninjaForm.reset();
    }
  }

  ngOnInit() {
    this.getData();
    this.resetForm();
  }

}
