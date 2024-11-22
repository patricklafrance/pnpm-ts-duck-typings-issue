import type { I1 } from "@patlaf/pnpm-ts-duck-typing-issue-lib-1";
import { log } from "@patlaf/pnpm-ts-duck-typing-issue-lib-2";
import { createRoot } from "react-dom/client";

function App() {
    const obj: I1 = {
        one: "This is one!"
    }

    log(obj);

    return (
        <div>Hello!</div>
    )
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);
