"use client";

import CheckIn from "@/components/icons/check-in";
import CheckOut from "@/components/icons/check-out";
import Search from "@/components/icons/search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const links = [
    {
      url: "/check-in",
      component: <CheckIn />,
      label: "Check in",
    },
    {
      url: "/check-out",
      component: <CheckOut />,
      label: "Check out",
    },
    {
      url: "/view-reservations",
      component: <Search />,
      label: "Reservations",
    },
  ];

  return (
    <div className="flex flex-row w-screen h-screen bg-[url('/background.jpg')] bg-bottom bg-cover relative">
      <div className="container mx-auto mt-10 mb-auto text-center bg-gray-900 p-5 rounded-lg w-auto text-sm sm:text-base sm:min-w-[464px]">
        <div className="">
          <div className="relative z-10">
            <div className="border-b-[1px] border-gray-800 pb-5 -mx-5">
              <ul className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                {links.map((link, index) => {
                  const linkProps = {
                    href: link.url,
                    className: clsx(
                      "mx-5 sm:mx-0 flex flex-row items-center justify-center py-2 px-4 gap-2 rounded-lg text-xs sm:text-sm",
                      pathname === link.url
                        ? "border border-indigo-700 bg-indigo-700 text-white"
                        : "text-gray-400 border border-slate-700 hover:bg-gray-700 hover:border-gray-700 hover:text-white",
                    )
                  }

                  return (
                    <li key={index} className="w-full sm:w-auto">
                      {
                        link.url === "/view-reservations"
                          ? <a {...linkProps}>{link.component}{" "}{link.label}</a>
                          : <Link {...linkProps}>{link.component}{" "}{link.label}</Link>
                      }
                    </li>
                  )
                })}
              </ul>
            </div>
            {children}
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-black z-0 opacity-35"></div>
      </div>
    </div>
  );
}
