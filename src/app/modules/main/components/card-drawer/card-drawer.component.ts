import { Component, Injectable, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-card-drawer',
  templateUrl: './card-drawer.component.html',
  styleUrls: ['./card-drawer.component.scss']
})
@Injectable()
export class CardDrawerComponent implements OnInit {
  weeks:any = [];
  connectedTo:any = [];
  isValid:Boolean=false;
  constructor(private fb:FormBuilder){
    if(localStorage.getItem('weeks')!=null){
      this.isValid=true;
    this.weeks = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('weeks'))));
    for (let week of this.weeks) {
      this.connectedTo.push(week.id);
    };
    }
  }
  addTaskForm!:FormGroup;
  ngOnInit(): void {
    this.addTaskForm=this.fb.group({
      cardTitleName:['',Validators.required]
    })
    throw new Error('Method not implemented.');
  }
  /** Clamps a number between zero and a maximum. */
 clamp(value:any, max:any) {
  return Math.max(0, Math.min(max, value));
}

   moveItemInArray(array:any, fromIndex:any, toIndex:any) {
    const from = this.clamp(fromIndex, array.length - 1);
    const to = this.clamp(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    const target = array[from];
    const delta = to < from ? -1 : 1;
    for (let i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}

copyArrayItem(currentArray:any, targetArray:any, currentIndex:any, targetIndex:any) {
  const to = this.clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
      targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}

transferArrayItem(currentArray:any, targetArray:any, currentIndex:any, targetIndex:any) {
  const from = this.clamp(currentIndex, currentArray.length - 1);
  const to = this.clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
      targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}

  drop(event: CdkDragDrop<string[]>) {
    let nextId=event.container.id;
    let currentId=event.previousContainer.id;
    let currentArr=[],nextArr=[];
    let items=JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('weeks'))));
    for(let week of items){
      if(week.id===currentId) currentArr=week.weekList;
      if(week.id===nextId) nextArr=week.weekList;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(nextArr, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        currentArr,
        nextArr,
        event.previousIndex,
        event.currentIndex,
      );
    }
    for(let week of items){
      if(week.id===currentId) week.weekList=currentArr;
      if(week.id===nextId) week.weekList=nextArr;
    }
    localStorage.setItem('weeks',JSON.stringify(items));
  }


get cardTitleName():FormControl{
  return this.addTaskForm.get('cardTitleName') as FormControl;
}

  addNewTask(id:any){
let val=this.cardTitleName.value;
let arr= JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('weeks'))));
    for(let week of arr){
      if(week.id==id){
        week.weekList.push(val);
        break;
      }
    }
    localStorage.setItem('weeks',JSON.stringify(arr));
  }

  deleteList(id:any){
    let arr= JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('weeks'))));
    let i=0;
    for(let week of arr){
      if(week.id===id){
        break;
      }
      i++;
    }
    arr.splice(i,1);
    localStorage.setItem('weeks',JSON.stringify(arr));
  }
}


