import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NbButtonModule, NbCardModule } from '@nebular/theme';

const NB_MODULES = [NbCardModule, NbButtonModule];

@Component({
	selector: 'app-not-found',
	standalone: true,
	imports: [...NB_MODULES],
	template: `
		<div class="d-flex align-items-center justify-content-center" style="height: calc(100dvh - 185px)">
			<div class="text-center">
				<h2>404 Página não encontrada.</h2>
				<small class="d-block mb-3">Desculpe, parece que a página/caminho não foi localizado.</small>
				<button nbButton fullWidth (click)="goToHome()" type="button" class="home-button">Voltar para página inicial.</button>
			</div>
		</div>
	`
})
export class NotFoundComponent {
	private _router = inject(Router);

	goToHome() {
		this._router.navigateByUrl('/');
	}
}
