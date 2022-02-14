import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTuitDto, UpdateTuitDto } from './dto';

import { Tuit } from './tuit.entity';
import { TuitsService } from './tuits.service';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitService: TuitsService) {}

  @Get()
  getTuits(): Promise<Tuit[]> {
    return this.tuitService.getTuits();
  }

  @Get(':id')
  getTuit(@Param('id') id: number): Promise<Tuit> {
    return this.tuitService.getTuit(id);
  }

  @Post()
  createTuit(@Body() createTuit: CreateTuitDto): Promise<Tuit> {
    return this.tuitService.createTuit(createTuit);
  }

  @Patch(':id')
  updateTuit(
    @Param('id') id: number,
    @Body() updateTuit: UpdateTuitDto,
  ): Promise<Tuit> {
    return this.tuitService.updateTuit(id, updateTuit);
  }

  @Delete(':id')
  deleteTuit(@Param('id') id: number): Promise<void> {
    return this.tuitService.removeTuit(id);
  }
}
