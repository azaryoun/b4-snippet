import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { NotificationDetails, Notifications } from '../../data/notification.data';


// unit testing for notfication service

describe('NotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService]
    });
  });


  it('getNotifications', inject([NotificationService], (service: NotificationService) => {

    let notifications = Notifications.slice(0, 4);

    service.getNotifications().subscribe(res => {

      expect(res.total).toBe(Notifications.length) && expect(res.data).toBe(notifications);

    }, err => {
      return false;
    });

  }));

  it('getNotificationDetail', inject([NotificationService], (service: NotificationService) => {

    let notificationDetail = NotificationDetails.filter(x => x.Id == 3)[0];

    service.getNotificationDetail(3).subscribe(res => {

      expect(res).toBe(notificationDetail);
    }, err => {
      return false;
    });

  }));
});
