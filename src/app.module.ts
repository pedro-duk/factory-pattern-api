import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { NotificationFactoryService } from './factories/notification-factory.service';

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationFactoryService],
})
export class AppModule {}
