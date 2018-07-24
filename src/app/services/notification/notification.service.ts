
import { Injectable } from '@angular/core';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of'

// refernce to Notifications and NotificationDetails dummy data
import { Notifications, NotificationDetails } from "../../data/notification.data";

// impltementing Notification Service and inheriting from BehaviorSubject to be consistent to kendo grid data 
@Injectable()
export class NotificationService extends BehaviorSubject<GridDataResult> {

    constructor() { super(null); }

    public getNotifications(state: State = { skip: 0, take: 5 }): Observable<GridDataResult> {

        // using dummay data
        let oNotifications = Notifications;

        //implementing paging over array
        let numPageNumber = Math.floor(state.skip / state.take);
        oNotifications = oNotifications.slice(numPageNumber * state.take, (numPageNumber + 1) * state.take);

        //TODO: this logic later must be replaced by HttpClient get method

        // returning the paged notifications as observable object
        return Observable.of(<GridDataResult>{
            data: oNotifications, // the records
            total: Notifications.length, //the total number of records
        });;

    }

    // this method is called by notification component
    public query(state: State): void {

        this.getNotifications(state)
            .subscribe(x => {
                return super.next(x)  //BehaviorSubject next method
            });

    }

    public getNotificationDetail(entryId: number) {

        // using dummay data
        let oNotificationDetails = NotificationDetails;

        //TODO: this logic later must be replaced by HttpClient get method

        //finding the Notification Detail with the specified Id in our dummay data
        oNotificationDetails = oNotificationDetails.filter(
            notificationDetail => notificationDetail.Id == entryId
        );

        // returning the paged notifications as observable object
        return Observable.of(oNotificationDetails[0]);

    }

}
