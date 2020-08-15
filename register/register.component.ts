import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../assets/passwordvalidator/validator';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          address: ['', Validators.required],
          dob: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      },{
        validator: MustMatch('password', 'confirmPassword')
    });
    }
  

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      const currentDate : Date= new Date();
      const dateOfBirth: Date = new Date(this.registerForm.controls['dob'].value);
      console.log(currentDate);
      console.log(dateOfBirth);

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }else 
          {
                if(this.registerForm.controls['name'].value.trim().length==0||this.registerForm.controls['address'].value.trim().length==0)
                {
                      alert('Some fields are Null');
                      return;
                }
                else
                    {
                       if(currentDate.getTime()-dateOfBirth.getTime()<568080000000)
                       {
                            alert('Age can not be less than 18 years');
                            return
                       }
                       else
                      {
                                this.router.navigateByUrl("/");

                                // display form values on success
                                //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
                        }        
                      }     

                    }
  }

  
 
}
