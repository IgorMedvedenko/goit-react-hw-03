import React from "react";
import { PiPhoneFill } from "react-icons/pi";
import { RiUserAddFill } from "react-icons/ri";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>
        <div className={styles.contHolder}>
          <RiUserAddFill className={styles.icon} /> {name}
        </div>
        <div className={styles.contHolder}>
          <PiPhoneFill className={styles.icon} /> {number}
        </div>
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
