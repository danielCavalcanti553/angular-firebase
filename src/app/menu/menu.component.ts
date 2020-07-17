import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user : string = "";
  constructor(private auth : AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.user.subscribe(data=>{
      this.user = data.email;
    })
  }

}
