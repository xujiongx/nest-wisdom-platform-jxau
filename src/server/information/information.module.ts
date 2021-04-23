import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InformationController } from './information.controller';
import { informationSchema } from './information.schema';
import { InformationService } from './information.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Information', schema: informationSchema },
    ]),
  ],
  controllers: [InformationController],
  providers: [InformationService],
})
export class InformationModule {}
