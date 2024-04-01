import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  aboutMeTitle:string = "¡Hola mundo literario!"
  description: string = "Soy Manuela, una devoradora de libros y creadora de reseñas con un toque de humor y mucho amor por las letras. Me fascina sumergirme en las historias más intrincadas y los mundos más fantásticos que los autores pueden imaginar. Cuando no estoy perdida entre las páginas de un buen libro, me encontrarás en mi blog, compartiendo mis pensamientos sobre las últimas obras que han conquistado mi corazón (o lo han destrozado por completo). Desde clásicos atemporales hasta las últimas novedades, siempre estoy lista para sumergirme en una nueva aventura literaria y llevar a otros conmigo.También tengo una debilidad por la repostería,especialmente por las galletas de mantequilla y avena.Mis manos pueden manejarse bien con un libro en una y una espátula en la otra, y no hay nada como el aroma de unas galletas recién horneadas para hacer un rato con un libro sea más dulce. Soy una apasionada de las palabras, una adicta a las reseñas y una maestra de la repostería.¡Únete a mí en esta dulce travesía a través de las letras las cookies!"
}
