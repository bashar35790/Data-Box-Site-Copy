import { FaStar } from "react-icons/fa";
import PrimaryButton from "../../ui/Button/PrimaryButton";
import AIAnalyst from "../../../assets/hero-explore-key-feature-image/genie-chat-with-prompt-selection-and-floating-integrations-2x.png";
import Dashboards from '../../../assets/hero-explore-key-feature-image/dashboards-2x.png';
import Reports from '../../../assets/hero-explore-key-feature-image/reports-2x.png';
import MetricsKPIs from "../../../assets/hero-explore-key-feature-image/metric-builder-2x.png";
import GoalsOKRs from "../../../assets/hero-explore-key-feature-image/goals-2x.png";
import Forecasts from "../../../assets/hero-explore-key-feature-image/forecasts-2x.png";
import Mcp from "../../../assets/hero-explore-key-feature-image/mcp.png";
import Integrations from "../../../assets/hero-explore-key-feature-image/integrations-2x.png";
import DataPreparation from "../../../assets/hero-explore-key-feature-image/datasets-2x.png";


export default function Hero() {
  return (
    <>
      <section id="Hero" className="">
        <div className="cssContainer">
          <header className="grid place-items-center gap-6 text-center">
            {/* Icons*/}
            <div className="flex items-center gap-4">
              {/* Item 1*/}
              <div className="flex items-center gap-2 p-1 border-r border-gray-400/70 ">
                <div className="rounded-full">
                  <img
                    src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-g2.svg"
                    alt="logo-g2"
                    className=""
                  />
                </div>

                <p className="font-bold text-gray-600">4.4</p>
                {/* Icon of a star*/}
                <span className="text-yellow-400">
                  <FaStar />
                </span>
              </div>

              {/* Item 2*/}
              <div className="flex items-center gap-2 p-1 border-r border-gray-400/70  ">
                <div className="rounded-full">
                  <img
                    src="https://databox.com/wp-content/themes/databox/inc/img/templates/ratings/logo-capterra.svg"
                    alt="logo-capterra"
                    className=""
                  />
                </div>

                <p className="font-bold text-gray-600">4.6</p>
                {/* Icon of a star*/}
                <span className="text-yellow-400">
                  <FaStar />
                </span>
              </div>

              {/* Item 3*/}
              <p className="text-xs lg:text-sm">based on 1,000+ reviews</p>
            </div>
            <h1 className="max-w-225 mx-auto">
              <span className="linearText">AI-powered</span> analytics for teams
              that need answers now
            </h1>

            <p className="max-w-155 mx-auto">
              Turn business performance data into clear answers your team can
              understand, explain, and act on – instantly.
            </p>

            {/* Cta*/}
            <div className="flex max-md:flex-col gap-4">
              <PrimaryButton link={"#"} brand={true}>
                Try It Free
              </PrimaryButton>
              <PrimaryButton link={"#"}>Book a Demo</PrimaryButton>
            </div>

            <p className="text-sm">No credit card needed · Free-forever plan</p>
          </header>
          <div className="flex py-10 relative justify-start">
            {/* image intarect base on the card */}
            <div>
                 <img src={AIAnalyst} alt="ai analysis img" className=" h-125 w-fill object-cover" />
            </div>
            {/* card intarection  */}
            <div className="bg-white p-6 rounded-2xl shadow-lg w-fit absolute right-50 top-10 bottom-10">
              {/* Card Title  */}
              <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Explore Key Features
              </h2>

              {/* Feature Grid  */}
              <div className="grid grid-cols-3 gap-4 mb-6 ">
                {/* Feature Item  */}
                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-purple-50 transition">
                  <span className="text-purple-500 text-2xl mb-1">🤖</span>
                  <span className="text-sm font-medium text-gray-700">
                    AI Analyst
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">📊</span>
                  <span className="text-sm font-medium text-gray-700">
                    Dashboards
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">📄</span>
                  <span className="text-sm font-medium text-gray-700">
                    Reports
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">123</span>
                  <span className="text-sm font-medium text-gray-700">
                    Metrics & KPIs
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">🎯</span>
                  <span className="text-sm font-medium text-gray-700">
                    Goals & OKRs
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">📈</span>
                  <span className="text-sm font-medium text-gray-700">
                    Forecasts
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-purple-50 transition">
                  <span className="text-purple-500 text-2xl mb-1">💾</span>
                  <span className="text-sm font-medium text-gray-700">MCP</span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <span className="text-gray-500 text-2xl mb-1">🔌</span>
                  <span className="text-sm font-medium text-gray-700">
                    Integrations
                  </span>
                </button>

                <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition">
                  <p className="text-gray-400 text-2xl mb-1">🛠️</p>
                  <p className="text-sm font-medium text-gray-500">
                    Data preparation
                  </p>
                </button>
              </div>

              {/* - Call to Action Button  */}
              <button className="w-full btn bg-brand text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                Try It Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
