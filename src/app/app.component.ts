import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'MyFirstApp';
  // users = [ 'ryan', 'joe', 'Jennifer' ];
  name: string = 'Flavio Copes';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 41;
    this.address = {
      street: 'Street 16 House 16 09',
      city: 'Mérida'
    };
    this.hobbies = ['swiming', 'read', 'write'];
  }
 */
  name: string = 'Rubén Rangel';
  age: number = 43;

  users: string[] = ['ryan', 'joe', 'cameron'];
  posts = []; 

  constructor( private dataService: DataService  ) {
    this.dataService.getData().subscribe( data => {
      // console.log( data );
      this.posts = data;
    });
  }

  //Methods
  alerting() {
    alert('Hello Bon!');
  }

  addUser( newUser ) {
    // console.log( newUser.value );
    this.users.push( newUser.value );
    newUser.value = '';
    newUser.focus();
    
    return false;
  }

  deleteUser( user ) {
    for( let i = 0; i < this.users.length; i++ ) {
      if( user == this.users[i] ) {
        this.users.splice(i,1);
      }
    }
  }
}
