import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from ".";

it("Should be render", async () => {
  let number = 0;

  render(
    <Button
      className="test" 
      content="Test button"
      onClick={ () => number += 1 }
      type="button"
    />
  );

  await userEvent.click(screen.getByText("Test button"));
  expect(number).toBe(1);
});