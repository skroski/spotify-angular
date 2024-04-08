import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment} from '@angular/router';
const router = inject(Router);
export const AuthenticatedGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  
  const token = localStorage.getItem('token');
  if(!token) {
  return naoAutenticado()
  }
  return true;
};

function naoAutenticado() {
  localStorage.clear();
    router.navigate(['/login']);
     return false;
 }