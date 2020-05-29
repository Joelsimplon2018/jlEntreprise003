import { Injectable } from "@angular/core"
import { Component, OnInit } from "@angular/core"
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"

@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  prestataireRegiste(body: any) {
    return this.http.post("http://localhost:3000/prestataireRegister", body, {
      observe: "body"
    })
  }

  getAll() {
    return this.http.get<any[]>("http://localhost:3000/prestataires")
  }
}
