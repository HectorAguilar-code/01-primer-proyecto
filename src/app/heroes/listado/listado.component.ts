import { Plural } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  ngOnInit(): void {
    
  }

 heroes: string[] = [
   'Aquaman', 'Superman', 'Batman', 'Flash'
 ];

 heroeBorrado: string = '';

 borrarHeroe(){
  this.heroeBorrado= this.heroes.shift() || '';
 }

}
