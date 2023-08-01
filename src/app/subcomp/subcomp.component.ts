import { Component, Input, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css']
})
export class SubcompComponent implements OnInit {
  @Input() message:string = "";

  @Output() messageEvent = new EventEmitter<string>;

  ngOnInit(): void {
    
  }
  
  submit(){
    this.messageEvent.emit("hello");
  }


}
