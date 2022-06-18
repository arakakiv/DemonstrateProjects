import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReadKey } from 'src/app/models/key';
import { ReadKeyService } from 'src/app/services/read-key.service';

@Component({
  selector: 'app-personal-key',
  templateUrl: './personal-key.component.html',
  styleUrls: ['./personal-key.component.css']
})
export class PersonalKeyComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private keyService : ReadKeyService,
              private router : Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      expiresWhen: ['', [Validators.required]]
    });

    this.keyService.getAll().subscribe({
      next: (keys : ReadKey[]) => {
        this.keys = keys;
      },
      error: () => {
        // handle error
      }
    })
  }

  new() : void {
    this.keyService.create(this.formGroup?.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => 
        this.router.navigate(['keys']))
      },
      error: () => {

      }
    })
  }

  delete(key: string) : void {
    let sure = confirm("Are u sure? Anyone with the token won't be able to see your projects!");
    if (sure) {
      this.keyService.delete(key).subscribe({
        next: () => {
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => 
          this.router.navigate(['keys']))
        },
        error: () => {

        }
      });
    } else {
      alert("Ouch!");
    }
  }

  formGroup?: FormGroup;
  keys?: ReadKey[];

}