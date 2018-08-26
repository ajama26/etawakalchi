import { Component, OnInit } from '@angular/core';
import { dayn, directories, combine } from '../serv-int-cla/interface-class';
import { dayn_add, paid } from '../serv-int-cla/interface-class';
import { AppService } from '../serv-int-cla/app.service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-dayn',
  templateUrl: './dayn.component.html',
  styleUrls: ['./dayn.component.css']
})
export class DaynComponent implements OnInit {

  constructor(private data: AppService, private router: Router) { }

  pop : dayn[];
  abshir : dayn;
  temp = {
  name: '',
  phone:'',
  id:''
  }
  model = new dayn_add();
  value;
  all = [];
  neg:any;
  jawab:any;
  val = 0
  overall:any;
  paid = new paid();
  edit;
  check;


  dayn: dayn[];
  getDayn(){
    this.data.getDayn().subscribe(
      daynlist => { 
      this.dayn = daynlist
      if(daynlist.length > 0){
        this.check = true;
      }
      }
    )
  }
  addDayn(){
    this.data
      .addDayn(this.model)
      .subscribe(amanolist => {
        if(amanolist == 'no'){
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
  goBack(){
    this.ngOnInit();
    this.model.name = '';
    this.model.phone_number = null;
    this.model.days = null;
    this.model.amount = null;
    this.check = false;
  }
  positive(){
    this.data.dayn_all().subscribe(
      amanolist => this.all = amanolist
    )

  }
  negative(){
    this.data.dayn_negative().subscribe(
      amanolist => this.neg = amanolist
    )

  }

  combine = new combine();
  delete(a){
    this.combine.id = a;
    this.jawab = prompt("Please type your passcode to delete this dayn. All his transactions and history will be permenantly deleted");
    if(this.jawab == 4359){
      this.data
      .deleteEmployee(this.combine)
      .subscribe(()=> this.goBack());
    } else {
      return false;
  }
  }

  close_update(){
    this.ngOnInit();
    this.pop_close_edit();
   }

  updateEmployee(){
    this.data
      .updateEmployee(this.temp)
      .subscribe(()=> this.close_update());
  }


  over(){
      this.data.overall(this.val).subscribe(
        amanolist => this.overall = amanolist
      )

    }

pop_up(id) {
  window.localStorage.setItem('edit', id);
  document.getElementById('myModal').style.display = "block";

  this.data.getDayn().subscribe(
    daynlist => { 
      
      this.pop = daynlist;
      for(var abshir of this.pop){
      if(abshir.id == id){
      this.temp.name = abshir.name;
      this.temp.phone = abshir.phone;
      this.temp.id = abshir.id;
      }
    }
    }
    
  )
}

pop_up_edit(id) {
  window.localStorage.setItem('edit', id);
  document.getElementById('myEdit').style.display = "block";

  this.data.getDayn().subscribe(
    daynlist => { 
      
      this.pop = daynlist;
      for(var abshir of this.pop){
      if(abshir.id == id){
      this.temp.name = abshir.name;
      this.temp.phone = abshir.phone;
      this.temp.id = abshir.id;
      }
    }
    }
    
  )
}

pop_close() {
  document.getElementById('myModal').style.display = "none";
}

pop_close_edit() {
  document.getElementById('myEdit').style.display = "none";
}


close_model(){
  this.ngOnInit();
  this.pop_close();
  this.paid.paid = null;
}


  pay(){
    this.paid.id = +this.temp.id;
    this.data
    .pay(this.paid)
    .subscribe(()=>this.close_model());
  }


    
  ngOnInit() {
    this.value;
    this.getDayn()
    this.positive();
    this.negative();
    this.over(); 
    this.edit =  window.localStorage.getItem('edit');
    this.model.initials = window.localStorage.getItem('initials');
    this.combine.initials = window.localStorage.getItem('initials');
    if(window.localStorage.getItem('new') == 'inactive'){
      this.router.navigate(['comm']);
    }
  }

}
