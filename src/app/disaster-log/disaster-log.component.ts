import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-disaster-log',
  templateUrl: './disaster-log.component.html',
  styleUrls: ['./disaster-log.component.css']
})
export class DisasterLogComponent implements OnInit {
  disasters = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    const uri = 'http://ec2-52-23-227-205.compute-1.amazonaws.com:8080/hackocean/disaster'
    this.http.get(uri).subscribe(
      (response: any) => {
        console.log('Respuestas almacenadas');
        console.log(response);
        this.disasters = response;
      }
    )
  }

}
