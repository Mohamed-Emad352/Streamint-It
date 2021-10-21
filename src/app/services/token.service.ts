import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TokenResponse } from '../models/tokenResponce.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}

  generateToken(role: string) {
    return this.http.get<TokenResponse>(environment.APIURL, {
      params: { role: role },
    });
  }
}
