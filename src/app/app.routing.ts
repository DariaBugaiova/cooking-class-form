import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/_guards/auth.guard';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', component: RecipeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
