import Image from 'next/image';
import Link from 'next/link';

const actions = [
  {
    name: "Generative AI Based Control Tower",
    to: "/ai",
    img: "/assets/generateAi.png",
    description:
      " Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
  {
    name: "Diagnostic Engine",
    to: "/snop/truck",
    img: "/assets/salesopplanning.png",
    description:
      "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
  {
    name: "Optimization Engine",
    to: "/snop/input",
    img: "/assets/diagnostics.png",
    description:
      "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production.",
  },

  {
    name: "Execution Engine",
    to: "/demo/dashboard/inventory",
    img: "/assets/kpicard.png",
    description:
      "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
];
export default function Cards() {
  return (
    <div className="relative grid  place-items-center mx-4 mt-12">
      <ul className="flex w-full gap-4">
        {actions.map((action) => (
          <li
            key={action.name}
            className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]"
          >
            <Link href={action.to}>
              <Image
                className="absolute inset-0 size-full object-cover"
                src={action.img}
                width={1200}
                height={1200}
                alt=""
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 p-4">
                <div className="w-48">
                  <h2 className="text-2xl font-medium text-white">
                    {action.name}
                  </h2>
                  <div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
                    <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                      {action.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
