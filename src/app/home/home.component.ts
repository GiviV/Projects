import { Component, inject } from '@angular/core';
import { GodCardComponent } from '../god-card/god-card.component';
import { NgFor } from '@angular/common';
import { GodservService } from '../godserv.service';
import { GodCard } from '../god-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GodCardComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  godList:GodCard[] = []
  godService: GodservService = inject(GodservService)
  filteredGodList: GodCard[] = [];

  constructor(){

    this.godList = this.godService.getAllGods()
    this.filteredGodList = this.godList;

  }

  filterResults(text: string) {
    if (!text) {
      this.filteredGodList = this.godList;
      return;
    }

    this.filteredGodList = this.godList.filter(
      godCard => godCard?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  

}
