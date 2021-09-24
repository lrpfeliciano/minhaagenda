import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  inicioCadastro(){
    this.nav.navigateForward("edita-tarefa");
  }

}
