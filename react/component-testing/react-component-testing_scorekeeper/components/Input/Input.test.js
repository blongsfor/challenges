import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";
import "@testing-library/jest-dom/extend-expect";

test("renders a label and an input with the correct attributes", () => {
  render(<label htmlFor="nameOfGame" />);
  const nameLabel = screen.getByLabelText("nameOfGame");
  expect(nameLabel).toBeInTheDocument();
  const labelElement = screen.getByLabelText("nameOfGame");
  expect(labelElement).toHaveAttribute("for", "nameOfGame");

  render(<Input />);
  const placeholderInput = screen.getByPlaceholderText(
    placeholder,
    "e.g. Dodelido"
  );
  expect(placeholderInput).toBeInTheDocument();
});

//test("calls callback on every user input", async () => {});
