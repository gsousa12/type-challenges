import { logger } from "../../utils/logger";

/*
https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
*/

type MyReturnType<T extends (...args: never[]) => unknown> = T extends (
  ...args: never[]
) => infer R
  ? R
  : never;

function __test() {
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type a = MyReturnType<typeof fn>; // should be "1 | 2"

  const testA: a = 1;
  const testB: a = 2;

  logger("00002-medium-return-type");
  console.log(testA, testB);
}

__test();
