import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Politique de Confidentialité — StoryHub</title>
      </Head>

      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span style={{ color: "var(--secondary)" }}>📖</span> StoryHub
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Retour à l'accueil</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <div
          className={styles.heroContent}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <h1>
            Privacy <span>Policy</span>
          </h1>
          <p>Dernière mise à jour : Avril 2026</p>

          <section style={{ textAlign: "left", marginTop: "4rem" }}>
            <h3>1. Collecte des données</h3>
            <p>
              Nous collectons uniquement les données nécessaires au
              fonctionnement de StoryHub : nom/pseudo (optionnel), catégorie de
              story et contenu du témoignage.
            </p>

            <h3>2. Utilisation des données</h3>
            <p>
              Vos stories sont utilisées exclusivement pour permettre au coach
              sélectionné de vous répondre. Si vous choisissez l'anonymat,
              aucune donnée permettant de vous identifier ne sera publiée.
            </p>

            <h3>3. Vos droits</h3>
            <p>
              Conformément à la loi, vous disposez d'un droit d'accès, de
              rectification et de suppression de vos données. Pour toute
              demande, contactez le support Woopchi Digital.
            </p>

            <h3>4. Cookies</h3>
            <p>
              StoryHub utilise des cookies techniques pour maintenir votre
              session coach active. Nous n'utilisons pas de cookies de traçage
              publicitaire tiers.
            </p>

            <div style={{ marginTop: "4rem" }}>
              <Link href="/" className={styles.btnPrimary}>
                J'ai compris
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>© 2026 StoryHub — Par Woopchi Digital</div>
      </footer>
    </div>
  );
}
