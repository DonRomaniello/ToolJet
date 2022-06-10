import { Module } from '@nestjs/common';
import { PluginsService } from '../../services/plugins.service';
import { PluginsController } from '../../controllers/plugins.controller';
import { Plugin } from 'src/entities/plugin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from '@services/files.service';
import { File } from 'src/entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plugin, File])],
  controllers: [PluginsController],
  providers: [PluginsService, FilesService],
})
export class PluginsModule {}
