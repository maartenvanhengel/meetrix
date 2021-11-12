import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';

@Component({
  selector: 'meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor(public meetingService:MeetingServiceService) { }

  ngOnInit(): void {
  }

}
