const { chromium } = require("playwright");
const fs = require("fs-extra");
const path = require("path");
require("dotenv").config();

async function extractComments(videoUrl) {
  console.log("--------------------------------------------------");
  console.log(`🚀 STORYHUB : VÉRIFICATION RÉELLE DE SESSION`);
  console.log("--------------------------------------------------");

  const workingDir = path.join(__dirname, "chrome_session");
  await fs.ensureDir(workingDir);

  const comments = [];
  let captured = false;

  const context = await chromium.launchPersistentContext(workingDir, {
    executablePath: "/usr/bin/google-chrome-stable",
    headless: false,
    args: ["--disable-blink-features=AutomationControlled", "--no-sandbox"],
  });

  const page = await context.newPage();

  page.on("response", async (response) => {
    const url = response.url();
    if (url.includes("api/comment/list/") && !url.includes("reply")) {
      try {
        const data = await response.json();
        if (data.comments) {
          console.log(
            `\n📥 [INTERCEPTED] Flux de ${data.comments.length} commentaires capturé !`,
          );
          comments.push(...data.comments);
          captured = true;
        }
      } catch (e) {}
    }
  });

  try {
    await page.goto(videoUrl, { waitUntil: "domcontentloaded" });
    await page.keyboard.press("Escape");

    console.log("\n🔒 ANALYSE DE L'ÉTAT DE CONNEXION...");

    // On attend un peu que la page se stabilise
    await page.waitForTimeout(3000);

    // VRAI TEST : Est-ce qu'on voit l'avatar du profil ?
    const profileIcon = await page.$(
      'div[data-e2e="profile-icon"], img[data-e2e="profile-icon"]',
    );

    if (!profileIcon) {
      console.log(
        "❌ SESSION INCONNUE : Le bouton 'Se connecter' est visible.",
      );
      console.log("--------------------------------------------------");
      console.log(
        "⏳ ACTION REQUISE : Connectez-vous dans la fenêtre Chrome !",
      );
      console.log("Le script attend que votre avatar de profil apparaisse...");
      console.log("--------------------------------------------------");

      // On attend que l'avatar apparaisse (timeout 5 min pour vous laisser le temps)
      try {
        await page.waitForSelector(
          'div[data-e2e="profile-icon"], img[data-e2e="profile-icon"]',
          { timeout: 300000 },
        );
        console.log("\n✅ CONNEXION RÉUSSIE !");
      } catch (err) {
        console.log(
          "\n❌ Temps d'attente dépassé. Session toujours non connectée.",
        );
        return;
      }
    } else {
      console.log("✅ SESSION DÉTECTÉE (Avatar trouvé) !");
    }

    console.log("\n📜 Simulation d'activité...");
    await page.evaluate(() => window.scrollBy(0, 800));
    const btn = await page.$('span[data-e2e="comment-icon"]');
    if (btn) await btn.click();

    console.log("📡 Attente des données réseau...");
    let waitCount = 0;
    while (!captured && waitCount < 15) {
      process.stdout.write(".");
      await page.waitForTimeout(1000);
      waitCount++;
    }
    console.log("");

    if (captured) {
      const outputPath = path.join(__dirname, "comments.json");
      await fs.writeJson(outputPath, comments, { spaces: 2 });
      console.log(
        `✨ [SUCCÈS] Extraction terminée. Voir 'scraper/comments.json'`,
      );
    } else {
      console.log(
        "❌ [ECHEC] Aucune API interceptée. Testez un clic manuel sur l'icône commentaire.",
      );
    }
  } catch (error) {
    console.error("❌ [ERREUR] :", error.message);
  } finally {
    await context.close();
    console.log("🏁 FIN");
  }
}

const targetUrl =
  process.argv[2] ||
  "https://www.tiktok.com/@comedy.videos815/video/7617298440116096287";
extractComments(targetUrl);
