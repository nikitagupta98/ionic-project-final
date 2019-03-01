import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FooterPage } from './footer.page';
//import { HeaderPage } from '../header/header.page';

const routes: Routes = [
  {
    path: '',
    component: FooterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //HeaderPage,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterPage]
})
export class FooterPageModule {}
