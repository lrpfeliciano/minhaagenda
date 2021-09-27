import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { TarefaService } from '../../servicos/tarefa.service';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  constructor(private nav: NavController, 
              private servico: TarefaService) { }

  ngOnInit() {
    console.log("Carregando a página...");
    console.log(this.servico.listar());
  }

  inicioCadastro(){
    this.nav.navigateForward("edita-tarefa");
  }

}
