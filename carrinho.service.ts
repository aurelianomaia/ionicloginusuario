import { Injectable } from '@angular/core';

import { User } from '../interfaces/user';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { collection } from "firebase/firestore";
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  public userLogin: User = {};
  public userRegister: User = {};

  private key: any;
  carros: [] = [];
  itens: any = [];
  constructor(    private firestore: Firestore, private storage: Storage) { }


  lerCarrinho(id: string): Observable<Produto[]> {
    const notesRef = collection(this.firestore, id);
    // console.log("zzzzzzz",id)
    return collectionData(notesRef, { idField: 'id', }) as Observable<Produto[]>;

  }


   getAll(valor: string) {
    try {
      const value = this.storage.get(valor);
      // This code runs once the value has been loaded
      // from the offline store.
      console.log(value);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }
 async deleteProduct(id: string) {
    return this.storage.remove(id);;

  }

  
}
