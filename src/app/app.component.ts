import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';

  constructor(private fb:FormBuilder){}
  
  validate: FormGroup = new FormGroup({});
  
  ngOnInit(): void {
    this.validate = this.fb.group({
      fname : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      lname : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      checkbox : new FormControl('',[Validators.required])
    });
  }
  
  validateForm(){
    console.warn(this.validate.value);
  }
}
