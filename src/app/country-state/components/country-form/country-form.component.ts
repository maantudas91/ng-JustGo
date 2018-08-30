import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CountryStateService } from '../../services/country-state.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export const COUNTRY_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountryFormComponent),
  multi: true,
};


@Component({
  selector: 'app-country-form',
  templateUrl: './country-form.component.html',
  styleUrls: ['./country-form.component.css'],
  providers:  [COUNTRY_VALUE_ACCESSOR]
})
export class CountryFormComponent implements OnInit, ControlValueAccessor {

  @Input() country : String = "Country";
  countryList = [];
  //selectedCountry : any = '';

  private _selectValue: any = '';

  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_:any) => {};

  constructor(
    private countryStateService : CountryStateService
  ) { }

  get selectedCountry(): any {
    return this._selectValue;
  }

  set selectedCountry(value: any) {
    if (value !== this._selectValue) {
      this._onChangeCallback(value);
      this._onTouchedCallback();
    }

  }


  ngOnInit() {
    this.countryStateService.getCountries().subscribe( result =>{
        this.countryList = result;
    })
  }


  changeCountry(newValue) :void{
    this.selectedCountry = newValue;
    this.countryStateService.setCountry(newValue);
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
