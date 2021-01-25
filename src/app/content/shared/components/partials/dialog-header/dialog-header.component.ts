import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'dialog-header',
    templateUrl: './dialog-header.component.html'
})
export class DialogHeaderComponent {
    @Input() public headerTitle: string;
    @Input() public icon: string;
    @Input() public dialogRef: MatDialogRef<any>;
    @Input() public data: any;
}
