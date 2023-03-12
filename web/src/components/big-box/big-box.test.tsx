import { render } from "@testing-library/react";
import BigBox from "./";

describe("BigBox component", () => {

  it("should render without errors", () => {
    render(<BigBox>Hello world</BigBox>);
  });

  it("should use the correct className based on props", () => {
    const { container } = render(
      <BigBox className="custom-class" >
        Hello world
      </BigBox>
    );
    expect(container.firstChild).toHaveClass("white_box custom-class");
  });

  it("should render its children correctly", () => {
    const { getByText } = render(<BigBox>Hello world</BigBox>);
    expect(getByText("Hello world")).toBeInTheDocument();
  });
});