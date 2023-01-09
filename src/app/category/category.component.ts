import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Category } from '../models/category';
import {CategoryService} from '../services/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit,OnDestroy{ //component oluşturulduktan çağrılmadan önce çalışır

  categories: Category[];
  unsubscribe$: Subject<any> = new Subject();
  selectedCategory: Category = null
  constructor(private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(_data=>{
      this.categories=_data.genres;
    })
  }
  displayAll = true
  selectCategory(item?: Category) {
    if (item) {
      this.selectedCategory = item
      this.displayAll = false
    } else {
      this.selectedCategory = null
      this.displayAll = true
    }}


  
  ngOnDestroy(): void {
    this.unsubscribe$.next(null)
    this.unsubscribe$.complete()
  }

}
