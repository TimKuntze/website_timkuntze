import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MenueComponent } from './menue/menue.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogContactComponent } from './dialog-contact/dialog-contact.component';
import { RouterModule, Router } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { StartScreenComponent } from './start-screen/start-screen.component';









@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    MenueComponent,
    ImprintComponent,
    DataProtectionComponent,
    PortfolioComponent,
    FooterComponent,
    ContactComponent,
    DialogContactComponent,
    AppComponent,
    SlideshowComponent,
    ImprintComponent,
    DataProtectionComponent,
    FooterComponent,
    ContactComponent,
    DialogContactComponent,
    AboutMeComponent,
    StartScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
