"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate in real-time
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !value || !emailRegex.test(value) ? "Please enter a valid email" : "",
      }));
    } else if (name === "name") {
      setErrors((prev) => ({
        ...prev,
        name: !value ? "Name is required" : "",
      }));
    } else if (name === "message") {
      setErrors((prev) => ({
        ...prev,
        message: !value ? "Message cannot be empty" : "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check errors before submitting
    if (!formData.name || !formData.email || !formData.message || Object.values(errors).some(Boolean)) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/yourFormId", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex-1">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-lg mx-auto p-6"
      >
        <h1 className="text-2xl font-semibold text-center mb-4">Hey There!</h1>
        <h3 className="font-medium text-center mb-4">
          Got a question, a cool idea, or spotted a bug crawling on my site? Drop me a message below — I promise I don’t bite!
        </h3>

        <div className="flex flex-col">
          <label htmlFor="name" className='label-field'>Your Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className='input-field' />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className='label-field'>Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className='input-field' />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className='label-field'>Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className='textarea-field' />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <Button type="submit" className="mt-2">
          {status === "sending" ? "Sending..." : "Send"}
        </Button>

        {status === "success" && (
          <p className="text-green-500 text-center mt-2">Message sent! Thank you.</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center mt-2">Something went wrong. Try again.</p>
        )}
      </form>
    </main>
  );
}
