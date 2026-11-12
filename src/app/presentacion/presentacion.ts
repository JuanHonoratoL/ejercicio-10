import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-presentacion',
  styleUrl: './presentacion.css',
  templateUrl: './presentacion.html',
})
// TypeScript - JavaScript orientado a objetos
export class Presentacion {
  // Atributos 
  nombre: string = "Juan Pablo Honorato López";
  edad: number = 21;
  idiomas: String[] = [
    "Español", "Inglés", "Ruso", "Chino"
  ];
  carrera: string = "Ingeniería en Sistemas Computacionales";
  semestre: number = 7;
  institucion: string = "UPIIZ - IPN";
  correo: string = "jhonoratol2000@alumno.ipn.mx";
  mensaje: string = "Soy estudiante de Ingeniería en Sistemas Computacionales";
  habilidades: string[] = [
    "C",
    "Spring Boot",
    "Java",
    "Python",
    "HTML",
    "Android",
    "CSS",
    "JavaScript",
    "C++",
    "MySQL"
  ];
  intereses: String[] = [
    "Arquitectura de Computadoras", "Sistemas Operativos", "RISC-V", "Traductores binarios"
  ];
}
