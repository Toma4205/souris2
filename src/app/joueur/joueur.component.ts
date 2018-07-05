import { Component, Input, OnInit } from '@angular/core';
import { ApiTest } from '../../../server/routes/api-test';

@Component({
  selector: '[app-joueur]',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {

  @Input() joueurName: string;
  @Input() joueurTeam: string;
  @Input() joueurPosition: string;
  @Input() joueurPrix: number;
  @Input() index: number;
  @Input() id: number;

  constructor(private apiTest: ApiTest) { }

  ngOnInit() {
  }

}
