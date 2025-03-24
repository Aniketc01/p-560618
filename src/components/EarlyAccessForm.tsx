
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workTitle: "",
    phoneNumber: "",
    organization: "",
    promotionalOffers: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex gap-[72px] px-[120px] py-0 mt-12 mb-20 max-md:flex-col max-md:px-[60px] max-md:py-0 max-md:mt-6 max-sm:px-5 max-sm:py-0 max-sm:mb-10 max-sm:mt-4">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-[#5C2E2E] mb-5 max-sm:text-xl">
          Program Incentives
        </h2>
        <ul className="text-base text-[#202124] leading-[25px] space-y-2 max-sm:text-sm">
          <li>· 3-month free trial – No credit card or commitment</li>
          <li>· 75% discount vs full price</li>
          <li>· Opportunity to shape the features of future development</li>
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[648px] border shadow-[0_0_15px_rgba(0,0,0,0.06)] bg-white p-[35px] rounded-[5px] border-solid border-[#FEB9B9] max-md:w-full max-sm:p-5"
      >
        <div className="flex gap-3 mb-[15px] max-sm:flex-col max-sm:gap-[15px]">
          <Input
            type="text"
            placeholder="First Name*"
            className="w-[calc(50%_-_6px)] h-[50px] border border-neutral-200 text-sm px-5 py-[15px] rounded-[5px] border-solid max-sm:w-full"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="Last Name*"
            className="w-[calc(50%_-_6px)] h-[50px] border border-neutral-200 text-sm px-5 py-[15px] rounded-[5px] border-solid max-sm:w-full"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>

        <Input
          type="text"
          placeholder="Enter Your Work Title*"
          className="w-full h-[50px] border border-neutral-200 text-sm mb-[15px] px-5 py-[15px] rounded-[5px] border-solid"
          value={formData.workTitle}
          onChange={(e) =>
            setFormData({ ...formData, workTitle: e.target.value })
          }
        />

        <div className="flex gap-3 mb-[15px] max-sm:flex-col max-sm:gap-[15px]">
          <div className="w-[139px] h-[50px] border border-neutral-200 flex items-center text-sm text-[#202124] justify-between bg-white px-5 py-0 rounded-[5px] border-solid max-sm:w-full">
            <span>+91 IN</span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.18457 9L12.1846 15L18.1846 9"
                stroke="#202124"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <Input
            type="tel"
            placeholder="Enter Mobile Number*"
            className="flex-1 h-[50px] border border-neutral-200 text-sm px-5 py-[15px] rounded-[5px] border-solid"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
          />
        </div>

        <Input
          type="text"
          placeholder="Enter Name Of Organization*"
          className="w-full h-[50px] border border-neutral-200 text-sm mb-[15px] px-5 py-[15px] rounded-[5px] border-solid"
          value={formData.organization}
          onChange={(e) =>
            setFormData({ ...formData, organization: e.target.value })
          }
        />

        <div className="flex items-center gap-2.5 mx-0 my-[30px]">
          <Checkbox
            checked={formData.promotionalOffers}
            onCheckedChange={(checked) =>
              setFormData({
                ...formData,
                promotionalOffers: checked as boolean,
              })
            }
            className="w-5 h-5 border flex items-center justify-center bg-white rounded-[5px] border-solid border-[#5C2E2E]"
          />
          <label className="text-sm text-[#202124]">
            I agree to receive promotional offers from Titlemine
          </label>
        </div>

        <Button
          type="submit"
          className="w-[298px] h-12 text-white text-base shadow-[0_4px_14px_rgba(92,46,46,0.25)] cursor-pointer bg-[#5C2E2E] mx-auto my-0 rounded-[5px] border-[none] max-sm:w-full"
        >
          Join Now
        </Button>
      </form>
    </div>
  );
};
