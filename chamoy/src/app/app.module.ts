import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { IndexComponent } from './index/index.component';
import { DistribuidoresComponent } from './distribuidores/distribuidores.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
const routes: Routes = [
  { path: 'products', component: ProductsComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'index', component: IndexComponent},
  { path: 'distribuidores', component: DistribuidoresComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', pathMatch: 'full', redirectTo: 'index' }, 


];
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactoComponent,
    PedidosComponent,
    IndexComponent,
    DistribuidoresComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    GoogleMapsModule,
    BrowserModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
