import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-app-gorjeta',
  templateUrl: './app-gorjeta.page.html',
  styleUrls: ['./app-gorjeta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AppGorjetaPage implements OnInit {

  valorConta : number = 0;
  valorTotal : number = 0;

  constructor() { }

  ngOnInit() {
  }

  calcularTotal() {
    this.valorTotal = this.valorConta * 1.1;
  }

}
