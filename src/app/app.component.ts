import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { WorkInProgressComponent } from "./work-in-progress/work-in-progress.component";
import { HomePageComponent } from "./home-page/home-page.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, NgbModule, FooterComponent, WorkInProgressComponent, HomePageComponent]
})
export class AppComponent {
  title = 'punto-y-leido';
}
