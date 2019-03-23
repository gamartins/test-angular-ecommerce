import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Post } from 'src/models/post';

import { PostService } from 'src/services/post/post.service';

import { FormComponent } from 'src/components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  list: Array<Post> = [ ]
  dialogRef: MatDialogRef<FormComponent>

  constructor(
    public dialog: MatDialog,
    public postService: PostService,
    ) { }

  ngOnInit() {
    this.postService.get()
      .subscribe(data => this.list = data)
  }

  openForm(item: Post = null) {
    this.dialogRef = this.dialog.open(FormComponent)
    this.dialogRef.afterClosed()
      .subscribe((data: Post) => this.addItem(data))
  }

  addItem(data: Post) {
    if(data)
      this.postService.save(data).subscribe(data => this.list.push(data))
  }

  editItem(index: number) {
    this.dialogRef = this.dialog.open(FormComponent, { data: this.list[index] })
    this.dialogRef.afterClosed().subscribe((data: Post) => {
      this.postService.save(data).subscribe(data => this.list[index] = data)
    })
  }

  removeItem(index: number) {
    const itemId = this.list[index].id
    
    this.list.splice(index, 1)
    this.postService.delete(itemId)
  }
}
