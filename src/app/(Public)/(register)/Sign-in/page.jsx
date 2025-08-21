
import styles from "./style.module.css";




export default function SignIn() {

  return (
    <div className={styles.body}>
    <section className={styles.container}>
      <h2 className={styles.tittle}>Glad to see you again</h2>
    </section>

    <div className={styles.placeholder}>
      <p className={styles.email}>E-mail:</p>
      <input className={styles.input} type="email" name="email" id="eml"  />
      <br /><br />
      <p className={styles.pss}>Password:</p>
      <input className={styles.input} type="password" name="psswd" id="pwd" />
    </div>

    </div>
  );
}
  