import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  [x: string]: any;
  private _storage: Storage | null = null;
  private key: any;
  carros: [] = [];
  itens: any = [];

  constructor(private storage: Storage) {
    this.init();

  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;

  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);

  }

  async getAll(valor: string) {
   // console.log("xxxx", valor)
    try {
      const value = this.storage.get(valor);
      let b = this.storage.keys();
      for (let i in b) {
        const c = b

        // This code runs once the value has been loaded
        // from the offline store.
     //   console.log("bbbbbb", c);

      }
    //  console.log("ttttt", value)
    } catch (err) {
      // This code runs if there were any errors.
      //console.log(err);
    }
  }

  async getData(key: string) {
    return JSON.parse(await this.storage.get(key));
  }

  async teste() {
  //this.storage.set('name',JSON.stringify('bbbb'));
                                                //Aqui vai a chave 
    let name = await this.storage.get('name');
    for(let X in name){
    Promise.resolve(name).then(function(a) {
    //  console.log("valor de Ax",name); // "Success"
      return name;
    }, function(a) {
      // not called
    });
   }
   // alert(`Hello ${name}!`);
  }
    
  


  async teste2() {
    //this.storage.set('name',JSON.stringify('bbbb'));
                                                  //Aqui vai a chave 
      let name = await this.storage.get('name');
     // console.log("valor de name",name)
     // alert(`Hello ${name}!`);
      return JSON.parse(name);
    }
  

  setData(key: string, data: any) {
 this.storage.set(key, JSON.stringify(data));
  }


  async teste3() {
    //this.storage.set('name',JSON.stringify('bbbb'));
                                                  //Aqui vai a chave 
      let name = await this.storage.get('name');
     // console.log("valor de name",name)
     JSON.parse(name, (key, Value) => {
      //console.log("valores",key);
      return Value;
     });
     //for (var i = 0; i < name.length; i++){
     // var counter = name[i];
     // console.log("schID",name);
      //return name;
     }
     // alert(`Hello ${name}!`);

    async dados(valor:string){
let data = this.storage.get(valor);
//console.log("OOOOOOOO",data)
     }
}