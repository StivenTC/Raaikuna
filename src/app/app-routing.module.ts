import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ThemeComponent } from './components/theme/theme.component';
import { ListThemeComponent } from './components/list-theme/list-theme.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'list-theme/:id/:user',
        component: ListThemeComponent
    },
    {
        path: 'theme/:user/:theme/:lesson/:item',
        component: ThemeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
