import { Component } from '@angular/core';

@Component({
  selector: 'app-implement-route-gauard',
  templateUrl: './implement-route-gauard.component.html',
  styleUrl: './implement-route-gauard.component.scss'
})
export class ImplementRouteGauardComponent {

  codeSnippetHTML: string = `
  // Mo HTML required
  `;

  codeSnippetTs: string = `
// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  `;

  codeSnippetCSS: string = `
  // No CSS is required //
  `;


}
