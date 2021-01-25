import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import { PostList } from './forum/PostList'
import Post from "./forum/Post";
import React from "react"

//Forum
it("post list renders correctly", () => {
  const {queryByTestId, queryByPlaceholderName} = render(<PostList/>)
  expect(queryByTestId("post-list")).toBeTruthy()
})

it("post renders correctly", () => {
  const {queryByTestId, queryByPlaceholderName} = render(<Post/>)
  expect(queryByTestId("post")).toBeTruthy()
})