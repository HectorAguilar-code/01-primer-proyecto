import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Aquaman';
    edad: number = 500;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(){
        let nombre: string = "Batman";
        return `${this.nombre} - ${this.edad}`;
        }

        cambiarNombre(){
            this.nombre = 'Superman';
            console.log(this.nombre);
            
        }
    
    cambiarEdad(){
        this.edad = 40;
        console.log(this.edad);
        
    }

    }