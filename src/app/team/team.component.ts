import { Component, Input, OnInit } from '@angular/core';
import { ApiTest } from '../../../server/routes/api-test';

@Component({
  selector: '[app-team]',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() teamId: number;
  @Input() teamVille: string;
  @Input() teamTrigramme: string;

  constructor() { }

  ngOnInit() {
  }

}
