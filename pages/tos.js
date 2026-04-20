import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Terms() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Conditions d'Utilisation — StoryHub</title>
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
            Terms of <span>Service</span>
          </h1>
          <p>Dernière mise à jour : Avril 2026</p>

          <section style={{ textAlign: "left", marginTop: "4rem" }}>
            <h3>1. Acceptation des Conditions</h3>
            <p>
              En accédant à StoryHub, vous acceptez d'être lié par ces
              conditions d'utilisation. La plateforme est actuellement en phase
              Bêta fermée.
            </p>

            <h3>2. Description du Service</h3>
            <p>
              StoryHub est une plateforme de centralisation de témoignages
              ("Storytimes"). Nous fournissons des outils pour collecter, trier
              et répondre aux soumissions des abonnés.
            </p>

            <h3>3. Responsabilité des Contenus</h3>
            <p>
              Les coachs et créateurs sont seuls responsables des contenus
              qu'ils publient sur leur page publique. StoryHub se réserve le
              droit de suspendre tout compte publiant des contenus haineux,
              illégaux ou inappropriés.
            </p>

            <h3>4. Protection des Données (RGPD)</h3>
            <p>
              Conformément au RGPD, les abonnés peuvent soumettre leurs stories
              de manière anonyme. Les données personnelles collectées (email,
              pseudo) ne sont jamais partagées avec des tiers sans consentement.
            </p>

            <h3>5. Accès Bêta</h3>
            <p>
              L'accès via code bêta est temporaire et gratuit. StoryHub ne
              garantit pas la pérennité du service ni l'absence d'interruptions
              pendant cette phase de test.
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
