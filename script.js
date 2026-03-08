// Year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple i18n switch for EN/ZH
  const translations = {
    en: {
      "nav.about": "About",
      "nav.token": "Tokenomics",
      "nav.eco": "Ecosystem",
      "nav.community": "Community",
      "nav.buy": "Buy CMO",
      "hero.tagline":
        "ChiefMemeOfficer is a playful, community-first meme token on BNB Chain. Zero tax, liquidity locked, and built for fun. Learn, build, and meme with us.",
      "hero.buyOnBnb": "Buy on BNB",
      "hero.copy": "Copy Contract",
      "ticker.part1": "$CMO • 0% TAX • LIQUIDITY LOCKED • COMMUNITY OWNED",
      "ticker.part2": "BNB CHAIN • FUN-FIRST • EDUCATION • TOOLS • VIBES",
      "ticker.part3": "JOIN THE PACK • DYOR • MEMES • GOOD ENERGY",
      "badges.tax": "0% Tax",
      "badges.liq": "Liquidity Locked",
      "badges.renounced": "Contract Renounced",
      "about.title": "Welcome to CMO",
      "about.blurb":
        "A community-owned meme token focused on vibes, education, and building fun tools for the BNB Chain ecosystem.",
      "about.card1Title": "Community First",
      "about.card1Body":
        "We ship experiences together: open collaboration, transparent decisions, and meme magic.",
      "about.card2Title": "Secure & Simple",
      "about.card2Body":
        "0% tax, liquidity locked, and a renounced contract. Fun without friction.",
      "about.card3Title": "Education",
      "about.card3Body":
        "Guides and content that help everyone learn crypto safely and confidently.",
      "about.card4Title": "Builders Welcome",
      "about.card4Body":
        "We support tools, integrations, and creative projects that grow the ecosystem.",
      "token.title": "Contract & Token Info",
      "token.safu": "SAFU: 0% TAX / LIQUIDITY LOCKED / CONTRACT RENOUNCED",
      "token.ticker": "Ticker",
      "token.chain": "Chain",
      "token.tax": "Tax",
      "token.supply": "Supply",
      "buy.title": "How to buy $CMO",
      "buy.step1": "Install Binance Wallet or use your preferred EVM wallet.",
      "buy.step2": "Switch to BNB Chain (BSC) network.",
      "buy.step3": "Get BNB for gas and swapping.",
      "buy.step4": "Go to your favorite DEX, paste our contract, and swap.",
      "buy.openDex": "Open DEX",
      "buy.seeToken": "See Token Info",
      "buy.disclaimer":
        "Always verify the contract address before trading. DYOR.",
      "eco.title": "Ecosystem",
      "eco.wallets": "Wallets",
      "eco.walletsDesc":
        "Use Binance Wallet or your favorite EVM wallet to trade PALU.",
      "eco.dex": "DEX",
      "eco.dexDesc": "Swap quickly and safely on leading BNB Chain DEXs.",
      "eco.education": "Education",
      "eco.educationDesc": "Guides and how-tos for newcomers and degens alike.",
      "community.title": "Join our community",
      "community.blurb":
        "Hang out on Telegram and X, share memes, contribute ideas, and help build the future of fun on BNB Chain.",
      "community.telegram": "Telegram",
      "community.twitter": "Twitter",
      "community.docs": "Docs",
      "community.dex": "Dexscreener",
      "footer.disclaimer":
        "© " +
        new Date().getFullYear() +
        " ChiefMemeOfficer. For entertainment purposes only. No financial advice.",
      "token.copy": "Copy",
      copied: "Copied!",
      // Stats i18n
      "stats.title": "$CMO Token Stats",
      "stats.loading": "Loading...",
      "stats.refreshUpdating": "Updating...",
      "stats.refreshLive": "Live",
      "stats.refreshError": "Error",
      "stats.circulatingTitle": "Circulating Supply",
      "stats.circulatingDesc": "PALU in circulation",
      "stats.burnedTitle": "Burned Supply",
      "stats.burnedDesc": "Tokens burned",
      "stats.lastBurnTitle": "Last Burn Event",
      "stats.amountLoading": "Loading...",
      "stats.noRecentBurns": "No recent burns",
      "stats.noBurnEventsFound": "No burn events found",
      "stats.burnedSuffix": "burned",
      "stats.contractLabel": "Contract:",
      "stats.lastUpdated": "Last updated:",
      "stats.lastUpdatedNever": "Last updated: Never",
      // Memes i18n
      "memes.title": "ChiefMemeOfficer Narrative",
      "memes.subtitle": "Check out ChiefMemeOfficer Narrative and post mentions!",
      "memes.post0Content":
        "Day 472, thanks to crypto (Palu BNB new high version) 👀",
      "memes.post0Contest":
        '⬇️ Create your own "thanks to crypto" with the same background and post it. The 5 most creative entries will receive an 88U reward 🧧',
      "memes.post1Content":
        "Day 351, I'm done pretending, #Web3Palu I'm the mysterious eighth person in the picture 😎",
      "memes.post1Disclaimer":
        "⚠️ The image is for entertainment only, please don't take it seriously! The original image is from @DtDt666",
      "memes.post2Content":
        "Day 459, urgently seeking help to get P-niu's element next to Palu! Waiting online, pretty anxious 👀",
      "memes.post2Contest":
        "#BinancePSContest ⬇️One creative picture in the comment section will win merchandise",
      "memes.post3Content":
        "Day 377, 🧶 today is still #Web3Palu (fluffy version)",
      "memes.post3AI":
        "What other #AI cool styles can I try? Seeking advice from the pros ⬇️#NFA",
      "memes.post4Content": "GM☕️ Monday morning, have you #币安 today?",
      "memes.viewPost": "View Post",
    },
    zh: {
      "nav.about": "关于",
      "nav.token": "代币信息",
      "nav.eco": "生态系统",
      "nav.community": "社区",
      "nav.buy": "购买 PALU",
      "hero.tagline":
        "Palu 是一个以社区为先的趣味 BNB 链梗币。零税收、流动性锁定，专注于乐趣与建设。",
      "hero.buyOnBnb": "在 BNB 上购买",
      "hero.copy": "复制合约地址",
      "ticker.part1": "$CMO • 0% 税收 • 流动性锁定 • 社区所有",
      "ticker.part2": "BNB 链 • 乐趣至上 • 教育 • 工具 • 热情",
      "ticker.part3": "加入我们 • DYOR • 梗图 • 正能量",
      "badges.tax": "0% 税收",
      "badges.liq": "流动性锁定",
      "badges.renounced": "合约已放弃所有权",
      "about.title": "欢迎来到 PALU",
      "about.blurb":
        "一个由社区拥有的梗币，专注于氛围、教育与在 BNB 链上打造有趣工具。",
      "about.card1Title": "社区至上",
      "about.card1Body": "我们共同打造体验：开放协作、透明决策与梗图魔法。",
      "about.card2Title": "安全且简单",
      "about.card2Body":
        "0% 税收、流动性锁定、合约所有权已放弃。无阻力的乐趣。",
      "about.card3Title": "教育",
      "about.card3Body":
        "为所有人提供指南与内容，帮助安全、自信地学习加密知识。",
      "about.card4Title": "欢迎建设者",
      "about.card4Body": "我们支持工具、集成与创意项目，推动生态成长。",
      "token.title": "合约与代币信息",
      "token.safu": "安全：0% 税收 / 流动性锁定 / 合约所有权已放弃",
      "token.ticker": "代号",
      "token.chain": "链",
      "token.tax": "税收",
      "token.supply": "总量",
      "buy.title": "如何购买 $CMO",
      "buy.step1": "安装 Binance 钱包或使用你偏好的 EVM 钱包。",
      "buy.step2": "切换到 BNB Chain（BSC）网络。",
      "buy.step3": "准备用于手续费与兑换的 BNB。",
      "buy.step4": "前往常用 DEX，粘贴我们的合约地址并进行兑换。",
      "buy.openDex": "打开 DEX",
      "buy.seeToken": "查看代币信息",
      "buy.disclaimer": "交易前请务必核对合约地址。DYOR。",
      "eco.title": "生态系统",
      "eco.wallets": "钱包",
      "eco.walletsDesc": "使用 Binance 钱包或你偏好的 EVM 钱包交易 PALU。",
      "eco.dex": "去中心化交易所",
      "eco.dexDesc": "在 BNB 链主流 DEX 上快速且安全地交换。",
      "eco.education": "教育",
      "eco.educationDesc": "为新人和老玩家准备的指南与操作教程。",
      "community.title": "加入我们的社区",
      "community.blurb":
        "来电报与 X 一起玩梗、分享想法、共建 BNB 链的趣味未来。",
      "community.telegram": "Telegram",
      "community.twitter": "Twitter",
      "community.docs": "文档",
      "community.dex": "Dexscreener",
      "community.cmc": "CoinMarketCap",
      "footer.disclaimer":
        "© " + new Date().getFullYear() + " Palu。仅供娱乐，不构成投资建议。",
      "token.copy": "复制",
      copied: "已复制！",
      // Stats i18n
      "stats.title": "$CMO 代币统计",
      "stats.loading": "加载中...",
      "stats.refreshUpdating": "更新中...",
      "stats.refreshLive": "实时",
      "stats.refreshError": "错误",
      "stats.circulatingTitle": "流通量",
      "stats.circulatingDesc": "流通中的 PALU",
      "stats.burnedTitle": "已销毁数量",
      "stats.burnedDesc": "已销毁的代币",
      "stats.lastBurnTitle": "最近销毁事件",
      "stats.amountLoading": "加载中...",
      "stats.noRecentBurns": "近期无销毁",
      "stats.noBurnEventsFound": "未找到销毁记录",
      "stats.burnedSuffix": "已销毁",
      "stats.contractLabel": "合约：",
      "stats.lastUpdated": "上次更新：",
      "stats.lastUpdatedNever": "上次更新：从未",
      // Memes i18n
      "memes.title": "帕鲁梗图",
      "memes.subtitle": "查看帕鲁梗图和帖子提及！",
      "memes.post0Content": "Day 472，感谢加密（帕鲁BNB新高版）👀",
      "memes.post0Contest":
        "⬇️用相同背景创作你的「感谢加密」并发布 最具创意的5位获得88U奖励🧧",
      "memes.post1Content":
        "Day 351，摊牌了不装了，#Web3帕鲁 我就是图上的神秘第八人😎",
      "memes.post1Disclaimer": "⚠️图片仅供娱乐，请勿当真！原图来源于 @DtDt666",
      "memes.post2Content": "Day 459，求帮P牛的元素在帕鲁旁边！在线等挺急的👀",
      "memes.post2Contest": "#币安PS大赛 ⬇️评论区抽一个创意图片送周边",
      "memes.post3Content": "Day 377，🧶今天还是 #Web3帕鲁 （毛茸茸版）",
      "memes.post3AI": "还有啥 #AI 炫酷风格可以尝试？求大佬指点⬇️#NFA",
      "memes.post4Content": "GM☕️周一早，今天你 #币安 了吗？",
      "memes.viewPost": "查看帖子",
    },
  };

  // expose globally for other handlers
  window.__translations = translations;
  window.__lang = "en";

  function applyTranslations(lang) {
    const dict = translations[lang] || translations.en;
    window.__lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  // simple global translator helper
  window.__t = function (key, fallback) {
    const lang = window.__lang || "en";
    const dict = (window.__translations && window.__translations[lang]) || {};
    return dict[key] || fallback || key;
  };

  const enBtn = document.getElementById("lang-en");
  const zhBtn = document.getElementById("lang-zh");
  if (enBtn && zhBtn) {
    enBtn.addEventListener("click", () => {
      applyTranslations("en");
      if (window.__paluStats) window.__paluStats.loadTokenStats();
    });
    zhBtn.addEventListener("click", () => {
      applyTranslations("zh");
      if (window.__paluStats) window.__paluStats.loadTokenStats();
    });
  }
  // default
  applyTranslations("en");

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuInner = document.getElementById("mobileMenuInner");
  if (menuToggle && mobileMenu) {
    const openMenu = () => {
      mobileMenu.classList.remove("hidden");
      mobileMenu.style.height = "0px";
      mobileMenu.style.opacity = "0";
      mobileMenu.style.transition = "height 280ms ease, opacity 200ms ease";
      const target = (mobileMenuInner && mobileMenuInner.scrollHeight) || 0;
      requestAnimationFrame(() => {
        mobileMenu.style.height = target + "px";
        mobileMenu.style.opacity = "1";
      });
    };
    const closeMenu = () => {
      const current = mobileMenu.scrollHeight;
      mobileMenu.style.transition = "height 280ms ease, opacity 200ms ease";
      mobileMenu.style.height = current + "px";
      mobileMenu.style.opacity = "1";
      requestAnimationFrame(() => {
        mobileMenu.style.height = "0px";
        mobileMenu.style.opacity = "0";
      });
      setTimeout(() => {
        mobileMenu.classList.add("hidden");
        mobileMenu.style.removeProperty("height");
        mobileMenu.style.removeProperty("opacity");
        mobileMenu.style.removeProperty("transition");
      }, 300);
    };

    menuToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      isHidden ? openMenu() : closeMenu();
    });
  }
});

