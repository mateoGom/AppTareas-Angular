import { Component, OnInit } from '@angular/core';
import { Tarea } from './../model/tareasModel';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  listaTarea: Tarea[] = [];
  nombreTarea = '';
  constructor() {}

  ngOnInit(): void {}
  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };

    this.listaTarea.push(tarea)
    this.nombreTarea=''
  }

  eliminarTarea(index:number):void{
    this.listaTarea.splice(index,1)
  }

  actualizarTarea(tarea:Tarea,index:number){
    this.listaTarea[index].estado= !tarea.estado;
  }
}
