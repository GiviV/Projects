import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Output()
  choosenWord:EventEmitter<string>  = new EventEmitter<string>()

  myFunction(ganre:string){
   this.choosenWord.emit(ganre)
  }

}
