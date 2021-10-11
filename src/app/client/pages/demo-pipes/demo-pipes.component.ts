import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrls: ['./demo-pipes.component.scss'],
})
export class DemoPipesComponent implements OnInit {
  date = '2010-02-02T00:00:00';
  text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae explicabo voluptates tempora libero voluptatum dolores tempore sapiente, aperiam sint. Exercitationem, omnis facilis aut commodi tempore quasi iure libero iste.';
  constructor() {}

  ngOnInit(): void {}
}
