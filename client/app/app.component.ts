import { Component } from '@angular/core';
import {RoutineService} from './components/services/routine.service';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [RoutineService]
})
export class AppComponent  { name = 'Angular'; }
