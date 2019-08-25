import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerComponent } from './owner-list/owner/owner.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetEditComponent } from './pet-list/pet-edit/pet-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    OwnerComponent,
    PetListComponent,
    PetEditComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
