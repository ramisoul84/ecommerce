import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, ProductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
