import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('loads and shows deck', async () => {
  render(<App />);

  const deck = await screen.findByLabelText('Click to draw card from Tarot Deck');
  expect(deck).toBeTruthy();
});

test('draw a card from the deck', async () => {
  render(<App />);

  const button = await screen.findByLabelText('Click to draw card from Tarot Deck');
  user.click(button);

  const cardInfo = screen.findByLabelText('More information about');
  expect(cardInfo).toBeTruthy();
});