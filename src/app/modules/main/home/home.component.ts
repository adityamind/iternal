import { Component, Injectable, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component'
import { MainService } from '../services/main/main.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit{
  createNew !:FormGroup;

  constructor(private fb:FormBuilder,private mainService:MainService){}
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
    this.mainService.addCard(val);
  }
}
