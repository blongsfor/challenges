import { render, screen } from "@testing-library/react";
import Navigation from ".";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const playLink = screen.getByRole("link", { name: /play/i }); // /i damit case-sensitivity egal ist
  const historyLink = screen.getByRole("link", { name: /history/i });
  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});
