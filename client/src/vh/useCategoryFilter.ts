import { useCallback, useState } from "react";

/**
 * Category filter for The Founder's Pharmacy (`.filters` toolbar + `section.cat[data-cat]`).
 * "all" shows every category; any other value shows only that category.
 */
export function useCategoryFilter() {
  const [active, setActive] = useState("all");

  const select = useCallback((value: string) => {
    setActive(value);
    // If the reader has scrolled past the top of the catalog, bring it back into view.
    const catalog = document.getElementById("catalog");
    if (catalog && catalog.getBoundingClientRect().top < 0) {
      catalog.scrollIntoView({ block: "start" });
    }
  }, []);

  const filterProps = useCallback(
    (value: string) => ({
      "aria-pressed": active === value,
      onClick: () => select(value),
    }),
    [active, select]
  );

  const isHidden = useCallback(
    (category: string) => active !== "all" && active !== category,
    [active]
  );

  return { active, filterProps, isHidden };
}
