import { Notification } from '../interfaces/notification.interface';

export class SMSNotification implements Notification {
  send(message: string): string {
    return `SMS sent with message: ${message}`;
  }
}
