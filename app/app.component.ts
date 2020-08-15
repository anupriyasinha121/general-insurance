import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CalculateValidationService  } from './calculate-validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  submitted = false;
  form1: FormGroup;
  loading:any;;
  form1Completed :boolean=false;
  validForm: CalculateValidationService = new CalculateValidationService();
  vehicleType: number = 0;
  
  
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form1 = this.formBuilder.group({
      Age: ['', Validators.required],
      Model: ['', Validators.required]
      
  });
  }
  get f1() { return this.form1.controls; }
  onVehicle2Click(){
    this.vehicleType = 2;
    this.form1Completed = true;

  }
  onVehicle4Click(){
    this.vehicleType = 4;
    this.form1Completed = true;
  }
  

  onForm1Submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.form1.invalid) {
        return;
    }
    else if(this.validForm.notEmpty(this.form1.controls['Age'].value) || this.validForm.notEmpty(this.form1.controls['Model'].value)){
      // console.log(this.form.controls['claimReason'].value);
      alert("Some field are NULL");
      return;
    }
  }
  
}



