import { injectable, inject } from "inversify";
import { action, makeObservable, observable } from "mobx";
import ProductService from "./Product.Service";

@injectable()
export class CategoryStore{
  categories: string[] = [];

  @inject(ProductService)
  productService!:ProductService;

  constructor() {
    makeObservable(this, {
      categories: observable,
      init: action 
    });
  }

  init(){
    if(!this.categories[0]){
      this.productService.categories().then((categories)=>{
        this.categories=categories
      })
    }
  }
}
