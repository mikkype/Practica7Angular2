import { Component } from '@angular/core';
import {Task} from '../models/task.model';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

  tasks : Task [] = [
    new Task(1, 'Limpiar pisos', 'Limpiar los pisos de todas las aulas y pasillos del edificio principal.', new Date(), new Date(), 'Limpieza', 'Empleada 1', 3, 2),
    new Task(2, 'Vaciar papeleras', 'Vaciar y limpiar las papeleras de todas las áreas comunes y aulas.', new Date(), new Date(), 'Limpieza', 'Empleada 2', 2, 1),
    new Task(3, 'Desinfectar superficies', 'Desinfectar mesas, sillas y otras superficies de contacto en las aulas.', new Date(), new Date(), 'Limpieza', 'Empleada 3', 4, 3),
    new Task(4, 'Limpiar baños', 'Limpiar y desinfectar los baños de estudiantes y profesores.', new Date(), new Date(), 'Limpieza', 'Empleada 4', 1, undefined),
    new Task(5, 'Lavar ventanas', 'Limpiar y lavar las ventanas de todas las aulas y pasillos.', new Date(), new Date(), 'Limpieza', 'Empleada 5', 5, 4),
    new Task(6, 'Reponer suministros', 'Reponer el papel higiénico, jabón y toallas de papel en los baños.', new Date(), new Date(), 'Limpieza', 'Empleada 6', 2, undefined)
  ];
  
  startTask(task: Task): void {
    task.startDate = new Date();
  }

  finishTask(task: Task): void {
    task.endDate = new Date();
    if (task.startDate && task.endDate) {
      const tiempoInicio = task.startDate.getTime();
      const tiempoFin = task.endDate.getTime();
      const tiempoTranscurrido = tiempoFin - tiempoInicio;
      const tiempoTranscurridoEnDias = Math.ceil(tiempoTranscurrido / (1000 * 60 * 60 * 24));
      task.realTime = tiempoTranscurridoEnDias; 
    }
  }

}
