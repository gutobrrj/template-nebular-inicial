import { withXsrfConfiguration } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

//import { ControlErrorComponent } from '@src/app/shared/helpers/control-error/control-error.component';
import { ToastrService } from 'ngx-toastr';
import { ControlErrorComponent } from '@src/app/services/utils/control-error.component';

//const COMPONENTS = [ControlErrorComponent];
const NB_MODULES = [NbLayoutModule, NbCardModule, NbIconModule, NbInputModule, NbButtonModule, NbEvaIconsModule];

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, ...NB_MODULES, ControlErrorComponent],
	providers: [],
	templateUrl: './login.component.html'
})

export class LoginComponent {

	// Declara um FormGroup de nome loginForm
	loginForm!: FormGroup; 

	// Cria o construtor
	constructor(
		//private loginService: LoginService, //Define o service que fará a comunicação com o backend no construtor.
		private  toastr : ToastrService	//Define a biblioteca que será utilizada para exibir o toast(modal) no construtor.
	) {			

		// Instancia um FormGroup na mariável loginForm criada
		this.loginForm = new FormGroup({	

			// Insere os campos(inputs que terão dentro do formulário)
			// Cria as variáveis Username e Password, que serão do tipo FormControl, por ser um Formulario Reativo e que serão assossiadas ao input do HTML
			username: new FormControl('', [Validators.required, Validators.minLength(3)]), 	// Cria a variável username que iniciará vazia e terá um Validador com a quantidade mínima de 3 caracteres
			password: new FormControl('', [Validators.required, Validators.minLength(6)])  // Cria a variável password que iniciará vazia e terá um Validador com a quantidade mínima de 6 caracteres

		})
	}

	// Função que será chamada quando o botão de login for clicado
	onSubmit() {
		if (this.loginForm.valid) {
		  console.log('Dados do formulário:', this.loginForm.value);
		  
			//this.loginService.efetuarLogin(this.loginForm.value.username, this.loginForm.value.password).subscribe({
			//	next: () => this.toastr.success("Login efetuado com sucesso!"),		// Usa a biblioteca do ToastR para exibir a mensagem
			//	error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde."), 	// Usa a biblioteca do ToastR para exibir a mensagem
			//});

		} else {
		  console.log('Formulário inválido!');
		}
	  }
}