// Marquee ticker using GSAP
window.addEventListener("load", () => {
  if (window.gsap) {
    document.querySelectorAll(".marquee").forEach((marquee) => {
      const [first] = marquee.children;
      const width = first.scrollWidth;
      gsap.set(marquee, { x: 0 });
      let anim = gsap.to(marquee, {
        x: -width,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      // Recompute on resize to avoid overlap and jumpiness
      const onResize = () => {
        anim && anim.kill();
        const newWidth = first.scrollWidth;
        gsap.set(marquee, { x: 0 });
        anim = gsap.to(marquee, {
          x: -newWidth,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      };
      window.addEventListener("resize", onResize);
    });

    // Parallax reveal for feature cards
    if (gsap && ScrollTrigger) {
      gsap.utils.toArray(".feature-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }
  }
});

// Motion One micro-interactions
window.addEventListener("DOMContentLoaded", () => {
  const motionApi = window.motion || {};
  const { animate } = motionApi;

  if (animate) {
    // Buttons squish (and new chunky buttons with data-bouncy)
    document
      .querySelectorAll("[data-bouncy], .btn-primary, .btn-secondary")
      .forEach((btn) => {
        btn.addEventListener("pointerdown", () => {
          animate(btn, { scale: 0.97 }, { duration: 0.12 });
        });
        btn.addEventListener("pointerup", () => {
          animate(btn, { scale: 1 }, { duration: 0.2 });
        });
        btn.addEventListener("pointerenter", () => {
          animate(btn, { y: -2 }, { duration: 0.2 });
        });
        btn.addEventListener("pointerleave", () => {
          animate(btn, { y: 0 }, { duration: 0.2 });
        });
      });

    // Hero image float
    const hero = document.getElementById("heroImg");
    if (hero) {
      animate(
        hero,
        { y: [0, -8, 0], rotate: [0, 1.2, 0] },
        { duration: 5, easing: "ease-in-out", repeat: Infinity }
      );
    }
  }

  // Buy section: required loop sequence palu2 -> palu3 -> palu2 -> palu1 -> (repeat)
  const buyImage = document.getElementById("buyImage");
  if (buyImage) {
    const sequence = [
      "./assets/palu2.png",
      "./assets/palu3.png",
      "./assets/palu2.png",
      "./assets/palu1.png",
    ];
    let index = 0;
    // Ensure starting image matches sequence start
    buyImage.src = sequence[index];
    setInterval(() => {
      index = (index + 1) % sequence.length;
      buyImage.src = sequence[index];
    }, 600);
  }

  // Token Stats functionality (from palu-token-stats.html adapted)
  class PaluTokenStats {
    constructor() {
      this.tokenAddress = "0x39B7d1139Abf7Da3196c243838B0e3D3b98BE066";
      this.tokenSymbol = "PALU";
      this.refreshInterval = 30000;
      this.web3 = null;
      this.tokenContract = null;
      this.refreshTimer = null;
      this.tokenABI = [
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      if (document.getElementById("circulatingSupply")) {
        this.init();
      }
    }
    // expose instance for language refresh
    expose() {
      window.__paluStats = this;
    }

    async init() {
      await this.initializeWeb3();
      await this.loadTokenStats();
      this.startAutoRefresh();
      this.expose();
    }

    async initializeWeb3() {
      try {
        this.setRefreshStatus("loading");
        this.web3 = new window.Web3("https://bsc-dataseed.binance.org/");
        this.tokenContract = new this.web3.eth.Contract(
          this.tokenABI,
          this.tokenAddress
        );
      } catch (error) {
        this.setRefreshStatus("error");
      }
    }

    async loadTokenStats() {
      try {
        this.setRefreshStatus("loading");
        const [totalSupply, burnedSupply, lastBurnEvent] = await Promise.all([
          this.getTotalSupply(),
          this.getBurnedSupply(),
          this.getLastBurnEvent(),
        ]);
        const circulatingSupply = totalSupply - burnedSupply;
        this.updateCirculatingSupply(circulatingSupply);
        this.updateBurnedSupply(burnedSupply);
        this.updateLastBurnEvent(lastBurnEvent);
        this.updateLastUpdatedTime();
        this.setRefreshStatus("success");
      } catch (error) {
        this.setRefreshStatus("error");
      }
    }

    async getTotalSupply() {
      try {
        const totalSupply = await this.tokenContract.methods
          .totalSupply()
          .call();
        const decimals = await this.tokenContract.methods.decimals().call();
        return parseFloat(totalSupply) / Math.pow(10, decimals);
      } catch (error) {
        return 0;
      }
    }

    async getBurnedSupply() {
      try {
        const burnAddresses = [
          "0x000000000000000000000000000000000000dead",
          "0x0000000000000000000000000000000000000000",
        ];
        const decimals = await this.tokenContract.methods.decimals().call();
        let totalBurned = 0;
        for (const burnAddress of burnAddresses) {
          try {
            const balance = await this.tokenContract.methods
              .balanceOf(burnAddress)
              .call();
            totalBurned += parseFloat(balance);
          } catch (_) {}
        }
        return totalBurned / Math.pow(10, decimals);
      } catch (error) {
        return 0;
      }
    }

    async getLastBurnEvent() {
      try {
        const knownBurnTx =
          "0x94b4793e84f1b76b441250a06d7919a99048d5b6183950951dedaeb24c5fca30";
        try {
          const txReceipt = await this.web3.eth.getTransactionReceipt(
            knownBurnTx
          );
          if (txReceipt && txReceipt.logs) {
            const transferTopic = this.web3.utils.keccak256(
              "Transfer(address,address,uint256)"
            );
            const deadWallet = "0x000000000000000000000000000000000000dead";
            for (const log of txReceipt.logs) {
              if (
                log.address.toLowerCase() === this.tokenAddress.toLowerCase() &&
                log.topics[0] === transferTopic &&
                log.topics[2] === this.web3.utils.padLeft(deadWallet, 64)
              ) {
                const block = await this.web3.eth.getBlock(
                  txReceipt.blockNumber
                );
                const decimals = await this.tokenContract.methods
                  .decimals()
                  .call();
                const amount = this.web3.utils.hexToNumberString(log.data);
                const burnAmount = parseFloat(amount) / Math.pow(10, decimals);
                return {
                  timestamp: parseInt(block.timestamp) * 1000,
                  amount: burnAmount,
                  txHash: knownBurnTx,
                  blockNumber: txReceipt.blockNumber,
                  burnAddress: deadWallet,
                  fromAddress: "0x" + log.topics[1].slice(26),
                };
              }
            }
          }
        } catch (_) {}

        const currentBlock = await this.web3.eth.getBlockNumber();
        const fromBlock = Math.max(0, currentBlock - 100000);
        const transferTopic = this.web3.utils.keccak256(
          "Transfer(address,address,uint256)"
        );
        const deadWallet = "0x000000000000000000000000000000000000dead";
        try {
          const logs = await this.web3.eth.getPastLogs({
            fromBlock,
            toBlock: "latest",
            address: this.tokenAddress,
            topics: [
              transferTopic,
              null,
              this.web3.utils.padLeft(deadWallet, 64),
            ],
          });
          if (logs.length > 0) {
            const latestLog = logs[logs.length - 1];
            const block = await this.web3.eth.getBlock(latestLog.blockNumber);
            const decimals = await this.tokenContract.methods.decimals().call();
            const amount = this.web3.utils.hexToNumberString(latestLog.data);
            const burnAmount = parseFloat(amount) / Math.pow(10, decimals);
            return {
              timestamp: parseInt(block.timestamp) * 1000,
              amount: burnAmount,
              txHash: latestLog.transactionHash,
              blockNumber: latestLog.blockNumber,
              burnAddress: deadWallet,
              fromAddress: "0x" + latestLog.topics[1].slice(26),
            };
          }
        } catch (_) {}
        return null;
      } catch (error) {
        return null;
      }
    }

    updateCirculatingSupply(supply) {
      const el = document.getElementById("circulatingSupply");
      if (el) el.textContent = this.formatNumber(supply);
    }
    updateBurnedSupply(burned) {
      const el = document.getElementById("burnedSupply");
      if (el) el.textContent = this.formatNumber(burned);
    }
    updateLastBurnEvent(event) {
      const timeElement = document.getElementById("lastBurn");
      const amountElement = document.getElementById("lastBurnAmount");
      if (!timeElement || !amountElement) return;
      if (event) {
        timeElement.textContent = this.formatTimeAgo(event.timestamp);
        timeElement.classList.add("underline", "cursor-pointer");
        timeElement.onclick = () =>
          window.open(`https://bscscan.com/tx/${event.txHash}`, "_blank");
        const suffix =
          (window.__t && window.__t("stats.burnedSuffix")) || "burned";
        amountElement.textContent = `${this.formatNumber(event.amount)} ${
          this.tokenSymbol
        } ${suffix}`;
      } else {
        timeElement.textContent =
          (window.__t && window.__t("stats.noRecentBurns")) ||
          "No recent burns";
        timeElement.classList.remove("underline", "cursor-pointer");
        timeElement.onclick = null;
        amountElement.textContent =
          (window.__t && window.__t("stats.noBurnEventsFound")) ||
          "No burn events found";
      }
    }
    updateLastUpdatedTime() {
      const el = document.getElementById("lastUpdated");
      if (el) {
        const label =
          (window.__t && window.__t("stats.lastUpdated")) || "Last updated:";
        el.textContent = `${label} ${new Date().toLocaleTimeString()}`;
      }
    }
    setRefreshStatus(status) {
      const indicator = document.getElementById("refreshIndicator");
      const text = indicator ? indicator.querySelector(".refresh-text") : null;
      if (!indicator || !text) return;
      // Use text only, style is visual already
      switch (status) {
        case "loading":
          text.textContent =
            (window.__t && window.__t("stats.refreshUpdating")) ||
            "Updating...";
          break;
        case "success":
          text.textContent =
            (window.__t && window.__t("stats.refreshLive")) || "Live";
          break;
        case "error":
          text.textContent =
            (window.__t && window.__t("stats.refreshError")) || "Error";
          break;
      }
    }
    formatNumber(num) {
      if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
      else if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
      else if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
      else
        return Number(num || 0).toLocaleString(undefined, {
          maximumFractionDigits: 2,
        });
    }
    formatTimeAgo(timestampMs) {
      const now = Date.now();
      const diff = now - timestampMs;
      const minutes = Math.floor(diff / 60000);
      const hours = Math.floor(diff / 3600000);
      const days = Math.floor(diff / 86400000);
      if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
      if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (minutes > 0) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
      return "Just now";
    }
    startAutoRefresh() {
      if (this.refreshTimer) clearInterval(this.refreshTimer);
      this.refreshTimer = setInterval(
        () => this.loadTokenStats(),
        this.refreshInterval
      );
    }
  }
  new PaluTokenStats();
});

// Copy contract handlers
function copyContractToClipboard() {
  const text = document.getElementById("contractText")?.textContent?.trim();
  if (!text) return;
  navigator.clipboard.writeText(text).then(() => {
    const buttons = [
      document.getElementById("copyContract"),
      document.getElementById("copyContract2"),
    ].filter(Boolean);
    buttons.forEach((btn) => {
      const original = btn.textContent;
      const t =
        (window.__translations &&
          window.__translations[window.__lang] &&
          window.__translations[window.__lang].copied) ||
        "Copied!";
      btn.textContent = t;
      btn.classList.add("ring-2", "ring-palu-400/40");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("ring-2", "ring-palu-400/40");
      }, 1200);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const c1 = document.getElementById("copyContract");
  const c2 = document.getElementById("copyContract2");
  c1 && c1.addEventListener("click", copyContractToClipboard);
  c2 && c2.addEventListener("click", copyContractToClipboard);
});

// Memes Carousel functionality
class MemesCarousel {
  constructor() {
    this.container = document.getElementById("carouselContainer");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.slidesPerView = window.innerWidth >= 768 ? 3 : 1;
    this.isAnimating = false;
    this.autoSlideInterval = null;
    this.transitionMs = 700;

    if (this.container && this.prevBtn && this.nextBtn) {
      this.init();
    }
  }

  init() {
    this.updateMeasurements();
    this.setupEventListeners();
    this.startAutoSlide();
  }

  updateMeasurements() {
    this.slidesPerView = window.innerWidth >= 768 ? 3 : 1;
    const firstSlide = this.container.querySelector(".carousel-slide");
    this.slideWidthPx = firstSlide
      ? firstSlide.getBoundingClientRect().width
      : 0;
    // Always reset any transform when recalculating
    this.setTransition(false);
    this.setTranslateX(0);
  }

  setTransition(enabled) {
    this.container.style.transition = enabled
      ? `transform ${this.transitionMs}ms ease-in-out`
      : "none";
  }

  setTranslateX(px) {
    this.container.style.transform = `translateX(${px}px)`;
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.slideRightOne());
    this.nextBtn.addEventListener("click", () => this.slideLeftOne());

    this.container.addEventListener("mouseenter", () => this.pauseAutoSlide());
    this.container.addEventListener("mouseleave", () => this.startAutoSlide());
    this.container.addEventListener("touchstart", () => this.pauseAutoSlide(), {
      passive: true,
    });
    this.container.addEventListener("touchend", () => this.startAutoSlide());

    window.addEventListener("resize", () => this.handleResize());
  }

  slideLeftOne() {
    if (this.isAnimating || this.slideWidthPx === 0) return;
    this.isAnimating = true;

    this.setTransition(true);
    this.setTranslateX(-this.slideWidthPx);

    const onTransitionEnd = () => {
      this.container.removeEventListener("transitionend", onTransitionEnd);
      // Recycle first slide to the end
      const first = this.container.firstElementChild;
      if (first) this.container.appendChild(first);
      // Snap back without visual jump
      this.setTransition(false);
      this.setTranslateX(0);
      // Force reflow to apply styles before enabling transition again
      void this.container.offsetHeight;
      this.setTransition(true);
      this.isAnimating = false;
    };

    this.container.addEventListener("transitionend", onTransitionEnd);
  }

  slideRightOne() {
    if (this.isAnimating || this.slideWidthPx === 0) return;
    this.isAnimating = true;

    // Place last slide at the front without animation and offset left by one slide
    const last = this.container.lastElementChild;
    if (last)
      this.container.insertBefore(last, this.container.firstElementChild);
    this.setTransition(false);
    this.setTranslateX(-this.slideWidthPx);
    void this.container.offsetHeight;

    // Animate back to zero
    this.setTransition(true);
    this.setTranslateX(0);

    const onTransitionEnd = () => {
      this.container.removeEventListener("transitionend", onTransitionEnd);
      this.isAnimating = false;
    };

    this.container.addEventListener("transitionend", onTransitionEnd);
  }

  startAutoSlide() {
    if (this.autoSlideInterval) return;
    this.autoSlideInterval = setInterval(() => this.slideLeftOne(), 4000);
  }

  pauseAutoSlide() {
    if (!this.autoSlideInterval) return;
    clearInterval(this.autoSlideInterval);
    this.autoSlideInterval = null;
  }

  handleResize() {
    const previousWidth = this.slideWidthPx;
    this.updateMeasurements();
    // If width changed while an animation was in progress, cancel and reset
    if (this.isAnimating && this.slideWidthPx !== previousWidth) {
      this.isAnimating = false;
      this.setTransition(false);
      this.setTranslateX(0);
    }
  }
}

// Initialize carousel when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new MemesCarousel();
});

function formatNumber(num) {
  if (num === null || num === undefined || isNaN(num)) return "N/A";

  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  } else {
    return num.toFixed(2);
  }
}
