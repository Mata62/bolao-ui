import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  public cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.createFormGroup();
  }

  createFormGroup() {
    return this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      login: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      confirmacaoSenha: ['', Validators.required],
    });
  }

}
