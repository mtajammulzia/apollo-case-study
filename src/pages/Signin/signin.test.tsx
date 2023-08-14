import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from ".";

describe("Signin", () => {
  it("Should show user sign in page", () => {
    sessionStorage.removeItem("token");
    render(<SignIn />);
    expect(screen.getByText("Sign In")).toBeInTheDocument();
  });
});
