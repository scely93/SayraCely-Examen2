import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule,
    ComponentesModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
