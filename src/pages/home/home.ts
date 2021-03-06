import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CountriesService} from "../../providers/rest/countries.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, private rest: CountriesService) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.rest.getCountries().subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any> error
    );
  }

}
