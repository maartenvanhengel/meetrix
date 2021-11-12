import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'meetricks';

  openPagina :string =" ";

  topicsHidden:boolean = true;
  membersHidden:boolean = true;
  meetingsHidden:boolean = true;
  divHidden:boolean = false;
  leesIn(x:string){
    this.openPagina=x
    console.log(this.openPagina);

    if(this.openPagina == "topics"){
      this.topicsHidden = false;
      this.membersHidden=true;
      this.meetingsHidden= true;
      this.divHidden = true;
    }
    else if(this.openPagina == "members"){
      this.topicsHidden = true;
      this.membersHidden=false;
      this.meetingsHidden= true;
      this.divHidden = true;
    }
    else if(this.openPagina == "meetings"){
      this.topicsHidden = true;
      this.membersHidden=true;
      this.meetingsHidden= false;
      this.divHidden = true;
    }
    
  }
}

