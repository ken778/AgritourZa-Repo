import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.page.html',
  styleUrls: ['./dashboard-page.page.scss'],
})
export class DashboardPagePage implements OnInit {

   details:any;
   constructor(private router: Router,private afs: AngularFirestore, private authent: AngularFireAuth, private auth : AuthService, private toastr : ToastController, private loadingCtrl : LoadingController) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        this.details = element;
        console.log(res.uid);
      
      })
        this.afs.collection('registerTable').doc(res.uid).valueChanges().subscribe(data=>{
        
        //this.details=data;
        //console.log(data);
      })

       
    }) 
  }

}
