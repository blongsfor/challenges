import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
import "@testing-library/jest-dom/extend-expect";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      name="nameOfGame"
    />
  );

  const nameLabel = screen.getByLabelText("Name of game");
  expect(nameLabel).toBeInTheDocument();
  const placeholderInput = screen.getByPlaceholderText("e.g. Dodelido");
  expect(placeholderInput).toBeInTheDocument();
});

//test("calls callback on every user input", async () => {});
