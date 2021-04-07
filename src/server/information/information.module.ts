import { Module } from '@nestjs/common';
import { InformationController } from './information.controller';
import { InformationService } from './information.service';

@Module({
  controllers: [InformationController],
  providers: [InformationService]
})
export class InformationModule {}
