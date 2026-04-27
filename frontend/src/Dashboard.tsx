import styles from "./styles/Home.module.css";

interface DashboardProps {
  tokenType?: string;
}

export default function Dashboard({ tokenType }: DashboardProps) {
  return (
    <div className={styles.container} style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <nav className={styles.nav} style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div className={styles.logo}>
          <span style={{ color: "var(--secondary)" }}>📖</span> StoryHub
        </div>
        <div className={styles.navLinks}>
          <span className={styles.badge}>Coach Mode</span>
          <div className={styles.avatar}>✨</div>
        </div>
      </nav>

      <main className={styles.main} style={{ padding: '2rem' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e293b' }}>
            Bienvenue dans votre Inbox, Coach ! 🎙️
          </h1>
          <p style={{ color: '#64748b' }}>
            Voici les derniers témoignages reçus de votre communauté TikTok.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '2rem' }}>
          {/* Sidebar Filters */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '1rem' }}>Filtres</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ color: 'var(--secondary)', fontWeight: 'bold', cursor: 'pointer' }}>📥 Toutes les stories</li>
                <li style={{ color: '#64748b', cursor: 'pointer' }}>⭐ Favoris</li>
                <li style={{ color: '#64748b', cursor: 'pointer' }}>✅ Publiées</li>
                <li style={{ color: '#64748b', cursor: 'pointer' }}>🗑️ Corbeille</li>
              </ul>
            </div>
          </aside>

          {/* Stories List */}
          <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3].map((id) => (
              <div key={id} style={{ 
                background: 'white', 
                padding: '1.5rem', 
                borderRadius: '12px', 
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderLeft: id === 1 ? '4px solid var(--secondary)' : 'none'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>Abonné #{1000 + id}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Il y a {id * 2}h</span>
                  </div>
                  <p style={{ color: '#475569' }}>
                    "C'est l'histoire de la fois où j'ai croisé mon ex au supermarché alors que..."
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className={styles.btnSecondary} style={{ padding: '0.5rem 1rem' }}>👁️ Voir</button>
                  <button className={styles.btnPrimary} style={{ padding: '0.5rem 1rem' }}>📌 Favori</button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
