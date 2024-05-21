import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GodservService } from '../godserv.service';
import { GodCard } from '../god-card';

import { GodCardComponent } from '../god-card/god-card.component';

@Component({
  selector: 'app-about-god',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-god.component.html',
  styleUrl: './about-god.component.css'
})
export class AboutGodComponent {


  route: ActivatedRoute = inject(ActivatedRoute)

  godService = inject(GodservService)
  godCard: GodCard | undefined

  constructor(){


    const godCardId = Number(this.route.snapshot.params['id']);

    this.godCard = this.godService.getAllGodsById(godCardId)
  
  }

}
