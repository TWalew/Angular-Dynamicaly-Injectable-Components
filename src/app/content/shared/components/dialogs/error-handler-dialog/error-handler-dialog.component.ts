import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorHandlerDialogInterface } from '../../../../../core/app/interfaces/error-handler-dialog.interface';

@Component({
    selector: 'app-error-handler-dialog',
    templateUrl: './error-handler-dialog.component.html',
})
export class ErrorHandlerDialogComponent {

    constructor(public dialogRef: MatDialogRef<ErrorHandlerDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: ErrorHandlerDialogInterface) {
    }

    public onOkClick(): void {
        this.dialogRef.close();
    }

}
