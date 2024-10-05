import { Component } from '@angular/core';

@Component({
  selector: 'app-languagelist',
  templateUrl: './languagelist.component.html',
  styleUrl: './languagelist.component.css',
})
export class LanguagelistComponent {
  languageList: { [key: string]: string } = {
    Italian: 'Italy',
    Portuguese: 'Brazil',
    Arabic: 'Egypt',
    Japanese: 'Japan',
    Spanish: 'Spain',
    Vietnamese: 'Vietnam',
    Filipino: 'Philippines',
  };

  languages: string[] = [];
  search = '';

  filterLanguage() {
    if (this.search.trim() === '') {
      this.languages = [];
      return;
    }

    this.languages = Object.keys(this.languageList).filter((lang) =>
      this.languageList[lang].toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
