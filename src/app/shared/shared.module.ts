import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from '../search.pipe';



@NgModule({
  declarations: [SearchPipe],
  exports:[NgxPaginationModule, SearchPipe],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ]
})
export class SharedModule {}
