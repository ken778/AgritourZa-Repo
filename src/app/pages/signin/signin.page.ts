import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  //form variables
  email: string;
  password : string;

  //other variables
  details:any;

  constructor(private router: Router,private afs: AngularFirestore, private authent: AngularFireAuth, private auth : AuthService, private toastr : ToastController, private loadingCtrl : LoadingController) { }

  ngOnInit() {
       
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        //this.details = element;
        //console.log(res.uid);
      
      })
      this.afs.collection('registerTable').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 
      

  }

  //signin
  async signIn(){
    if(this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'Please wait..',
        spinner: 'crescent',
        showBackdrop: true
      })
      loading.present();
      this.auth.login(this.email, this.password).then(()=>{
      
         loading.dismiss();
         this.router.navigate(['/home']);
      
      }).catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    }else{
      this.toast("Please enter your email and password", 'danger');
    }
  }//end of signin

  //toast
  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      cssClass: 'custom',
      position: 'bottom',
      color: status,
      duration: 2000
    })   
    toast.present();  
 
  }
  //to sign up page 
  toSignUp(){
    this.router.navigate(['/signup'])
  }



}
