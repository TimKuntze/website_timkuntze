import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { StartScreenComponent } from './start-screen/start-screen.component';



const routes: Routes = [

  { path: '', component: StartScreenComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'data-protection', component: DataProtectionComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }