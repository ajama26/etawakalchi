import { Component, OnInit } from '@angular/core';
import { AppService } from '../serv-int-cla/app.service';
import { directory, notes } from '../serv-int-cla/interface-class';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { note, com } from '../serv-int-cla/interface-class';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent implements OnInit {

  constructor( private data:AppService, private router:Router) { }

  // directory: directory[];
  // getDir(){
  //   this.data.getDir().subscribe(
  //     dirctory => this.directory = dirctory
  //   )
  // }

  // notes: notes[];
  // getnotes(){
  //   this.data.getnotes().subscribe(
  //     dirctory => this.notes = dirctory
  //   )
  // }

  // model = new note();
  // addnote(){
  //   this.data
  //     .addnote(this.model)
  //     .subscribe(amanolist => {
  //     },()=> this.goBack());
  // }

  // com = new com();
  // register_com(){
  //   this.data
  //     .register_com(this.com)
  //     .subscribe(amanolist => {
  //     },()=> this.goBack());
  // }

  localUser = {
    password : '',
    confirm_password : '',
    id: ''
  }
error = '';
  reset(){
    if(this.localUser.password == this.localUser.confirm_password){
    this.localUser.id = this.id;
    this.data.updatepassword_employee(this.localUser).subscribe(()=> this.out());
  } else {
    this.error = "You two passwords don't match. please make sure that your password and confirm password are the same"; 
  }
  }


  out(){
    window.localStorage.setItem('new', 'active');
    this.router.navigate(['home']);
  }

id;
  ngOnInit() {
    // this.getDir();
    // this.getnotes();

    this.id = window.localStorage.getItem('id')

    // if(window.localStorage.getItem('new') == 'inactive'){
    //   this.router.navigate(['dayn']);
    // }
  }

}
