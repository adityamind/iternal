import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  addCard(val:any){
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
