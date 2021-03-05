import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DishI, OffertI } from 'src/app/factory/models/dish.model';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  ingredients: string[] = [''];
  dishForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private _dishSrv: DishService,
    private _router: Router
  ) { 
    this.dishForm = this.formBuilder.group({
      dishname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(55)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(85)]],
      image: ['', [Validators.required, Validators.maxLength(255)]],
      price: ['', [Validators.required, Validators.min(4.5), Validators.max(500)]],
      stock: ['', [Validators.required, Validators.min(10), Validators.max(200)]],
    })
  }

  ngOnInit(): void {
  }

  public addIngredient(): void {
    this.ingredients.push('');
  }

  onSubmit(): void {
    if(this.dishForm.valid && this.ingredients.length > 1){
      const offert: OffertI = {
        isOfferted: false,
        totalDiscount: 0.00,
        typeOffert: 0
      }
      const dish: DishI = {
        name: this.dishForm.controls.dishname.value,
        description: this.dishForm.controls.description.value,
        price: this.dishForm.controls.price.value,
        stock: this.dishForm.controls.stock.value,
        image: this.dishForm.controls.image.value,
        offert,
        ingredients: this.ingredients
      }
      this._dishSrv.createDish(dish).then(res => {
        console.log("documento creado!")
        this._router.navigate(['/inicio'])
      });
    }
  }

}
