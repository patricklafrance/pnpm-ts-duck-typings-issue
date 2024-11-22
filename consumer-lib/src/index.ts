import type { I1 } from "@patlaf/pnpm-ts-duck-typing-issue-lib-1";
import { log } from "@patlaf/pnpm-ts-duck-typing-issue-lib-2";

export function run() {
    const obj: I1 = {
        one: "This is one!"
    }

    log(obj);
}
