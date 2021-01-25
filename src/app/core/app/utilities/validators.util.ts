import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    public static matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            return !!control.parent &&
            !!control.parent.value &&
            control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
        };
    }

    public static mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.isMatching) {
                return null;
            }

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ isMatching: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    public static birthDateValidation(): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            const currentDate = new Date();
            const controlDate = new Date(control.value);

            if (currentDate.getFullYear() - controlDate.getFullYear() >= 18) {
                return null;
            }

            return { underAge: true };
        };
    }

    public static allowedTypes(types: string[],): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            for (const fileType of types) {
                if (control.value && control.value._fileNames.toLowerCase().includes(fileType)) {
                    return null;
                }
            }

            return { invalidTypes: true };
        };
    }
}
