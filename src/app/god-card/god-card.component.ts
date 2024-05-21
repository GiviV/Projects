import { Component, Input } from '@angular/core';
import { GodCard } from '../god-card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-god-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './god-card.component.html',
  styleUrl: './god-card.component.css'
})
export class GodCardComponent {

  @Input() godCard!:GodCard

}
