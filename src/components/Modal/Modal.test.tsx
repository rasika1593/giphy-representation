import {render, screen} from "@testing-library/react"
import Modal from "./Modal"
import { Provider } from "react-redux";
import {store}  from"../../store/store"



it('renders without crashing', () => {
    const setShowModal = jest.fn();
    let data={
        'title':'test',
        'original':{
            'images':{
                'original':{
                    url:"https://dummy.png"
                }
            }
        }
    }
    render(
        <Provider store={store}>
        <Modal show={true} setShowModal={setShowModal} selectedgif={data} />
    </Provider> );
});
