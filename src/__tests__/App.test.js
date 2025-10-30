import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
//Test the initial state of the page
test("pizza checkbox is initially unchecked", () => {
    render(<App />);

    const addPepperoni  = screen.getByRole("checkbox", { name: /Add Pepperoni/i });

    expect(addPepperoni).not.toBeChecked();
});

//Test the initial state of the page
test("toppings list initially contains only cheese", () => {
    render(<App />);

    //Check the number of list items(cheese only)
    expect(screen.getAllByRole("listitem").length).toBe(1);

    //check that cheese is present 
    expect (screen.getByText("Cheese")).toBeInTheDocument();

    //check that pepperoni is not present
    expect (screen.queryByText("Pepperoni")).not.toBeInTheDocument()
    
});

//Test the effect of clicking the checkbox
test("checkboxes become checked when user clicks them", () => {
    render(<App />);

    const addPepperoni  = screen.getByRole("checkbox", { name: /add pepperoni/i });

    userEvent.click(addPepperoni);
    expect(addPepperoni).toBeChecked();
})

test("toppings appear in toppings list when checked", () => {
    render(<App />);
    
    const addPepperoni  = screen.getByRole("checkbox", { name: /add pepperoni/i });

    userEvent.click(addPepperoni);

    expect(screen.getAllByRole("listitem").length).toBe(2);
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.getByText("Pepperoni")).toBeInTheDocument();

    userEvent.click(addPepperoni);

    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("Cheese")).toBeInTheDocument();
    expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
})