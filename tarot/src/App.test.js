import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('loads and shows deck', () => {
  render(<App />);

  const deck = screen.findByLabelText('Click to draw card from Tarot Deck');
  expect(deck).toBeTruthy();
});

test('draw a card from the deck', async () => {
  render(<App />);

    const button = await screen.findByLabelText('Click to draw card from Tarot Deck');
    user.click(button);

    await waitFor(() => {
      const cardInfo = screen.getAllByAltText(/info icon/i);
      expect(cardInfo).toBeTruthy();
    });
});

test('draw 3 cards from the deck', async () => {
  render(<App />);

  const button = await screen.findByLabelText('Click to draw card from Tarot Deck');
  user.click(button);
  const button2 = await screen.findByLabelText('Click to draw card from Tarot Deck');
  user.click(button2);
  const button3 = await screen.findByLabelText('Click to draw card from Tarot Deck');
  user.click(button3);

  const spreadTitles = await screen.findAllByRole('heading', {level: 2});
  const spreadInfoButtons = screen.getAllByAltText(/info icon/i);

  expect(spreadTitles).toHaveLength(10);
  expect(spreadInfoButtons).toHaveLength(3);
});
