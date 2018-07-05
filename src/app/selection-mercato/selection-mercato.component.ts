import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ApiTest } from '../../../server/routes/api-test';

@Component({
  selector: 'app-selection-mercato',
  templateUrl: './selection-mercato.component.html',
  styleUrls: ['./selection-mercato.component.css']
})
export class SelectionMercatoComponent implements OnInit {

	//Progress Bar : Budget restant
  	value = 20; //Pourcentage du budget consommé //Plafond à 100
  	budget_restant = 320; //Budget Restant sur 400
  	type = "success"; //Couleur de la barre : danger si 100% ou + atteint -- success sinon



    selection: any[];
    selectionSubscription: Subscription;

  /*joueurs = [
  	{
      id: 1,
      name: 'Balloteli Mario',
      team: 'Nice',
      position: 'Attaquant',
      prix: 23

    },
    {
      id: 2,
      name: 'Pléa Alassane',
      team: 'Nice',
      position: 'Attaquant',
      prix: 17
    },
    {
      id: 3,
      name: 'Mangani Thomas',
      team: 'Angers',
      position: 'Milieu',
      prix: 13
    },
    {
      id: 4,
      name: 'Sidibé Djibril',
      team: 'Monaco',
      position: 'Défenseur',
      prix: 14
    }
  ];*/
  

  constructor(private apiTest: ApiTest) { }

  ngOnInit() {
    this.selectionSubscription = this.apiTest.selectionSubject.subscribe(
      (selection: any[]) => {
        this.selection = selection;
      }
     );
    this.apiTest.emitSelectionSubject();
  }

  suppJoueur(event: any){
	  this.selection.splice(event.srcElement.attributes.id.nodeValue, 1); 
  }

  addJoueur(nouveauJoueur: any){
  	this.selection.push(nouveauJoueur);
  }	

}
