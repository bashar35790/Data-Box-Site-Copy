import React from "react";

const AddonCard = () => {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-200">
      <div className="card-body p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          <div className="text-primary">
            {/* Paint Roller Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="16" height="6" x="2" y="2" rx="2" />
              <path d="M10 8v10" />
              <rect width="4" height="4" x="8" y="18" rx="1" />
            </svg>
          </div>

          <div className="text-right">
            <div className="flex items-start justify-end">
              <span className="text-sm font-bold mt-1">$</span>
              <span className="text-3xl font-extrabold tracking-tight text-base-content">
                200
              </span>
              <span className="text-sm text-base-content/60 self-center ml-1">
                /month
              </span>
            </div>
            <p className="text-xs text-base-content/50 font-medium mt-1">
              billed yearly
            </p>
          </div>
        </div>

        {/* Title */}
        <h2 className="card-title text-xl font-bold mt-6 mb-2">
          Branding & White-labeling
        </h2>

        {/* Description */}
        <p className="text-base-content/70 leading-relaxed text-[15px]">
          Create an on-brand experience by white-labeling your Databox Account.
          Allow users to login, view dashboards, and receive emails with your
          company's branding. Perfect if you plan to resell Databox to your
          clients.
        </p>

        {/* Footer Link */}
        <div className="card-actions mt-8">
          <a
            href="#"
            className="text-primary font-semibold text-sm hover:underline transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddonCard;
