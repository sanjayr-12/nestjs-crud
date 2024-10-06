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
      throw error;
    }
  }

  async getAll(): Promise<Todo[]> {
    try {
      const data = await this.todoModel.find();
      if (!data) {
        throw new Error("No data");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteTodo(id: string): Promise<Todo> {
    try {
      const data = await this.todoModel.findByIdAndDelete(id);
      if (!data) {
        throw new Error("error in deletion");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateTodo(id: string, upDate: todo): Promise<Todo> {
    try {
      const data = await this.todoModel.findByIdAndUpdate(id, upDate, {
        new: true,
      });
      if (!data) {
        throw new Error("can't update");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
