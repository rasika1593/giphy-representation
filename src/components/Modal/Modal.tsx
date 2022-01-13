import React, { FC } from 'react';
import './Style.css';

type ModalProps = {
  show : boolean,
  setShowModal : (show: boolean) => void;
  selectedgif : any
};

const Modal: FC<ModalProps> = ({show, setShowModal, selectedgif}) => {
    return(  
        <div data-testid="modal">
            {show ?
                <div className="modal show fade modal-style">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title title-style" id="exampleModalLabel">{selectedgif.title}</h5>
                                <button type="button" className="btn-close" onClick={()=>setShowModal(false)} ></button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedgif.original.url} className='img-style'/>
                            </div>
                        </div>
                    </div>
                </div>
            : null}
    </div>)
};

export default Modal;

