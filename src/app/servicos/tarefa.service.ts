import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private firestore: AngularFirestore) { }

  incluir(tarefa){
    console.log(tarefa);
    this.firestore.collection("tarefas").add(tarefa);
  }
}
