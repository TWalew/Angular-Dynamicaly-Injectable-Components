import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogInterface } from '../../../../core/app/interfaces/confirm-dialog.interface';
import { ConfirmDialogComponent } from '../../../shared/components/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-ui-confirm-dialog-loader',
    templateUrl: './ui-confirm-dialog.component.html'
})
export class UiConfirmDialogComponent {
    constructor(private dialog: MatDialog) {
    }

    public openConfirmDialog() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '500px',
            data: {
                title: 'Confirm Dialog',
                text: 'Do you confirm this action?',
                confirmButtonText: 'COMMON.CONFIRM',
                withCancelButton: true
            } as ConfirmDialogInterface,
            panelClass: 'logged-in-dialog'
        });

        dialogRef.afterClosed().subscribe(event => {
            if (event === 'action') {

            }

            if (event === 'cancel') {

            }
        });
    }
}
