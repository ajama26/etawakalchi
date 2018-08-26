import { Component, OnInit } from '@angular/core';
import { AppService } from '../serv-int-cla/app.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { check, cash, creds, ready, expenses, expenses_major, expenses_minor, expenses_list, expenses_credit, combine } from '../serv-int-cla/interface-class';
import { ComComponent } from '../com/com.component'

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private data:AppService, private router:Router) { }

  localUser = new creds();
 reset(){
    this.data
      .updatepassword(this.localUser)
      .subscribe(()=> this.goBack());
 } 

 jawab;

confirm(a){
  this.jawab = prompt("please type your passcode to ensure that this total was credited to your hawala balance");
  if(this.jawab == 4359){
    this.data
    .confirm(a)
    .subscribe(()=> this.goBack());
  } else {
  alert ('wrong passcode');
}
}

id;
type;
pops(id, description, type){
  this.id = id;
  this.type = type
  this.name_description = description;
  document.getElementById('myEdit2').style.display = "block"; 
  this.data.getExpense(id).subscribe(
    amanolist => {
      this.expenses_minor = amanolist
  }
  )
  // this.getAmanoB();
}

pop_close(){
  document.getElementById('myEdit2').style.display = "none";
  this.ngOnInit();
}

  initial;
  clear(){
    this.initial = null;
    this.ngOnInit();
    this.model.description = null;
  }
  initial_register(){
    this.data
      .initial_register(this.initial)
      .subscribe(amanolist => {
      },()=> this.clear());
}


cash: cash[];
cashs(){
  this.data.cashs().subscribe(
    daynlist => this.cash = daynlist
  )
}

goBack(){
  this.ngOnInit();
}

  all = [];
  neg:any;
  da(){
    this.data.da().subscribe(
      amanolist => this.all = amanolist
    )

  }

  expense = {
    id : '',
    description: '',
    amount: '',
    type: ''
  }

  model = new expenses();
  models = new expenses_list();


  models_credit = this.models;
  models_debit = this.models;




  addExpense_credit(id){
    this.models.id = id;
    window.localStorage.setItem('formal', id);
    // this.models_credit.description_r = this.models.description_r;
    // this.models_credit.amount = this.models.amount;
    this.models.type = 'credit';
    this.data.addExpense_credit(this.models).subscribe(()=> this.ngOnInit());
    this.models.description_r = null;
    this.models.amount = null;
    this.models.type = null;
  }

  addExpense_debit(id){
    this.models.id = id;
    window.localStorage.setItem('formal', id);
    this.models.type = 'debit';
    this.data.addExpense(this.models).subscribe(()=> this.ngOnInit());
    this.models.description_r = null;
    this.models.amount = null;
    this.models.type = null;
  }

  registerExpense(){
    if(this.model.type == null){
      alert("You have to choose type");
      return false;
    }
    this.data.register_expense(this.model).subscribe(()=> this.clear());
  }

  check;
  combine = new combine()
  delete_expense(id){
    this.combine.id = id;
    this.check = prompt("Please enter your passcode to delete this expense");
    if(+this.check === 4359){
    this.data.delete_expense(this.combine).subscribe(()=> this.clear());
    }
  }


  delete(id, id2){
    this.combine.id = id;
    this.combine.id2 = id2;
    this.check = prompt("enter your passcode");
    if(+this.check === 4359){
    this.data.delete_expense_inner(this.combine).subscribe(()=> this.get_minor());
    }
  }


  expenses: expenses[];

  expenses_major: expenses_major[];

  expenses_minor: expenses_minor[];

  get_expense(){
    this.data.get_expenses().subscribe(
      amanolist => {
        this.expenses_major = amanolist
      }
    )
  }



  balance = [];
  bal(){
    this.data.bal().subscribe(
      amanolist => this.balance = amanolist
    )

  }


  all_am = [];
  am(){
    this.data.am().subscribe(
      amanolist => this.all_am = amanolist
    )

  }
  all_ca = [];
  ca(){
    this.data.ca().subscribe(
      amanolist => this.all_ca = amanolist
    )

  }


  ready: ready[];
  getready(){
    this.data.getready().subscribe(
      daynlist => { 
      this.ready = daynlist
      }
    )
  }
name_description;
overall;
val = 0;
get_minor(){
  this.data.getExpense(window.localStorage.getItem('formal')).subscribe(
    amanolist => {
      this.expenses_minor = amanolist
  }
  )

  this.get_expense();
}
  ngOnInit() {
    this.getready();
    this.da();
    this.am();
    this.ca();
    this.bal();
    this.cashs();
    this.data.overall(this.val).subscribe(
      amanolist => this.overall = amanolist
    )
    this.models.initials = window.localStorage.getItem('initials');
    this.combine.initials = window.localStorage.getItem('initials');
    this.get_expense();
    // this.name_description = window.localStorage.getItem("name_description")

    this.get_minor();
    if(window.localStorage.getItem('new') == 'inactive'){
      this.router.navigate(['comm']);
    }
  }

}
