import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ingreso: FormGroup;
  hide = true;


  constructor(private _formBuilder: FormBuilder) { 
    this.ingreso = this._formBuilder.group({
      user: [null, Validators.required],
      contra: [null, Validators.minLength(8)]
    });
  }

  ngOnInit(): void {
  }

}
