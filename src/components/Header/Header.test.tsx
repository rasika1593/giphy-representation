import {render, screen} from "@testing-library/react"
import Header from "./Header"
import { Provider } from "react-redux";
import {store}  from"../../store/store"

it('renders without crashing', () => {
    render(
        <Provider store={store}>
        <Header/>
    </Provider> );
});

it('title is present', async () =>{
	render (
    <Provider store={store}>
        <Header/>
    </Provider> );
	const element = screen.getByText(/Giphy Representation/i);
	expect(element).toBeInTheDocument();
})


