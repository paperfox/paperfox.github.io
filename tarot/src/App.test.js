import { render, screen, within, act } from '@testing-library/react'
import user from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

test('loads and shows deck', () => {
  render(<App />);

  const deck = screen.findByLabelText('Click to draw card from Tarot Deck');
  expect(deck).toBeTruthy();
});

// Deck Tab

test('draw a card from the deck', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));

  const cardInfo = screen.getAllByAltText(/info icon/i);

  expect(cardInfo).toBeTruthy();
});

test('draw 3 cards from the deck', async () => {
  const { container } = render(<App />);

  // draw 3 cards
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));

  const spreadTitles = within(container.querySelector('#paperfox--tabpane-TarotApp')).getAllByRole('heading', { level: 2 });

  expect(spreadTitles).toHaveLength(3);
});

test('deck disabled after drawing 3 cards', async () => {
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
  user.click(screen.getByTestId('info-modal-trigger'));

  const closeButton = await screen.findByRole('button', {name: 'Close'});

  expect(closeButton).toBeTruthy();
});

test('drawn card details modal closes', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('Click to draw card from Tarot Deck'));
  user.click(screen.getByTestId('info-modal-trigger'));

  const closeButton = screen.getByRole('button', { name: /close/i });
  await act(async () => {
    userEvent.click(closeButton);
  });

  expect(screen.queryByRole('dialog')).toBeNull();
});

// Card List Tab

test('select tab and view full list of cards and descriptions', async () => {
  const { container } = render(<App />);

  user.click(await screen.findByRole('tab', {name: 'Card List', selected: false }));
  const aboutTabClicked = await screen.findByRole('tab', {name: 'Card List', selected: true });
  const cardTitles = within(container.querySelector('#paperfox--tabpane-TarotCardList')).getAllByRole('heading', { level: 3 });

  expect(aboutTabClicked).toBeTruthy();
  expect(cardTitles).toHaveLength(78);
});

test('view only completed cards and descriptions', async () => {
  const { container } = render(<App />);

  user.click(screen.getByRole('button', {name: 'Completed'}));
  const cardTitles = within(container.querySelector('#paperfox--tabpane-TarotCardList')).getAllByRole('heading', { level: 3 });

  expect(cardTitles).toHaveLength(17);
});

test('view all started cards and descriptions', async () => {
  const { container } = render(<App />);

  user.click(screen.getByRole('button', {name: 'Started'}));
  const cardTitles = within(container.querySelector('#paperfox--tabpane-TarotCardList')).getAllByRole('heading', { level: 3 });

  expect(cardTitles).toHaveLength(37);
});

test('clear card filters', async () => {
  const { container } = render(<App />);

  user.click(screen.getByRole('button', {name: 'Clear Filters'}));
  const cardTitles = within(container.querySelector('#paperfox--tabpane-TarotCardList')).getAllByRole('heading', { level: 3 });

  expect(cardTitles).toHaveLength(78);
});

test('open card image view modal', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('More information about The Fool'));

  const closeButton = await screen.findByRole('button', {name: 'Close'});

  expect(closeButton).toBeTruthy();
});

test('drawn card image view modal closes', async () => {
  render(<App />);

  user.click(await screen.findByLabelText('More information about The Fool'));

  const closeButton = screen.getByRole('button', { name: /close/i });
  await act(async () => {
    userEvent.click(closeButton);
  });

  expect(screen.queryByRole('dialog')).toBeNull();
});

// About Tab

test('select and view about page', async () => {
  render(<App />);

  user.click(await screen.findByRole('tab', {name: 'About', selected: false }));
  const aboutTabClicked = await screen.findByRole('tab', {name: 'About', selected: true });

  expect(aboutTabClicked).toBeTruthy();
});