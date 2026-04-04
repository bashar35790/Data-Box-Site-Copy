import dashboard from "../../../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpg";
import {
  MessageSquare,
  Layout,
  LineChart,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

export default function Demo() {
  return (
    <section id="demo" className="">
      <div className="cssContainer">
        <header className="header">
          <h2 className="max-w-200 mx-auto ">
            Get answers from your data{" "}
            <span className="linearText">instantly</span>
          </h2>
          <p className="max-w-175 mx-auto ">
            Getting answers from your data used to take hours. Not anymore. With
            Genie, our AI analyst, you can ask a question and get a clear answer
            in seconds.
          </p>
        </header>

        {/* Background Gradient Wrapper */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden pb-16 px-6 sm:px-12 bg-linear-to-b from-transparent via-[#f8e1ec] to-[#8b91ff]">
          {/* Dashboard Image Container */}
          <div className="relative mx-auto max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 mb-16">
            {/* Replace 'dashboard-screenshot.png' with your actual image path */}
            <img
              src={dashboard}
              alt="Genie Dashboard Interface"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Feature 1: Ask */}
            <div className="flex flex-col gap-3">
              <MessageSquare
                className="text-emerald-500 w-8 h-8"
                strokeWidth={1.5}
              />
              <p className="text-[15px] leading-snug">
                <span className="font-bold">Ask</span> business performance
                questions in plain language
              </p>
            </div>

            {/* Feature 2: Create */}
            <div className="flex flex-col gap-3">
              <Layout className="text-orange-400 w-8 h-8" strokeWidth={1.5} />
              <p className="text-[15px] leading-snug">
                <span className="font-bold">Create</span> metrics and dashboards
                with a prompt
              </p>
            </div>

            {/* Feature 3: Understand */}
            <div className="flex flex-col gap-3">
              <LineChart className="text-pink-400 w-8 h-8" strokeWidth={1.5} />
              <p className="text-[15px] leading-snug">
                <span className="font-bold">Understand</span> what's driving
                changes in your metrics
              </p>
            </div>

            {/* Feature 4: Train */}
            <div className="flex flex-col gap-3">
              <BrainCircuit
                className="text-purple-600 w-8 h-8"
                strokeWidth={1.5}
              />
              <p className="text-[15px] leading-snug">
                <span className="font-bold">Train</span> Genie your business
                context
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-[#5570f1] hover:bg-[#445cd6] text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Learn more
              <ArrowRight size={18} />
            </button>

            <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-bold border border-transparent transition-colors shadow-sm">
              Watch Full Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
