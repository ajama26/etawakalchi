import { Component, OnInit } from '@angular/core';
import { AppService } from '../serv-int-cla/app.service';
import { check, cash } from '../serv-int-cla/interface-class';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { cashs, checks, combine } from '../serv-int-cla/interface-class';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data:AppService, private router:Router) { }
  id:number;
  val = 0
  overall:any;
  over(){
      this.data.overall(this.val).subscribe(
        amanolist => this.overall = amanolist
      )

    }

//checks

            check: check[];
            checks(){
              this.data.checks().subscribe(
                daynlist => this.check = daynlist
              )
            }

            updated_check(){
              this.check_total();
              this.checks();
              this.check_model.name = null;
              this.check_model.amount = null;
              this.check_updating.amount = null;
              this.check_updating.customer = null;
              this.check_updating.status = null;
              this.ngOnInit();
              document.getElementById('cash').style.display = "none";
              document.getElementById('check').style.display = "block";
              document.getElementById('updating').style.display = 'none';
            }

              
            check_model = new checks();
            register_check(){
              this.data
              .addcheck(this.check_model)
              .subscribe(amanolist => {
                if(amanolist == 'noo'){
                  alert('This phone number already exists!');
                  return false;
                }
              },()=>this.updated_check());
            }

            update_check(){
              alert("success update");
            }

            check_updating = new checks();
            open_check_update(id){
            document.getElementById('updating').style.display = 'block';
            this.data
            .singlecheck(id)
            .subscribe(employee =>{
                this.check_updating = employee[0];
                })
              }

            updatecheck(){
              this.data
                .updatecheck(this.check_updating)
                .subscribe(()=> this.updated_check());
            }

            pending(id){
              this.data
            .singlecheck(id)
            .subscribe(employee =>{
                this.check_updating = employee[0];
                

              this.check_updating.status = 'Pending';
              this.data
              .updatecheck(this.check_updating)
              .subscribe(()=> this.updated_check());
            })
            }

            deposited(id){
              this.data
            .singlecheck(id)
            .subscribe(employee =>{
                this.check_updating = employee[0];
               

              this.check_updating.status = 'Deposited';
              this.data
              .updatecheck(this.check_updating)
              .subscribe(()=> this.updated_check());
            })
            }

            single_check(){
            this.data
            .singlecheck(this.id)
            .subscribe(employee =>{
                this.check_model = employee[0];
                })
            }


            ja;

            delete_ch(a){
              this.ja = prompt("enter your passcode to delete this cash?");
              if(this.ja == 4359){
                this.combine.id = a;
                this.data
                .delete_ch(this.combine)
                .subscribe(()=>this.updated_check() );
              } else {
                return false;
              }

            
           

            }

            value_check;
            check_all = [];
            check_total(){
                this.data.check_total(this.value_check).subscribe(
                  amanolist => this.check_all = amanolist
                )

              }

            check_activate(){

              document.getElementById('cash').style.display = "none";
              document.getElementById('check').style.display = "block";
              document.getElementById('ca').style.backgroundColor = "";
              document.getElementById('ch').style.backgroundColor = "yellow";
              document.getElementById('updating_cash').style.display = 'none';
            } 

