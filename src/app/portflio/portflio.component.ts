import { Component } from '@angular/core';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.css']
})
export class PortflioComponent {
imgSrc1:string = "../../assets/port1.png";
imgSrc2:string = "../../assets/port2.png";
imgSrc3:string = "../../assets/port3.png";
modelSrc="";
showModel = false;
show(src:string){
  this.modelSrc=src;
  // console.log(src)
  document.getElementById("show-box")?.classList.replace("d-none" , "d-block")
}
close(){
  document.getElementById("show-box")?.classList.replace("d-block" , "d-none")
}
}
