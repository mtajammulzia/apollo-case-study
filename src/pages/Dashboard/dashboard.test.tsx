import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from ".";
import * as analyticsApi from "../../api/analytics";

describe("Dashboard", () => {
  it("Should render loading state correctly", () => {
    render(<Dashboard />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Should render error state correctly", async () => {
    jest.spyOn(analyticsApi, "getAnalytics").mockImplementation(() => {
      throw Error("Failed to fetch analytics");
    });
    render(<Dashboard />);
    expect(await screen.findByText("Failed to fetch analytics")).toBeInTheDocument();
  });

  it("Should render normal state correctly", async () => {
    jest.spyOn(analyticsApi, "getAnalytics").mockResolvedValue({
      users: { count: 20, change: 14 },
      posts: { count: 400, change: -8 },
      todos: { count: 250, change: 2 },
    });
    render(<Dashboard />);
    expect(await screen.findByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("user-count")).toHaveTextContent("20");
    expect(screen.getByTestId("post-count")).toHaveTextContent("400");
    expect(screen.getByTestId("todo-count")).toHaveTextContent("250");
  });
});
