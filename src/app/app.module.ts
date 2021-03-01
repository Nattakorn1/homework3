import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Home } from './home/home';
import { HeaderMenu } from './header-menu/header-menu';
import { Footer } from './footer/footer';
import { Search } from './search/search';
import { FormsModule } from'@angular/forms';
import { TopContent } from './topcontent/topcontent'


@NgModule({
  declarations: [
    AppComponent,
    Home,
    HeaderMenu,
    Footer,
    Search,
    TopContent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
