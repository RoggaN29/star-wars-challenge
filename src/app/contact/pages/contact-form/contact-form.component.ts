import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})

export class ContactFormComponent implements OnInit {

  startDate = new Date(1990, 0, 1);

  validateAge(control:FormControl){
    const value: Date = control.value;
    var ageDiff = Date.now() - new Date(value).getTime();
    var ageDate = new Date(ageDiff);
    const currentAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    if( currentAge < 18){
      return {
        noAdult: true
      }
    }
    return null;
  }

  contactForm: FormGroup = this.fb.group({
    name: [ '', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] ],
    lastName: [ '', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] ],
    birthday: [ '', [Validators.required, this.validateAge] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() { }

  validRequired(field:string){
    return this.contactForm.get(field)?.errors?.required
    && this.contactForm.get(field)?.touched
  }

  validPattern(field:string){
    return this.contactForm.get(field)?.errors?.pattern
    && this.contactForm.get(field)?.touched
  }

  validAdult(){
    return this.contactForm.get('birthday')?.errors?.noAdult
    && this.contactForm.get('birthday')?.touched
  }

  subscribe(){
    if (this.contactForm.invalid){
      this.contactForm.markAsTouched();
      return;
    }
    console.log(this.contactForm.value)
    this.contactForm.reset();
  }

}
