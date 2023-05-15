import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imagen1: String="";
  @Input() imagen2: String="";
  @Input() imagen3: String="";
  @Input() texto: String="";
  @Input() enlace1: String="#";
  @Input() enlace2: String="#";
  @Input() alternativo: String="";



}
