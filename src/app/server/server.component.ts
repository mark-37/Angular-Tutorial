import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html'
})

export class ServerComponent{
	serverId: number = 10;
	serverStatus: string = 'offline';

	constructor(){
		console.log('Created');
	}

	getServerStatus(){
		return this.serverStatus;
	}
}