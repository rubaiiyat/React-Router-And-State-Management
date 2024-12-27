import React from "react";
import Options from "../Options/Options";

const PriceOptions = () => {
  const gymPlans = [
    {
      id: 1,
      planName: "Basic",
      features: [
        "Access to Gym Equipment",
        "1 Fitness Class per Week",
        "Locker Room Access",
        "Basic Health Consultation",
        "Access During Off-Peak Hours",
        "Free Wi-Fi",
      ],
      price: 20,
    },
    {
      id: 2,
      planName: "Standard",
      features: [
        "Access to Gym Equipment",
        "Unlimited Fitness Classes",
        "Locker Room Access",
        "1 Personal Training Session per Month",
        "Nutritional Guidance",
        "Free Parking",
        "Sauna Access on Weekends",
        "Access During All Operating Hours",
      ],
      price: 50,
    },
    {
      id: 3,
      planName: "Premium",
      features: [
        "Access to Gym Equipment",
        "Unlimited Fitness Classes",
        "Locker Room Access",
        "4 Personal Training Sessions per Month",
        "Access to Pool and Sauna",
        "Advanced Nutritional Plan",
        "Free Parking",
        "Exclusive Fitness Workshops",
        "24/7 Gym Access",
        "Complimentary Gym Merchandise",
      ],
      price: 80,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 m-5 ">
        {gymPlans.map((plan) => (
          <Options key={plan.id} plan={plan}></Options>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
