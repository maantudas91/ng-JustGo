import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from "./views/home/home.component";
import { AddVehicleComponent } from "./views/add-vehicle/add-vehicle.component";
import { AddBuComponent } from "./views/add-bu/add-bu.component";

const routes = [
    { path :'' , component : HomeComponent },
    { path : 'add-vehicle', component : AddVehicleComponent},
    { path : 'add-bu', component : AddBuComponent}
];


@NgModule({
    declarations:[
        HomeComponent,
        AddVehicleComponent,
        AddBuComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }