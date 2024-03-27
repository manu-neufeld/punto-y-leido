import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutMeTitle:string = "¡Hola!"
  description: string = "Soy Manuela, y estoy detrás de Punto&Leido. Además de ser programadora (que por eso me he hecho esta web tan molongui), soy una apasionada de la lectura, por lo que, en mi tiempo libre, me dedico a opinar sobre los libros que leo, y de vez en cuando, pues también me arranco a escribir. Vivo la vida con un filtro de tontería y humor, me gusta cocinar, sobre todo galletas, hago unas de avena y mantequilla de cacahuete que se te va la olla , así que si no te gusta lo que opino, o cómo escribo, pásame tu dirección y te mando una caja, asi estamos de buen humor (Bueno, si me mandas tu dirección igual también te robo todas tus posesiones) No me tomes muy en serio, y espero que disfrutes lo que comparto! Un abrazo de Koala!"
  ironicTooltip: string = "Creo que lo de robar me ha quedado raro, así que mejor aclaro que era bromi. Ni galletas, ni delincuencia, palabrita de Scout"

}
