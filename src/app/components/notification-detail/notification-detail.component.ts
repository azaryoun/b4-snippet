import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// reference to NotificationDetail model
import { NotificationDetail } from '../../models/notification/notification';

@Component({
  selector: 'notification-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {


  // defining a FormGroup based on NotificationDetail model 
  public formGroupNotificationDetail: FormGroup = new FormGroup({
    'Type': new FormControl(),
    'Language': new FormControl(),
    'Country': new FormControl(),
    'ReceiverEmail': new FormControl(),
    'SenderEmail': new FormControl(),
    'State': new FormControl(),
    'HasAttachment': new FormControl(),
    'Created': new FormControl(),
    'Data': new FormControl(),
  });;

  // the input model (NotificationDetail) of the component
  @Input() public set model(notificationDetail: NotificationDetail) {
    this.formGroupNotificationDetail.reset(notificationDetail);
  }

  // the input to set whether the component is readonly or not (for future use)
  @Input() public readonly: boolean = true;

  // component close event
  @Output() close: EventEmitter<any> = new EventEmitter();

  ngOnInit() { }

  // this method handles close button click event as well as kendo dialog close event
  public onClose(e): void {
    // raising component's close event
    this.close.emit();
  }



}
