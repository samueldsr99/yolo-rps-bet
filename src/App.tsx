import { FC } from "react";

import ChoiceCard from "./components/ChoiceCard";

const App: FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 px-4">
      <div className="pt-36 flex flex-col sm:flex-row justify-center items-center gap-4">
        <ChoiceCard variant="rock" amount={500} />
        <ChoiceCard variant="paper" amount={1500} />
        <ChoiceCard variant="scissors" />
      </div>
    </main>
  );
};

export default App;