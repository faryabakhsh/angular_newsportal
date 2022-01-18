import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { BusinessComponent } from './pages/business/business.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { HealthComponent } from './pages/health/health.component';
import { ScienceComponent } from './pages/science/science.component';
import { SportsComponent } from './pages/sports/sports.component';
import { TechnologyComponent } from './pages/technology/technology.component';

const routes: Routes = [
  {path:'', component:AllComponent},
  {path: 'business',component:BusinessComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
