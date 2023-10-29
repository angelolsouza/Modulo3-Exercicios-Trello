import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule, SharedModule, ReactiveFormsModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
