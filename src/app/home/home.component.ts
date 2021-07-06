import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts=[
    {"image":"/assets/threads.png",
    "title":"Introduction to Process(es) and thread(s) ",
    "description":"Details on how threads and processes work in a windows environment."
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
