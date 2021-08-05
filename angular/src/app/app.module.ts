import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './page/common/header/header.component';
import {MainComponent} from './page/main/main.component';
import {FooterComponent} from './page/common/footer/footer.component';
import {SwiperModule} from 'swiper/angular';
import {ProjectComponent} from './page/project/project.component';
import {IntroduceComponent} from './page/introduce/introduce.component';
import {RegIntroduceComponent} from './page/reg/reg-introduce/reg-introduce.component';
import {FormsModule} from '@angular/forms';
import {WebviewComponent} from './page/modal/webview/webview.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HistoryComponent} from './page/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProjectComponent,
    IntroduceComponent,
    RegIntroduceComponent,
    WebviewComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WebviewComponent]
})
export class AppModule {
}
