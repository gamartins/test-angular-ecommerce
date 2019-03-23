import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Post,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
    ) { }

  ngOnInit() {
    this.initForm()
    this.initFormData()
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [ ],
      name: [ '', Validators.required ],
      description: [ '', Validators.required ],
      author: [ '', Validators.required ],
    })
  }

  initFormData() {
    if(!this.data)
      return

    this.form.get('id').setValue(this.data.id)
    this.form.get('name').setValue(this.data.name)
    this.form.get('description').setValue(this.data.description)
    this.form.get('author').setValue(this.data.author)
  }

  save() {
    this.dialogRef.close(this.form.value)
  }

  cancel() {
    this.form.reset()
    this.dialogRef.close()
  }

}
