import { Injectable } from '@angular/core';

export interface User {
	name: string;
	picture: string;
}

export interface UserMenu {
	title: string;
	icon: string;
	tag: string;
}

export interface Menu {
	title: string;
	icon: string;
	link?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})
export class MenuService {
	private _user: User = {
		name: 'Cesar Augusto',
		picture:
			'https://static.vecteezy.com/system/resources/previews/005/129/844/original/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
	};

	private _userMenu: UserMenu[] = [
		// { title: 'Profile', icon: 'person-outline', tag: 'profile' },
		{ title: 'Sair', icon: 'power-outline', tag: 'logout' }
	];

	private _menu: Menu[] = [
		{
			title: 'Dashboard',
			icon: 'home-outline',
			link: '/app/dashboard'
		},
		
		{	//Exibe apenas o submenu com ícone e url definida. É necessário importar .......
			title: 'Sub-Menu',
			icon: 'menu-2-outline',
			children: [
				{
					title: 'Usuarios',
					icon: 'people-outline',
					link: '/app/submenu/submenuRoutesModule/usuarioslist'
				},
				{
					title: 'Clientes',
					icon: 'people-outline',
					link: '/app/submenu/submenuRoutesModule/clienteslist'
				},
			]
		}

	];

	get menu() {
		return this._menu;
	}

	get user() {
		return this._user;
	}

	get userMenu() {
		return this._userMenu;
	}
}
