import { render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import Checkbox from ".";

describe("Checkbox", () => {

  it("should display the correct label", () => {
    const mock = jest.fn();

    const { getByText } = render(
      <Checkbox 
        id="test" 
        label="Test Label" 
        onChange={mock} 
        value={true} 
      />
    );

    expect(getByText("Test Label")).toBeInTheDocument();
  });

  it("should display an input element with the correct attributes", () => {
    const mock = jest.fn();

    const { getByRole } = render(
      <Checkbox 
        id="test" 
        label="Test Label" 
        onChange={mock} 
        value={true} 
      />
    );

    const inputElement = getByRole("checkbox");
    expect(inputElement).toHaveAttribute("id", "test");
    expect(inputElement).toHaveAttribute("type", "checkbox");
  });

  it("should display a span element with the correct classname based on value prop", () => {
    const mock = jest.fn();

    const { getByRole } = render(
      <Checkbox 
        id="test" 
        label="Test Label" 
        onChange={mock} 
        value={true} 
      />
    );

    const spanElement = getByRole("presentation").querySelector("span");
    expect(spanElement).toHaveClass("checkbox checked");
  });

  it("should call onChange prop function when clicked", () => {
    const mock = jest.fn();

    const { getByRole } = render(
      <Checkbox 
        id="test" 
        label="Test Label" 
        onChange={mock} 
        value={true} 
      />
    );

    fireEvent.click(getByRole("presentation"));
    expect(mock).toHaveBeenCalled();
  });

  it("should toggle the value when clicked", () => {
    
    const TestComponent = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Checkbox 
          checkboxTestId="checkbox"
          id="test" 
          label="Test Label" 
          onChange={() => setChecked(!checked)} 
          value={checked} 
        />
      );
    };

    const { getByTestId, getByRole } = render(
      <TestComponent/>
    );

    const inputElement = getByTestId("checkbox") as HTMLInputElement;
    expect(inputElement.checked).toBe(true);

    fireEvent.click(getByRole("presentation"));
    expect(inputElement.checked).toBe(false);
    
    fireEvent.click(getByRole("presentation"));
    expect(inputElement.checked).toBe(true);
  });
});