import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: any;
  formName: FormGroup;

  onSubmit(form: any) {
    console.log('you submitted value: ',  form);
  }

  log(val) {
    console.log(val);
  }
  constructor(private fb: FormBuilder) { 
    this.formName = fb.group({
      'userName': [null]
    });
    this.userName = this.formName.controls['userName'];
  }

  ngOnInit(): void {
  }

}
