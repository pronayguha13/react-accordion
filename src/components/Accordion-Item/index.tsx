import React, { useState } from "react";
import styles from "./style.module.css";

type AccordionItemProps = {
  header: string;
  body: string;
};

const AccordionItem = (props: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleToggle() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{props.header}</h2>
        <div className={styles.toggleBtn} onClick={handleToggle}>
          {isExpanded ? "-" : "+"}
        </div>
      </div>
      <p className={isExpanded ? styles.show : styles.hide}>{props.body}</p>
    </div>
  );
};

export default AccordionItem;
