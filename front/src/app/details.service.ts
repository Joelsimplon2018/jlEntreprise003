import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "../environments/environment"

import { Prestataires } from "../app/models/prestataire.model"
import { Observable } from "rxjs"

const apiUrl = environment.API_URL

@Injectable({
  providedIn: "root"
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getPrestataire(id: number): Observable<Prestataires[]> {
    let url: string = apiUrl + id
    console.log(url)
    return this.http.get<Prestataires[]>(url)
  }
}
