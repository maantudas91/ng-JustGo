import { Component, OnInit, forwardRef, Input, Injector, AfterViewInit } from '@angular/core';
import { CountryStateService } from '../../services/country-state.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl , NgControl} from '@angular/forms';

export const CITY_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CityFormComponent),
  multi: true,
};

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
  providers:[CITY_VALUE_ACCESSOR]
})
export class CityFormComponent implements AfterViewInit, ControlValueAccessor{

  @Input() label : String = "City";
  private control: FormControl;

  cityList = [];

  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_:any) => {};

  get selectedCity(): any {
    return this._selectValue;
  }

  set selectedCity(value: any) {
    if (value !== this._selectValue) {
      this._onChangeCallback(value);
      this._onTouchedCallback();
    }

  }

  constructor(
    private countryStateService : CountryStateService,
    private injector: Injector
  ) { 
        this.countryStateService.$state.subscribe( res =>{
            if(res != null && res != ''){
              this.countryStateService.getCities(res).subscribe( result =>{
                
                this.cityList = result.filter(item => { return item.state == res});
              })
            }
        });

        
    }

    ngAfterViewInit(): void {
      const ngControl: NgControl = this.injector.get(NgControl, null);
      if (ngControl) {
        this.control = ngControl.control as FormControl;
        console.log(this.control.errors)
      } else {
        // Component is missing form control binding
      }

      this.control.statusChanges.subscribe(res =>{
        console.log(res)
      })
    }

  
  changeCity(newValue):void{
    this.selectedCity = newValue;
    this.writeValue(newValue);
  }

 
  writeValue(value : any) : void{
    if (value !== undefined) {
      this._selectValue = value;
    }
  }

  registerOnChange(fn :any) : void{
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn :any) : void{
    this._onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

}
