import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {FootballService} from "../Services/football.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent {
  footballForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private footballService: FootballService,
    private router: Router
  )


{
  }

  protected readonly onsubmit = onsubmit;
}
