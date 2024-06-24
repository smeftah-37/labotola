import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './login/card/card.component';
import { VideoEditorComponent } from './video-editor/video-editor.component';

export const routes: Routes = [
    {
    path: '',
    component: LoginComponent,
    title: 'login page',
    }
    ,  {
        path: 'card',
        component: CardComponent,
        title: 'Card page',
        }
];
