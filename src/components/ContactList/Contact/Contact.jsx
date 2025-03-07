import React from "react";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
}
