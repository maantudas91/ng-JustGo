import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../core/vehicle.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehicleService : VehicleService
  ) { }

  ngOnInit() {
      this.initForm();
  }

  initForm(){
      this.vehicleForm = this.fb.group({
          vehicleName : new FormControl('', [Validators.required]),
          vehicleReg : new FormControl('', [Validators.required]),
          vehicleType : new FormControl('', [Validators.required])
      });
  }


  saveVehicle(form){
      console.log(form.value);

      this.vehicleService.addNewVehicle(form.value).subscribe( result =>{
          console.log(result);
      },(err : HttpErrorResponse) =>{
            if (err.error instanceof Error) {
                console.error('An error occurred:', err.error);
            }else{
                console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
            }

            console.log(err);
      });
  }
}
