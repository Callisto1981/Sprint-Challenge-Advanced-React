import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  const { getByText, getByTestId } = render(<App />);

  const text = getByText(/players/i);
  const id = getByTestId(/app/i);

  expect(text).toBeInTheDocument();
  expect(id).toBeInTheDocument();
});

test("another test", () => {
  const { getByTestId } = render(<App />);

  const id = getByTestId(/app/i);

  expect(id).toBeInTheDocument();
});
