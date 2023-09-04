import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { PolicyComponent } from './policy/policy.component';
import { PricingPlaneComponent } from './pricing-plane/pricing-plane.component';
import { BillingComponent } from './Component/billing/billing.component';
import { ContentComponent } from './Component/content/content.component';
import { FAQComponent } from './faq/faq.component';
import { AcadomyComponent } from './acadomy/acadomy.component';

const routes: Routes = [
  {path:'#',component:ContentComponent},
  {path:'Billing',component:BillingComponent},
  {path:'pricing',component:PricingPlaneComponent},
   { path:'termandcondition', component:TermAndConditionComponent },
{path:'Policy',component:PolicyComponent},
{path:'FAQ',component:FAQComponent},
{path:'ACCademy',component:AcadomyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
