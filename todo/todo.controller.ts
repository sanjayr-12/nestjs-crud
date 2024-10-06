import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
import { Request, Response } from "express";
import { TodoService } from "./todo.service";
import { todo } from "./todo.types";

@Controller("todo")
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post("/create")
  async create(@Body() body: todo, @Res() res: Response) {
    const data = body;
    try {
      const result = await this.todoService.create(data);
      res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: (error as Error).message });
    }
  }

  @Get()
  async getAll(@Res() res: Response) {
    try {
      const result = await this.todoService.getAll();
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  @Delete("/delete/:id")
  async deleteTodo(@Param("id") id: string, @Res() res: Response) {
    try {
      const result = await this.todoService.deleteTodo(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  @Patch("/update/:id")
  async updateTodo(
    @Param("id") id: string,
    @Body() body: todo,
    @Res() res: Response
  ) {
    try {
      const result = await this.todoService.updateTodo(id, body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
