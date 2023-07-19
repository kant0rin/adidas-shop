import Button, {ButtonProps} from './Button'
import {BUTTON_TEST_IDS} from "./Button";
import { render, screen } from '@testing-library/react';
import  "@testing-library/jest-dom";

const props = {
  children: 'xuy',
  variant: 'contained'
}

describe('Button', () => {
  test('should display provided children', () => {
    render(<Button {...props} children='213' variant='contained'/>)

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN)

    expect(children).toHaveTextContent(props.children)
  })

})
