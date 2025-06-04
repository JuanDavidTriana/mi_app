import { Component } from '@angular/core';
import { RickAndMortyService } from '../../api/rick-and-morty.service';

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  charecters: any[] = [];
  errorMessage: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.charecters = data.results;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });    
  }

  showCharacterDetails(character: any) {
    console.log('Mostrando detalles del personaje:', character.name);
  }
}
