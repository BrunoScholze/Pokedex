import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PoFieldModule, PoModule, PoPageModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PokedexListModule } from './pokedex-list/pokedex-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexListModule,
    BrowserAnimationsModule,
    FormsModule,
    PoPageModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
