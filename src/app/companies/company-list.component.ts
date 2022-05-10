import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICompany } from './company';
import { CompanyService } from './company.service';

@Component({
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  pageTitle = 'Company List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCompanies = this.performFilter(value);
  }

  filteredCompanies: ICompany[] = [];
  companies: ICompany[] = [];

  constructor(private companyService: CompanyService) {}

  performFilter(filterBy: string): ICompany[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.companies.filter((company: ICompany) =>
      company.companyName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.companyService.getCompanies().subscribe({
      next: companies => {
        this.companies = companies;
        this.filteredCompanies = this.companies;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Company List: ' + message;
  }
}
