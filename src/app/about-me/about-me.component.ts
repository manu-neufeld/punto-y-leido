import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  ironicTooltip: string = "Creo que lo de robar me ha quedado raro, así que mejor aclaro que era bromi. Ni galletas, ni delincuencia, palabrita de Scout"

}
