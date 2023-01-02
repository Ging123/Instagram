import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useState } from "react";
import Input from ".";

it("Verify if it's possible to type in the input", async () => {
  render( <Component type="text"/> );
  await userEvent.click(await screen.findByDisplayValue(""));

  await userEvent.keyboard("Just a little test");
  const foundTextTypedInInput = await screen.findByDisplayValue("Just a little test");
  
  expect(foundTextTypedInInput).toBeTruthy();
});


it("Verify if password visibility changes", async () => {
  render( <Component type="password"/> );
  await userEvent.click(await screen.findByDisplayValue(""));

  await userEvent.keyboard("Just a little test");
  await userEvent.click(await screen.findByText("Show"));

  const foundHideOption = await screen.findByText("Hide");
  expect(foundHideOption).toBeDefined();

  const input = screen.getByDisplayValue("Just a little test");
  expect(input).toHaveAttribute("type", "text");
});


function Component(props:{type:"text"|"password"}) {
  const [ text, setText ] = useState("");

  return (
    <Input
      id="test"
      onChange={(e) => setText(e.target.value)}
      placeholder="Just a test"
      type={ props.type }
      value={ text }
    />
  );
}