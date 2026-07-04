import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LetsConnect from '../../Resume/LetsConnect';

describe('LetsConnect', () => {
  it('renders the references section', () => {
    render(<LetsConnect />);

    expect(
      screen.getByText(/Challenge me with your crazy idea/i),
    ).toBeInTheDocument();
  });

  it('has a link to the contact page', () => {
    render(<LetsConnect />);

    const link = screen.getByRole('link', {
      name: /get in touch/i,
    });
    expect(link).toHaveAttribute('href', '/contact');
  });

  it('has an anchor for navigation', () => {
    render(<LetsConnect />);

    const anchor = document.getElementById('connect');
    expect(anchor).toBeInTheDocument();
  });

  it('displays as minimal inline text', () => {
    render(<LetsConnect />);

    const paragraph = screen.getByText(/Challenge me with your crazy idea/i);
    expect(paragraph.tagName).toBe('P');
  });
});
