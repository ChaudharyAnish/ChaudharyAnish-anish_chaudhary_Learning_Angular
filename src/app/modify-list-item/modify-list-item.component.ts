import {Component, OnInit} from '@angular/core';
import {Football} from "../Shared/Models/Football";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FootballService} from "../Services/football.service";
import {NgForOf, NgIf} from "@angular/common";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";


@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  footballForm: FormGroup;
  football: Football | undefined;
  error:string | null=null;


  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private footballService: FootballService,
    private router: Router
  ) {
    this.footballForm = this.formbuilder.group({
      id:[footballService.generateNewId()],
      playerName:['', Validators.required],
      playerPosition:['', Validators.required],
      playerJerseyNumber:[''],
      playerAge:[false],
      isplayertrophies:[false]
    });
  }
  ngOnInit():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.footballService.getFootballById(id).subscribe({
        next:football =>{
          if(football){
            this.footballForm.patchValue(football);
          }
        },
        error:err=>{
          this.error = 'Error fetching Football';
          console.log('Error fetching football',err);
        }
      });
    }
  }
  onSubmit():void{
    if(this.footballForm.valid){
      const football: Football = this.footballForm.value;
      if(football.id){
        this.footballService.updateFootball(football).subscribe(() => this.router.navigate(['/footballs']));
      }else{
        football.id = this.footballService.generateNewId();
        this.footballService.addFootball(football).subscribe(() => this.router.navigate(['/footballs']));
      }
    }
  }


}
