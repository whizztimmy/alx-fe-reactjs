import { test, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todo items", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Master Jest")).toBeInTheDocument();
});
