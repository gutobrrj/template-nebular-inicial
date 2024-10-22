import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-submenu',
	standalone: true,
	imports: [RouterOutlet],
	template: '<router-outlet />'
})
export class SubmenuComponent {}
