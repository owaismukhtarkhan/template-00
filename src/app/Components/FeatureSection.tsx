export default function FeatureSection() {
    const features = [
      {
        title: "Free Delivery",
        description: "For all orders over $50, consectetur adipiscing elit.",
      },
      {
        title: "90 Days Return",
        description: "If goods have problems, consectetur adipiscing elit.",
      },
      {
        title: "Secure Payment",
        description: "100% secure payment, consectetur adipiscing elit.",
      },
    ];
  
    return (
      <div className="bg-gray-50 py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  