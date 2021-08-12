import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  //form variables
  names: string;
  appID: string;
  idNo : any;
  email: string;
  password: string;
  confirmPassword: string;
  passwordMatch : boolean;

  constructor(public router:Router,private afs: AngularFirestore, private afauth: AngularFireAuth,private loadingCtrl: LoadingController, private toastr: ToastController) { }

  ngOnInit() {
  }

  //sign up
  async signUp(){
    if(this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'loading..',
        spinner: 'crescent',
        showBackdrop: true,

      })
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=>{
        this.afs.collection('registerTable').doc(data.user.uid).set({
          'appID': this.appID,
          'userId' : data.user.uid,
          'email' : this.email,
          'names' : this.names,
          'idNo': this.idNo,
        })
        data.user.sendEmailVerification()
      }).then(()=>{
        loading.dismiss();
        this.toast('registration Success!', 'success');
        this.router.navigate(['/signin']);
      }).catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    }else{
      this.toast('Please Fill The Form!', 'danger');
    }
  }//end of register
   //checking if passwords match
   checkPassword(){
    if(this.password == this.confirmPassword){
      this.passwordMatch = true;
    }else{
      this.passwordMatch = false;
    }
  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    })
    toast.present()
  }//end of toast
  tologin(){
    this.router.navigate(['/signin'])
  }
  //to sign in
  toSignIn(){
      this.router.navigate(['/signin'])
  }

}
