import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './pageOne/page-one/page-one.component';

const routes: Routes = [
  {
    path: '',
    component: PageOneComponent,
  },
  // Autres routes spécifiques à PageOne
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    PageOneComponent
  ],
})
export class PageOneRoutingModule {}
