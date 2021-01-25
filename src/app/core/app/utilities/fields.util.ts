import { FormGroup } from '@angular/forms';

export class FieldsUtil {
    public static disable(fields: string[], form: FormGroup): void {
        for (const field of fields) {
            form.controls[field].disable();
        }
    }

    public static enable(fields: string[], form: FormGroup): void {
        for (const field of fields) {
            form.controls[field].enable();
        }
    }

    public static reset(fields: string[], form: FormGroup): void {
        for (const field of fields) {
            form.controls[field].reset();
        }
    }

    public static fullClear(fields: string[], form: FormGroup): void {
        for (const field of fields) {
            form.controls[field].reset();
            form.controls[field].clearValidators();
            form.controls[field].updateValueAndValidity();
        }
    }
}
