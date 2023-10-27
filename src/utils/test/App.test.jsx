import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../../App';

describe("App test", () => {

  test("Display 'How to use' information and images", () => {
    render(<App />);

    // text
    const instruction1 = screen.queryByText(/Select the money by clicking on the equivalent button./i);
    const instruction2 = screen.queryByText(/Select your product or products./i);
    const instruction3 = screen.queryByText(/View your product and credit on the screen./i);
    const instruction4 = screen.queryByText(/Press if you want to get your credit back./i);

    expect(instruction1).not.toBeNull();
    expect(instruction2).not.toBeNull();
    expect(instruction3).not.toBeNull();
    expect(instruction4).not.toBeNull();
    
    // images
    expect(screen.getByAltText('insertCoin')).toBeDefined();
    expect(screen.getByAltText('choice')).toBeDefined();
    expect(screen.getByAltText('pick')).toBeDefined();
  });

  test("Display product name, prices and quantities", () => {
    render(<App />);

    const productNames = screen.getAllByText(/Water|Juice|Soda|Hot drink|Cookies|Chips|Candy|Chocolate/i);
    const productPrices = screen.getAllByText(/\$\d+\.\d{2}/);
    const ProductQuantities = screen.getAllByText(/[0-9]/);

    expect(productNames).toHaveLength(8);
    expect(productPrices).toBeDefined();
    expect(ProductQuantities).toBeDefined();

    // img 
    const images = screen.getAllByAltText('itemImg');

    images.forEach((image) => {
      expect(image).toBeDefined();
  
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
      expect(image.src).toBeDefined();
    });
  });

  test('Allows users to select a product', () => {
    const { container } = render(<App />);

    const product = container.querySelector('.Products');
    fireEvent.click(product);

    const selectedProduct = screen.getByText('Water $0.65');
    expect(selectedProduct).toBeDefined();

    // Show product info on the screen
    expect(screen.queryByText(/Product:|You had:|You get:|Not Enough Credits!/i)).not.toBeNull();
  });
  
  test('Display a message when there is an error', () => {
    const { container } = render(<App />);

    const product = container.querySelector('.Products');
    fireEvent.click(product);

    const errorMessage = screen.getByText(/Not Enough Credits!/i);
    expect(errorMessage).toBeDefined();
  });

  // Actions panel
  
  test("Hide output screen info at the start", () => {
    render(<App />);

    expect(screen.queryByText(/Product:|You had:|You get:|Not Enough Credits!/i)).toBeNull();
  });

  test("Display coins and button at the start", () => {
    const { container } = render(<App />);
    
    const buttonElement = container.querySelector('.ReturnCoin__Button');
    expect(buttonElement).not.toBeNull();

    expect(screen.getByAltText('five')).toBeDefined();
    expect(screen.getByAltText('ten')).toBeDefined();
    expect(screen.getByAltText('quarter')).toBeDefined();
    expect(screen.getByAltText('dollar')).toBeDefined();
  });
  
  test("Display coins and button at the start", () => {
    const { container } = render(<App />);
    
    const buttonElement = container.querySelector('.ReturnCoin__Button');
    expect(buttonElement).not.toBeNull();

    expect(screen.getByAltText('five')).toBeDefined();
    expect(screen.getByAltText('ten')).toBeDefined();
    expect(screen.getByAltText('quarter')).toBeDefined();
    expect(screen.getByAltText('dollar')).toBeDefined();
  });

});