import { FC } from "react";
import clsx from "classnames/bind";

export type ContentProps = {
  match?: string;
};

const classes = clsx.bind({
  "choice-label": "text-4xl sm:text-6xl text-white font-semibold",
  "vs-label": "text-3xl sm:text-5xl font-semibold text-orange-300",
});

const Content: FC<ContentProps> = () => {
  return (
    <div className="w-full inline-flex justify-center items-end gap-8 sm:gap-16 text-center my-12">
      <h2 className={classes("choice-label")}>ROCK</h2>
      <span className={classes("vs-label")}>vs</span>
      <h2 className={classes("choice-label")}>PAPER</h2>
    </div>
  );
};

export default Content;
