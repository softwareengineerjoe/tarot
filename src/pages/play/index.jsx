import React, { useState } from "react";
import Loading from "../../components/Loading";
import GameStart from "../../components/GameStart";

export default function Index() {
  const [drawCards, setDrawCards] = useState(false);

  return (
    <>{!drawCards ? <Loading setDrawCards={setDrawCards} /> : <GameStart />}</>
  );
}
