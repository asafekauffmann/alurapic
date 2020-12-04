import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    photos = [
      {
        url:
            "https://cdn.pixabay.com/photo/2016/09/10/19/56/lions-1660044_1280.jpg", 
            description: "Leao"
      },

      {
        url: "https://statig0.akamaized.net/bancodeimagens/dg/qi/e6/dgqie66ooeyri4whdebd9oqh9.jpg",  
        description: "Leoa"
      }
    ];

}
