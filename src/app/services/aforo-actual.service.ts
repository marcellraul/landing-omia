import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root',
})
export class AforoActualService {
  public headers: any = {};
  public urlService = environment.urlService;

  constructor(public _http: HttpClient) {
    this.headers = this.headersCredential();
  }

  public headersCredential() {
    var myHeader = new Headers();
    var options;

    myHeader.append('application', 'json');
    options = { headers: myHeader };

    return options;
  }


  public getAforoActual(
    rol,
    country,
    location,
    camera,
    instance,
    clase,
    analytics_id
  ): Observable<any> { 
    return this._http
        .get(this.urlService+'/ApiAnalytic/GetDataResumenocupacionActual/?rol_id='+rol+'&country_id='+country+'&location_id='+location+'&camera_id='+camera+'&instance='+instance+'&clase='+clase+'&analytic_id='+analytics_id, this.headers)
        .pipe(
          map(data => {
            //return data;
            return {
              success: true,
              data: [
                {
                  signal: 2,
                  max: 0.8,
                  min: 0.2,
                  prom: 0.4,
                  capacidad: 20,
                  disponible: 16
                }
              ]
            }
          })
        );
  }

}
