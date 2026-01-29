import { useState } from "react";
import ChocoChunk from "../assets/ChocoChunk.png";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our menu, select your items, add them to cart, and proceed to checkout. You can pay via Razorpay or Phonepe.",
  },
  {
    question: "What are your delivery areas?",
    answer:
      "We currently deliver within a 10km radius of our kitchen. Enter your pincode at checkout to confirm delivery availability.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "For regular orders, we recommend placing orders at least 24 hours in advance. For large or custom orders, please contact us 48-72 hours ahead.",
  },
  {
    question: "Do you offer customizations?",
    answer:
      "Yes! We can accommodate dietary restrictions and custom flavors. Please mention your requirements in the order instructions.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer refunds for quality issues only. Please contact us within 24 hours of delivery with photos if there's any issue with your order.",
  },
];

export default function Info() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-serif text-primary mb-2">INFORMATION</h2>
        <div className="flex justify-center gap-1">
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
          <span className="text-primary">✿</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* How It Works */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-serif text-primary mb-6">HOW IT WORKS</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Browse Menu</h4>
                <p className="text-sm text-gray-600">
                  Check out our delicious cookies and brownies. Choose your
                  favorites!
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Customize & Add to Cart
                </h4>
                <p className="text-sm text-gray-600">
                  Select your box size and quantity. Add items to your cart.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Checkout & Pay
                </h4>
                <p className="text-sm text-gray-600">
                  Enter your delivery details and pay securely via Razorpay or
                  Phonepe.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Receive & Enjoy
                </h4>
                <p className="text-sm text-gray-600">
                  Your fresh baked goodies will be delivered right to your
                  doorstep!
                </p>
              </div>
            </div>
          </div>
          <img
            src={ChocoChunk}
            alt="Cookie"
            className="w-24 h-24 rounded-full mt-6 mx-auto opacity-80"
          />
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-serif text-primary mb-6">FAQS</h3>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-3">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex justify-between items-center"
                >
                  <span className="font-medium text-gray-800 text-sm">
                    {faq.question}
                  </span>
                  <span className="text-primary">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-sm text-gray-600 pl-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-serif text-primary mb-6">Contact Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary text-xl">📍</span>
            </div>
            <h4 className="font-semibold text-primary mb-1">Location</h4>
            <p className="text-sm text-gray-600">Mumbai, India</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary text-xl">📧</span>
            </div>
            <h4 className="font-semibold text-primary mb-1">Email</h4>
            <p className="text-sm text-gray-600">hello@crumbs.com</p>
          </div>
          <div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-primary text-xl">📱</span>
            </div>
            <h4 className="font-semibold text-primary mb-1">Phone</h4>
            <p className="text-sm text-gray-600">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  );
}
