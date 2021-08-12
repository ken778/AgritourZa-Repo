import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth, private afs: AngularFirestore, private router: Router, private loadingCtrl: LoadingController, private toastr: ToastController) { }

        //current user
        LogedUser(){
          return this.afauth.authState;
        }
        //login 
        async login(email, pass){
          const loading = await this.loadingCtrl.create({
            message: 'Authenticating..',
            spinner: 'crescent',
            showBackdrop: true
          })
           
          loading.present();
      
          this.afauth.signInWithEmailAndPassword(email,pass).then((data)=>{
            if(!data.user.emailVerified)
            {
              loading.dismiss();
              this.toast('Please verify your email', 'danger');
              this.router.navigate(['/signin'])
            }
          })
          loading.dismiss();
        }//end of login
      
        //logout
        logout(){
          this.afauth.signOut().then(()=>{
            this.router.navigate(['/signup']);
          })
        }
      
        async toast(message, status){
          const toast = await this.toastr.create({
            message:message,
            position: 'top',
            color:status,
            duration: 2000
          })
      
          toast.present();
        }// end of toast
       
        //getting users
         //get users
        GetUsers() {
          return this.afs.collection('registerTable');
        }
  


}
