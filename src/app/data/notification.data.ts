
// reference to Notification and NotificationDetail models

import { Notification, NotificationDetail } from "../models/notification/notification";

// defining 25 dummy notification data
export const Notifications: Notification[] = [
  {
    Id: 1,
    Type: "NtfAccessData",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer1@gmail.com",
    SenderEmail: "support@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },

  {
    Id: 2,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer2@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 3,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer3@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 4,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer4@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 5,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer5@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 6,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 7,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 8,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 9,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 10,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 11,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 12,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 13,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 14,
    Type: "CompleteReceiver",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 15,
    Type: "CompleteReceiver",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 16,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 17,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 18,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 19,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
  },
  {
    Id: 20,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28)
  },
  {
    Id: 21,
    Type: "CompleteReceiver",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 28)
  },
  {
    Id: 22,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28)
  },
  {
    Id: 23,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 28)
  },
  {
    Id: 24,
    Type: "CompleteSender",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28)
  }, {
    Id: 25,
    Type: "Overdue",
    MessageId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28)
  },
];

// defining 25 dummy notification detail data
export const NotificationDetails: NotificationDetail[] = [
  {
    Id: 1,
    Type: "NtfAccessData",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer1@gmail.com",
    SenderEmail: "support@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },

  {
    Id: 2,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer2@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 3,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer3@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: `<div class="panel" >
    <div class="panel-header">
      <div class="row">
        <div class="col-sm-12">
          Notification Header
        </div>
       </div>
    </div>
    <div class="panel-body">
      <div class="row">
        <div class="col-sm-12">
          Notification Detail
        </div>
      </div>
    </div>
  </div>`,
  },
  {
    Id: 4,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer4@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 5,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer5@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 6,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer6@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 7,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer7@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 8,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer8@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 9,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer9@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 10,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer10@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 11,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer11@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 12,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer12@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 13,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer13@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 14,
    Type: "CompleteReceiver",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer14@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 15,
    Type: "CompleteReceiver",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer15@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 16,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer16@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 17,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer17@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 18,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer18@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 19,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer19@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 27),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 20,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer20@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 21,
    Type: "CompleteReceiver",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer21@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 22,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer22@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 23,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer23@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: true,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
  {
    Id: 24,
    Type: "CompleteSender",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer24@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  }, {
    Id: 25,
    Type: "Overdue",
    MessageId: 1,
    SubProviderId: 1,
    ClientId: 1,
    Language: "DE",
    Country: "Germany",
    ReceiverEmail: "customer25@gmail.com",
    SenderEmail: "flying.turtle@b4value.net",
    State: "Sent",
    HasAttachment: false,
    Created: new Date(2018, 2, 28),
    Data: ` 
        <div class="panel" >
          <div class="panel-header">
            <div class="row">
              <div class="col-sm-12">
                Notification Header
              </div>
             </div>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-12">
                Notification Detail
              </div>
            </div>
          </div>
        </div>
      `,
  },
];
