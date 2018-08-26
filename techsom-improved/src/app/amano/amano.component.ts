import { Component, OnInit, Output, OnChanges } from '@angular/core';
// import { amanoBalance } from './amano.interface';
import { AppService } from '../serv-int-cla/app.service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Employee, employee, bal, amano, mid, combine } from '../serv-int-cla/interface-class';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'app-amano',
  templateUrl: './amano.component.html',
  styleUrls: ['./amano.component.css']
})
export class AmanoComponent implements OnInit {

  constructor(private data:AppService, private router: Router ) { }

//variables and objects

  jawab:any;
  model = new Employee();
  amano: amano[];
  all = [];
  neg;
  temp = {
    firstname: '',
    lastname: '',
    phone:null,
    id:null
  }
  pop : employee[];
  edit;
  amanoB: amano[];
  special;
  firstname;
  lastname;
  value:string;
  hubi;

  show:boolean = true;
  models = new bal();
  val = 0
  overall:any;
  combine = new combine()
//delete customer
  delete(a){
    this.combine.id = a;
    this.jawab = prompt("Please type your passcode to delete this account. All his transactions and history will be permenantly deleted");
    if(this.jawab == 4359){
      this.data
      .deleteEmployee_amano(this.combine)
      .subscribe(()=> this.goBack());
      this.hubi = false;
    } else {
      return false;
  }
  }
  
  delete_inner(id){
    this.data
      .delete_inner(id)
      .subscribe(()=> this.pop_refresh());
  }
//add customer
  addEmployee(){
      this.data
        .addEmployee(this.model)
        .subscribe(amanolist => {
          if(amanolist === 'no'){
            alert('This phone number already exists!');
            return false;
          }
        },()=> this.goBack());
  }
  drop_model;
  drop(){
    this.data
    .drop(this.drop_model)
    .subscribe(amanolist => {
    },()=> this.ngOnInit());
    this.drop_model = null;
  }

//get all amano
  getAmano(){
    this.data.getAmano().subscribe(
      amanolist => {
        this.amano = amanolist
      if(amanolist.length > 0){
        this.hubi = true;
      }
      }
    )
  }

 //edit pop up
 pop_edit(id){
  document.getElementById('myEdit').style.display = "block";
  this.data.getAmano().subscribe(
    daynlist => { 
      for(var abshir of daynlist){
      if(abshir.id == id){
      this.temp.firstname = abshir.firstname;
      this.temp.lastname = abshir.lastname;
      this.temp.phone = abshir.phone;
      this.temp.id = abshir.id;
      }
    }
    }
    
  ) }

  pop_close_edit(){
    document.getElementById('myEdit').style.display = "none";
    this.ngOnInit();
  }

  updateEmployee(){
    this.data
      .updateEmployee_amano(this.temp)
      .subscribe(()=> this.pop_close_edit());
  }

 //pay pop up 
 pops(id){
  window.localStorage.setItem('edit', id);
  document.getElementById('myEdit2').style.display = "block"; 
  this.data.getAmano().subscribe(
    amanolist => {
    for (this.special of this.amano){
      if(this.special.id == id){
        this.firstname = this.special.firstname;
        this.lastname = this.special.lastname;
      }
    }
  }
  )
  this.getAmanoB();
}


  pop_close(){
    document.getElementById('myEdit2').style.display = "none";
    this.ngOnInit();
  }

  getAmanoB(){
    var id = window.localStorage.getItem('edit');
    this.data.getAmanoB(id).subscribe(
      amanolist => this.amanoB = amanolist
    )
  }


  add(){
    this.models.id =  +window.localStorage.getItem('edit');
    this.data
    .addbal(this.models)
    .subscribe(()=> this.pop_refresh());
  }

  withdraw(){
    this.models.id =  +window.localStorage.getItem('edit');
    this.data
      .withbal(this.models)
      .subscribe(()=> this.pop_refresh());
    }

    pop_refresh(){
      this.models.des = null;
      this.models.amount = null;
      this.ngOnInit();
    }
  




//filter 

  negative(){

      this.data.t_negative(this.value).subscribe(
        amanolist => this.neg = amanolist
      )
    }
  positive(){
      this.data.t_all(this.value).subscribe(
        amanolist => this.all = amanolist
      )

    }
  

  check(){
    if(this.value === 'All' || this.value === ''){
      this.show = true;
    } else{
    this.show = false; 
    }
  }


    goBack(){
      this.ngOnInit();
      this.model.firstname = null;
      this.model.lastname = null;
      this.model.phone = null;
    }
    ngOnInit() {
      this.getAmano();
      // this.getAmanoBalance();
      this.check();
      this.negative();
      this.positive();
      this.getAmanoB();
        this.data.overall(this.val).subscribe(
          amanolist => this.overall = amanolist
        )
        this.model.initials = window.localStorage.getItem('initials');
        this.models.initials = window.localStorage.getItem('initials');
        this.combine.initials = window.localStorage.getItem('initials');
        if(window.localStorage.getItem('new') == 'inactive'){
          this.router.navigate(['comm']);
        }
    }

}
