import { AppendComponentService } from '../../../../../core/app/services/append-component.service';
import { Component, OnInit, ViewChild, ElementRef, RendererFactory2, Renderer2, OnDestroy } from '@angular/core';
import { ComponentConfigInterface } from 'src/app/core/app/interfaces/component-config.interface';
import { Subscription } from 'rxjs';
import {
    fadeOutOnLeaveAnimation,
    slideInRightOnEnterAnimation,
} from 'angular-animations';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    animations: [
        slideInRightOnEnterAnimation({ duration: 200 }),
        fadeOutOnLeaveAnimation({ duration: 200 }),
    ]
})
export class AlertComponent implements OnInit, OnDestroy {

    @ViewChild('progressBar', { static: false }) public progressBar: ElementRef;

    public width: number = 0;

    public hovered: boolean = false;

    public subscription: Subscription;

    public progress: any;

    private renderer: Renderer2;

    constructor(
        public config: ComponentConfigInterface,
        private rendererFactory: RendererFactory2,
        private appendCompService: AppendComponentService
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.subscription = this.appendCompService.subscribe(this.onDuplicateEvent.bind(this));
    }

    public ngOnInit(): void {
        this.width = 0;
        this.progress = setInterval(() => {
            if (this.width === 100) {
                this.close();
            }
            if (!this.hovered) {
                this.width += 0.5;
                this.renderer.setStyle(this.progressBar.nativeElement, 'width', this.width + '%');
            }
        }, 25);
    }

    public close(): void {
        clearInterval(this.progress);
        this.appendCompService.remove(this.config.data.title || this.config.data.text);
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
        clearInterval(this.progress);
        this.appendCompService.remove(this.config.data.title || this.config.data.text);
    }

    private setWidth(width: number): void {
        this.width = width;
    }

    private onDuplicateEvent(event: any) {
        this.setWidth(0);
    }
}
