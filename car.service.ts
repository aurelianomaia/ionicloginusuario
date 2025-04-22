import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Produto } from 'src/app/interfaces/produto';
import { User } from 'src/app/interfaces/user';
import { Firestore, collection,  getDocs, getFirestore,  } from '@angular/fire/firestore';
import { NavController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

 
  x: any;
  a: any;
  i: any;
  o: any;
  b: any;
  c: any;
  public record: any = {};
  public valorquery: any = {};
  public valornoquery = new Array<Produto>();


  public total: any = {}
  public p: any = [];
  public nam: any = [];
  public docData: Produto[] = [];
  public productId: any;
  public test: Produto[] = [];
  private loading: any;
  prod: Produto[] = [];
  public product: Produto[] = [];
  public user: User = {};
  public products = new Array<Produto>();
  public list: Produto[] = [];
  productsSubscription: Subscription | undefined;
  public car2: any = [];
  public estados_novo = [];
  population: any;
  icecreams: any;
  icecreamName: string | undefined;
  icecreamCalories: number | undefined;
  icecreamDescription: string | undefined;
  public valornatela: any;
  public valoremail = new Array<User>();
  public emailCliente: any;
  public nomeClienteFirestore: any = {};


  constructor(private storage: Storage,
    private firestore: Firestore,
    private toastCtrl: ToastController, private authservice: AuthService,
     private navCtrl: NavController, private productService: AuthService) {

  }


  async autenticarUsuario() {

    let promise = Promise.resolve(this.productService.autenticar());
    promise.then(val =>

      console.log("valor da promise", val));
    //this.le_clientesfirestore(promise)
return promise;
  }



  async le_clientesfirestore() {

    const promisesss=this.autenticarUsuario();
    console.log("PPPPPPPPPPPPPPPPPP",promisesss)
    let a = "";
    let b = "";
    let i = 0;
    // console.log("Valor", promi)
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "Cliente", "Cadastro", "Dados"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      a = doc.get('a')
      b = doc.get('Email')
      // console.log("sssssss",`Nome:=>${b}`,"ddddddd",a)
      this.valorquery[i] = b;
      i++;
    });
    //console.log("ddddddddddddddddd",this.valorquery)
    // this.valornoquery = Object.values(promi);
    //  console.log(this.valorquery)

    this.valoremail = Object.values(promisesss);
    for (let i in this.valorquery) {
      for (let a in this.valoremail) {
        if (this.valorquery[i] == this.valoremail[a]) {
          //  console.log("valor naquery",this.valorquery[i])
          this.emailCliente = this.valorquery[i];
        }
      }
    }
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      let o = "";
      let u = "";
      u = doc.get('Nome')
      o = doc.get('Email')
      if (o == this.emailCliente) {
        // console.log("email 2222",u)
        this.nomeClienteFirestore = u;
        i++;
      }
    });
    console.log("valor Nome", this.nomeClienteFirestore, "EMMMail", this.emailCliente)
    return this.nomeClienteFirestore;
  }

}
