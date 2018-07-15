import {CountriesService} from './countries.service';
import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NavController} from "ionic-angular";
import {NavMock} from "../../../test-config/mocks-ionic";

const dummyCountries: any = require('../../assets/mockdata/countries.json');


describe('Service: CountriesService', () => {

  let injector: TestBed;
  let service: CountriesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CountriesService
      ]
    });

    injector = getTestBed();
    service = injector.get(CountriesService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return a list of countries', () => {
    service.getCountries().subscribe(countries => {
      expect(countries).toEqual(dummyCountries);
    });

    const req = httpMock.expectOne(service.API_URL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyCountries);

  });

  // TODO: Test error handling
  // it('should execute handleError function on status different of 200', () => {
  //   spyOn(service as any, 'handleError');
  //
  //   service.getCountries().subscribe(() => {}, error => {
  //     expect(service['handleError']).toHaveBeenCalled();
  //   });
  //
  //   const req = httpMock.expectOne(service.API_URL);
  //   req.flush(null, { status: 404, statusText: 'Error' });
  // });
});
