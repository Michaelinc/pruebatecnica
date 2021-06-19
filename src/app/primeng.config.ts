import { NgModule } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast';



@NgModule({
    imports: [
        TableModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        ToastModule
    ],
    exports: [
        TableModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        ToastModule
    ]
})
export class PrimengConfig { }