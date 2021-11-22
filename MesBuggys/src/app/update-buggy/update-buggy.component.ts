import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Buggy } from '../model/buggy';
import { BuggyService } from '../services/buggy.service';

@Component({
  selector: 'app-update-buggy',
  templateUrl: './update-buggy.component.html',
  styles: [
  ]
})
export class UpdateBuggyComponent implements OnInit {
  currentBuggy = new Buggy();
  constructor(private activatedRoute: ActivatedRoute,private router :Router, private buggyService: BuggyService) { }

  ngOnInit(): void {
    this.buggyService.consulterBuggy(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ 
      this.currentBuggy = prod; } ) ;
  }
  updateBuggy() { 
    this.buggyService.updateBuggy(this.currentBuggy).subscribe(() => { 
      this.router.navigate(['buggys']);
     },(error) => { 
        alert("Problème lors de la modification !"); } 
        ); 
      }
}
