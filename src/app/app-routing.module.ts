import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { MergeMapVsSwitchMapComponent } from './merge-map-vs-switch-map/merge-map-vs-switch-map.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ObservableVsPromiseComponent } from './observable-vs-promise/observable-vs-promise.component';
import { ObservableVsSubjectComponent } from './observable-vs-subject/observable-vs-subject.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';
import { SubjectTypesComponent } from './subject-types/subject-types.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

const routes: Routes = [
  { path: 'view-encapsulation', component: ViewEncapsulationComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: 'observable-vs-promise', component: ObservableVsPromiseComponent },
  { path: 'observable-vs-subject', component: ObservableVsSubjectComponent },
  { path: 'subject-types', component: SubjectTypesComponent },
  { path: 'merge-map-vs-switch-map', component: MergeMapVsSwitchMapComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then(m => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    //canActivate: [LoginGuard]
  },
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }