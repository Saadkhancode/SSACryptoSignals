import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent {
  selectedCountry: string = 'USA';
  searchText: string = '';
  countries: string[] = ['USA', 'Canada', 'UK', 'Australia'];
  cities: { [country: string]: string[] } = {
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'UK': ['London', 'Manchester', 'Birmingham'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane']
  };


  filteredCities: string[] = this.cities[this.selectedCountry];

  filterCities() {
    this.filteredCities = this.cities[this.selectedCountry]
      .filter(city => city.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
