import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AutenticacaoService } from './servicos/autenticacao.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nav: NavController, 
              private login: AutenticacaoService) {}

  irParaTarefas(){
    console.log("Tarefas no menu");
    this.nav.navigateForward("tarefas");
  }

  irParaContatos(){
    console.log("Contatos no menu");
    this.nav.navigateForward("contatos");
  }
  sair(){
    this.login.sair();
    this.nav.navigateForward("home");
  }
}
