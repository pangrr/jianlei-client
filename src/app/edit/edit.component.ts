import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Realestate } from '../realestate';
import { RealestateService } from '../realestate.service';


@Component({
  selector: 'app-upload',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() afuConfig = {
    formatsAllowed: '.jpg,.png',
    uploadAPI: { url: 'http://localhost:3000/realestate/images' },
    multiple: true,
    theme: 'dragNDrop'
  };

  realestate = {} as Realestate;

  constructor(
    private realestateService: RealestateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getRealestate(id);
    }
  }

  private getRealestate(id: string): void {
    this.realestateService.getRealestate(id)
      .subscribe(r => this.realestate = r);
  }

  onImagesUploaded(event): void {
    this.realestate.images = JSON.parse(event.response);
  }

  onSubmit(): void {
    this.realestateService.addRealestate(this.realestate)
      .subscribe(savedRealestate => this.realestate._id = savedRealestate._id);
  }
}