import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainheaderComponent } from './header/mainheader/mainheader.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainheaderComponent,
    FooterComponent,
    HeadComponent,
    FootComponent,
    AsideComponent,
    SectionComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
