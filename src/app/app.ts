import { Component, signal } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe } from '@angular/common';
import { TruncatePipe } from './truncate-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    TruncatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  fullName = 'Борис Ярина Миколаївна';

  phone = '+380965180406';

  email = 'borisarina74@gmail.com';

  city = 'Львів';

  jobTitle = 'Frontend Developer';

  description = `
    Початківець у вивченні мов програмування 
  `;

  birthDate = new Date(2006, 4, 18);

  yearsOfExperience = signal(1);

  addYear() {
    this.yearsOfExperience.update(years => years + 1);
  }

  decreaseYear() {
    this.yearsOfExperience.update(years =>
      years > 0 ? years - 1 : 0
    );
  }
}