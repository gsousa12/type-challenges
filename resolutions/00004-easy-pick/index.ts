import { logger } from "../../utils/logger";

/*
https://github.com/type-challenges/type-challenges/tree/main/questions/00004-easy-pick
*/

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

function __test() {
  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  type TodoPreview = MyPick<Todo, "title" | "completed">;

  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  logger("00004-easy-pick", { todo });
}

__test();
