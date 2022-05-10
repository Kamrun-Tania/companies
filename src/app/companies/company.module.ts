import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list.component';
import { CompanyDetailComponent } from './company-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { CompanyDetailGuard } from './company-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: 'companies', component: CompanyListComponent },
      {
        path: 'companies/:id',
        canActivate: [CompanyDetailGuard],
        component: CompanyDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class CompanyModule { }
