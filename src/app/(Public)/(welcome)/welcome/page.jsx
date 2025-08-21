import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeBox}>
        <div className={styles.wave}>
          <img src="/vetor.png" alt="" />
        </div>
        <div className={styles.waveTitle}>
          <h1>Welcome</h1>
        </div>
      </div>
      <div className={styles.welcomeText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          ut dolorem quisquam necessitatibus tenetur nesciunt qui molestiae
          quidem eos quaerat iste, error odio aspernatur est vitae eius itaque
          magnam, tempora veniam impedit minima. Quam consequatur dignissimos
          quia repellat suscipit iste non explicabo temporibus molestiae totam,
          dicta similique reprehenderit id veritatis provident placeat? Deleniti
          architecto laboriosam pariatur impedit quis sunt nemo dolorem libero
          earum quam minus quia, reprehenderit, eos porro maxime corporis
          laudantium? Nemo impedit possimus fuga cupiditate itaque quo enim!
        </p>
      </div>
      <div className={styles.continue}>
        <Link href="/Sign-in">
          <p>Continue</p>
          <div className={styles.continueImage}>
            <Image
              src="/continue.png"
              width={100}
              height={100}
              className={styles.arrowImage}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
