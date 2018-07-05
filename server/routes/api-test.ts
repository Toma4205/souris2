import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiTest {
 
 joueursSubject = new Subject<any[]>();
 teamsSubject = new Subject<any[]>();
 selectionSubject = new Subject<any[]>();
 
 
 private joueurs = [
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
    },
    {
      id: 85,
      name: 'Steve Mandanda',
      team: 'Marseille',
      position: 'Gardien',
      prix: 19
    }
  ];

  private selection = [ {
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
    } ];

  private teams = [
    {
      id: 0,
      ville: 'Nice',
      trigramme: 'NIC'
    },
    {
      id: 1,
      ville: 'Marseille',
      trigramme: 'MAR'
    },
    {
      id: 2,
      ville: 'Angers',
      trigramme: 'ANG'
    },
    {
      id: 3,
      ville: 'Monaco',
      trigramme: 'MON'
    },
    {
      id: 4,
      ville: 'Nantes',
      trigramme: 'NTE'
    }
  ];

  constructor(private httpClient: HttpClient){ }

  emitJoueursSubject() {
    this.joueursSubject.next(this.joueurs.slice());
  }

  emitTeamsSubject(){
    this.teamsSubject.next(this.teams.slice());
  }

  emitSelectionSubject(){
    this.selectionSubject.next(this.selection.slice());
  }

  setPrice(id){
    this.joueurs[id].prix=this.joueurs[id].prix+1;
  }

}
