import { UserService } from './../user.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../userInfo';
import { HttpClientModule } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
   userService: UserService = inject(UserService);
   showLoginForm: boolean = true;

  constructor(private  router: Router ,private fb: FormBuilder,@Inject(PLATFORM_ID) private platformId: Object) {}

  applyForm = new FormGroup(
    {
      username: new FormControl(''),
      password: new FormControl('')
    }
  );

  signUpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  
  submitApplication(){
    this.userService.submitLogin(
      this.applyForm.value.username ?? '',
      this.applyForm.value.password ?? ''
    );
  }

  submitSignUp() {
   
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');
  
      if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
          container.classList.add('active');
          this.toggleForms();
        });
  
        loginBtn.addEventListener('click', () => {
          container.classList.remove('active');
          this.toggleForms();

        });
      }
    }
    }
    
    toggleForms() {
      this.showLoginForm = !this.showLoginForm;
    }
    navigateToCard(){
      this.router.navigate(['/card']);
    }
}




