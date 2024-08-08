import { Component } from '@angular/core';
import { Product } from '../../_models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [
    {
      title: 'Tailored Single Breasted Jacket',
      price: 88,
      img: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/u57872s.jpg',
    },
    {
      title: 'Linen Blend Tie Neck Mini Summer Dress',
      price: 65,
      img: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemZoom/840164s.jpg',
    },
    {
      title: 'Ruffle Sleeve V-Neck Linen Blend Summer Dress',
      price: 72,
      img: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/254215s.jpg',
    },
    {
      title: 'Black Kew Collection Belted Mini Dress',
      price: 44,
      img: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/424560s.jpg',
    },
    {
      title: 'Denim Boy Short',
      price: 38,
      img: 'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/n31662s.jpg',
    },
  ];
}
