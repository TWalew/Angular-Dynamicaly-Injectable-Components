import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogInterface } from '../../../../../core/app/interfaces/confirm-dialog.interface';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogInterface,
    ) { }

    public onCancel(): void {
        this.dialogRef.close();
    }

    public onConfirm(): void {
        this.dialogRef.close('action');
    }
}
