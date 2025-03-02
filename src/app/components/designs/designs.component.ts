import { Component } from '@angular/core';

@Component({
  selector: 'app-designs',
  templateUrl: './designs.component.html',
  styleUrls: ['./designs.component.scss']
})
export class DesignsComponent {
  designs = [
    {
      src: '../../../assets/content images/s-l1200.jpg',
      alt: 'Bridal Blouse Sketch',
      title: 'Bridal Blouse Design',
      description: 'Intricate bridal blouse sketch with hand embroidery details.'
    },
    {
      src: '../../../assets/content images/s-l1200.jpg',
      alt: 'Embroidery Pattern',
      title: 'Hand Embroidery Pattern',
      description: 'A beautiful handcrafted embroidery pattern with floral motifs.'
    },
    {
      src: '../../../assets/content images/s-l1200.jpg',
      alt: 'Custom Dress Concept',
      title: 'Custom Dress Concept',
      description: 'A stylish modern dress concept with elegant fabric selection.'
    }
  ];

  requestCustomDesign() {
    console.log("request custom design");

  }
}
