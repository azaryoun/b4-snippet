// defining the model for the notifcation
export class Notification {
    constructor(
        public Id: number,
        public Type: string,
        public MessageId: number,
        public ClientId: number,
        public Language: string,
        public Country: string,
        public ReceiverEmail: string,
        public SenderEmail: string,
        public State: string,
        public HasAttachment: boolean,
        public Created: Date,
    ) { }
}

// defining the model for the notification detail
export class NotificationDetail {
    constructor(
        public Id: number,
        public Type: string,
        public MessageId: number,
        public SubProviderId: number,
        public ClientId: number,
        public Language: string,
        public Country: string,
        public ReceiverEmail: string,
        public SenderEmail: string,
        public State: string,
        public HasAttachment: boolean,
        public Created: Date,
        public Data: string,
    ) { }
}

