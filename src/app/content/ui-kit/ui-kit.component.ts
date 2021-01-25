import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ui-kit',
  templateUrl: './ui-kit.component.html',
})
export class UiKitComponent implements OnInit {
  public route: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.pipe(filter((e: NavigationEnd) => e instanceof NavigationEnd)).subscribe(route => {
      this.route = route.url;
    });
  }

  public ngOnInit(): void {
    this.route = this.router.url;
  }

  public back(): void {
    this.router.navigate(['/']);
  }
}
