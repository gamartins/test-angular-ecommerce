import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Post } from 'src/models/post';

import { FormComponent } from 'src/components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: Array<Post> = [ ]
  dialogRef: MatDialogRef<FormComponent>

  constructor(public dialog: MatDialog) { }

  openForm(item: Post = null) {
    this.dialogRef = this.dialog.open(FormComponent)
    this.dialogRef.afterClosed()
      .subscribe((data: Post) => this.addItem(data))
  }

  addItem(data: Post) {
    if(data)
      this.list.push(data)
  }

  editItem(index: number) {
    this.dialogRef = this.dialog.open(FormComponent, { data: this.list[index] })
    this.dialogRef.afterClosed()
      .subscribe((data: Post) => this.list[index] = data)
  }

  removeItem(index: number) {
    this.list.splice(index, 1)
  }
}
