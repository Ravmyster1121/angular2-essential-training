import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  onMediaItemDelete(mediaItem) {
    console.log("Deleting media item");
  }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "SciFi",
    year: 2010,
    watchedOn: null,
    isFavorite: false
  }
}
