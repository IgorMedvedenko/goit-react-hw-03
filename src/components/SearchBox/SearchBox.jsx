import React from "react";
import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
}
