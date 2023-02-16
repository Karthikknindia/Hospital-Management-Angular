import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { DocterComponent } from './component/dashboard/docter/docter.component';
import { ViewDoctorComponent } from './component/dashboard/docter/view-doctor/view-doctor.component';
import { PatientComponent } from './component/dashboard/patient/patient.component';
import { ViewPatientComponent } from './component/dashboard/patient/view-patient/view-patient.component';
import { AuthguardGuard } from './shared/guard/authguard.guard';
// import { ViewDoctorComponent } from './component/dashboard/doctor/delete-doctor/view-doctor/view-doctor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'patient', component: PatientComponent },
      { path: 'docter', component: DocterComponent },
      // { path: 'docter/:id', component: ViewDoctorComponent },
      { path: 'docter/:id', component: ViewDoctorComponent },
      { path: 'patient/:id', component: ViewPatientComponent },
    ],
    canActivate: [AuthguardGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
