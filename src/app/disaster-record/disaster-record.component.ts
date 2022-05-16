import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpService} from "../http.service";
import {ActivatedRoute, Params} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-disaster-record',
  templateUrl: './disaster-record.component.html',
  styleUrls: ['./disaster-record.component.css']
})
export class DisasterRecordComponent implements OnInit {
  form: FormGroup;
  durationInSeconds = 10;

  constructor(private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private activatedRoute: ActivatedRoute,
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

    this.loadObjectData();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(OperationCompletedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  loadObjectData() {
     // Load the element by ID from the api
  }

  submit(data) {
    const uri = 'http://ec2-52-23-227-205.compute-1.amazonaws.com:8080/hackocean/disaster'
    this.http.post(uri, data).subscribe(
      (result) => {
        this.openSnackBar();
      },
      (error) => {
        console.log('Respuesta fallida. Ocurrio un error');
        console.log(error);
      },
      () => console.log('Termino de llamar al servidor')
    )
  }
}


@Component({
  selector: 'app-operation-completed',
  templateUrl: 'operation-completed.html',
  styles: [
    `
    .example-pizza-party {
      color: white;
    }
  `,
  ],
})
export class OperationCompletedComponent {}

