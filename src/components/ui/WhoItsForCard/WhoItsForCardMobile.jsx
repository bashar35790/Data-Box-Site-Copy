import { ChartLine } from "lucide-react";
import ButtonSm from "../Button/ButtonSm";

export default function WhoItsForCardMobile({ card }) {
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
      {/* Mobile*/}

      <div className="hidded max-md:flex ">
        <div
          className={`collapse collapse-arrow bg-${color}-500/20 border border-base-300`}
        >
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold flex gap-4">
            {title} <ChartLine size={24} />
          </div>
          <div className="collapse-content text-sm">{body}</div>
        </div>
      </div>
    </div>
  );
}
