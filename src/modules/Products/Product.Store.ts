import { injectable, inject } from "inversify";
import { action, makeObservable, observable } from "mobx";
import { DataProducts, ProductDto } from "./Product.Dto";
import ProductService from "./Product.Service";

@injectable()
export class ProductStore implements DataProducts {
  products: ProductDto[] = [];
  total = 0;
  skip = 0;
  limit = 0;

  @inject(ProductService)
  productService!:ProductService;

  constructor() {
    makeObservable(this, {
      products: observable,
      _fill: action,
      init: action,
      getByCategory: action
    });
  }

  _fill(dataProducts: DataProducts){
    this.products=dataProducts.products;
    this.limit=dataProducts.limit;
    this.total=dataProducts.total;
    this.skip=dataProducts.skip;
  }

  _reFill(){
    return this.productService.getAll().then((dataProducts)=>{
      this._fill(dataProducts)
      return dataProducts
    })
  }

  init(){
    if(!this.products[0]){
      this._reFill()
    }
  }

  getByCategory(category:string){
    if(!category){
      return this._reFill()
    }
    return this.productService.getByCategory(category).then((dataProducts)=>{
      this._fill(dataProducts)
      return dataProducts
    })
  }

  search(keyword: string){
    if(!this.search){
      return this._reFill()
    }
    return this.productService.search(keyword).then((dataProducts)=>{
      this._fill(dataProducts)
      return dataProducts
    })
  }

  getOne(id:string){
    return this.productService.getOne(id)
  }
}
