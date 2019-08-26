import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { OwnerListComponent } from './owners/owner-list/owner-list.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwnersComponent } from './owners/owners.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerListComponent,
    PetListComponent,
    HeaderComponent,
    FooterComponent,
    OwnersComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
