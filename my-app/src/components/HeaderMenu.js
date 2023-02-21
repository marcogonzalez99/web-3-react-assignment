import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the modal's parent element


const HeaderMenu = function (props) {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <nav className='absolute inset-y-4 right-0 p-3'>
            <button className='text-xl bg-[#3aafa9] mx-2 px-5 rounded hover:bg-sky-700' onClick={openModal}>About</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={{
                    content:{
                        width: '50%',
                        height: '50%',
                        margin: 'auto'
                    }
                }}>
                    <h1 className='text-3xl font-bold text-black mb-5'>About</h1>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Group Memebers:</span>
                        <span>Marco Gonzalez, Matthew Pham</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Github Link:</span>
                        <span><a className='text-blue-600 text-xl underline' href='https://github.com/marcogonzalez99/web-3-react-assignment'>GitHub Link</a></span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Technology Used:</span>
                        <span>Visual Studio Code, Discord - Communication</span>
                    </div>
                    <div className="mb-4">
                        <span className="mr-2 text-gray-700 font-semibold">Third Party Source Code:</span>
                        <div className='flex flex-wrap'>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://tailwindcss.com/'>Tailwindcss Docs</a></li>
                            {/* <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li>
                            <li className='mr-2'><a className='text-blue-600 text-xl underline' href='https://www.npmjs.com/package/react-modal'>React-modal</a></li> */}
                        </div>
                            
                    </div>
                    <button className='absolute bottom-5 left-5 text-xl text-white bg-[#3aafa9] mx-2 px-5 rounded hover:bg-sky-700' onClick={closeModal}>Close Modal</button>
            </Modal>
        </nav>
    );
}

export default HeaderMenu;