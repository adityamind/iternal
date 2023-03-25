import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  createNew !:FormGroup;

  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.createNew=this.fb.group({
      title:['',Validators.required]
    })
    // throw new Error('Method not implemented.');
  }

  get title():FormControl{
    return this.createNew.get('title') as FormControl;
  }
  addNew(){
    let name=this.title.value;
    let val={
      id:new Date().getTime()+name,
      name:name,
      weekList:[]
    }
    if(localStorage.getItem('weeks')==null){
      localStorage.setItem('weeks',JSON.stringify([val]));
    }
    else{
      let item=localStorage.getItem('weeks');
      let arr:any=JSON.parse(JSON.parse(JSON.stringify(item)));
      arr.push(val);
      localStorage.setItem('weeks',JSON.stringify(arr));
    }
  }
}
