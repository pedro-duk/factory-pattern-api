import { IsString } from 'class-validator';

export class SendNotificationDTO {
  @IsString()
  message: string;
}
