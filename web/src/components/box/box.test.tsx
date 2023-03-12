import { render } from "@testing-library/react";
import Box from "./";

describe("Box component", () => {

  it("should render without errors", () => {
    render(<Box>Hello world</Box>);
  });

  it("should use the correct className based on props", () => {
    const { container } = render(
      <Box className="custom-class">
        Hello world
      </Box>
    );
    expect(container.firstChild).toHaveClass("white_box custom-class");
  });

  it("should render its children correctly", () => {
    const { getByText } = render(<Box>Hello world</Box>);
    expect(getByText("Hello world")).toBeInTheDocument();
  });
});