import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwnersComponent } from './owners/owners.component';
import { PetsComponent } from './pets/pets.component';
import { OwnerElementComponent } from './owner-element/owner-element.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    HeaderComponent,
    FooterComponent,
    OwnersComponent,
    PetsComponent,
    OwnerElementComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
