import { Injectable } from '@nestjs/common';
import { Notification } from '../interfaces/notification.interface';
import { EmailNotification } from '../notification/email-notification.service';
import { SMSNotification } from '../notification/sms-notification.service';

@Injectable()
export class NotificationFactoryService {
  createNotification(type: string): Notification {
    if (type === 'email') {
      return new EmailNotification();
    } else if (type === 'sms') {
      return new SMSNotification();
    } else {
      throw new Error('Invalid notification type');
    }
  }
}
