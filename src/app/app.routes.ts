import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'map/:id', component: MapComponent },
    // { path: 'data/:id', component: DataComponent, canActivate: [authGuard] },
    // { path: environment.newmap_url, component: MapComponent, canActivate: [authGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutingModule { }
