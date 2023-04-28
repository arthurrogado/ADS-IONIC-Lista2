import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-app-deposito',
  templateUrl: './app-deposito.page.html',
  styleUrls: ['./app-deposito.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AppDepositoPage implements OnInit {

  valorDeposito : number = 0;
  taxaJuros : number = 0;
  valorTotal : number = 0;
  valorJuros : number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcularRendimento() {
    this.valorJuros = this.valorDeposito * this.taxaJuros / 100;
    this.valorTotal = this.valorDeposito + this.valorJuros;
  }

}
