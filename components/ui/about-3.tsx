"use client";

import { Button } from "@/components/ui/button";
import { motion, type Variants, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

const defaultCompanies = [
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
    alt: "Arc",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
    alt: "Descript",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
    alt: "Mercury",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
    alt: "Ramp",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
    alt: "Retool",
  },
  {
    src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
    alt: "Watershed",
  },
];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    rotate: 2
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const achievementVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const achievementItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

// Counter animation hook
function useCountUp(end: number, duration = 1, suffix = "") {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    let frame: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return `${count}${suffix}`;
}

export default function About3(props: About3Props = {}) {
  const {
    title = "About Us",
    description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
    mainImage = {
      src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
      alt: "placeholder",
    },
    secondaryImage = {
      src: "https://shadcnblocks.com/images/block/placeholder-2.svg",
      alt: "placeholder",
    },
    breakout = {
      src: "https://shadcnblocks.com/images/block/block-1.svg",
      alt: "logo",
      title: "Make wesbites with Indomitech",
      description:
        "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
      buttonText: "Discover more",
      buttonUrl: "https://shadcnblocks.com",
    },
    companiesTitle = "Valued by clients worldwide",
    companies = defaultCompanies,
    achievementsTitle = "Our Achievements in Numbers",
    achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    achievements = defaultAchievements,
  } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animated numbers
  const companiesCount = useCountUp(300, 1.2, "+");
  const projectsCount = useCountUp(800, 1.2, "+");
  const customersCount = useCountUp(99, 1.2, "%");
  const awardsCount = useCountUp(10, 1.2, "+");

  return (
    <motion.section 
      ref={ref}
      className="py-32 bg-zinc-900 text-white"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.8 } },
      }}
    >
      <div className="container mx-auto">
        <motion.div 
          className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl font-semibold text-white"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-zinc-300"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
        <motion.div 
          className="grid gap-7 lg:grid-cols-3"
          variants={containerVariants}
        >
          <motion.img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <motion.div 
              className="flex flex-col justify-between gap-6 rounded-xl bg-zinc-800 border border-zinc-700 p-7 md:w-1/2 lg:w-auto"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold text-white">{breakout.title}</p>
                <p className="text-zinc-300">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto border-zinc-600 text-white hover:bg-zinc-700" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </motion.div>
            <motion.img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        <motion.div 
          className="py-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p 
            className="text-center text-zinc-300"
            variants={itemVariants}
          >
            {companiesTitle}
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-8"
            variants={containerVariants}
          >
            {companies.map((company, idx) => (
              <motion.div 
                className="flex items-center gap-3" 
                key={company.src + idx}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8 filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative overflow-hidden rounded-xl bg-zinc-800 border border-zinc-700 p-10 md:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="flex flex-col gap-4 text-center md:text-left"
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl font-semibold text-white"
              variants={itemVariants}
            >
              {achievementsTitle}
            </motion.h2>
            <motion.p 
              className="max-w-screen-sm text-zinc-300"
              variants={itemVariants}
            >
              {achievementsDescription}
            </motion.p>
          </motion.div>
          <motion.div 
            className="mt-10 flex flex-wrap justify-between gap-10 text-center"
            variants={achievementVariants}
          >
            {achievements.map((item, idx) => (
              <motion.div 
                className="flex flex-col gap-4" 
                key={item.label + idx}
                variants={achievementItemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p className="text-zinc-300">{item.label}</motion.p>
                <motion.span 
                  className="text-4xl font-semibold md:text-5xl text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.5, type: "spring" }}
                >
                  {item.value}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--zinc-600))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--zinc-600))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};
