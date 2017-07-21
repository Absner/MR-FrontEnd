import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-laboral',
  templateUrl: './horario-laboral.component.html',
  styleUrls: ['./horario-laboral.component.css']
})
export class HorarioLaboralComponent implements OnInit {

  public workDay: any = [{day: 'Lunes',
                          is_active: 0},
                         {day: 'Martes',
                          is_active: 1},
                         {day: 'Miercoles',
                          is_active: 0},
                         {day: 'Jueves',
                          is_active: 0},
                         {day: 'Viernes',
                          is_active: 0},
                         {day: 'Sábado',
                          is_active: 0},
                         {day: 'Domingo',
                          is_active: 0}];
 
  constructor() { }

  ngOnInit() {
  }

}
