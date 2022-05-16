import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-disaster-record',
  templateUrl: './disaster-record.component.html',
  styleUrls: ['./disaster-record.component.css']
})
export class DisasterRecordComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: null,
      date: null,
      status:null,
      description:null,
      priority: null,
      location:[],
      interaction:null,
      category:null,
      evidence:[]
    });
  }

  submit(data) {
    const uri = 'http://ec2-52-23-227-205.compute-1.amazonaws.com:8080/hackocean/disaster'
    console.log('data');
    console.log(data);
    this.http.post(uri, data).subscribe(
      (result) => {
        console.log('Respuesta exitosa del servidor');
        console.log(result);
      },
      (error) => {
        console.log('Respuesta fallida. Ocurrio un error');
        console.log(error);
      },
      () => console.log('Termino de llamar al servidor')
    )
  }
}
