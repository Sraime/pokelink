import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanqueRoutingModule } from './banque-routing.module';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTooltipModule, MatChipsModule, MatAutocompleteModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AuthInterceptor } from '../auth/auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BankFormComponent } from './components/bank-form/bank-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankPageComponent } from './components/bank-page/bank-page.component';
import { HttpOptionsBuilder } from '../auth/libs/HttpOptionsBuilder/HttpOptionsBuilder';
import { BankDetailComponent } from './components/bank-detail/bank-detail.component';

@NgModule({
  declarations: [BankListComponent, BankFormComponent, BankPageComponent, BankDetailComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BanqueRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    HttpOptionsBuilder
  ],
  entryComponents: [BankDetailComponent]
})
export class BanqueModule { }
