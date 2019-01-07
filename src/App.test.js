import React from "react";
import ReactDOM from "react-dom";
import App, { syncCards, componentWillMount } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Fake text", () => {
  expect(true).toBeTruthy();
});

const checkSyncCards = jest.fn(syncCards);

test("check", () => {
  expect(checkSyncCards).resolves();
});
