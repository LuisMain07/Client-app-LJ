import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const notAuthenticatedGuard: CanMatchFn = (route, segments) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const isAuthenticated = 
    authService.authStatus() === 'authenticated'? true : false;

  if (isAuthenticated) {
    router.navigateByUrl('./');
    return false;
  }

  return true;
};
