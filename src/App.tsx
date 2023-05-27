import { FC } from "react";

import BaseLayout from "./layouts/BaseLayout";
import Actions from "./page-components/Actions";
import Content from "./page-components/Content";

const App: FC = () => {
  return (
    <BaseLayout>
      <div className="pt-20 flex flex-col justify-between gap-6">
        <Content />
        <Actions />
      </div>
    </BaseLayout>
  );
};

export default App;
