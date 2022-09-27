import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Servicios } from 'src/app/componentes-comunes/services/servicios.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide = true;
  registro: FormGroup;
  constructor(private services: Servicios,
    private router: Router,
    private _formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,) {
    this.registro = this._formBuilder.group({
      user: [null, Validators.required],
      contra: [null, Validators.minLength(8)],
      name: [null, Validators.required],
      email: [null, Validators.email],
      rol: [null, null]
    })

  }

  ngOnInit(): void {
  }

}
