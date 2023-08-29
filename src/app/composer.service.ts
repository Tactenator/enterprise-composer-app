import { Injectable } from '@angular/core';
import { IComposer } from './composer-interface';
import { Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Pyotr Tchaikovsky", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Nobuo Umetasu", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Michael Salvatori", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Martin O' Donnell", genre: "Classical"
      }
    ]
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers)
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if(composer.composerId === composerId){
        return composer;
      }
    }
    return;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > - 1)))
  }
}
