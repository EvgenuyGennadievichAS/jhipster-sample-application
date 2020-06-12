import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ApiV2SharedModule } from 'app/shared/shared.module';
import { ApiV2CoreModule } from 'app/core/core.module';
import { ApiV2AppRoutingModule } from './app-routing.module';
import { ApiV2HomeModule } from './home/home.module';
import { ApiV2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ApiV2SharedModule,
    ApiV2CoreModule,
    ApiV2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ApiV2EntityModule,
    ApiV2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ApiV2AppModule {}
