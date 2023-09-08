import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTwoComponent } from './pageTwo/page-two/page-two.component';
import { PageOneComponent } from '../page-one/pageOne/page-one/page-one.component';

const routes: Routes = [
  {
    path: 'page-one',
    loadChildren: () =>
      import('../page-one/pageOne/page-one/page-one.component').then((m)=> m.PageOneComponent)
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('../page-two/page-two.module').then((m) => m.AppRoutingModule),
  },
  // Autres routes de l'application
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    PageTwoComponent
  ],
})
export class AppRoutingModule {}
