import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css'],
})
export class DeleteDoctorComponent implements OnInit {
  doctorName!: string;
  title!: string;
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<DeleteDoctorComponent>
  ) {
    this.doctorName = data.doctorName;
    this.title = data.title;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  delete() {
    const deleteDoctor = true;
    this.dialogRef.close(deleteDoctor);
  }
}
