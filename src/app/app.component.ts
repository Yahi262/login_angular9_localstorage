import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  lg_email:string;
  lg_pass:string;
  r_email:string;
  r_pass:string;
  r_c_pass:string;

  constructor(private snackBar:MatSnackBar){

  }

  register(){

  }
  login(){
    if(this.lg_email=="admin"&&this.lg_pass=="admin"){
      this.snackBar.open('Bienvenido','',{duration:1000})
    }else{
      this.snackBar.open('Error, favor de verificar los d','',{duration:1000})
    }
  }
}
