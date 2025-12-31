import { logger } from "../../utils/logger";

/*
https://github.com/type-challenges/type-challenges/tree/main/questions/00003-medium-omit
*/

type MyOmit<T, K extends keyof T> = {  [P in Exclude<keyof T, K>]:T[P] }


function __test() {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = MyOmit<Todo, "description" | "title">;

  const todo: TodoPreview = {
    completed: false,
  };

  logger("00003-medium-omit", {todo});
}

__test();
