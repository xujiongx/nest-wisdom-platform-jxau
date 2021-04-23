import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InformationCreateDto } from './information.dto';
import { Information } from './information.interface';

@Injectable()
export class InformationService {
  constructor(
    @InjectModel('Information')
    private readonly informationMadal: Model<Information>,
  ) {}
  async create(information: InformationCreateDto) {
    return await this.informationMadal.create(information);
  }
  async delete(id: string) {
    return await this.informationMadal.deleteOne({ _id: id });
  }
  async update(id: string, information: InformationCreateDto) {
    return await this.informationMadal.findByIdAndUpdate(id, information);
  }
  async findByType(type: string) {
    return await this.informationMadal.find({ type }).sort({ _id: -1 });
  }
  async findById(id: string) {
    return await this.informationMadal.findById(id);
  }
}
