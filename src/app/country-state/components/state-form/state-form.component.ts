import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { CountryStateService } from '../../services/country-state.service';
import { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


export const STATE_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StateFormComponent),
  multi: true,
};


@Component({
  selector: 'app-state-form',
  templateUrl: './state-form.component.html',
  styleUrls: ['./state-form.component.css'],
  providers: [STATE_VALUE_ACCESSOR]
})
export class StateFormComponent  implements ControlValueAccessor{

  @Input() label : String = "State";
  stateList = [];

  private _selectValue: any = '';
  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_:any) => {};


  get selectedState(): any {
    return this._selectValue;
  }

  set selectedState(value: any) {
    if (value !== this._selectValue) {
      this._onChangeCallback(value);
      this._onTouchedCallback();
    }

  }

  constructor(
    private countryStateService : CountryStateService
  ) { 

    this.countryStateService.$country.subscribe( res =>{
      //console.log(res)
      if(res != null || res != ''){
        this.countryStateService.getStates(res).subscribe( result =>{
          //console.log(result);
          this.stateList = result.map(item => item.states);
          
        })
      }
    })
  }

 
  changeState(newValue) : void{
    this.selectedState = newValue;
    this.countryStateService.setState(newValue);
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
