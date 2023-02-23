import { render, screen } from "@testing-library/react";
import SuccessMessage from "../SuccessMessage";

describe("Success component", () => {
  it("Should render success component correctly", () => {
    render(<SuccessMessage />);
    expect(
      screen.getByText(/Your data is saved with us!!!!/)
    ).toBeInTheDocument();
  });
});
