import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InformationCreateDto } from './information.dto';
import { InformationService } from './information.service';

@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}
  @Post('create')
  create(@Body() information: InformationCreateDto) {
    return this.informationService.create(information);
  }
  @Post('delete')
  delete(@Body('id') id: string) {
    return this.informationService.delete(id);
  }
  @Post('update')
  async articleFix(
    @Body() information: InformationCreateDto,
    @Body('id') id: string,
  ) {
    return this.informationService.update(id, information);
  }
  @Get('findByType')
  async articleFindByType(@Query('type') type: string) {
    return this.informationService.findByType(type);
  }
}
