import FAQItem from "./FAQItem";
import { faqs } from "../../constants/faqs";

function FAQ() {
  return (
    <section
      id="faq"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Find answers to common questions about D Learn.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              {...faq}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;