import { screen, render } from "@testing-library/react";
import Contactbanner from "../Contact/Contactbanner";

describe("Contact Banner Component", () => {
  it("Checking whether text is present", () => {
    render(<Contactbanner />);
    const element = screen.getByText(/You Can Reach to us If any Queries/);
    expect(element).toBeInTheDocument;
  });
});
