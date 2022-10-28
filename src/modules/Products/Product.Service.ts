import axios from "axios";
import { injectable } from "inversify";
import { DataProducts, ProductDto } from "./Product.Dto";
export const URL_API=process.env.REACT_APP_PRODUCT_API

@injectable()
export default class ProductService {
  request=axios.create({ baseURL: URL_API })

  getAll(){
    return this.request.get('products').then((res)=>res.data as DataProducts)
  }

  getOne(id: string){
    return this.request.get('products/'+id).then((res)=>res.data as ProductDto)
  }

  search(keyword: string){
    return this.request.get('products/search',{
      params:{
        q: keyword
      }
    }).then((res)=>res.data as DataProducts)
  }

  categories(){
    return this.request.get('products/categories').then((res)=>res.data as string[])
  }

  getByCategory(category:string){
    return this.request.get('products/category/'+category).then((res)=>res.data as DataProducts)
  }
}
