import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialog, MatDialogModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from '@angular/material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { PostService } from 'src/services/post/post.service';

import { CardComponent } from '../components/card/card.component';
import { FormComponent } from '../components/form/form.component';

import { AppComponent } from './app.component';

import { BackEndMock } from 'src/util/backend-mock';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  entryComponents: [
    FormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackEndMock, {
      post204: false,
      put204: false,
    }),
    FlexLayoutModule,

    // AngularMaterial Modules
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    MatDialog,
    PostService,
    { provide: MAT_DIALOG_DATA, useValue: null },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
