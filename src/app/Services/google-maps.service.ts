import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private apiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';
  private apiKey = 'YOUR_API_KEY'; // Replace with your API key

  constructor(private http: HttpClient) {}

  getPlaceReviews(placeId: string): Observable<any> {
    const url = `${this.apiUrl}?place_id=${placeId}&fields=reviews&key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
