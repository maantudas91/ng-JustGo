import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes = [
    
];


@NgModule({
    declarations:[
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