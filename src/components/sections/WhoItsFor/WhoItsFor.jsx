import WhoItsForCard from "../../ui/WhoItsForCard/WhoItsForCard";

const cardInfo = [
  {
    image: "",
    title: "Business Analysts",
    body: "Build dashboards and reports much faster than with enterprise solutions",
    features: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink: "#",
    color: "red",
  },
  {
    image: "",
    title: "Business Analysts",
    body: "Build dashboards and reports much faster than with enterprise solutions",
    features: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink: "#",
    color: "purple",
  },
  {
    image: "",
    title: "Business Analysts",
    body: "Build dashboards and reports much faster than with enterprise solutions",
    features: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink: "#",
    color: "purple",
  },
  {
    image: "",
    title: "Business Analysts",
    body: "Build dashboards and reports much faster than with enterprise solutions",
    features: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink: "#",
    color: "purple",
  },
  {
    image: "",
    title: "Business Analysts",
    body: "Build dashboards and reports much faster than with enterprise solutions",
    features: [
      "Build dashboards and reports much faster than with enterprise solutions",
      "Remove yourself as the bottleneck and empower your team to get the answers they need",
      "Organize your company’s performance by team",
    ],
    ctaLink: "#",
    color: "purple",
  },
];

export default function WhoItsFor() {
  return (
    <section id="whoItsFor" className="">
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

        {/* Cards*/}

        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-6">
          {/* {cardInfo.map((card) => (
            <WhoItsForCard key={card.title} card={card}></WhoItsForCard>
          ))}*/}
        </div>
      </div>
    </section>
  );
}
