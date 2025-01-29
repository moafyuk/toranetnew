import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-center py-10">
      <div className="text-white max-w-4xl mx-auto">
        <p className="text-sm mb-4">© 2023 Toranet. All rights reserved.</p>
        <p className="text-sm mb-4">
          Contact us: <a href="tel:+441252811336" className="text-blue-400 hover:underline">+44 1252 811336</a> |{' '}
          <a href="mailto:info@torasense.com" className="text-blue-400 hover:underline">info@toranet.net</a>
        </p>
        <p className="text-sm mb-4">
          Registered Address: Toranet Ltd, The Cloisters, 4 Hillside Road, Aldershot, Hampshire, GU11 3NB
        </p>
        {/*<p className="text-sm">
          <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> |{' '}
          <a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a> |{' '}
          <a href="/accessibility" className="text-blue-400 hover:underline">Accessibility</a>
        </p>
        */}
      </div>
    </footer>
  );
};

export default Footer;
