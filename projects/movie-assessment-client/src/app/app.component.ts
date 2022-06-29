import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MovieAssessmentService } from '../services/swaggerMovie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'billingApp';
  bills : [];
  assessmentMovieForm: FormGroup;

  constructor(
    private billingService : MovieAssessmentService,
    private formBuilder: FormBuilder,
  ){}


  ngOnInit() {
    this.assessmentMovieForm = this.formBuilder.group({
      idpelicula : new FormControl(''),
      idusuario : new FormControl(''),
      nota : new FormControl('')
     });
    this.billingService.listUsingGET().subscribe(all => {
      console.log(all);
     // this.bills = all;
    })
  }

    // convenience getter for easy access to form fields
    get f() { return this.assessmentMovieForm.controls; }

    onSubmit() {
      this.billingService.postUsingPOST(this.f['idpelicula'].value , this.f['idusuario'].value, this.f['nota'].value).subscribe(x => {
        console.log(x);
        this.ngOnInit();
      },
      error => {
        console.log(error.error.mensaje);
      });

  }
}

