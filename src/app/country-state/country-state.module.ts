import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryFormComponent } from './components/country-form/country-form.component';
import { StateFormComponent } from './components/state-form/state-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryStateService } from './services/country-state.service';
import { FormsModule } from '@angular/forms';
import { CityFormComponent } from './components/city-form/city-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    CountryFormComponent,
    StateFormComponent,
    CityFormComponent
  ],
  providers:[
    CountryStateService
  ],
  declarations: [
    CountryFormComponent,
    StateFormComponent,
    CityFormComponent
  ]
})
export class CountryStateModule { }
