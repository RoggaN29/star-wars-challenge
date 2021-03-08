import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactFormComponent } from './pages/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contactForm',
        component: ContactFormComponent
      },
      {
        path: '**',
        redirectTo: 'contactForm'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
