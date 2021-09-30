import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../servicos/tarefa.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edita-tarefa',
  templateUrl: './edita-tarefa.page.html',
  styleUrls: ['./edita-tarefa.page.scss'],
})
export class EditaTarefaPage implements OnInit {
  nome: string;
  descricao: string;

  id: string;

  constructor(private service: TarefaService,
              private nav: NavController,
              private rota: ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.rota.snapshot.params["nometarefa"];
    this.descricao = this.rota.snapshot.params["desctarefa"];
    this.id = this.rota.snapshot.params["idtarefa"];
  }

  cadastrar() {
    console.log("Função cadastrar");
    console.log(this.nome);
    console.log(this.descricao);

    let tarefa = {}
    tarefa['nome'] = this.nome;
    tarefa['descricao'] = this.descricao;
    console.log(tarefa);
    if (this.id == null){ 
      this.service.incluir(tarefa);
    } else {
      this.service.alterar(this.id, tarefa);
    }
    
    this.nav.navigateForward("tarefas");
  }
}
