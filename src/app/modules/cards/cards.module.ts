import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';


import { CardsComponent } from './cards.component';



@NgModule({
    declarations: [CardsComponent],
    imports: [ CommonModule,MatTabsModule, RouterModule.forChild([
        {path: '', component: CardsComponent}
    ]) ],
    exports: [],
    providers: [],
})
export class CardsModule {}