import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = 'No Server Created';
	serverCreated: boolean = false;
	serverName='hello';

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
  	this.serverCreated = true;
  	this.serverCreationStatus = this.serverName;
  	console.log('serverCreated = '+this.serverCreated);
  }
  onUpdateServerName(event: any){
  	this.serverName = (<HTMLInputElement>event.target).value;
  }
}
