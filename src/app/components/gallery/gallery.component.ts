import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images = [
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Bridal Blouse Design' },
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Elegant Bridal Blouse' },
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Handcrafted Embroidery' },
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Gold Embroidery Design' },
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Custom Dressmaking' },
    { src: '../../../assets/content images/s-l1200.jpg', alt: 'Fashion Show Winner Dress' }
  ];

  selectedImage: string | null = null;

  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeModal() {
    this.selectedImage = null;
  }
}
