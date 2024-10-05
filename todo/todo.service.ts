import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Todo } from "../schemas/todo.schema";
import { todo } from "./todo.types";

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  async create(data: todo): Promise<Todo> {
    try {
      const result = new this.todoModel(data);
      return await result.save();
    } catch (error) {
        throw error
    }
  }
}
