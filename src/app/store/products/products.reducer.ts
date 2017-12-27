import { Action } from '@ngrx/store';
import * as productsActions from './products.actions';

export interface Product {
  title: string;
  subtitle: string;
  logoUrl: string;
  imageUrl: string;
  description: string;
  price: number;
}

export interface ProductsState {
  list: Product[];
}

const initialState: ProductsState = {
  list: [
    {
      title: 'Shiba Inu',
      price: 19,
      subtitle: 'Dog Breed',
      logoUrl: 'http://material.angular.io/assets/img/examples/shiba1.jpg',
      imageUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
      title: 'Shiba Inu',
      price: 15,
      subtitle: 'Dog Breed',
      logoUrl: 'http://material.angular.io/assets/img/examples/shiba1.jpg',
      imageUrl: 'http://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    }
  ]
};

export function productsReducer(state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
