

import { RouterModule } from '@angular/router';


// reference to NotificationComponent
import { NotificationComponent } from './components/notification/notification.component';

// setting routing ...
export const AppRouting = RouterModule.forRoot([
    { path: '', component: NotificationComponent },
    { path: '**', component: NotificationComponent },

]);

