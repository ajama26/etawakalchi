import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './serv-int-cla/app.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private data: AppService, private router:Router){}
  title = {
    name : 'Angular 2'
  }
authenticated:boolean;

set(){ 
if (window.localStorage.getItem('auth_key') == 'success'){   
this.authenticated = true;
}
}
out(){
  window.localStorage.setItem('auth_key', 'failed');
  this.router.navigate(['dayn']);
  this.authenticated = false;
  this.auth();
}

localUser = {
  email:'brotherabshir@gmail.com',
  password:'pass'
}


login(){
   this.data
     .login(this.localUser)
     .subscribe(employee =>{
    if(employee){
      window.localStorage.setItem('auth_key', 'success');
      window.localStorage.setItem('initials', employee[4]);
      window.localStorage.setItem('first', employee[0]);
      window.localStorage.setItem('last', employee[1]);
      window.localStorage.setItem('new', employee[3]);
      window.localStorage.setItem('id', employee[2]);
      window.localStorage.setItem('who', employee[5]);
      this.router.navigate(['home']);
      this.ngOnInit();
      return true;
    } else {
      window.localStorage.setItem('auth_key', 'failed');
      alert('Wrong credentials');
    }
         })
 };

auth(){
  if(window.localStorage.getItem('auth_key') == 'success'){
    document.getElementById('body').style.display = 'block';
    document.getElementById('login').style.display = 'none';
  } else {
    document.getElementById('login').style.display = 'block';
    document.getElementById('body').style.display = 'none';
  }
} 

forgot(){
  document.getElementById('forg').style.display ='block';
  document.getElementById('form').style.display ='none';
}

back_login(){
  document.getElementById('forg').style.display ='none';
  document.getElementById('form').style.display ='block';
}

pin = {
  one : '',
  two: '',
  pass: '',
  confirm_pass: '',
  email: 'etawakalchi@gmail.com'
}

w3_open(){
document.getElementById("mySidebar").style.display = 'block';
}

w3_close(){
  document.getElementById("mySidebar").style.display = 'none';
}

pop(){
  this.pin.one = '',
  this.pin.two = '',
  this.pin.pass = '',
  this.pin.confirm_pass = ''
  alert('successfully changed your password, please go back to login with your new password')
}

error;
emergency_reset(){
  if(+this.pin.one === 773 && +this.pin.two == 312 ){
  this.data.updatepassword(this.pin).subscribe(()=> this.pop());
  } else {
    alert('Wrong pins');
  }
}

equal(){
  if(this.pin.pass != this.pin.confirm_pass){
    this.error = 'Passwords are not equal';
  } else {
    this.error = '';
  }
}

manager;
full_name;
ngOnInit(){
  this.set();
    this.router.navigate(['home']);
    if(window.localStorage.getItem('who') != 'manager'){
      this.router.navigate(['home']);
    }
    document.getElementById('forg').style.display = 'none';
    this.auth();
    this.manager = window.localStorage.getItem('who');
    this.full_name = window.localStorage.getItem('first') + " " + window.localStorage.getItem('last');
    if(window.localStorage.getItem('new') == 'inactive'){
      this.router.navigate(['dayn']);
    }
}
}
