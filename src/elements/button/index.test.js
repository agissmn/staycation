import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index"; // Pastikan nama komponen sesuai dengan yang Anda ekspor

test("Should not allow click button if isDisabled is present", () => {
  const isDisabled = true;
  const { container } = render(
    <Button disabled={isDisabled}>
      <span className="disabled">Disabled</span>
    </Button>
  );
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const isLoading = true; // Definisikan isLoading
  const { container, getByText } = render(
    <Button loading={isLoading}>
      <span className="loading">loading</span>
    </Button>
  );

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.loading")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});