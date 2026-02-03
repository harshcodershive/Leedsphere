import React, { useState } from "react";
import Modal from "../../shared/ui/Modal";
import Input from "../../shared/ui/Input";
import Button from "../../shared/ui/Button";
import { CheckCircle } from "lucide-react";

export default function BookDemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setForm({ name: "", email: "", company: "", phone: "" });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={submitted ? undefined : "Book a Demo"}
      description={submitted ? undefined : "Fill in your details and we'll get back to you shortly."}
      className="max-w-[460px]"
    >
      {submitted ? (
        <div className="flex flex-col items-center text-center py-4 space-y-3">
          <CheckCircle className="w-12 h-12 text-green-500" />
          <h3 className="text-lg font-semibold">Thank you!</h3>
          <p className="text-sm text-muted-foreground">
            We've received your request. Our team will reach out to you soon.
          </p>
          <Button onClick={handleClose} className="mt-2">Close</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            name="company"
            label="Company Name"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
            error={errors.company}
          />
          <Input
            name="phone"
            type="tel"
            label="Phone Number"
            placeholder="+44 7000 000000"
            value={form.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <Button type="submit" className="w-full">
            Submit Request
          </Button>
        </form>
      )}
    </Modal>
  );
}
