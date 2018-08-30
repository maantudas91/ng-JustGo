import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-bu',
  templateUrl: './add-bu.component.html',
  styleUrls: ['./add-bu.component.css']
})
export class AddBuComponent implements OnInit {
  
  buForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.buForm = this.fb.group({
      address : new FormGroup({
        address1 : new FormControl('', [Validators.required]),
        address2 : new FormControl('', [Validators.required]),
        state : new FormControl('', [Validators.required]),
        country : new FormControl('', [Validators.required]),
        city : new FormControl('', [Validators.required])
      }),
      description : new FormControl('')
    });
  }



  saveBU(form):void{
    console.log(form.value)
  }

}
