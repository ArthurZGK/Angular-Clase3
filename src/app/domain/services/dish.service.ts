import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { DishI } from '../../factory/models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private db: AngularFirestore
   
  ) { }

  public async getDishes():Promise<DishI[]>{
    try {
      const dishes:DishI[]=await this.db.collection<DishI>('/dishes').get().toPromise().then(
        documents=>{
          return documents.docs.map(el=>{
              const id= el.id;
              const data: DishI =el.data();
            return{id, ...data}
          });
      }).catch(err=>err)
      return dishes;
    } catch (error) {
      return error;
    }
  };

  public async createDish(dish: DishI) {
    try {
      const response = await this.db.collection<DishI>('dishes').add(dish);
      return response;
    } catch (error) {
      return error;
    }
  } ;


}
 