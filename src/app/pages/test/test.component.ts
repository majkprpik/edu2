import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { OnlineDataService } from "../../services/online-data.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  /**
   *
   */
  constructor(
    private dataService: DataService,
    private OnlineDataService: OnlineDataService
  ) {}
  // string interpolation
  PRIMJER_STRING_INTERPOLATION = "Primjer string interpolation";

  PRIMJER_STRING_INTERPOLATION2 = {
    header: "Header",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officia officiis tenetur est. Voluptatem, vero? Eveniet assumenda fugiat libero illo quod commodi officiis quas facilis corrupti neque? Delectus, omnis eum?",
    button: "Klik1"
  };
  // string interpolation

  // property binding
  PRIMJER_PROPERTY_BINDING_SA_VARIJABLOM =
    "Primjer property binding sa variablom";

  LINK = "https://www.google.com/";

  INPUT_TEXT_PROPERTY_BINDING = "Property binding";

  INPUT_CHECKBOX_PROPERTY_BINDING = true;
  // property binding

  // event binding
  klik3() {
    console.log("Klik3!!!");
  }

  klik4(event) {
    console.log(event);
  }

  pisanje(unos) {
    console.log("Zadnje slovo:" + unos.data);
    console.log("Cijeli tekst iz inputa: " + unos.target.value);
  }
  // event binding

  //two-way databidnin
  INPUT_TEXT_TWO_WAY_DATABINDING = "Two-way databinding";

  INPUT_CHECKBOX_TWO_WAY_DATABINDING = true;
  //two-way databidning

  // child component
  parametarZaChildKomponentu: string = "Test";

  vrijednostIzChildComponente: number;

  eventIzKomponente(event) {
    this.vrijednostIzChildComponente = event;
  }
  // child component

  // directive
  prikazi: boolean = true;

  prikazi_sakrij() {
    this.prikazi = !this.prikazi;
  }

  listaVoca = ["jabuka", "kivi", "breskva", "lubenica", "kruska"];

  podebljan_tekst: boolean = false;

  podebljan() {
    this.podebljan_tekst = true;
  }

  normalan() {
    this.podebljan_tekst = false;
  }

  stil: number = 0;

  postavi_stil(n) {
    this.stil = n;
  }

  prikazanoPovrce = "kelj";
  case1 = "salata";
  case2 = "cikla";
  case3 = "kelj";
  case6 = 3;

  ngIfDrugaSintaksa = true;

  klik5() {
    this.ngIfDrugaSintaksa = !this.ngIfDrugaSintaksa;
  }

  highlightColorForDirectiveWithProperty = "gold";

  highlightColorForDirectiveWithPropertyDynamic = "blue";

  ngIfNasaDirectiva = true;

  klik6() {
    this.ngIfNasaDirectiva = !this.ngIfNasaDirectiva;
  }
  // directive

  // services
  continents = [];
  drzave = [];
  news = [];
  pokemon;
  chuck;
  lotr;
  usersReqRes = [];
  ngOnInit() {
    this.continents = this.dataService.getContinents();
    this.OnlineDataService.getSpinData()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.drzave = result.drzave;
      })
      .catch(err => {
        console.log(err);
      });
    this.OnlineDataService.getNews()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.news = result;
      })
      .catch(err => {
        console.log(err);
      });
    this.OnlineDataService.getPokemon()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.pokemon = result;
      })
      .catch(err => {
        console.log(err);
      });
    this.OnlineDataService.getChuck()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.chuck = result;
      })
      .catch(err => {
        console.log(err);
      });
    this.OnlineDataService.getLOTR()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.lotr = result;
      })
      .catch(err => {
        console.log(err);
      });
    this.OnlineDataService.getReqRes()
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.usersReqRes = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  // services
}
