import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IResultItem, LoaderService } from '@lottoland/utils';
import { getResultItem } from '@lottoland/utils';
import { ActivatedRoute } from '@angular/router';
import {WinnerNumbers} from '@lottoland/ui';
@Component({
  selector: 'lottoland-main-results',
  templateUrl: './main-results.component.html',
  styleUrls: ['./main-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainResultsComponent implements OnInit {

  title = "Eurojackpot results & Winning numbers";
  numbers?: number[]; 
  euroNumbers?: number[]; 
  resultItems?: IResultItem[];
  
  constructor(public route: ActivatedRoute, private loaderServ: LoaderService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (value) => {       
        this.loaderServ.stopLoading();
        const last = value['results'].last;
        this.numbers = [...last.numbers];
        this.euroNumbers = [...last.euroNumbers];
    
        this.resultItems = Object.entries(last.odds).filter(v => v[0] !== 'rank0').map(v => getResultItem(v)) ;
        console.log(this.resultItems);
      },
      error: (err) => {
        console.error('results error', err);        
        this.loaderServ.stopLoading();
      }  
    });
  }

}
