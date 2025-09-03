import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

const headers = new HttpHeaders({
  'X-Api-Key': 'XR2F4/W5lwlGX7AWdeojFQ==2CwrS4A1BvB5yElr',
});

@Injectable({
  providedIn: 'root',
})
export class GeneratePhotoService {
  constructor(private http: HttpClient) {}

  getRandomImage(): Observable<string> {
    return this.http
      .get('https://api.api-ninjas.com/v1/randomimage', {
        headers,
        responseType: 'text',
      })
      .pipe(map((base64Data) => 'data:image/jpeg;base64,' + base64Data));
  }
}
