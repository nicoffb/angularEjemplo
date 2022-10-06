import { Component, OnInit } from '@angular/core';
import { Gente } from 'src/app/interfaces/gente.interfaz';
import { GenteService } from 'src/app/servicios/gente.service';


@Component({
  selector: 'app-lista-gente',
  templateUrl: './lista-gente.component.html',
  styleUrls: ['./lista-gente.component.css']
})
export class ListaGenteComponent implements OnInit {
  listaGente: Gente[] = [];


  constructor(private genteService: GenteService) { }

  ngOnInit(): void {
    this.genteService.getGente().subscribe(respuesta => {
      this.listaGente = respuesta.results;
    })
  }
}
