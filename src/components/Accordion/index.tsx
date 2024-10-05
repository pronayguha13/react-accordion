import React from "react";
import styles from "./style.module.css";
import AccordionItem from "../Accordion-Item";

type AccordionValue = {
  header: string;
  body: string;
};
type Props = {
  value: AccordionValue[];
};
const Accordion = (props: Props) => {
  function getChildren() {
    return props.value.map((item, index) => (
      <AccordionItem key={index} header={item.header} body={item.body} />
    ));
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Accordion</h2>
      </div>
      <div className={styles.body}>
        {props.value?.length ? getChildren() : <p>No Item to display</p>}
      </div>
    </div>
  );
};

export default Accordion;
