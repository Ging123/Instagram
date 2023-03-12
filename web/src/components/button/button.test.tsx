import { fireEvent, render } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {

  it("should render without errors", () => {
    render(<Button type="button">Click me</Button>);
  });

  it("should render a button element", () => {
    const { container } = render(<Button type="button">Click me</Button>);
    expect(container.querySelector("button")).toBeInTheDocument();
  });

  it("should use the correct className based on props", () => {
    const { container } = render(
      <Button type="button" className="custom-class">
        Click me
      </Button>
    );
    expect(container.firstChild).toHaveClass("button custom-class");
  });

  it("should fire onClick event when clicked", () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <Button type="button" onClick={handleClick}>
        Click me
      </Button>
    );

    fireEvent.click(getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render its content and children correctly", () => {
    const { getByText } = render(
      <Button type="button" content="Submit">
        <div>Click me</div>
      </Button>
    );
    expect(getByText("Submit")).toBeInTheDocument();
    expect(getByText("Click me")).toBeInTheDocument();
  });
});