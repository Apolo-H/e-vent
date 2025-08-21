import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>Glad to see you</h1>
        <h1>Again</h1>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" required />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />

          <a href="/forgot-password" className={styles.forgotPassword}>
            Forgot Password?
          </a>
          <button type="submit">Login</button>
        </form>
        <div className={styles.plataforms}>
          <div className={styles.or}>
            <div className={styles.borderOne}></div>
            <h1>Or</h1>
            <div className={styles.borderTwo}></div>
          </div>
          <div className={styles.iconPlataforms}>
            <Image
              src="/icon.png"
              alt="GoogleIcon"
              width={100}
              height={100}
              className={styles.iconPlataformsGoogle}
            />
          </div>
        </div>
        <div className={styles.registerLink}>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </section>
  );
}
