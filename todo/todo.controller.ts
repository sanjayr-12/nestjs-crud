import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
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
}
