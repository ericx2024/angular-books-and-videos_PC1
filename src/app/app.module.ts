import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ArticleListComponent } from './elearning/components/article-list/article-list.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigationBarComponent } from './public/components/side-navigation-bar/side-navigation-bar.component';
import { SourceListItemComponent } from './elearning/components/source-list-item/source-list-item.component';
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {HttpClientModule} from "@angular/common/http";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    FooterContentComponent,
    SideNavigationBarComponent,
    SourceListItemComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatIconButton,
    MatIcon,
    MatCardImage
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
