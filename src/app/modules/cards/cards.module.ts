import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';



@NgModule({
    declarations: [CardsComponent],
    imports: [ CommonModule, RouterModule.forChild([
        {path: '', component: CardsComponent}
    ]) ],
    exports: [],
    providers: [],
})
export class CardsModule {}