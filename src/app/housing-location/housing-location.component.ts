import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <!-- housing location viene de el @input de la interface pero fijate que es string
    le estoy apsando property binding pra decirle es una propiedad real de la clase compoente
    {{ es interpolacion para mostrar strings}}
   -->
    <img class="listing-photo" [src] = "housingLocation.photo"> 
    <h2 class="listing-heading">{{housingLocation.name}}</h2>
    <p class="listing-location">{{housingLocation.state}}</p>
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation! : HousingLocation;
  //! es non null asertion operator wont be null or idifined
  // <!-- alt="house exterior of {{housingLocation.name}}
 
}
