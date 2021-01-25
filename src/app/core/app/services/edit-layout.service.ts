import { Injectable } from '@angular/core';
import { EventService } from './event.service';

@Injectable({
    providedIn: 'root'
})
export class EditLayoutService {

    public editable: boolean = false;

    constructor(
        private eventService: EventService
    ) { }

    public get(): boolean {
        return this.editable;
    }

    public set(editable: boolean): void {
        this.editable = editable;
        this.eventService.updateValue('edit-layout');
    }

}
