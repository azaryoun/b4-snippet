import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent, SelectionEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';

// reference to NotificationService
import { NotificationService } from '../../services/notification/notification.service';

// reference to NotificationDetail model
import { NotificationDetail } from '../../models/notification/notification';



@Component({
  selector: 'notification',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {

  // screan loading flag
  public loading: boolean;

  // kendo grid data object which is set to NotificationService
  public view: Observable<GridDataResult>;

  // initializing kendo grid State
  public state: State = {
    skip: 0, //the first page
    take: 5 //the default number of record per page
  };

  // a flag to show/hide dialog page for notification detail
  public displayNotificationDetail: boolean = false;


  // the model is passed to notification-detail component
  private notificationDetail: NotificationDetail = null;

  constructor(
    //injecting NotificationService into the component
    private _notificationService: NotificationService,
  ) { }

  ngOnInit() {

    // setting kendo grid data object to _notificationService object
    this.view = this._notificationService;

    // displaying screen loading icon over the kendo grid
    this.loading = true;

    // setting intentional delay just to show the screen loading icon
    setTimeout(() => {
      // fetching notification data by calling query method from _notificationService object
      this._notificationService.query(this.state);

      // hiding screen loading icon after fetching notifcation data
      this.loading = false;
    }, 1500);


  }

  // this method is called by changing data state by user (here by changing the page number)
  public dataStateChange(state: DataStateChangeEvent): void {


    // updating the component state property to the state passed by user
    this.state = state;

    // displaying screen loading icon over the kendo grid
    this.loading = true;

    // setting intentional delay just to show the screen loading icon
    setTimeout(() => {

      // fetching notification data by calling query method from _notificationService object
      this._notificationService.query(this.state);

      // hiding screen loading icon after fetching notifcation data
      this.loading = false;

    }, 1500);
  }


  // this method is called when user clicks over a row in kendo grid
  public selectedRowChange(selectionEvent: SelectionEvent) {

    // displaying screen loading icon over the kendo grid
    this.loading = true;
  
    // setting intentional delay just to show the screen loading icon
    setTimeout(() => {

      // fetching notification detail data by calling getNotificationDetail() method from _notificationService object

      this._notificationService.getNotificationDetail(selectionEvent.selectedRows[0].dataItem.Id).subscribe(notificationDetail => {

        // assigining the method result to the model object used by notification-detail component
        this.notificationDetail = notificationDetail;

        // displaying notification-detail component
        this.displayNotificationDetail = true;

        // hiding screen loading icon after fetching notifcation data
        this.loading = false;
      })
    }, 1500);


  }

  // this method hanldes the (close) event of notification-detail component
  public closeHandler(): void {

    // hiding notification-detail component
    this.displayNotificationDetail = false;
  }


}
