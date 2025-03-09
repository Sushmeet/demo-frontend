// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { expect, test, describe } from 'vitest';
// import App from './App';

// describe('Button Accessibility', () => {
//   test('button is keyboard accessible', async () => {
//     render(<App />);
    
//     // Get button by its text content
//     const button = screen.getByRole('button', { name: /toggle theme/i });
    
//     // Check if button is in the accessibility tree
//     expect(button).toBeInTheDocument();
    
//     // Verify button can receive focus
//     button.focus();
//     expect(button).toHaveFocus();
    
//     // Simulate keyboard interaction
//     const user = userEvent.setup();
//     await user.tab();
//     expect(button).toHaveFocus();
    
//     // Test keyboard activation
//     await user.keyboard('{Enter}');
//     // You could add assertions here for the button's onClick behavior
//   });

//   test('button has correct ARIA attributes', () => {
//     render(<App />);
    
//     const button = screen.getByRole('button', { name: /toggle theme/i });
    
//     // Verify button is not disabled
//     expect(button).not.toHaveAttribute('aria-disabled');
    
//     // Verify button has the correct role
//     expect(button).toHaveAttribute('type', 'button');
    
//     // Verify icon is properly labeled
//     const icon = button.querySelector('svg');
//     expect(icon).toHaveAttribute('aria-hidden', 'true');
//   });
// });