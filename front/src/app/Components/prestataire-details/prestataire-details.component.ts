import { Component, OnInit } from "@angular/core"
import { ServiceService } from "../../service.service"
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http"
import { ActivatedRoute, Router } from "@angular/router"
import { Observable } from "rxjs"
import { Prestataires } from "../../models/prestataire.model"
import { DetailsService } from "../../details.service"

@Component({
  selector: "app-prestataire-details",
  templateUrl: "./prestataire-details.component.html",
  styleUrls: ["./prestataire-details.component.css"]
})
export class PrestataireDetailsComponent implements OnInit {
  prestataire: Prestataires
  prestataires: Prestataires[]
  id
  constructor(public http: HttpClient, private ActivatedRoute: ActivatedRoute, private router: Router, private DetailsService: DetailsService) {}

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params.id
    this.getPrestataires(this.id)
    this.DetailsService.getPrestataire(this.id).subscribe(Prestataires => {
      this.prestataire = this.prestataire
      error => {
        console.log("Erreur", error)
      }
    })
  }
  getPrestataires(id: number) {
    this.DetailsService.getPrestataire(this.id).subscribe(res => (this.prestataires = res))
    error => console.log("Erreur", error)
  }
}
