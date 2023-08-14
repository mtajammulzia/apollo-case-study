import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

global.jest = vi as any;

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
