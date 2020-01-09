import { ItemsModule } from "./items/items.module";
import { Module } from "@nestjs/common";
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [ItemsModule, AuthzModule],
  controllers: [],
  providers: []
})
export class AppModule {}
