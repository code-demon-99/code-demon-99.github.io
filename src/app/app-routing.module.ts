import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
    loadChildren: () => import('./bootstrap/bootstrap.module').then(m => m.BootstrapModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
