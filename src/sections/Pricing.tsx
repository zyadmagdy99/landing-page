"use client"
import Check from "@/assets/check.svg"
import { motion } from "framer-motion";
import {twMerge} from "tailwind-merge"

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="heading">

      <h2 className="sectiontitle">Pricing</h2>
      <p className="sectiondesc mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias vero architecto facilis quidem.</p>
        </div>
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(({title,monthlyPrice,buttonText,popular,inverse,features})=>(
        <div className={twMerge("p-10 max-w-xs w-full rounded-3xl shadow-[0_7px_14px_eaeaea] border border-[#f1f1f1]",inverse && "border-black bg-black text-white")} key={title}>
           <div className="flex justify-between">
            <h3 className={twMerge("text-lg font-bold text-black/50",inverse && "text-white/60")}>{title}</h3>
            {
              popular && <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
              <motion.span
              animate={{backgroundPositionX:'-100%'}}
              transition={{
                duration:1,repeat:Infinity,ease:"linear",repeatType:"loop"
              }}
              className="bg-clip-text bg-[length:200%] font-medium text-transparent bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)]">
              Popular
                </motion.span>
              </div>
            }
            </div> 
            <div className="flex items-baseline gap-1 mt-[30px]">
             <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
              <span className="tracking-tight font-bold text-black/50">/month</span>
            </div>
            <button className={twMerge("btn btn-primary w-full mt-[30px]",inverse&& "bg-white text-black")}>{buttonText}</button>
            <ul className="flex flex-col gap-5 mt-8">
              {features.map((feature)=>(
                <li className="text-sm flex items-center gap-4" key={feature}>
                  <Check className="h-6 w-6 "/>
                  {feature}</li>
              ))}
            </ul>
        </div>

        ))}
      </div>
      </div>
    </section>
  )
};
