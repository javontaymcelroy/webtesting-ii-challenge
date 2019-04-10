import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard.js';
import Display from '../Display/Display.js';

describe('<Dashboard> and <Display> through the Dash', () => {
  // --------------------------- STRIKES  ------------------------------ //
  it('strike btn increments strike (0 - 1)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/strike/i);

    fireEvent.click(btn);
    getByText(/Strikes: 1/i);
  });

  it('strike btn increments strike (1 - 2)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/strike/i);

    fireEvent.click(btn);
    getByText(/Strikes: 2/i);
  });

  it('strike btn increments strike (2 - 0)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/strike/i);

    fireEvent.click(btn);
    getByText(/Strikes: 0/i);
  });

  // --------------------------- BALLS  ------------------------------ //
  it('ball btn increments ball (0 - 1)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/ball/i);

    fireEvent.click(btn);
    getByText(/Balls: 1/i);
  });

  it('ball btn increments ball (1 - 2)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/ball/i);

    fireEvent.click(btn);
    getByText(/Balls: 2/i);
  });

  it('ball btn increments ball (2 - 3)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/ball/i);

    fireEvent.click(btn);
    getByText(/Balls: 3/i);
  });

  it('ball btn increments ball (3 - 0)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/ball/i);

    fireEvent.click(btn);
    getByText(/Balls: 0/i);
  });

  // --------------------------- FOULS  ------------------------------ //
  it('foul btn increments strike (0 - 1)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/foul/i);

    fireEvent.click(btn);
    getByText(/Strikes: 1/i);
  });

  it('foul btn increments strike (1 - 2)', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/foul/i);

    fireEvent.click(btn);
    getByText(/Strikes: 2/i);
  });

  it('foul will not increment strike beyond 2', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/foul/i);

    fireEvent.click(btn);
    getByText(/Strikes: 2/i);
  });

  // --------------------------- HITS  ------------------------------ //
  it('add a ball in prep for hit function', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/ball/i);

    fireEvent.click(btn);
    getByText(/Balls: 1/i);
  });

  it('hit btn resets stats', () => {
    const { getByText } = render(<Dashboard />, <Display />);

    const btn = getByText(/hit/i);

    fireEvent.click(btn);
    getByText(/Strikes: 0/i);
    getByText(/Balls: 0/i);
  });
});
