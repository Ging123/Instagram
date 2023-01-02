import {render, screen} from "@testing-library/react";
import Box from ".";

it("Should be render", async () => {

  render(
    <Box testId="box">
      <div data-testid="custom-div">Just a test</div>
    </Box>
  );
  
  expect(screen.getByTestId("box")).toBeInTheDocument();
  expect(screen.getByTestId("custom-div")).toBeInTheDocument();
});