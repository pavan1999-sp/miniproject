import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidatorsService {

 
  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }

  constructor(public http:HttpClient) { }
  getData(){


    return this.http.get("http://localhost:5100/products");
   }
   validatorEmail(Email:any){
     return this.http.get("http://localhost:5100/products")
   }
   postdata(data:any){
     console.log(data);
    return this.http.post("http://ec2-52-66-211-132.ap-south-1.compute.amazonaws.com:8080/onlineshopping/register",data)   
    
  }

}
