import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    email:['cuentafalsa123@gmail.com', [Validators.required, Validators.email]],
    password: ['123', Validators.required],
  })
  constructor(private formBuilder:FormBuilder, private router:Router){

  }

  ngOnInit(): void {
      
  }

  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }
    else{
      alert("Error al ingresar los datos");
    }
  }
}
