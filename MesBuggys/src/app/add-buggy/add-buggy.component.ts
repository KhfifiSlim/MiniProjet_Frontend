import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buggy } from '../model/buggy';
import { BuggyService } from '../services/buggy.service';
@Component({
  selector: 'app-add-buggy',
  templateUrl: './add-buggy.component.html',
  styleUrls: ['./add-buggy.component.css']
})
export class AddBuggyComponent implements OnInit {

  newBuggy = new Buggy();
  mess!: string;
   constructor(private buggyService: BuggyService,private router :Router) {} 

   ngOnInit(): void {
  }

  addBuggy(){
     this.buggyService.ajouterBuggy(this.newBuggy) .subscribe(bug => {
        console.log(bug); 
      }); 
      this.router.navigate(['buggys']); 
    }


  
}
