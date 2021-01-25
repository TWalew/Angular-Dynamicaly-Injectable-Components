import { LoadingService } from 'src/app/core/app/services/loading.service';

import { Component, OnInit } from '@angular/core';
import { TableViewTestComponent } from 'src/app/content/ui-kit/custom-components/ui-card-table/demo-components/table-view-test/table-view-test.component';
import { CardViewTestComponent } from 'src/app/content/ui-kit/custom-components/ui-card-table/demo-components/card-view-test/card-view-test/card-view-test.component';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ui-card-table',
  templateUrl: './ui-card-table.component.html',
})
export class UiCardTableComponent implements OnInit {
  // Font Awesome Icons
  public faArrowLeft = faArrowLeft;

  public tableData: any;
  public tableView: any = TableViewTestComponent;
  public cardView: any = CardViewTestComponent;

  constructor(private loadingService: LoadingService) {}

  public ngOnInit(): void {
    this.loadingService.start('ui-kit-table-demo');
    const ELEMENT_DATA = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
      { position: 21, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 22, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 23, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 24, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 25, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 26, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 27, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 28, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 29, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 30, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 31, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 32, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 33, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 34, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 35, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 36, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 37, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 38, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 39, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 40, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 41, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 42, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 43, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 44, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 45, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 46, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 47, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 48, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 49, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 50, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 51, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 52, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 53, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 54, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 55, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 56, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 57, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 58, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 59, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 60, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 61, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 62, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 63, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 64, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 65, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 66, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 67, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 68, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 69, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 70, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 71, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 72, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 73, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 74, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 75, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 76, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 77, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 78, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 79, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 80, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 81, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 82, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 83, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 84, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 85, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 86, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 87, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 88, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 89, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 90, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 91, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 92, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 93, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 94, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 95, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 96, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 97, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 98, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 99, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 100, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 101, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 102, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 103, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 104, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 105, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 106, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 107, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 108, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 109, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 110, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 111, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 112, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 113, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 114, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 115, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 116, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 117, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 118, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 119, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 120, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
      { position: 121, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 122, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 123, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 124, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 125, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 126, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 127, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 128, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 129, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 130, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 131, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 132, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 133, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 134, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 135, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 136, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 137, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 138, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 139, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 140, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 141, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 142, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 143, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 144, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 145, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 146, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 147, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 148, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 149, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 150, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 151, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 152, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 153, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 154, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 155, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 156, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 157, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 158, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 159, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 160, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 161, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 162, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 163, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 164, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 165, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 166, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 167, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 168, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 169, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 170, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 171, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 172, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 173, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 174, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 175, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 176, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 177, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 178, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 179, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 180, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 181, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 182, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 183, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 184, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 185, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 186, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 187, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 188, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 189, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 190, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 191, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 192, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 193, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 194, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 195, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 196, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 197, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 198, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 199, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 200, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    ];
    this.tableData = ELEMENT_DATA;
    setTimeout(() => {
      this.loadingService.stop('ui-kit-table-demo', this.tableData, null, null);
    }, 1000);
  }
}