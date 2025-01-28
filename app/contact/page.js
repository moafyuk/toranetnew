"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import ContactTopContainer from "../components/ContactTopContainer";
import ContactContainerBottom from '../components/ContactContainerBottom';
import ReCAPTCHA from "react-google-recaptcha";

// Dynamically import React Leaflet components
const MapWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayerWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false }); 
const MarkerWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const PopupWithNoSSR = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Page() {
    const [isClient, setIsClient] = useState(false);
    const [customIcon, setCustomIcon] = useState(null);
    const [captchaToken, setCaptchaToken] = useState(null);

    useEffect(() => {
        setIsClient(true);
        const setupLeaflet = async () => {
            const L = (await import('leaflet')).default;
            const icon = new L.Icon({
                iconUrl: '/TS-1-fav.png',
                iconSize: [60, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41],
            });
            setCustomIcon(icon);
        };
        setupLeaflet();
        return () => {
            setIsClient(false);
        };
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        telephone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleCaptchaChange = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert('Please complete the reCAPTCHA to submit the form.');
            return;
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, captchaToken })
        });

        if (response.ok) {
            alert('Email sent successfully!');
        } else {
            alert('Failed to send email.');
        }
    };

    const position = [51.240757,-0.767022];
    if (!isClient || !customIcon) {
        return null;
    }

    return (
        <>
            <ContactTopContainer imageSrc="/bimage-1-gs.png">
            <div className="flex flex-col items-center justify-center p-4 h-full sm:min-h-[70vh]">
                <div className="w-full max-w-lg p-6 bg-gray-800 bg-opacity-95 shadow-md rounded-md">
                    <h1 className="text-2xl text-center mb-4 text-white">Contact Page</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="block text-white">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-white">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            required
                        />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="block text-white">Company Name:</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                        </div>
                        <div>
                        <label className="block text-white">Telephone:</label>
                        <input
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                        </div>
                    </div>
                    <div>
                        <label className="block text-white">Message:</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 text-white"
                        required
                        />
                    </div>

                    <div className="flex justify-center mb-4">
                        <ReCAPTCHA
                        sitekey={"6LeSg5gqAAAAAKFLERNeuG6EJONhRrVazCdr94xv"}
                        onChange={handleCaptchaChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded"
                    >
                        Submit
                    </button>
                    </form>
                </div>
            </div>
            </ContactTopContainer>

            <ContactContainerBottom>
                <div className="w-full h-screen">
                    <MapWithNoSSR center={position} zoom={17} style={{ height: '100%', width: '100%' }}>
                        <TileLayerWithNoSSR
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <MarkerWithNoSSR position={position} icon={customIcon}>
                            <PopupWithNoSSR>Toranet Ltd, The Cloisters, 4 Hillside Road, Aldershot, Hampshire, GU11 3NB</PopupWithNoSSR>
                        </MarkerWithNoSSR>
                    </MapWithNoSSR>
                </div>
            </ContactContainerBottom>
        </>
    );
}
