import { Component, OnInit } from '@angular/core';
import { AppService } from '../serv-int-cla/app.service';
import { employees } from '../serv-int-cla/interface-class';
import {Router} from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor( private data: AppService, private router: Router) { }

  passcode;
  unlock(){
    if(this.passcode){
    if(this.passcode == 4359){
    document.getElementById('rest').style.display = 'block';
    document.getElementById('table').style.display = 'block';
    document.getElementById('passcode').style.display = 'none';
    document.getElementById('error').style.display = 'none'; 
    } else {
    document.getElementById('error').style.display = 'block';  
    }
  }
  }

checked;
send;
send_real;
check(){
  if(this.checked == false){
  // alert('true')
  this.send = 'true';
  this.data.get_settings(this.send)
  .subscribe(()=> this.get_all());
} else if(this.checked == true){
  // alert('false')
  this.send = 'false';
  this.data.get_settings(this.send)
  .subscribe(()=> this.get_all());
}
}

sent_email;
tick;
confirming;
get_all(){
  this.data.settings().subscribe(jawaab => {
    this.checked = jawaab[0],
    this.sent_email = jawaab[1],
    this.tick = jawaab[2]
  });
}

send_email(){
  this.confirming = prompt("please enter your passcode to send the files");
  if(this.confirming == 4359){
  this.data.send_email('success').subscribe(()=> this.get_all());
  alert("successfully sent the email, please confirm before you close for the day");
  } else {
    alert("wrong passcode");
  }
}

  localUser = {
    password : '',
    confirm_password : '',
    email: 'etawakalchi@gmail.com'
  }

  error;

  equal(){
    if(this.localUser.confirm_password != this.localUser.password){
      this.error = "*Please make sure that your passords are equal in both fields";
    } else {
      this.error = '';
    }
  }

  pop(){
    this.localUser.password = '';
    this.localUser.confirm_password = '';
    alert('successfully changed your passord');
  }

  reset(){
    if(this.localUser.password === this.localUser.confirm_password){
    this.data.updatepassword(this.localUser).subscribe(()=> this.pop());
    }
  }

  initial;

  clear(){
    this.initial = '';
  }

  initial_register(){
    this.data
      .initial_register(this.initial)
      .subscribe(amanolist => {
      },()=> this.clear());
}

employee = {
  first_name:'',
  last_name:'',
  email:'',
  initials:''
}
register_employee(){
  this.data.register_employee(this.employee).subscribe(()=> this.getEmployee());
  this.employee.first_name = '';
  this.employee.last_name = '';
  this.employee.email = '';
  this.employee.initials = '';
}
jawab;
delete_employee(id){
  this.jawab = prompt("Please type your passcode to delete this Employee.");
  if(this.jawab == 4359){
    this.data
    .delete_Employee(id)
    .subscribe(()=> this.getEmployee());
  } else {
    return false;
}
}

employees: employees[];
hubi;
getEmployee(){
  this.data.getEmployees().subscribe(
    employees => { 
    this.employees = employees
    if(employees.length > 0){
      this.hubi = true;
    }
    }
  )
}

  ngOnInit() {
    document.getElementById('rest').style.display = 'none';
    document.getElementById('table').style.display = 'none';
    document.getElementById('passcode').style.display = 'block';
    document.getElementById('error').style.display = 'none';
    this.getEmployee();
    this.equal();
    this.get_all();
    if(window.localStorage.getItem('who') != 'manager'){
      this.router.navigate(['home']);
    }

    if(window.localStorage.getItem('new') == 'inactive'){
      this.router.navigate(['comm']);
    }
  }

}
