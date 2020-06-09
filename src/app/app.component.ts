import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Priya';
  email = 'agarwalpriya303@gmail.com';
  gender = 'Female';
  age = 26;
  contact = 7038738846;

  public a = 6;
  public b = 48;

  objValues = {
    key1 : 'Goyal',
    key2 : 4763524,
    key3 : 'Sagar'
  };

  arrayValues = [20,36,17,'Priya','Sahil',78];

  showAlert(){
    alert('Hello from Angular');
  }

  showCalculation(a,b){
    alert('Sum of a + b : ' + (a + b));
  }

  showCalculation1(c,d){
    document.getElementById('demo').innerHTML = c + d;
  }

  getValue(i){
    console.warn(i.target.value);
  }

  getValue1(i){
    console.warn(i);
  }
}
