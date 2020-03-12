import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OnlineDataService {
  constructor() {}

  data = {
    dB: "Spin",
    queries: [
      {
        query: "select drzaveid, naziv from drzave",
        commandtype: "text",
        tablename: "drzave"
      }
    ]
  };

  getSpinData(): Promise<Response> {
    const url = "http://213.202.75.115:40080/gen/api/data";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlNwaW4iLCJuYmYiOjE1NTE2OTA0MzAsImV4cCI6MTU4MzMxMjc4OCwiaWF0IjoxNTUxNjkwNDMwLCJpc3MiOiJTcGluIn0.0ZYOjrkF-biXdrH-78rzH_jqsYlnFjznLtuWzZVTO-Y"
      },
      body: JSON.stringify(this.data)
    });
  }

  getNews(): Promise<Response> {
    const url = "https://my-json-server.typicode.com/majkprpik/jsontest/news";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getWeather(): Promise<Response> {
    const url = "https://localhost:44385/weatherforecast";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getPokemon(): Promise<Response> {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto/";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getChuck(): Promise<Response> {
    const url = "https://api.chucknorris.io/jokes/random";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getLOTR(): Promise<Response> {
    const url =
      "https://the-one-api.herokuapp.com/v1/book/5cf5805fb53e011a64671582";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getReqRes(): Promise<Response> {
    const url = "https://reqres.in/api/users";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  putReqRes(id, name): Promise<Response> {
    const url = "https://reqres.in/api/users/" + id;
    return fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
      })
    });
  }

  getAPIandre(): Promise<Response> {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
