import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livros-new',
  templateUrl: './livros-new.component.html',
  styleUrls: ['./livros-new.component.css']
})
export class LivrosNewComponent implements OnInit {

  formGroup : FormGroup;
  msg : string = null;

  constructor(
    private formBuilder : FormBuilder)  {
      this.iniciarForm();
    }

  ngOnInit(): void {
  }

  iniciarForm(){
    this.formGroup= this.formBuilder.group({
      nome : ['',[Validators.required, Validators.minLength(5),Validators.maxLength(120)] ],
      telefone: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(120)]]
    })
  }

  onSubmit(){
  
    
  }

}
