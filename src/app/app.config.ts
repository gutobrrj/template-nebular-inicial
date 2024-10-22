import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';

import { spinnerInterceptor } from './services/interceptors';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideHttpClient(withFetch()), // Injetado para poder ser usado de forma global... Por todo o navegador.
		provideAnimations(),	// Necessário para a utilização do Toast
		provideToastr(),	// Provide inserido para mostrar as mensagens de Toast(sucesso/erro)
		provideHttpClient(withInterceptors([spinnerInterceptor])),
		importProvidersFrom([HttpClientModule, NbThemeModule.forRoot(), NbMenuModule.forRoot(), NbSidebarModule.forRoot()])
	]
};