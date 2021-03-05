import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishI } from 'src/app/factory/models/dish.model';
import { AuthService } from '../../services/auth.service';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  restaurantName:string="Arthur";
  dishes: DishI[] = [];
  isLoading: boolean = false;

  constructor(
    private _authServ:AuthService,
    private _dishServ:DishService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // this._authServ.checkCurrentUser().then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
    this.isLoading = true;
    this._dishServ.getDishes().then(res => {
      this.dishes = res;
      this.isLoading = false;
    }).catch(err => {
      this.isLoading = false;
    })

  }

  public createDishPage(): void {
    this._router.navigate(['/dish'])
  }


}
