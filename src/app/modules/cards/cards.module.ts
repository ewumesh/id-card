import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CardsComponent } from './cards.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
    declarations: [CardsComponent],
    imports: [ CommonModule,MatTabsModule,MatInputModule,MatIconModule,MatToolbarModule, RouterModule.forChild([
        {path: '', component: CardsComponent}
    ]) ],
    exports: [],
    providers: [],
})
export class CardsModule {}