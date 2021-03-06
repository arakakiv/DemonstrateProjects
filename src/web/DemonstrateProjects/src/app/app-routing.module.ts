import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { AccountComponent } from './views/account/account.component';
import { HomeComponent } from './views/home/home.component';
import { PersonalKeyComponent } from './views/personal-key/personal-key.component';
import { ProjectComponent } from './views/project/project.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { ViewProjectsComponent } from './views/view-projects/view-projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewProjectsComponent },
  { path: 'signup', component: SignUpComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'signin', component: SignInComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthenticatedGuard], children: [
    { path: ':id', component: ProjectComponent, canActivate: [AuthenticatedGuard] }
  ]},
  { path: 'account', component: AccountComponent, canActivate: [AuthenticatedGuard] },
  { path: 'keys', component: PersonalKeyComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
