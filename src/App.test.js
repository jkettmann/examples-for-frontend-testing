import React from 'react';
import axios from 'axios';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('App', () => {
  test('renders search results', async () => {
    axios.get.mockResolvedValue([
      { id: 1, text: 'First search result' },
      { id: 2, text: 'Second search result' },
      { id: 3, text: 'Third search result' }
    ]);

    const { findByPlaceholderText, findByText, getByText } = render(<App />);

    const searchInput = await findByPlaceholderText('Search value');
    fireEvent.change(searchInput, { target: { value: 'search-string' } });

    const searchButton = getByText('Search');
    fireEvent.click(searchButton);

    expect(axios.get).toHaveBeenCalledWith('https://some-api.com/search-string');

    await findByText('First search result');
    await findByText('Second search result');
    await findByText('Third search result');
  });
});
