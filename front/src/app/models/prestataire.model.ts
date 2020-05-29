export class Prestataires {
  id?: number
  title: string
  name: string
  imageUrl: string
  email: string
  city: string
  competences: string
  experience: string
  marielles: string
  tarif: string
  telephone: number

  constructor(id: number, title: string, name: string, imageUrl: string, email: string, city: string, competences: string, experience: string, marielles: string, tarif: string, telephone: number) {
    this.id = id
    this.title = title
    this.name = name
    this.imageUrl = imageUrl
    this.email = email
    this.city = city
    this.competences = competences
    this.experience = experience
    this.marielles = marielles
    this.tarif = tarif
    this.telephone = telephone
  }
}
