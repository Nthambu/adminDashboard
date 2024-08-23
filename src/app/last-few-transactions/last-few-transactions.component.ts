import { NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss'] // Corrected the property name
})
export class LastFewTransactionsComponent implements OnInit {
  transactions = [
    {
      id: 1,
      title: 'shoes',
      price: '$33',
      shop: 'jumia',
      location: 'usa',
      status: 'shipped',
      imgSrc: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/66/6793171/1.jpg?6305'
    },
    {
      id: 2,
      title: 'cars',
      price: '$2233',
      shop: 'tech pro',
      location: 'china',
      status: 'confirmed',
      imgSrc: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Smartphones',
      price: '$193',
      shop: 'kilimall',
      location: 'UK',
      status: 'pending',
      imgSrc: 'https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/37/2388562/1.jpg?8582'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here
  }
}
