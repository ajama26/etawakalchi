import { Component, OnInit } from '@angular/core';
import { AppService } from '../serv-int-cla/app.service';
import { history } from '../serv-int-cla/interface-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor( private data:AppService, private router:Router) { }

  history: history[];
  gethistory(){
    this.data.gethistory().subscribe(
      daynlist => this.history = daynlist
    )
  }


  ngOnInit() {
    this.gethistory();
    if(window.localStorage.getItem('new') == 'inactive'){
      this.router.navigate(['comm']);
    }
  }

}