//cash
            cash: cash[];
            cashs(){
              this.data.cashs().subscribe(
                daynlist => this.cash = daynlist
              )
            }

            register_cash(){
              this.data
              .addcash(this.cash_model)
              .subscribe(amanolist => {
                if(amanolist == 'noo'){
                  alert('This phone number already exists!');
                  return false;
                }
              },()=> this.goBack());
          
                }

            update_cash(){
            alert("success update");  
                }


            cash_model = new cashs();
            single_cash(){
              this.data
              .singlecash(this.id)
              .subscribe(employee =>{
                  this.cash_model = employee[0];
                  })
            }
                      
            jawab;
            combine = new combine();
            delete_ca(a){
              this.jawab = prompt("enter your passcode to delete this cash?");
              if(this.jawab == 4359){
              this.combine.id = a;
                this.data
              .delete_ca(this.combine)
              .subscribe(()=> this.goBack());
              } else {
                return false;
              }
            
          
            }
                    
            value;
            cash_all = [];
            cash_total(){
              this.data.cash_total(this.value).subscribe(
                amanolist => this.cash_all = amanolist
              )
          
            }
                    
            authenticated:boolean = false;
            
            
            cash_activate(){
              document.getElementById('cash').style.display = "block";
              document.getElementById('check').style.display = "none";
              document.getElementById('ca').style.backgroundColor = "yellow";
              document.getElementById('ch').style.backgroundColor = "";
              document.getElementById('updating').style.display = 'none';
            }

            cancel_updating_check(){
              document.getElementById('updating').style.display = 'none';
            }


            cash_updating = new cashs();
            open_cash_update(id){
            document.getElementById('updating_cash').style.display = 'block';
            this.data
            .singlecash(id)
            .subscribe(employee =>{
                this.cash_updating = employee[0];
                })
              }

              updatecash(){
                this.data
                  .updatecash(this.cash_updating)
                  .subscribe(()=> this.ngOnInit());
              }
//dropped
            dropped(){
              this.ngOnInit();
              this.drop_model = null;
            }

            drop_model;
            drop(){
              this.data
              .drop(this.drop_model)
              .subscribe(amanolist => {
              },()=> this.dropped());
            }

            goBack(){
              this.ngOnInit();
              this.cash_model.description = '';
              this.cash_model.amount = null;
            }

//deposit
            hubin; 
            sigad='Pending for Approval';
            register_deposit_cash(){
              this.hubin = prompt('Please enter your password');
              if(this.hubin !== '4359'){
                alert('Your have entered the wrong password');
              return false;
              }else {
              this.data
              .addeposit(this.combine)
              .subscribe(amanolist => {
                if(amanolist == 'noo'){
                  alert('This phone number already exists!');
                  return false;
                }
              },()=> this.goBack());
            }
          }

            register_deposit_check(){
              this.hubin = prompt('Please enter your password');
              if(this.hubin !== '4359'){
                alert('Your have entered the wrong password');
              return false;
              }
              this.data
              .checkdeposit(this.combine)
              .subscribe(amanolist => {
                if(amanolist == 'noo'){
                  alert('This phone number already exists!');
                  return false;
                }
              },()=> this.updated_check());
            }

//depositing cash

              total;

              cash_total_selected(){
                this.data.getcash_total_selected()
                .subscribe(data =>{
                  this.total = data;
                  })
              }


              totals;

              check_total_selected(){
                this.data.getcheck_total_selected()
                .subscribe(data =>{
                  this.totals = data;
                  })
              }

              trigger_check(id){
                //make it check
                this.data.updatecash_status_on(id)
                .subscribe(()=> this.ngOnInit());
              }

              trigger_clock(id){
                //make it clock
                this.data.updatecash_status_off(id)
                .subscribe(()=> this.ngOnInit());
              }
sub:any;
  ngOnInit() {
              this.cash_total_selected();
              this.check_total_selected();
              this.over(); 
              this.checks();
              this.cashs();
              this.check_total();
              this.cash_total();
              this.cash_activate();
              this.authenticated;
              this.cash_model.description = "Cash";

              this.sub = this.route.params.subscribe(params => {
                this.id = +params['id']; // (+) converts string 'id' to a number

                // In a real app: dispatch action to load the details here.
              });
              if(this.id){
                this.single_cash();
              }
              
              if(window.localStorage.getItem('check') == 'nav'){
                this.check_activate(); 
              }

              document.getElementById('updating').style.display = 'none';
              document.getElementById('updating_cash').style.display = 'none';
              this.cash_model.initials = window.localStorage.getItem('initials');
              this.check_model.initials = window.localStorage.getItem('initials');
              this.combine.initials = window.localStorage.getItem('initials');
              if(window.localStorage.getItem('new') == 'inactive'){
                this.router.navigate(['comm']);
              }
              }

}
