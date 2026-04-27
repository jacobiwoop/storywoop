import { useState, useEffect } from "react";
import styles from "./styles/Home.module.css";
import Dashboard from "./Dashboard";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenType, setTokenType] = useState<string | undefined>(undefined);

  useEffect(() => {
    setMounted(true);
    document.title = "StoryHub — Centralisez vos Storytimes";

    // Check if redirected with success from backend
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth') === 'success') {
      setIsAuthenticated(true);
      setTokenType(params.get('token_type') || undefined);
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/tiktok";
  };

  if (!mounted) return null;

  if (isAuthenticated) {
    return <Dashboard tokenType={tokenType} />;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span style={{ color: "var(--secondary)" }}>📖</span> StoryHub
        </div>
        <div className={styles.navLinks}>
          <a href="#features">Fonctionnalités</a>
          <a href="#pricing">Tarifs</a>
          <a href="/tos">Conditions</a>
          <button onClick={handleLogin} className={styles.btnPrimary}>
            Se connecter
          </button>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>
              Élevez vos <span>Storytimes</span> au niveau supérieur.
            </h1>
            <p>
              StoryHub est la plateforme ultime pour centraliser, trier et
              publier les histoires personnelles de votre communauté.
            </p>
            <div className={styles.ctaGroup}>
              <button onClick={handleLogin} className={styles.btnPrimary}>
                🚀 Commencer avec TikTok
              </button>
              <button className={styles.btnSecondary}>Voir la démo</button>
            </div>
          </div>
          <div className={styles.heroPlaceholder}>
            <img
              src="/hero.png"
              alt="StoryHub Dashboard"
              className={styles.heroImage}
            />
          </div>
        </header>

        {/* Features Section */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionTitle}>
            <h2>Une solution deux-en-un</h2>
            <p>
              Conçue pour fluidifier l'échange entre le créateur et son
              audience.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{
                  background: "#fef2f2",
                  padding: "10px",
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                🏟️
              </div>
              <h3>Espace Coach</h3>
              <p>
                Une inbox intelligente inspirée de Gmail pour trier, filtrer et
                favoriser les meilleures stories reçues.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{
                  background: "#fef3c7",
                  padding: "10px",
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                📝
              </div>
              <h3>Espace Abonné</h3>
              <p>
                Un formulaire épuré mobile-first pour envoyer des récits sans
                friction marketing ni compte obligatoire.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div
                className={styles.featureIcon}
                style={{
                  background: "#e0e7ff",
                  padding: "10px",
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                ✨
              </div>
              <h3>Réponse Unique</h3>
              <p>
                Générez des liens de suivi UUIDv4 pour que vos abonnés
                retrouvent votre réaction en toute sécurité.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={styles.pricing}>
          <div className={styles.sectionTitle}>
            <h2>Prêt à transformer votre communauté ?</h2>
          </div>

          <div className={styles.pricingGrid}>
            <div className={styles.priceCard}>
              <div className={styles.priceTitle}>Bêta Privée</div>
              <div
                className={styles.priceValue}
                style={{ color: "var(--secondary)" }}
              >
                0€ <span>/ gratuit</span>
              </div>
              <ul className={styles.priceList}>
                <li>
                  <span style={{ color: "var(--secondary)" }}>✔</span> Accès
                  complet P0 + P1
                </li>
                <li>
                  <span style={{ color: "var(--secondary)" }}>✔</span> Stories
                  illimitées
                </li>
                <li>
                  <span style={{ color: "var(--secondary)" }}>✔</span> Support
                  direct Discord
                </li>
              </ul>
              <button className={styles.btnSecondary}>Utiliser un code</button>
            </div>

            <div className={`${styles.priceCard} ${styles.featured}`}>
              <div className={styles.priceTitle}>Starter</div>
              <div className={styles.priceValue}>
                9€ <span>/ mois</span>
              </div>
              <ul className={styles.priceList}>
                <li>✅ Jusqu'à 200 stories / mois</li>
                <li>✅ 1 Lien public personnalisé</li>
                <li>✅ Statistiques de base</li>
              </ul>
              <button className={styles.btnPrimary}>Bientôt disponible</button>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.priceTitle}>Pro</div>
              <div className={styles.priceValue}>
                29€ <span>/ mois</span>
              </div>
              <ul className={styles.priceList}>
                <li>✅ Stories illimitées</li>
                <li>✅ Notifications Email auto</li>
                <li>✅ Analytics avancés</li>
              </ul>
              <button className={styles.btnSecondary}>
                Bientôt disponible
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© 2026 StoryHub — Par Woopchi Digital</div>
        <div className={styles.navLinks} style={{ display: "flex", gap: "20px" }}>
          <a href="/tos">Conditions</a>
          <a href="/privacy">Confidentialité</a>
        </div>
      </footer>
    </div>
  );
}
