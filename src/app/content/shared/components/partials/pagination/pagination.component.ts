import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input() public data: any[];
    @Input() public totalItems: number = null;
    @Input() public itemsPerPage: number = 10;
    @Input() public currentPage: number = 1;

    @Output() public pageChange: EventEmitter<any> = new EventEmitter<any>();

    // Font Awesome Icons
    public faAngleLeft = faAngleLeft;
    public faAngleRight = faAngleRight;

    public pagesCount: number = 0;
    public pagesArray = [];   // Array type captured in a variable

    public ngOnInit(): void {
        if (!this.totalItems) {
            this.totalItems = this.data.length;
        }

        this.calculatePages();
    }


    public ngOnChanges(changes): void {
        if (!this.totalItems) {
            this.totalItems = this.data.length;
        }

        if (changes.totalItems && changes.totalItems.previousValue !== changes.totalItems.currentValue) {
            this.currentPage = 1;
            this.calculatePages();
        }
    }

    public calculatePages(): void {
        this.pagesCount = Math.ceil(this.totalItems / this.itemsPerPage);
        this.generatePaginatorPagesArray();
    }

    public changePage(data: any): void {
        if (data) {
            if (data.page === 0 || data.page === this.pagesCount + 1 || data.page === this.currentPage) {
                return;
            }

            data.show = true;
            data.dots = false;

            if (this.pagesCount > 4 && data.page >= 3 && data.page <= this.pagesCount - 2) {
                this.pagesArray[data.page].show = true;
                this.pagesArray[data.page - 2].show = true;
                const previousPage = this.pagesArray[data.page - 3];
                const nextPage = this.pagesArray[data.page + 1];

                if (previousPage.page > 2) {
                    previousPage.show = false;
                }

                if (nextPage.page <= this.pagesCount - 2) {
                    nextPage.show = false;
                }
            }

            if (data.page < 3 && this.pagesCount > 4 || data.page > this.pagesCount - 2) {
                this.cleanPaginatorPages(data.page);
            }

            this.pageChange.emit(data.page);
        }
    }

    private cleanPaginatorPages(lastClickedPage: number): void {
        for (let i = 2; i < this.pagesCount - 2; i++) {
            this.pagesArray[i].show = false;

            if (lastClickedPage <= 2) {
                this.pagesArray[2].dots = true;
                this.pagesArray[this.pagesCount - 3].dots = false;
            }

            if (lastClickedPage >= this.pagesCount - 2) {
                this.pagesArray[this.pagesCount - 3].dots = true;
                if (this.pagesCount !== 5) {
                    this.pagesArray[2].dots = false;
                }
            }
        }
    }

    private generatePaginatorPagesArray(): void {
        this.pagesArray = [];

        for (let i = 1; i <= this.pagesCount; i++) {
            this.pagesArray.push(
                {
                    page: i,
                    show: false,
                    dots: false
                }
            );

            if (this.pagesCount > 4 && i === 3) {
                this.pagesArray[i - 1].dots = true;
            }

            if (i > this.pagesCount - 2 || i <= 2) {
                this.pagesArray[i - 1].show = true;
            }
        }
    }
}
