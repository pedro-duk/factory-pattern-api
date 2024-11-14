import { Body, Controller, Get, Param } from '@nestjs/common';
import { NotificationFactoryService } from '../factories/notification-factory.service';
import { SendNotificationDTO } from 'src/dto/send-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationFactory: NotificationFactoryService,
  ) {}

  @Get(':type')
  sendNotification(
    @Param('type') type: string,
    @Body() sendNotificationData: SendNotificationDTO,
  ) {
    const notificationService =
      this.notificationFactory.createNotification(type);

    return { message: notificationService.send(sendNotificationData.message) };
  }
}
