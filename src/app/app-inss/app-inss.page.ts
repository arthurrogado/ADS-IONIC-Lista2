import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-app-inss',
  templateUrl: './app-inss.page.html',
  styleUrls: ['./app-inss.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AppInssPage implements OnInit {

  valorHoraAula : number = 0;
  aulasMes : number = 0;
  descontoInss : number = 0;
  salarioLiquido : number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcularSalario() {
    this.salarioLiquido = this.valorHoraAula * this.aulasMes * (1 - this.descontoInss / 100);
  }

}
