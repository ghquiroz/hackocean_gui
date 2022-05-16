import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formGroup: FormGroup

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const uri = 'http://ec2-52-23-227-205.compute-1.amazonaws.com:8080/hackocean/disaster'
    this.httpService.get(uri).subscribe(
      (response) => {
        console.log('Respuestas almacenadas');
        console.log(response);
      }
    )
  }

}
