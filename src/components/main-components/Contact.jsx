import { useState, useEffect } from "react";

export default function Contact(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [messageLength, setMessageLength] = useState(0);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Live character count
    useEffect(() => {
        setMessageLength(message.length);
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        setNameError("");
        setEmailError("");
        setMessageError("");
        setSuccessMsg("");

        if (!name.trim()) {
            setNameError("Name is required.");
            valid = false;
        }

        if (!email.trim()) {
            setEmailError("Email is required.");
            valid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email.");
            valid = false;
        }

        if (message.trim().length < 10) {
            setMessageError("Message must be at least 10 characters.");
            valid = false;
        } else if (message.trim().length > 500) {
            setMessageError("Message cannot exceed 500 characters.");
            valid = false;
        }

        if (valid) {
            setSuccessMsg("✅ Your message has been sent successfully! Thanks for Contacting me.");
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
            setMessageLength(0);
            setTimeout(() => {
                setSuccessMsg("");
            }, 5000);
        }
    };

    return (
        <section id="contact" className="bg-[var(--bg-color)] py-16 px-6 sm:px-10 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="contact-heading text-4xl sm:text-5xl font-bold text-[var(--text-color)] text-center mb-12">
                    {props.mssg}
                </h1>

                <form onSubmit={handleSubmit} className="w-full bg-[var(--card-bg)] shadow-md rounded-lg p-8 space-y-6">
                    <div className="flex flex-col mt-8 md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                        <div className="w-full">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                        </div>

                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                        </div>
                    </div>

                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\+?\d*$/.test(val)) {
                                setMobile(val);
                            }
                        }}
                        pattern="^\+?\d{10,15}$"
                        title="Enter a valid phone number with 10 to 15 digits, optionally starting with +"
                        className="w-full p-3 border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-color)] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />

                    <div>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxLength={500}
                            className="w-full p-3 border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-color)] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                        <div className="flex justify-between text-sm mt-1">
                            {messageError && <p className="text-red-500">{messageError}</p>}
                            <span className="text-gray-400">{messageLength} / 500</span>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="cursor-pointer mb-8 sm:m-auto bg-[var(--btn-bg)] text-[var(--btn-text)] font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
                        >
                            Send Message
                        </button>
                    </div>

                    {successMsg && (
                        <p className="text-green-500 font-medium text-center">
                            {successMsg}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}