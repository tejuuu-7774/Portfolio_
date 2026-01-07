import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-6 max-w-xl">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="text-gray-600">
        Have a question, opportunity, or just want to say hello?
      </p>

      <ContactForm />
    </section>
  );
}
