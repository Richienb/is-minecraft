import test from "ava"
import isMinecraft from "."

test("main", (t) => {
    t.false(isMinecraft())
})
