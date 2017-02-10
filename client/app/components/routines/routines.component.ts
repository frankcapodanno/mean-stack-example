import { Component } from '@angular/core';
import { RoutineService } from '../../components/services/routine.service';
import { Routine } from '../../../models/Routine';

@Component({
  moduleId: module.id,
  selector: 'routines',
  templateUrl: 'routines.component.html',
})
export class RoutinesComponent  { 
    routines: Routine[]; // model for a property
    type: string;

constructor(private routineService:RoutineService){
   this.routineService.getRoutines()
   .subscribe(routines => {
       this.routines = routines;
   });
}

addRoutine(event){
    event.preventDefault();
    var newRoutine = {
        type: this.type,
        isDone: false
    }

    this.routineService.addRoutine(newRoutine)
    .subscribe(routine =>{
        this.routines.push(routine);
        this.type = '';
    });
}

deleteRoutine(id){
   var routines = this.routines;
   this.routineService.deleteRoutine(id).subscribe(data =>{
        for(var i = 0; i < routines.length; i++){
               if(routines[i]._id == id){
                   routines.splice(i,1);
               }
        }
   });   
}

updateStatus(routine){
    var _routine = {
        _id:routine._id,
        username: routine.username,
        type: routine.type,
        isDone: !routine.isDone
    }

    this.routineService.updateStatus(_routine).subscribe(data =>{
        routine.isDone = !routine.isDone;
    })
}
}