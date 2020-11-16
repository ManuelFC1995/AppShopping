
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit () {
  firebase.default.initializeApp({
  apiKey:'AIzaSyC_NGVfP7ZwLsDhwq5xy4A7K4eG2kIE6bE',

  authDomain: 'comprasapp-83618.firebaseapp.com'
  });
  }
 }
