import { Directive, HostBinding } from '@angular/core';
import { directiveDef } from '@angular/core/src/view';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
}