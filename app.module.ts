import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from "./todo/todo.module";

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017/nest"), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
