import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  public data = [
    { title: 'Sunflowers', link: '/note' },
    { title: 'Grocery list',},
    { title: 'Exam dates (April)', },
    { title: 'To Do list for April',}
  ];
  public results = [...this.data];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetailsPage(item: any) {
    this.router.navigate([item.link]);
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.title.toLowerCase().indexOf(query) > -1);
  }
}
