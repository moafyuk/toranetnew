import React from 'react';

const ContactContainerBottom = ({ children }) => {
    return (
        <div className="w-full max-h-[55vh] min-h-[45vh] bg-white flex flex-col items-center justify-center">
            {children}
        </div>
    );
};

export default ContactContainerBottom;