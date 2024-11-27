import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

export interface member {
  name: string,
  age:number,
  rol: string,
  personalPhrase: string,
}

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUSComponent {
  team : member[] = [
    {
      name: 'Nombre',
      age: 30,
      rol: 'Desarrollador de software',
      personalPhrase: 'Facilito'
    },
    {
      name: 'Nombre',
      age: 30,
      rol: 'Desarrollador de software',
      personalPhrase: 'Facilito'
    },
    {
      name: 'Nombre',
      age: 30,
      rol: 'Desarrollador de software',
      personalPhrase: 'Facilito'
    },
    {
      name: 'Nombre',
      age: 30,
      rol: 'Desarrollador de software',
      personalPhrase: 'Facilito'
    }
  ]
}
