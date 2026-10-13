// BlankDigi premium header polish for /ai-content-avatar/
(function () {
  const css = `
    @media (min-width: 1181px) {
      header {
        display:flex!important;
        align-items:center!important;
        gap:clamp(12px,1.25vw,24px)!important;
        min-height:78px!important;
        padding:14px 28px!important;
        border-radius:28px!important;
      }

      header .logo {
        flex:0 0 auto!important;
        display:flex!important;
        align-items:center!important;
        gap:12px!important;
        min-width:max-content!important;
      }

      header .status-badge {
        white-space:nowrap!important;
      }

      header .nav-links {
        position:relative!important;
        flex:1 1 auto!important;
        width:auto!important;
        min-width:0!important;
        max-width:none!important;
        display:flex!important;
        align-items:center!important;
        justify-content:center!important;
        flex-wrap:nowrap!important;
        gap:3px!important;
        padding:7px 9px!important;
        border-radius:999px!important;
        white-space:nowrap!important;
        overflow:visible!important;
      }

      header .nav-links > a {
        position:relative!important;
        z-index:2!important;
        flex:0 0 auto!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        min-height:42px!important;
        padding:0 14px!important;
        margin:0!important;
        line-height:1!important;
        font-size:14px!important;
        letter-spacing:-.015em!important;
        white-space:nowrap!important;
        word-break:keep-all!important;
        text-wrap:nowrap!important;
        border-radius:999px!important;
        transition:color .2s ease, background .2s ease, transform .2s ease, box-shadow .2s ease!important;
      }

      header .nav-links > a:hover {
        transform:translateY(-1px)!important;
        background:rgba(255,255,255,.045)!important;
      }

      header .nav-links > .ai-video-nav {
        padding-left:15px!important;
        padding-right:36px!important;
        color:#dcfbff!important;
        border:1px solid rgba(93,226,255,.22)!important;
        background:linear-gradient(135deg,rgba(0,212,255,.09),rgba(132,84,255,.10))!important;
        box-shadow:inset 0 0 22px rgba(0,212,255,.035),0 0 0 1px rgba(255,255,255,.012)!important;
      }

      header .nav-links > .ai-video-nav:hover {
        color:#fff!important;
        border-color:rgba(110,231,255,.42)!important;
        background:linear-gradient(135deg,rgba(0,212,255,.15),rgba(132,84,255,.16))!important;
        box-shadow:0 0 28px rgba(0,212,255,.10),inset 0 0 28px rgba(0,212,255,.045)!important;
      }

      header .nav-links > .ai-video-nav::after {
        content:'NEW'!important;
        position:absolute!important;
        top:7px!important;
        right:7px!important;
        min-width:22px!important;
        height:13px!important;
        display:grid!important;
        place-items:center!important;
        padding:0 4px!important;
        border:1px solid rgba(98,230,255,.28)!important;
        border-radius:999px!important;
        background:rgba(0,212,255,.08)!important;
        color:#7deaff!important;
        font:900 6.5px/1 ui-monospace,SFMono-Regular,Menlo,monospace!important;
        letter-spacing:.07em!important;
        transform:none!important;
        box-shadow:none!important;
      }

      header .nav-indicator {
        display:none!important;
      }

      .nav-polish-indicator {
        position:absolute;
        z-index:1;
        left:0;
        bottom:5px;
        width:0;
        height:2px;
        border-radius:999px;
        opacity:0;
        pointer-events:none;
        background:linear-gradient(90deg,#6b66ff,#39d9ff);
        box-shadow:0 0 14px rgba(57,217,255,.46);
        transform:translateX(0);
        transition:width .28s cubic-bezier(.2,.8,.2,1),transform .28s cubic-bezier(.2,.8,.2,1),opacity .18s ease;
      }

      header .header-right {
        flex:0 0 auto!important;
        display:flex!important;
        align-items:center!important;
        gap:10px!important;
        min-width:max-content!important;
      }

      header .controls-pill {
        min-height:46px!important;
      }

      header .btn-nav-audit:not(.mobile-only-btn) {
        min-height:46px!important;
        padding:0 22px!important;
        white-space:nowrap!important;
      }
    }

    @media (min-width:1181px) and (max-width:1480px) {
      header { padding-left:20px!important; padding-right:20px!important; gap:10px!important; }
      header .nav-links { gap:0!important; padding-left:6px!important; padding-right:6px!important; }
      header .nav-links > a { padding-left:10px!important; padding-right:10px!important; font-size:13px!important; }
      header .nav-links > .ai-video-nav { padding-right:31px!important; }
      header .status-badge { transform:scale(.92); transform-origin:left center; }
      header .btn-nav-audit:not(.mobile-only-btn) { padding-left:17px!important; padding-right:17px!important; }
    }

    @media (min-width:1181px) and (max-width:1320px) {
      header .status-badge { display:none!important; }
      header .nav-links > a { font-size:12.5px!important; padding-left:8px!important; padding-right:8px!important; }
      header .nav-links > .ai-video-nav { padding-right:29px!important; }
    }

    body.light-theme .nav-polish-indicator {
      box-shadow:0 0 12px rgba(37,162,220,.25);
    }
  `;

  const style = document.createElement('style');
  style.id = 'blankdigi-header-polish';
  style.textContent = css;
  document.head.appendChild(style);

  function initHeaderPolish() {
    const nav = document.getElementById('navLinks');
    if (!nav || document.querySelector('.nav-polish-indicator')) return;

    const indicator = document.createElement('span');
    indicator.className = 'nav-polish-indicator';
    nav.appendChild(indicator);

    const getLinks = () => Array.from(nav.querySelectorAll(':scope > a'));
    let activeLink = nav.querySelector('a[href="#worlds"]') || getLinks()[0] || null;

    function moveIndicator(link) {
      if (!link || window.innerWidth < 1181) {
        indicator.style.opacity = '0';
        return;
      }
      const width = Math.max(20, link.offsetWidth - 22);
      const left = link.offsetLeft + 11;
      indicator.style.width = width + 'px';
      indicator.style.transform = 'translateX(' + left + 'px)';
      indicator.style.opacity = '1';
    }

    function bindLinks() {
      getLinks().forEach(link => {
        if (link.dataset.polishBound) return;
        link.dataset.polishBound = '1';
        link.addEventListener('mouseenter', () => moveIndicator(link));
        link.addEventListener('focus', () => moveIndicator(link));
        link.addEventListener('click', () => {
          if (link.getAttribute('href')?.startsWith('#')) {
            activeLink = link;
            requestAnimationFrame(() => moveIndicator(activeLink));
          }
        });
      });
    }

    nav.addEventListener('mouseleave', () => moveIndicator(activeLink));
    nav.addEventListener('focusout', () => setTimeout(() => moveIndicator(activeLink), 0));

    const observer = new MutationObserver(() => {
      bindLinks();
      const videoLink = nav.querySelector('a[href="#ai-video-production"]');
      if (videoLink && location.hash === '#ai-video-production') activeLink = videoLink;
      requestAnimationFrame(() => moveIndicator(activeLink));
    });
    observer.observe(nav, { childList:true });

    bindLinks();

    const sectionMap = [
      ['#worlds', 'a[href="#worlds"]'],
      ['#ai-video-production', 'a[href="#ai-video-production"]']
    ];

    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver(entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const selector = sectionMap.find(([section]) => section === '#' + visible.target.id)?.[1];
        const link = selector ? nav.querySelector(selector) : null;
        if (link) {
          activeLink = link;
          moveIndicator(activeLink);
        }
      }, { rootMargin:'-28% 0px -54% 0px', threshold:[0,.15,.35] });

      sectionMap.forEach(([section]) => {
        const el = document.querySelector(section);
        if (el) sectionObserver.observe(el);
      });

      const lateSectionObserver = new MutationObserver(() => {
        const aiSection = document.getElementById('ai-video-production');
        if (aiSection && !aiSection.dataset.headerObserved) {
          aiSection.dataset.headerObserved = '1';
          sectionObserver.observe(aiSection);
        }
      });
      lateSectionObserver.observe(document.body, { childList:true, subtree:true });
    }

    window.addEventListener('resize', () => requestAnimationFrame(() => moveIndicator(activeLink)), { passive:true });
    requestAnimationFrame(() => moveIndicator(activeLink));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeaderPolish);
  } else {
    initHeaderPolish();
  }
})();
