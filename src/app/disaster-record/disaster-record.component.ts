import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-disaster-record',
  templateUrl: './disaster-record.component.html',
  styleUrls: ['./disaster-record.component.css']
})
export class DisasterRecordComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

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
    console.log('Enviar formulario');
    console.log(data);
  }
}
