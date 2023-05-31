import { FC, useEffect } from "react";

import BaseLayout from "./layouts/BaseLayout";
import Actions from "./page-components/Actions";
import Content from "./page-components/Content";
import { useBetSelector } from "./hooks/useBetSelector";
import { useDispatch } from "./hooks/redux";
import { getResults } from "./redux/bet-slice";

const App: FC = () => {
  const bet = useBetSelector();
  const dispatch = useDispatch();

  /**
   * When the bet stage is "play" it will transition
   * to the "results" stage after 3.5 seconds.
   */
  useEffect(() => {
    let timeoutId: number | null = null;
    if (bet.stage === "play") {
      timeoutId = setTimeout(() => dispatch(getResults()), 2500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [bet.stage, dispatch]);

  return (
    <BaseLayout>
      <div className="pt-20 flex flex-col justify-between gap-20">
        <Content />
        <Actions />
      </div>
    </BaseLayout>
  );
};

export default App;
