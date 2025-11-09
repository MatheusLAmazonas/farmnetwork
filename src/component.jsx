import { Fragment, useState, useEffect } from "react";

export default function Component({ info }) {

  const mensagens = [
    info,
    "Gerenciando suas fazendas com eficiência",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <h1>{mensagens[index]}</h1>
    </Fragment>
  );
}