import { Routes } from '@angular/router';
import { CookiesChat } from './chat/cookies-chat/cookies-chat';

export const routes: Routes = [
  // Cuando alguien visite la raiz del sitio, muestra el chat
  { path: '', component: CookiesChat },

  // Mas adelante podrias añadir:
  // { path: 'otra-pagina', component: OtroComponente }
];
