import Head from "next/head";

import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja list | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        mattis lorem, ut tempus turpis. Duis sit amet bibendum eros. Nam
        ullamcorper lacinia tellus nec ornare.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
        mattis lorem, ut tempus turpis. Duis sit amet bibendum eros. Nam
        ullamcorper lacinia tellus nec ornare.
      </p>
      <Link href="/ninjas" legacyBehavior>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
