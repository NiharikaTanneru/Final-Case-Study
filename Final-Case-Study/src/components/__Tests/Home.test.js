import { screen, render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";

describe("Home Component", () => {
  it("checks whether Image is Present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByAltText("First slide")).toBeInTheDocument();
  });
  it("checks whether Image is displayed", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
    const ImgElement = screen.getByRole("img", { name: /first slide/i });
    expect(ImgElement).toBeInTheDocument;
    const ButtonElement = screen.getByRole("button", { name: /jobs/i });
    expect(ButtonElement).toBeInTheDocument;
  });
  it("checks whether logo is Loaded", () => {
    const logo = screen.queryByRole("img", { name: /logo/i });
    expect(logo).toBeInTheDocument;
  });
});
