import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TuitsService } from './tuits.service';
import { TuitsController } from './tuits.controller';
import { Tuit } from './tuit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tuit])],
  providers: [TuitsService],
  controllers: [TuitsController],
})
export class TuitsModule {}
