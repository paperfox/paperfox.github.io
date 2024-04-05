import { findByText, render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

test('loads and shows deck', () => {
  render(<App />);

  const deck = screen.findByLabelText('Click to draw card from Tarot Deck');
  expect(deck).toBeTruthy();
});

test('draw a card from the deck', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));

  const cardInfo = screen.getAllByAltText(/info icon/i);
  expect(cardInfo).toBeTruthy();
});

test('draw 3 cards from the deck', async () => {
  render(<App />);

  // draw 3 cards
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));

  const spreadInfoButtons = screen.getAllByAltText(/info icon/i);

  expect(spreadInfoButtons).toHaveLength(3);
});

test('disabled after drawing 3 cards', async () => {
  render(<App />);

  // draw 3 cards
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));

  const disabledDeck = await screen.findByLabelText(/Click to draw card from Tarot Deck/i);

  expect(disabledDeck).toBeDisabled();
});

test('open drawn card details modal', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.getByTestId('info-modal-trigger'));

  const closeButton = await screen.findByRole('button', {name: 'Close'});

  expect(closeButton).toBeTruthy();
});

test('select and view about page', async () => {
  render(<App />);

  user.click(await screen.findByRole('tab', {name: 'About', selected: false }));
  const aboutTabClicked = await screen.findByRole('tab', {name: 'About', selected: true });

  expect(aboutTabClicked).toBeTruthy();
});