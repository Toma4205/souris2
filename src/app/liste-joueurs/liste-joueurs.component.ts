import { Component, OnInit } from '@angular/core';
import { ApiTest } from '../../../server/routes/api-test';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css']
})

export class ListeJoueursComponent implements OnInit {

  joueurs: any[];
  joueurSubscription: Subscription;
  teams: any[];
  teamSubscription: Subscription;
  
  argent_restant = 16; //Pour Test  

  settings = {
      columns: {
            /*id: {
              title: 'ID',
              editable: false,
              filter: false,
            },*/
            name: {
              title: 'Nom',
              editable: false,
            },
            team: {
              title: 'Equipe',
              editable: false,
              filter: {
                type: 'list',
                config: {
                  selectText: 'Toutes',
                  list: [ ] //chargé dans OnInit
                 }
              }
            },
            position: {
              title: 'Poste',
              editable: false,
              filter: {
                type: 'list',
                config: {
                  selectText: 'Tous',
                  list: [
                    { value: 'Gardien', title: 'Gardien' },
                    { value: 'Défenseur', title: 'Défenseur' },
                    { value: 'Milieu', title: 'Milieu' },
                    { value: 'Attaquant', title: 'Attaquant' },
                   ]
                 }
              }
            },
            prix: {
              title: 'Prix',
              editable: false,
              width: '80px',
            },
           },
           
         actions: {
            add: false,
            edit: false,
            delete: false,
          },
          pager:{
            perPage: 700,
           },
          noDataMessage: 'Aucun joueur trouvé',
          hideSubHeader: false,
          rowClassFunction: (row) => {
              if (row.data.prix > this.argent_restant) {
                //console.log('Prix nok '+row.data.prix);
                return '<a class="${ warning }"></a>';
                //return ''<a class="${ warning }"></a>';
              }
              //console.log('Prix ok '+row.data.prix);
              return '';  
            }
        };
  
  constructor(private apiTest: ApiTest) { }

  ngOnInit() {
  	this.joueurSubscription = this.apiTest.joueursSubject.subscribe(
      (joueurs: any[]) => {
        this.joueurs = joueurs;
      }
     );
  	this.apiTest.emitJoueursSubject();

    this.teamSubscription = this.apiTest.teamsSubject.subscribe(
      (teams: any[]) => {
        this.teams = teams;
      }
     );
    this.apiTest.emitTeamsSubject();

    for( var i = 0; i < this.teams.length; i++)
     {
       this.settings.columns.team.filter.config.list.push({
         value: this.teams[i].ville,
         title: this.teams[i].ville

       });
     }     
  }

  showSelected(event){
    console.log(event.data.id+" et prix "+event.data.prix);
    this.apiTest.setPrice(event.data.id);
    console.log(this.teams[0].ville);
  }
}
