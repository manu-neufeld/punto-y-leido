import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AboutMeComponent } from './about-me/about-me.component';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


export const routes: Routes = [
    {path: '', redirectTo: '/about-me', pathMatch: 'full'},
    {path: 'about-me', component: AboutMeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutingModule { }
