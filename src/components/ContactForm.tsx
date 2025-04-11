
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your inquiry. We'll be in touch soon.", {
      duration: 5000,
    });
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <div className="bg-white rounded-md shadow-sm p-6 md:p-8">
      <h3 className="font-playfair text-2xl text-altiva-purple-dark font-semibold mb-6">
        Craft Your Journey
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="name" 
              className="block font-montserrat text-sm font-medium text-altiva-gray-dark mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-altiva-gray-light/50 focus-visible:ring-altiva-purple-light"
            />
          </div>
          <div>
            <label 
              htmlFor="email" 
              className="block font-montserrat text-sm font-medium text-altiva-gray-dark mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-altiva-gray-light/50 focus-visible:ring-altiva-purple-light"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="phone" 
              className="block font-montserrat text-sm font-medium text-altiva-gray-dark mb-2"
            >
              Phone
            </label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-altiva-gray-light/50 focus-visible:ring-altiva-purple-light"
            />
          </div>
          <div>
            <label 
              htmlFor="interest" 
              className="block font-montserrat text-sm font-medium text-altiva-gray-dark mb-2"
            >
              Primary Interest
            </label>
            <Select onValueChange={handleSelectChange} value={formData.interest}>
              <SelectTrigger className="border-altiva-gray-light/50 focus:ring-altiva-purple-light">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portugal">Portugal</SelectItem>
                <SelectItem value="france">France</SelectItem>
                <SelectItem value="italy">Italy</SelectItem>
                <SelectItem value="multiple">Multiple Destinations</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label 
            htmlFor="message" 
            className="block font-montserrat text-sm font-medium text-altiva-gray-dark mb-2"
          >
            Tell us about your dream journey
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="border-altiva-gray-light/50 focus-visible:ring-altiva-purple-light resize-none"
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-altiva-purple-tertiary hover:bg-altiva-purple-dark text-white"
        >
          Submit Inquiry
        </Button>

        <p className="text-center font-montserrat text-xs text-altiva-gray-neutral">
          By submitting this form, you agree to our privacy policy and terms.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
