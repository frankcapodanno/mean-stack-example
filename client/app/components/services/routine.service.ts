import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
/*
* We want to create the service that connect to the Restful resource
* This service is used like a provider.
*/
@Injectable()
export class RoutineService{
    constructor(private http:Http){
       console.log('Routine Service Initialized...');
    }

    getRoutines(){
        return this.http.get('http://localhost:3000/api/routines')
        .map(res => res.json() );
    }
/*
* Here I define the user action POST
*/
    addRoutine(newRoutine){
        console.log(newRoutine);
        /**a simple form of validation */
        if (newRoutine.username == undefined){
            console.log('undefined username');
            newRoutine.username = 'anonymus';
        }
        if (newRoutine.times == undefined){
            console.log('undefined number of times');
            newRoutine.times = 1;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/routine', JSON.stringify(newRoutine), {headers: headers})
        .map(res => res.json());
    }

    /**
     * Here I define the user action DELETE
     */
    deleteRoutine(id){
        console.log(id);
        return this.http.delete('http://localhost:3000/api/routine/' + id)
        .map(res => res.json);
    }

    /**
     * updateStatus function
     */

    updateStatus(routine){
        console.log(routine);
     var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/routine/' + routine._id, JSON.stringify(routine), {headers: headers})
        .map(res => res.json);
    }
}