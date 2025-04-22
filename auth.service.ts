import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Firestore, addDoc, collectionData, getFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Produto } from 'src/app/interfaces/produto';
import { collection } from "firebase/firestore";
import { Storage } from '@ionic/storage-angular';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userLogin: User = {};
  public userRegister: User = {};
  public dados: User = {};
  private email: any;
  public nomess: any;
  private nomeClientes: any;
  private password: any;
  private nome: any;
  private loading: any;
  public record: any = {};
  public car = new Array<Produto>();
  public arrayref: any = [];
  public total: any = {}

  constructor(private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private firestore: Firestore, private storage: Storage) { }


    async addNewToGallery() {
      // Take a photo
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100
      });


    }




  getAuth() {
    const auth = getAuth();
    return auth;
  }

  async autenticar() {
    ;
    return new Promise(resolve => {
      getAuth().onAuthStateChanged(user => {
        if (!user) console.log("nada a ver com usuario");

        resolve(user?.email);

      });
    });

    /*   onAuthStateChanged(auth, (user) => {
         if (user) {
           // User is signed in, see docs for a list of available properties
           // https://firebase.google.com/docs/reference/js/auth.user
           const uid = user.uid;
          this.nomess = user.email?.toString();
           console.log( "valor em auth service",user.email)
           // ...
         } else {
           // User is signed out
           // ...
         }
       });
   return this.nomess;*/
  }

  async testando(idUsuario: any, xx: string) {

    console.log("testandooooooo", idUsuario)
    this.nomeClientes = idUsuario.

      this.record['Name'] = idUsuario.nome;
    this.record['id'] = idUsuario.email;
    this.record['Description'] = idUsuario.password;
    // this.record['Cliente'] = nomeCliente;
    // this.cars.lerCarrinhox(this.record);
    this.total = this.arrayref.push(this.record)


    const f = this.car.map(function (value) {
      return value.name;

    })
    // const gg = this.salvarDadosCliente(f, idUsuario.nome);

  }

  async salvarDadosCliente(dadosCliente: User) {

    const a = dadosCliente.nome;
    const emaill = dadosCliente.email;
    //const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore();
    const citiesRef = collection(db, 'Cliente');
    await Promise.all([
      //salva os dados na colecao aureliano aureliano lado direito firestore
      addDoc(collection(citiesRef, 'Cadastro', 'Dados'), {
        Nome: a,
        Dados: dadosCliente,
        Email: emaill
      }),
    ]);
    console.log("Dados Criado")
  }

  async salvarDados(user: User) {
    this.dados = user;
    this.email = user.email;
    this.password = user.password;
    this.nome = user.nome;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.salvarDadosCliente(this.dados)
        this.presentLoading("Criando seu Usuario Aguarde...");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //  this.presentLoading("Entre com E-mail e Senha para criar Usuario");
        // ..
      });
  }

  getNotes(): Observable<Produto[]> {
    const notesRef = collection(this.firestore, 'Produtos');
    return collectionData(notesRef, { idField: 'id' }) as Observable<Produto[]>;
  }

  getNotes1(id: string): Observable<Produto[]> {
    const notesRef = collection(this.firestore, id);
    // console.log("vvvvvvvvvvv",id)
    return collectionData(notesRef, { idField: 'id' }) as Observable<Produto[]>;
  }

  getNotes2(id: string): Observable<Produto[]> {
    const notesRef = collection(this.firestore, id);
    // console.log("zzzzzzz",id)
    return collectionData(notesRef, { idField: 'id', }) as Observable<Produto[]>;
  }

  getP(produto: Produto, name: string) {
    const notesRef = collection(this.firestore, 'Produtos', ('Camaras'));
    // console.log("fffffff",notesRef)
  }

  getProduct(id: any) {
    const notesRef = collection(this.firestore, 'Produtos', ('Camaras'));
    // console.log("fffffff",notesRef)
  }

  getProduc(id: string): Observable<Produto[]> {
    const notesRef = collection(this.firestore, 'Produtos');
    return collectionData(notesRef, { idField: id }) as Observable<Produto[]>;
  }

  getData() {
    return
  }



  length() {
    const db = this.firestore;
    return db;
  }


  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({ message, duration: 2000 });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000 });
    toast.present();
  }
}

