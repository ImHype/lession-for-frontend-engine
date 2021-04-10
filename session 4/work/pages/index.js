import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch("/api/news").then(async (res) => {
      const resp = await res.json();
      setState({
        list: resp.data,
      });
    });
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {state.list.map((i) => {
          return (
            <div>
              新闻名：{i.name} <br />
              新闻内容：{i.content}
            </div>
          );
        })}
      </main>
    </div>
  );
}
