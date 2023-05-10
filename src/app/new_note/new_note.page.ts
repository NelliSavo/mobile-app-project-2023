import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new_note',
  templateUrl: './new_note.page.html',
  styleUrls: ['./new_note.page.scss'],
})
export class NewNotePage implements OnInit {
//    (This was supposed to be feature on the heart icon that it will change the color when clicked)
//    heartIcon = 'heart-outline'; 
//    iconColor = 'black';
constructor() { }
//    changeIconColor() {
//      const heartIconElement = document.querySelector('#heart-icon') as HTMLIonIconElement;
//      if (heartIconElement) {
//        if (this.iconColor === 'black') {
//          heartIconElement.color = 'black';
//          this.iconColor = 'black';
//          this.heartIcon = 'heart';
//        } else {
//          heartIconElement.color = 'black';
//          this.iconColor = 'black';
//          this.heartIcon = 'heart-outline';
//        }
//     }
//    } 
    ngOnInit() {}
}