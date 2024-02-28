import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutMeComponent } from './about-me/about-me.component';
import { WritingComponent } from './writing/writing.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { InstagramComponent } from './instagram/instagram.component';
import { ContactComponent } from './contact/contact.component';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


export const routes: Routes = [
    {path: '', redirectTo: '/about-me', pathMatch: 'full'},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'writing', component: WritingComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'social', component: InstagramComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutingModule { }
