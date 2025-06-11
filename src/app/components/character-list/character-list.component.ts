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
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters().subscribe({
      next: (data) => {
        this.charecters = data.results;
      },
      error: (error) => {
        this.errorMessage = error.message;
      }
    });    
  }

<<<<<<< HEAD
  showCharacterDetails(character: any): void {
    // Aquí puedes implementar la lógica para mostrar más detalles
    // Por ejemplo, abrir un modal o navegar a una página de detalles
    console.log('Mostrando detalles de:', character.name);
=======
  showCharacterDetails(character: any) {
    console.log('Mostrando detalles del personaje:', character.name);
>>>>>>> 50e55f725a5636754bbf2754fde4ac22c3e4d092
  }
}
