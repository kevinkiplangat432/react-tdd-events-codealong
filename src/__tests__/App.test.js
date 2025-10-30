import { render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
//  test initial state of the page
test("pizza checkbox is initially unchecked", () => {
    render(<App />);
    const  addPeperoni = screen.lgetByRole("checkbox", { name: /add peperoni/i });
    expect(addPeperoni).not.toBeChecked();
})

test("toppings list initially contains only cheese", () => {})

// test the effect of  clicking the checkbox 


// test the effect of  clicking the chheckbox a second time
