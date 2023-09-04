import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { ContentComponent } from './Component/content/content.component';
// import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';
import { PricingPlaneComponent } from './pricing-plane/pricing-plane.component';
import { FooterComponent } from './footer/footer.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PolicyComponent } from './policy/policy.component';
import { BillingComponent } from './Component/billing/billing.component';
import { FAQComponent } from './faq/faq.component';
import { AcadomyComponent } from './acadomy/acadomy.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
//
    PricingPlaneComponent,
    FooterComponent,
    TermAndConditionComponent,
    PolicyComponent,
    BillingComponent,
    FAQComponent,
    AcadomyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
