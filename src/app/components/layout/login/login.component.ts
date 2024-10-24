import { Component } from '@angular/core'; // Importa o decorador Component para definir um componente Angular
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importa classes do Angular para trabalhar com formulários reativos
import { Router } from '@angular/router'; // Importa o serviço Router para permitir navegação entre rotas
import { NbEvaIconsModule } from '@nebular/eva-icons'; // Importa o módulo de ícones do Nebular
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme'; // Importa vários módulos do Nebular para componentes de UI
import { LoginService } from '@src/app/services/login.service'; // Importa o serviço de login para autenticação
import { ControlErrorComponent } from '@src/app/services/utils/control-error.component'; // Importa um componente para exibir erros de controle (validação) de formulário
import { ToastrService } from 'ngx-toastr'; // Importa o serviço Toastr para exibir mensagens de toast

// Cria um array com os módulos do Nebular que serão utilizados
const NB_MODULES = [
  NbLayoutModule, // Módulo de layout
  NbCardModule, // Módulo de cartões
  NbIconModule, // Módulo de ícones
  NbInputModule, // Módulo de campos de entrada (input)
  NbButtonModule, // Módulo de botões
  NbEvaIconsModule // Módulo de ícones do Eva
];

// Decorator que define as características do componente
@Component({
  selector: 'app-login', // Define o seletor do componente, que será usado no HTML
  standalone: true, // Indica que este componente é autônomo e não depende de um módulo
  imports: [ReactiveFormsModule, ...NB_MODULES, ControlErrorComponent], // Importa módulos necessários para este componente
  providers: [], // Aqui você poderia declarar provedores de serviços específicos para este componente, se necessário
  templateUrl: './login.component.html' // Define o arquivo HTML que será usado como template para este componente
})
export class LoginComponent {
  loginForm!: FormGroup; // Declara a propriedade loginForm do tipo FormGroup, que representa o formulário de login

  // Construtor do componente
  constructor(
    private loginService: LoginService, // Injeta o serviço de login para realizar autenticações
    private toastr: ToastrService, // Injeta o serviço Toastr para exibir mensagens de feedback
    private router: Router // Injeta o serviço Router para navegação entre rotas
  ) {
    // Inicializa o formulário de login com controles para username e password
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]), // Campo para o nome de usuário, que é obrigatório e deve ter pelo menos 3 caracteres
      password: new FormControl('', [Validators.required, Validators.minLength(6)]) // Campo para a senha, que é obrigatório e deve ter pelo menos 6 caracteres
    });
  }

  // Método chamado quando o formulário é enviado
  onSubmit() {

    // Verifica se o formulário é válido
    if (this.loginForm.valid) {
		
      // Chama o método de login do serviço e subscreve ao resultado
      this.loginService.efetuarLogin(this.loginForm.value.username, this.loginForm.value.password).subscribe({
        next: () => {
          this.toastr.success("Login efetuado com sucesso!");	// Se o login for bem-sucedido, exibe uma mensagem de sucesso
          this.router.navigate(['/app/dashboard']);	// Redireciona o usuário para a rota do dashboard
        },
        error: (error) => {
          // Se ocorrer um erro, obtém a mensagem de erro da resposta da API ou exibe uma mensagem padrão
          const errorMessage = error.error?.message || 'Erro inesperado! Tente novamente mais tarde.';
          this.toastr.error(errorMessage);	// Exibe a mensagem de erro no toast
        }
      });
    } else {
      console.log('Formulário inválido!');	// Se o formulário não for válido, loga uma mensagem no console
    }
  }
}
