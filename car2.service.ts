import { Injectable } from '@angular/core';


import { User } from 'src/app/interfaces/user';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Firestore, addDoc, collectionData, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { collection } from "firebase/firestore";
import 'firebase/firestore';
import 'firebase/compat/firestore';
import { Storage } from '@ionic/storage-angular';
//import { initializeApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { readBlobAsBase64 } from '@capacitor/core/types/core-plugins';
@Injectable({
  providedIn: 'root'
})
export class Car2Service {
  public car = [];
  contador: any;
  prod: Produto[] = [];
  public product: Produto[] = [];
  public user: User = {};

  constructor(private firestore: Firestore, private storage: Storage) { }

  async salvarDadosCliente(record:any, nomeclie:string){
    console.log("auiiiiiiiiii",record)
    const a = record;
    //const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const citiesRef = collection(db, 'Cliente');
    await Promise.all([
      //salva os dados na colecao aureliano aureliano lado direito firestore
      addDoc(collection(citiesRef, 'Cadastro', 'Dados'), {
        a,Nome:nomeclie
      }),
    ]);
    console.log("Dados Criado")
  }  


  async inicio() {
   // console.log("valor de car service")
    try {
      this.storage.forEach((key, value, index) => {
        this.contador = index;
        this.contador--;
        this.car = key, value, index;
       
       console.log("car service", this.car);
        return this.car;
      });
    } catch (error) {
      console.log("nao existe", error);
    }
  }

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


  
  async lerCarrinhox(record:any, nomeclie:string){
    console.log("auiiiiiiiiii",record)
    const a = record;
    //const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const citiesRef = collection(db, 'vendas');
    await Promise.all([
      //salva os dados na colecao aureliano aureliano lado direito firestore
      addDoc(collection(citiesRef, 'Aureliano', 'Aureliano'), {
        a,Nome:nomeclie
      }),
    ]);
    console.log("Dados Criado")
  }  
  
  async lerCarrinhoy(record: any,nome:string,valor:string){
    console.log("auiiiiiiiiii")
    //const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const citiesRef = collection(db, 'vendas');
    await Promise.all([
      //salva os dados na colecao aureliano aureliano lado direito firestore
      addDoc(collection(citiesRef, 'Aureliano', 'Aureliano'), {
        record
      }),
    ]);
    console.log("Dados Criado")
  }  
}

