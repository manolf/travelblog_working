import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
//   submitted: boolean = false;
  
// 	 info = new FormGroup({
//     firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
//     lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
//     destination: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
//      email:new FormControl('', [Validators.required,Validators.minLength(3)]),
//  });
	

  constructor() { }

  ngOnInit(): void {
  }

 


}