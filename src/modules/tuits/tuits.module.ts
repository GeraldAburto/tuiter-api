import { Module } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { TuitsController } from './tuits.controller';

@Module({
  providers: [TuitsService],
  controllers: [TuitsController]
})
export class TuitsModule {}
