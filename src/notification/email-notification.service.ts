import { Notification } from '../interfaces/notification.interface';

export class EmailNotification implements Notification {
  send(message: string): string {
    return `Email sent with message: ${message}`;
  }
}
