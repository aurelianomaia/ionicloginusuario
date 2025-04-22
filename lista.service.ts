import { Injectable } from '@angular/core';

import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { collection } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private firestore: Firestore) { }


  getNotes(): Observable<Produto[]> {    
    const notesRef = collection(this.firestore, 'Vendas');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Produto[]>;
  }
}
