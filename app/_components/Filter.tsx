"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

/**
 * A component that provides filtering options for cabins based on their capacity.
 *
 * @return A div containing buttons that allow the user to filter cabins by capacity. The filter options include "all", "small", "medium", and "large". Each button, when clicked, updates the URL search parameters with the selected filter and navigates without scrolling.
 */
export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

/**
 * Button component to render a styled button based on the active filter.
 *
 * @param {Object} params - The input parameters.
 * @param {string} params.filter - The filter string that the button represents.
 * @param {function} params.handleFilter - The function to call when the button is clicked with the filter string.
 * @param {string} params.activeFilter - The currently active filter to determine button styling.
 * @param {React.ReactNode} params.children - The content to be displayed inside the button.
 * @return {React.ReactElement} The rendered button element.
 */
function Button({
  filter,
  handleFilter,
  activeFilter,
  children,
}: {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
