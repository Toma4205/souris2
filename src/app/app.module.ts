import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ListeJoueursComponent } from './liste-joueurs/liste-joueurs.component';
import { JoueurComponent } from './joueur/joueur.component';
import { ApiTest } from '../../server/routes/api-test'
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'angular-6-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TeamComponent } from './team/team.component';
import { MercatoComponent } from './mercato/mercato.component';
import { SelectionMercatoComponent } from './selection-mercato/selection-mercato.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
  { path: 'listejoueurs', component: MercatoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListeJoueursComponent,
    JoueurComponent,
    TeamComponent,
    MercatoComponent,
    SelectionMercatoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'classicoach' }),
    BrowserTransferStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiTest],
  bootstrap: [AppComponent]
})
export class AppModule { }
