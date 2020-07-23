import { Component, OnInit } from '@angular/core';
import { LabsService } from '../../services/labs.service';
import { ILab } from 'projects/shared-models/lab.model';
import { ActivatedRoute } from '@angular/router';
import { ILabStep } from 'projects/shared-models/lab-step.model';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { DiscussionsService } from 'projects/commudle-admin/src/app/services/discussions.service';
import { IDiscussion } from 'projects/shared-models/discussion.model';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'],
})
export class LabComponent implements OnInit {
  faFlask = faFlask;
  lab: ILab;
  selectedLabStep = -1;
  selectedStepDescription;
  labDescription;
  discussionChat: IDiscussion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private labsService: LabsService,
    private sanitizer: DomSanitizer,
    private title: Title,
    private meta: Meta,
    private discussionsService: DiscussionsService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(data => {
      this.getLab(data.lab_id);
    });
  }

  getLab(labId) {
    this.labsService.getLab(labId).subscribe(
      data => {
        this.lab = data;
        this.labDescription = this.sanitizer.bypassSecurityTrustHtml(this.lab.description);
        this.getDiscussionChat();
      }
    );
  }


  setStep(index) {
    console.log(index);
    this.selectedLabStep = index;
  }

  changeStep(count) {
    this.selectedLabStep += count;
  }

  getDiscussionChat() {
    this.discussionsService.pGetOrCreateForLabChat(this.lab.id).subscribe(
      data => this.discussionChat = data
    );
  }

  scroll(el) {
    el.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth"})
  }

}
