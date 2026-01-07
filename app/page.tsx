import ResumeButton from "@/components/ResumeButton";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6 max-w-3xl">
      <h1 className="text-4xl font-bold leading-tight">
        Hi, I’m Tejaswini 👋
      </h1>

      <p className="text-lg text-gray-600">
        A frontend-focused developer who enjoys building clean,
        thoughtful web experiences using React and Next.js.
      </p>

      <p className="text-gray-600">
        I care about structure, performance, and writing code that
        feels calm and readable — not rushed.
      </p>

      <div className="flex gap-4 mt-4">
        <a
          href="/projects"
          className="px-5 py-2 rounded-md bg-black text-white text-sm"
        >
          View Projects
        </a>

        <ResumeButton />
      </div>
    </section>
  );
}
