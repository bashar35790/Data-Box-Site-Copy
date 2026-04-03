import { ChartLine } from "lucide-react";
import ButtonSm from "../Button/ButtonSm";
import WhoItsForCardMobile from "./WhoItsForCardMobile";

export default function WhoItsForCard({ card }) {
  const {
    image = "",
    title = "Business Analysts",
    body = "Build dashboards and reports much faster than with enterprise solutions",
    features = [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink = "#",
    color = "purple",
  } = card;
  return (
    <div className="">
      {/* Desktop*/}
      <div class=" hidden xl:block bg-base-300 cursor-pointer p-8 rounded-2xl shadow-sm">
        <div class="min-h-130 flex flex-col justify-between">
          <h3 class="text-[18px] font-bold">{title}</h3>
          <ChartLine size={100} />
        </div>
      </div>

      {/* Tablet*/}
      <div class="hidden md:block xl:hidden  bg-red-300 cursor-pointer p-8 rounded-2xl shadow-sm">
        <div class="min-h-130 flex flex-col ">
          {/* Title*/}
          <div className="flex justify-between mb-10 ">
            <h3 class="text-[18px] font-bold">{title}</h3>
            <ChartLine size={100} />
          </div>

          {/* description*/}
          <div className="">
            <p className=" mb-4 font-semibold text-black/70">{body}</p>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex gap-1 items-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cta*/}
          <div className="mt-4 w-fit">
            <ButtonSm ctaLink={ctaLink}>Explore</ButtonSm>
          </div>
        </div>
      </div>

      {/* Mobile*/}

      <WhoItsForCardMobile></WhoItsForCardMobile>
    </div>
  );
}
