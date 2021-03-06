import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobModel } from 'src/app/models/job-model.model';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  job : JobModel = new JobModel();
  showMessage : string = " ";

  constructor(private jobService : JobService, private router : Router) { }

  ngOnInit(): void {
  }

  saveJob() {
    this.jobService.createJob(this.job).subscribe(data => {
      console.log(data);
      this.goToJobList();
    },
    error => {
      this.showMessage = "Please enter valid details";
      console.log(error)}
    );
  }

  goToJobList() {
    this.router.navigate(['/jobs']);
  }

  onSubmit() {
    console.log(this.job);
    this.saveJob();
  }

}
