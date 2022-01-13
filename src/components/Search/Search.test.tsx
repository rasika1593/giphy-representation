import {render, screen, fireEvent, waitFor} from "@testing-library/react"
import Search from "./Search"
import { Provider } from "react-redux";
import {store}  from"../../store/store"


it('renders without crashing', async() => {
    render(
        <Provider store={store}>
        <Search/>
    </Provider> );
});

it('it should allow letter to be inputed ', async() => {
    const { findByTestId }=render(
        <Provider store={store}>
        <Search/>
    </Provider> );
     const inputElement = findByTestId('search');
     fireEvent.change(await inputElement, { target: { value: "a" } });
     waitFor(() => {
     expect(inputElement).toBe('a')
     })
});

it('it should allow letter to be inputed ', async() => {
    const onSearchSubmit = jest.fn();
    const { findByTestId }=render(
        <Provider store={store}>
            <Search/>
        </Provider> );
     const submitButton = findByTestId('submitButton');
     fireEvent.click(await submitButton);
     waitFor(() => {
     expect(onSearchSubmit).toBeCalled()
     });
});




