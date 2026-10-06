// NOURISH Platform Application Logic
// Master Controller for Single-Page Navigation, Recovery Engine, Cronometer-grade Precision & Noom Behavior Systems

class NourishApp {
  constructor() {
    this.data = window.NOURISH_DATA;
    this.activeMode = 'workout';
    this.activePage = 'home';
    this.searchQuery = '';
    this.activeCategoryFilter = 'all';
    this.activeTimeFilter = 'all';
    this.activeSortBy = 'score';
    this.isMenuExpanded = false;
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.cursorX = this.mouseX;
    this.cursorY = this.mouseY;
    
    // Load local storage or default state
    this.initStorage();
    this.initAudio();
    this.initDOM();
    this.initCursorMenu();
    this.bindEvents();
    
    // Initial renders
    this.applyTheme();
    this.renderRecoveryEngine();
    this.renderExploreMeals();
    this.renderFeaturedPlans();
    this.renderProfessionals();
    this.renderGuides();
    this.renderTestimonials();
    this.renderJournal();
    this.renderDashboard();
    this.updateBookmarkBadges();
  }

  // Experimental Custom Cursor & Radial Constellation Menu System
  initCursorMenu() {
    this.cursorMenuOverlay = document.getElementById('cursor-menu-overlay');
    this.radialConstellation = document.getElementById('radial-constellation');
    this.closeMenuBtn = document.getElementById('constellation-close-btn');

    // Node click handlers in radial menu
    document.querySelectorAll('.constellation-node[data-target]').forEach(node => {
      node.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetPage = node.dataset.target;
        this.navigateTo(targetPage);
        this.toggleCursorMenu(false);
        this.playSound('success');
      });
    });

    // Close button
    if (this.closeMenuBtn) {
      this.closeMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleCursorMenu(false);
        this.playSound('click');
      });
    }

    // Keyboard shortcuts (Esc to close, 'm' to open)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMenuExpanded) {
        this.toggleCursorMenu(false);
      } else if ((e.key === 'm' || e.key === 'M') && !e.target.matches('input, textarea')) {
        this.toggleCursorMenu(!this.isMenuExpanded);
      }
    });
  }

  toggleCursorMenu(open) {
    this.isMenuExpanded = open;
    if (open) {
      this.cursorMenuOverlay.classList.add('active');
      this.playSound('click');
    } else {
      this.cursorMenuOverlay.classList.remove('active');
      this.playSound('click');
    }
  }

  // Web Audio API Synthesizer for rich tactile feedback
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    } catch (e) {
      this.audioCtx = null;
    }
  }

  playSound(type = 'click') {
    // Sound disabled per user request
    return;
  }

  initStorage() {
    const savedState = localStorage.getItem('nourish_user_state');
    if (savedState) {
      try {
        this.state = JSON.parse(savedState);
      } catch (e) {
        this.state = JSON.parse(JSON.stringify(this.data.initialUserState));
      }
    } else {
      this.state = JSON.parse(JSON.stringify(this.data.initialUserState));
    }

    this.isDarkMode = localStorage.getItem('nourish_dark_mode') === 'true';
  }

  saveState() {
    localStorage.setItem('nourish_user_state', JSON.stringify(this.state));
    this.updateBookmarkBadges();
  }

  initDOM() {
    // Top Nav Links
    this.navLinks = document.querySelectorAll('.nav-link[data-page]');
    this.pageViews = document.querySelectorAll('.page-view');
    this.modePills = document.querySelectorAll('.btn-pill-mode');
    this.bodyNeedPills = document.querySelectorAll('.body-need-pill');
    
    // Theme toggle
    this.themeToggleBtn = document.getElementById('theme-toggle-btn');
    this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
    this.mainNav = document.getElementById('main-nav');

    // Modals
    this.mealModal = document.getElementById('meal-details-modal');
    this.bookingModal = document.getElementById('coach-booking-modal');
    this.onboardingModal = document.getElementById('onboarding-modal');
    this.customFoodModal = document.getElementById('custom-food-modal');
  }

  bindEvents() {
    // Navigation routing
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        this.navigateTo(page);
        this.playSound('click');
      });
    });

    // Mobile nav toggle
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => {
        this.mainNav.classList.toggle('mobile-open');
        this.playSound('click');
      });
    }

    // Theme toggle
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('nourish_dark_mode', this.isDarkMode);
        this.applyTheme();
        this.playSound('click');
        this.showToast(this.isDarkMode ? '🌙 Dark Mode Activated' : '☀️ Warm Ivory Mode Activated');
      });
    }


    // Scroll to Top logic
    this.scrollTopBtn = document.getElementById('scroll-to-top-btn');
    if (this.scrollTopBtn) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          this.scrollTopBtn.classList.add('visible');
        } else {
          this.scrollTopBtn.classList.remove('visible');
        }
      });
    }

    // Recovery Mode Pill Selector
    this.modePills.forEach(pill => {
      pill.addEventListener('click', () => {
        const mode = pill.dataset.mode;
        this.setRecoveryMode(mode);
        this.playSound('click');
      });
    });

    this.bodyNeedPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const mode = pill.dataset.mode;
        this.setRecoveryMode(mode);
        this.playSound('click');
      });
    });

    // Explore Search & Filter Bindings
    const searchInput = document.getElementById('explore-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderExploreMeals();
      });
    }

    const categorySelect = document.getElementById('explore-category-select');
    if (categorySelect) {
      categorySelect.addEventListener('change', (e) => {
        this.activeCategoryFilter = e.target.value;
        this.renderExploreMeals();
      });
    }

    const sortSelect = document.getElementById('explore-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.activeSortBy = e.target.value;
        this.renderExploreMeals();
      });
    }

    // Explore Tag filter pills
    document.querySelectorAll('.filter-tag-pill').forEach(tagBtn => {
      tagBtn.addEventListener('click', () => {
        document.querySelectorAll('.filter-tag-pill').forEach(b => b.classList.remove('active'));
        tagBtn.classList.add('active');
        this.activeCategoryFilter = tagBtn.dataset.tag;
        this.renderExploreMeals();
        this.playSound('click');
      });
    });

    // Close Modals on click overlay or close button
    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el || el.classList.contains('modal-close-btn')) {
          this.closeAllModals();
        }
      });
    });

    // AI Coach Chat input
    const aiChatInput = document.getElementById('ai-chat-input');
    const aiSendBtn = document.getElementById('ai-chat-send-btn');
    if (aiChatInput && aiSendBtn) {
      const handleSend = () => {
        const query = aiChatInput.value.trim();
        if (!query) return;
        this.handleAIChat(query);
        aiChatInput.value = '';
      };

      aiSendBtn.addEventListener('click', handleSend);
      aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
      });
    }

    // Modal action buttons: Onboarding Quiz Trigger
    const startPlanBtns = document.querySelectorAll('.trigger-onboarding-btn');
    startPlanBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.openOnboardingModal();
        this.playSound('click');
      });
    });
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.body.classList.remove('dark-mode');
      if (this.themeToggleBtn) this.themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  navigateTo(pageId) {
    this.activePage = pageId;
    
    // Update nav link classes
    this.navLinks.forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update page view display
    this.pageViews.forEach(view => {
      if (view.id === `page-${pageId}`) {
        view.classList.add('active-page');
      } else {
        view.classList.remove('active-page');
      }
    });

    // Close mobile nav if open
    if (this.mainNav) this.mainNav.classList.remove('mobile-open');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Refresh specific page views
    if (pageId === 'journal') this.renderJournal();
    if (pageId === 'dashboard') this.renderDashboard();
    if (pageId === 'explore') this.renderExploreMeals();
  }

  setRecoveryMode(modeId) {
    if (!this.data.recoveryModes[modeId]) return;
    this.activeMode = modeId;

    // Update pill styles
    this.modePills.forEach(p => {
      if (p.dataset.mode === modeId) p.classList.add('active');
      else p.classList.remove('active');
    });

    this.bodyNeedPills.forEach(p => {
      if (p.dataset.mode === modeId) p.classList.add('active');
      else p.classList.remove('active');
    });

    this.renderRecoveryEngine();
    this.showToast(`🎯 Recovery Mode set to: ${this.data.recoveryModes[modeId].title}`);
  }

  renderRecoveryEngine() {
    const mode = this.data.recoveryModes[this.activeMode];
    if (!mode) return;

    const heroRecMeal = this.data.meals.find(m => m.id === mode.recommendedMealId) || this.data.meals[0];

    // Update Hero card
    const heroImg = document.getElementById('hero-card-img');
    const heroTitle = document.getElementById('hero-card-title');
    const heroBadge = document.getElementById('hero-card-badge');
    const heroScore = document.getElementById('hero-card-score');
    const heroMacros = document.getElementById('hero-card-macros');

    if (heroImg) heroImg.src = heroRecMeal.image;
    if (heroTitle) heroTitle.innerText = heroRecMeal.title;
    if (heroBadge) heroBadge.innerText = mode.badge;
    if (heroScore) heroScore.innerText = `Bio-Score: ${heroRecMeal.recoveryScore}/100`;
    if (heroMacros) {
      heroMacros.innerHTML = `
        <span class="macro-chip cal">${heroRecMeal.calories} kcal</span>
        <span class="macro-chip pro">${heroRecMeal.protein}g Protein</span>
        <span class="macro-chip carb">${heroRecMeal.carbs}g Carbs</span>
      `;
    }

    // Update "Today's Recovery Engine" Section
    const engineTitle = document.getElementById('engine-title');
    const engineTagline = document.getElementById('engine-tagline');
    const engineAdvice = document.getElementById('engine-advice');
    const engineHydration = document.getElementById('engine-hydration-val');
    const engineRest = document.getElementById('engine-rest-val');
    const engineNutrients = document.getElementById('engine-nutrients-grid');
    const engineMealImg = document.getElementById('engine-meal-img');
    const engineMealTitle = document.getElementById('engine-meal-title');
    const engineMealMacros = document.getElementById('engine-meal-macros');
    const engineMealBtn = document.getElementById('engine-view-meal-btn');

    if (engineTitle) engineTitle.innerText = mode.title;
    if (engineTagline) engineTagline.innerText = mode.heroTagline;
    if (engineAdvice) engineAdvice.innerHTML = `<strong>Clinical Recovery Protocol:</strong> ${mode.advice}`;
    if (engineHydration) engineHydration.innerText = mode.hydrationTarget;
    if (engineRest) engineRest.innerText = mode.restProtocol;

    if (engineNutrients) {
      engineNutrients.innerHTML = mode.keyNutrients.map(nut => `
        <div class="nutrient-badge-item">
          <i class="fa-solid fa-atom" style="color: var(--color-terracotta)"></i>
          <span>${nut}</span>
        </div>
      `).join('');
    }

    if (engineMealImg) engineMealImg.src = heroRecMeal.image;
    if (engineMealTitle) engineMealTitle.innerText = heroRecMeal.title;
    if (engineMealMacros) {
      engineMealMacros.innerHTML = `
        <span class="macro-chip cal">${heroRecMeal.calories} kcal</span>
        <span class="macro-chip pro">${heroRecMeal.protein}g Protein</span>
        <span class="macro-chip carb">${heroRecMeal.carbs}g Carbs</span>
      `;
    }
    if (engineMealBtn) {
      engineMealBtn.onclick = () => this.openMealModal(heroRecMeal.id);
    }
  }

  // Explore Meals with full search & filtering
  renderExploreMeals() {
    const grid = document.getElementById('explore-meals-grid');
    const homeGrid = document.getElementById('home-featured-meals-grid');
    if (!grid && !homeGrid) return;

    let filtered = [...this.data.meals];

    // Category filter
    if (this.activeCategoryFilter && this.activeCategoryFilter !== 'all') {
      filtered = filtered.filter(m => 
        m.category === this.activeCategoryFilter || 
        m.recoveryType === this.activeCategoryFilter ||
        m.tags.some(t => t.toLowerCase().includes(this.activeCategoryFilter.toLowerCase()))
      );
    }

    // Search filter
    if (this.searchQuery) {
      filtered = filtered.filter(m => 
        m.title.toLowerCase().includes(this.searchQuery) ||
        m.summary.toLowerCase().includes(this.searchQuery) ||
        m.tags.some(t => t.toLowerCase().includes(this.searchQuery)) ||
        m.ingredients.some(i => i.toLowerCase().includes(this.searchQuery))
      );
    }

    // Sorting
    if (this.activeSortBy === 'score') {
      filtered.sort((a, b) => b.recoveryScore - a.recoveryScore);
    } else if (this.activeSortBy === 'protein') {
      filtered.sort((a, b) => b.protein - a.protein);
    } else if (this.activeSortBy === 'calories-low') {
      filtered.sort((a, b) => a.calories - b.calories);
    } else if (this.activeSortBy === 'time') {
      filtered.sort((a, b) => parseInt(a.prepTime) - parseInt(b.prepTime));
    }

    const cardHTML = filtered.map(meal => this.createMealCardHTML(meal)).join('');

    if (grid) {
      if (filtered.length === 0) {
        grid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
            <i class="fa-solid fa-mortar-pestle" style="font-size: 3rem; color: var(--text-faint); margin-bottom: 16px;"></i>
            <h3>No Recovery Meals Match Your Filter</h3>
            <p style="color: var(--text-muted); margin-top: 8px;">Try clearing your search query or selecting a different recovery category.</p>
            <button class="btn-secondary" style="margin-top: 16px;" onclick="window.nourishApp.resetFilters()">Reset Filters</button>
          </div>
        `;
      } else {
        grid.innerHTML = cardHTML;
      }
    }

    // Render 6 on Home page
    if (homeGrid) {
      homeGrid.innerHTML = this.data.meals.slice(0, 6).map(meal => this.createMealCardHTML(meal)).join('');
    }

    this.attachMealCardListeners();
  }

  resetFilters() {
    this.searchQuery = '';
    this.activeCategoryFilter = 'all';
    this.activeSortBy = 'score';
    const searchInput = document.getElementById('explore-search-input');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.filter-tag-pill').forEach(p => p.classList.remove('active'));
    const allPill = document.querySelector('.filter-tag-pill[data-tag="all"]');
    if (allPill) allPill.classList.add('active');
    this.renderExploreMeals();
  }

  createMealCardHTML(meal) {
    const isSaved = this.state.savedMeals.includes(meal.id);
    return `
      <div class="meal-card" data-meal-id="${meal.id}">
        <div class="meal-card-img-wrap">
          <img src="${meal.image}" alt="${meal.title}" loading="lazy" />
          <span class="meal-card-tag">${meal.tags[0]}</span>
          <button class="meal-card-bookmark-btn ${isSaved ? 'saved' : ''}" data-action="save-meal" data-id="${meal.id}" title="${isSaved ? 'Remove from Saved' : 'Save Meal'}">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
        </div>
        <div class="meal-card-body">
          <div class="meal-card-meta">
            <span><i class="fa-regular fa-clock"></i> ${meal.prepTime}</span>
            <span>•</span>
            <span><i class="fa-solid fa-bolt" style="color: var(--color-terracotta)"></i> Bio-Score ${meal.recoveryScore}</span>
            <span>•</span>
            <span>${meal.difficulty}</span>
          </div>
          <h3 class="meal-card-title" data-action="view-meal" data-id="${meal.id}">${meal.title}</h3>
          <p class="meal-card-desc">${meal.summary}</p>
          
          <div class="meal-card-macros">
            <div class="macro-box-item">
              <span class="macro-box-label">Calories</span>
              <span class="macro-box-val" style="color: var(--color-terracotta)">${meal.calories}</span>
            </div>
            <div class="macro-box-item">
              <span class="macro-box-label">Protein</span>
              <span class="macro-box-val" style="color: var(--color-sage)">${meal.protein}g</span>
            </div>
            <div class="macro-box-item">
              <span class="macro-box-label">Carbs</span>
              <span class="macro-box-val" style="color: var(--color-amber)">${meal.carbs}g</span>
            </div>
            <div class="macro-box-item">
              <span class="macro-box-label">Fat</span>
              <span class="macro-box-val" style="color: var(--color-plum)">${meal.fat}g</span>
            </div>
          </div>

          <div class="meal-card-footer">
            <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.82rem;" data-action="quick-log" data-id="${meal.id}">
              <i class="fa-solid fa-plus"></i> Add to Today
            </button>
            <button class="btn-primary" style="padding: 6px 16px; font-size: 0.82rem;" data-action="view-meal" data-id="${meal.id}">
              View Protocol <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  attachMealCardListeners() {
    document.querySelectorAll('[data-action="view-meal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.dataset.id || btn.closest('.meal-card').dataset.mealId;
        this.openMealModal(id);
        this.playSound('click');
      });
    });

    document.querySelectorAll('[data-action="save-meal"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this.toggleSaveMeal(id);
      });
    });

    document.querySelectorAll('[data-action="quick-log"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        this.quickLogMeal(id);
      });
    });
  }

  toggleSaveMeal(mealId) {
    const idx = this.state.savedMeals.indexOf(mealId);
    if (idx > -1) {
      this.state.savedMeals.splice(idx, 1);
      this.showToast('Meal removed from saved collection');
    } else {
      this.state.savedMeals.push(mealId);
      this.playSound('success');
      this.showToast('⭐️ Meal saved to your Personal Journal!');
    }
    this.saveState();
    this.renderExploreMeals();
  }

  quickLogMeal(mealId, mealTime = 'Lunch') {
    const meal = this.data.meals.find(m => m.id === mealId);
    if (!meal) return;

    this.state.todayLog.mealsLogged.push({
      id: 'log-' + Date.now(),
      mealTime: mealTime,
      title: meal.title,
      calories: meal.calories,
      protein: meal.protein,
      carbs: meal.carbs,
      fat: meal.fat,
      image: meal.image
    });

    this.state.todayLog.caloriesConsumed += meal.calories;
    this.state.todayLog.proteinConsumed += meal.protein;
    this.state.todayLog.carbsConsumed += meal.carbs;
    this.state.todayLog.fatConsumed += meal.fat;

    this.saveState();
    this.playSound('success');
    this.showToast(`✅ Added "${meal.title}" to ${mealTime}!`);
    this.renderJournal();
    this.renderDashboard();
  }

  // Cronometer-grade Detailed Meal Modal
  openMealModal(mealId) {
    const meal = this.data.meals.find(m => m.id === mealId);
    if (!meal || !this.mealModal) return;

    const modalContent = document.getElementById('meal-modal-inner-content');
    if (!modalContent) return;

    const isSaved = this.state.savedMeals.includes(meal.id);

    modalContent.innerHTML = `
      <div class="modal-meal-hero-wrap">
        <img src="${meal.image}" alt="${meal.title}" />
        <div style="position: absolute; bottom: 16px; left: 24px; background: rgba(22, 24, 23, 0.85); color: #FFF; padding: 6px 16px; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 700; backdrop-filter: blur(8px);">
          ⚡ Bio-Recovery Score: ${meal.recoveryScore}/100 • ${meal.antiInflammatoryIndex}
        </div>
      </div>
      <div class="modal-content-inner">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 16px;">
          <div>
            <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--color-terracotta); letter-spacing: 0.08em;">${meal.category.toUpperCase()} PROTOCOL</span>
            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 800; margin-top: 4px; line-height: 1.25;">${meal.title}</h2>
          </div>
          <button class="btn-secondary ${isSaved ? 'saved' : ''}" style="padding: 8px 16px; font-size: 0.85rem;" onclick="window.nourishApp.toggleSaveMeal('${meal.id}')">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i> ${isSaved ? 'Saved' : 'Save'}
          </button>
        </div>

        <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">${meal.summary}</p>

        <!-- Cronometer-grade Precision Macro & Micro Grid -->
        <div style="background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 28px; border: 1px solid var(--border-subtle);">
          <h4 style="font-size: 0.85rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.08em; margin-bottom: 14px; color: var(--text-muted);">
            🔬 CRONOMETER-GRADE BIO-NUTRIENT PROFILE
          </h4>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 18px; text-align: center;">
            <div style="background: var(--bg-surface); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Energy</span>
              <h3 style="font-size: 1.3rem; color: var(--color-terracotta); font-weight: 800;">${meal.calories} <span style="font-size: 0.75rem;">kcal</span></h3>
            </div>
            <div style="background: var(--bg-surface); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Protein</span>
              <h3 style="font-size: 1.3rem; color: var(--color-sage); font-weight: 800;">${meal.protein} <span style="font-size: 0.75rem;">g</span></h3>
            </div>
            <div style="background: var(--bg-surface); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Net Carbs</span>
              <h3 style="font-size: 1.3rem; color: var(--color-amber); font-weight: 800;">${meal.carbs} <span style="font-size: 0.75rem;">g</span></h3>
            </div>
            <div style="background: var(--bg-surface); padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Healthy Fat</span>
              <h3 style="font-size: 1.3rem; color: var(--color-plum); font-weight: 800;">${meal.fat} <span style="font-size: 0.75rem;">g</span></h3>
            </div>
          </div>

          <!-- Micronutrients List -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 0.82rem; font-weight: 600;">
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">🧂 Sodium: ${meal.micronutrients.sodium}</div>
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">🥑 Potassium: ${meal.micronutrients.potassium}</div>
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">💎 Magnesium: ${meal.micronutrients.magnesium}</div>
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">🛡️ Zinc: ${meal.micronutrients.zinc}</div>
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">☀️ Vitamin D: ${meal.micronutrients.vitaminD}</div>
            <div style="background: var(--bg-surface); padding: 8px 12px; border-radius: var(--radius-sm);">🐟 Omega-3: ${meal.micronutrients.omega3}</div>
          </div>
        </div>

        <!-- Clinical Recovery Perks -->
        <div style="margin-bottom: 28px;">
          <h4 style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 800; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <i class="fa-solid fa-shield-heart" style="color: var(--color-terracotta);"></i> Clinical Recovery Mechanisms
          </h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
            ${meal.recoveryPerks.map(p => `
              <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.92rem;">
                <i class="fa-solid fa-check" style="color: var(--color-sage); margin-top: 4px;"></i>
                <span>${p}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Ingredients & Prep Checklist -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 28px;">
          <div>
            <h4 style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 800; margin-bottom: 12px;">
              🥑 Ingredients List
            </h4>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${meal.ingredients.map(ing => `
                <label style="display: flex; align-items: center; gap: 10px; font-size: 0.88rem; cursor: pointer;">
                  <input type="checkbox" style="accent-color: var(--color-terracotta);" />
                  <span>${ing}</span>
                </label>
              `).join('')}
            </div>
          </div>
          <div>
            <h4 style="font-family: var(--font-serif); font-size: 1.15rem; font-weight: 800; margin-bottom: 12px;">
              👨‍🍳 Step-by-Step Preparation
            </h4>
            <ol style="padding-left: 20px; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: var(--text-main);">
              ${meal.instructions.map(ins => `<li style="line-height: 1.5;">${ins}</li>`).join('')}
            </ol>
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 20px;">
          <button class="btn-secondary" onclick="window.print()">
            <i class="fa-solid fa-print"></i> Print Recipe Card
          </button>
          <div style="display: flex; gap: 12px;">
            <button class="btn-secondary" onclick="window.nourishApp.quickLogMeal('${meal.id}', 'Breakfast')">
              Log as Breakfast
            </button>
            <button class="btn-primary" onclick="window.nourishApp.quickLogMeal('${meal.id}', 'Lunch')">
              <i class="fa-solid fa-plus"></i> Add to Today's Journal
            </button>
          </div>
        </div>
      </div>
    `;

    this.mealModal.classList.add('active');
  }

  // Featured Plans & Recovery Protocols
  renderFeaturedPlans() {
    const homePlansGrid = document.getElementById('home-featured-plans-grid');
    const plansGrid = document.getElementById('plans-full-grid');
    if (!homePlansGrid && !plansGrid) return;

    const plansHTML = this.data.plans.map(plan => `
      <div class="plan-card">
        <div class="plan-card-hero">
          <img src="${plan.image}" alt="${plan.title}" loading="lazy" />
          <span class="plan-badge-pill">${plan.badge}</span>
        </div>
        <div class="plan-card-body">
          <span class="plan-category">${plan.category}</span>
          <h3 class="plan-title">${plan.title}</h3>
          <p class="plan-overview">${plan.overview}</p>

          <div class="plan-meta-stats">
            <div>
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Duration</span>
              <h5 style="font-size: 0.95rem; font-weight: 800;">${plan.duration}</h5>
            </div>
            <div>
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Energy</span>
              <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--color-terracotta);">${plan.caloriesTarget}</h5>
            </div>
            <div>
              <span style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700;">Protein</span>
              <h5 style="font-size: 0.95rem; font-weight: 800; color: var(--color-sage);">${plan.proteinTarget}</h5>
            </div>
          </div>

          <ul class="plan-pillars-list">
            ${plan.keyPillars.slice(0, 3).map(p => `
              <li><i class="fa-solid fa-check-circle"></i> <span>${p}</span></li>
            `).join('')}
          </ul>

          <div style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <button class="btn-primary trigger-onboarding-btn" style="width: 100%; justify-content: center;">
              Adopt Recovery Protocol <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (homePlansGrid) homePlansGrid.innerHTML = plansHTML;
    if (plansGrid) plansGrid.innerHTML = plansHTML;
  }

  // Verified Wellness & Recovery Professionals
  renderProfessionals() {
    const grid = document.getElementById('professionals-grid');
    const homeGrid = document.getElementById('home-professionals-grid');
    if (!grid && !homeGrid) return;

    const coachesHTML = this.data.professionals.map(coach => `
      <div class="coach-card">
        <div class="coach-avatar-wrap">
          <img src="${coach.avatar}" alt="${coach.name}" />
        </div>
        <h3 class="coach-name">${coach.name}</h3>
        <span class="coach-title">${coach.title}</span>
        
        <div class="coach-badge-row">
          <span class="coach-badge"><i class="fa-solid fa-certificate" style="color: var(--color-terracotta);"></i> ${coach.badge}</span>
          <span class="coach-badge"><i class="fa-solid fa-location-dot"></i> ${coach.location}</span>
        </div>

        <p class="coach-bio">${coach.bio}</p>

        <div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 18px;">
          ${coach.focusAreas.map(f => `<span style="background: var(--bg-subtle); font-size: 0.72rem; padding: 3px 8px; border-radius: var(--radius-sm); font-weight: 600;">${f}</span>`).join('')}
        </div>

        <div class="coach-footer-stats">
          <span class="coach-rate">${coach.hourlyRate}</span>
          <span class="coach-rating">
            <i class="fa-solid fa-star"></i> ${coach.rating} (${coach.reviewsCount})
          </span>
        </div>

        <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="window.nourishApp.openBookingModal('${coach.id}')">
          Book Recovery Consultation
        </button>
      </div>
    `).join('');

    if (grid) grid.innerHTML = coachesHTML;
    if (homeGrid) homeGrid.innerHTML = coachesHTML;
  }

  // Deep Dive Educational Guides
  renderGuides() {
    const grid = document.getElementById('guides-grid');
    const homeGrid = document.getElementById('home-guides-grid');
    if (!grid && !homeGrid) return;

    const guidesHTML = this.data.guides.map(guide => `
      <div class="plan-card">
        <div class="plan-card-hero">
          <img src="${guide.image}" alt="${guide.title}" loading="lazy" />
          <span class="plan-badge-pill">${guide.badge}</span>
        </div>
        <div class="plan-card-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="plan-category">${guide.category}</span>
            <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-regular fa-clock"></i> ${guide.readTime}</span>
          </div>
          <h3 class="plan-title" style="font-size: 1.25rem;">${guide.title}</h3>
          <p class="plan-overview">${guide.summary}</p>

          <div style="background: var(--bg-subtle); padding: 12px; border-radius: var(--radius-md); margin-bottom: 16px; border-left: 3px solid var(--color-terracotta);">
            <strong style="font-size: 0.78rem; text-transform: uppercase; color: var(--color-terracotta); display: block; margin-bottom: 4px;">Key Takeaway:</strong>
            <p style="font-size: 0.82rem; color: var(--text-main);">${guide.takeaways[0]}</p>
          </div>

          <div style="margin-top: auto; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-muted);">By ${guide.author}</span>
            <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="window.nourishApp.showGuideToast('${guide.title}')">
              Read Protocol <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    if (grid) grid.innerHTML = guidesHTML;
    if (homeGrid) homeGrid.innerHTML = guidesHTML;
  }

  showGuideToast(title) {
    this.playSound('click');
    this.showToast(`📖 Reading Protocol: "${title}" (Saved to offline library)`);
  }

  // Community Testimonials
  renderTestimonials() {
    const grid = document.getElementById('home-testimonials-grid');
    if (!grid) return;

    grid.innerHTML = this.data.testimonials.map(t => `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 30px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
          <img src="${t.image}" alt="${t.name}" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-terracotta);" />
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 800;">${t.name}</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${t.role}</span>
          </div>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">
          "${t.quote}"
        </p>
        <div style="background: var(--bg-subtle); padding: 12px 16px; border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);">Biomarker Shift:</span>
          <span style="font-size: 0.85rem; font-weight: 800; color: var(--color-sage);">${t.metricAfter}</span>
        </div>
      </div>
    `).join('');
  }

  // Nutrition Journal (Cronometer + Noom Tracker)
  renderJournal() {
    const logList = document.getElementById('journal-logged-meals-list');
    const waterGlassesWrap = document.getElementById('journal-water-glasses-row');
    const waterLoggedVal = document.getElementById('journal-water-logged-val');
    const calorieProgressText = document.getElementById('journal-calories-progress-text');
    const proteinProgressText = document.getElementById('journal-protein-progress-text');
    const carbsProgressText = document.getElementById('journal-carbs-progress-text');
    const fatProgressText = document.getElementById('journal-fat-progress-text');
    const recoveryScoreVal = document.getElementById('journal-recovery-score');

    if (!logList) return;

    const log = this.state.todayLog;
    const user = this.state.user;

    // Macro Numbers
    if (calorieProgressText) calorieProgressText.innerText = `${log.caloriesConsumed} / ${user.calorieTarget} kcal`;
    if (proteinProgressText) proteinProgressText.innerText = `${log.proteinConsumed}g / ${user.proteinTarget}g`;
    if (carbsProgressText) carbsProgressText.innerText = `${log.carbsConsumed}g / ${user.carbsTarget}g`;
    if (fatProgressText) fatProgressText.innerText = `${log.fatConsumed}g / ${user.fatTarget}g`;
    if (recoveryScoreVal) recoveryScoreVal.innerText = `${log.recoveryReadinessScore}%`;

    // Render Meals Logged
    if (log.mealsLogged.length === 0) {
      logList.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-muted);">
          <i class="fa-solid fa-utensils" style="font-size: 2rem; margin-bottom: 10px; color: var(--text-faint);"></i>
          <p>No meals logged yet today. Explore meals or log a custom dish!</p>
        </div>
      `;
    } else {
      logList.innerHTML = log.mealsLogged.map(item => `
        <div class="meal-logged-entry">
          <div class="meal-logged-thumb">
            <img src="${item.image}" alt="${item.title}" />
          </div>
          <div class="meal-logged-info">
            <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--color-terracotta);">${item.mealTime}</span>
            <h4>${item.title}</h4>
            <p>${item.calories} kcal • ${item.protein}g Protein • ${item.carbs}g Carbs • ${item.fat}g Fat</p>
          </div>
          <button class="meal-logged-delete-btn" onclick="window.nourishApp.deleteLoggedMeal('${item.id}')" title="Delete entry">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }

    // Hydration Glasses (8 glasses = 2,000ml to 3,200ml)
    if (waterGlassesWrap) {
      const glassCount = 8;
      const glassVolume = 300;
      const filledGlasses = Math.floor(log.waterLoggedMl / glassVolume);

      waterGlassesWrap.innerHTML = Array.from({ length: glassCount }, (_, i) => {
        const isFilled = i < filledGlasses;
        return `
          <div class="water-glass-item ${isFilled ? 'filled' : ''}" onclick="window.nourishApp.toggleWaterGlass(${i})" title="Glass ${i + 1} (${glassVolume}ml)">
            <div class="water-glass-fill"></div>
          </div>
        `;
      }).join('');
    }

    if (waterLoggedVal) {
      waterLoggedVal.innerText = `${log.waterLoggedMl} ml`;
    }

    this.renderSorenessMap();
  }

  toggleWaterGlass(glassIdx) {
    const glassVolume = 300;
    const currentFilled = Math.floor(this.state.todayLog.waterLoggedMl / glassVolume);

    if (glassIdx < currentFilled) {
      this.state.todayLog.waterLoggedMl = Math.max(0, glassIdx * glassVolume);
    } else {
      this.state.todayLog.waterLoggedMl = (glassIdx + 1) * glassVolume;
      this.playSound('water');
    }

    this.saveState();
    this.renderJournal();
    this.renderDashboard();
    this.showToast(`💧 Hydration Updated: ${this.state.todayLog.waterLoggedMl} ml`);
  }

  addWaterCustom(amountMl = 250) {
    this.state.todayLog.waterLoggedMl += amountMl;
    this.saveState();
    this.playSound('water');
    this.renderJournal();
    this.renderDashboard();
    this.showToast(`💧 Added +${amountMl}ml Intracellular Hydration!`);
  }

  deleteLoggedMeal(logId) {
    const idx = this.state.todayLog.mealsLogged.findIndex(m => m.id === logId);
    if (idx > -1) {
      const removed = this.state.todayLog.mealsLogged[idx];
      this.state.todayLog.caloriesConsumed = Math.max(0, this.state.todayLog.caloriesConsumed - removed.calories);
      this.state.todayLog.proteinConsumed = Math.max(0, this.state.todayLog.proteinConsumed - removed.protein);
      this.state.todayLog.carbsConsumed = Math.max(0, this.state.todayLog.carbsConsumed - removed.carbs);
      this.state.todayLog.fatConsumed = Math.max(0, this.state.todayLog.fatConsumed - removed.fat);
      this.state.todayLog.mealsLogged.splice(idx, 1);
      
      this.saveState();
      this.playSound('click');
      this.renderJournal();
      this.renderDashboard();
      this.showToast('Meal log entry removed.');
    }
  }

  // Interactive Soreness Body Map
  renderSorenessMap() {
    const mapWrap = document.getElementById('soreness-muscle-selector');
    if (!mapWrap) return;

    const sorenessState = this.state.todayLog.sorenessMap;
    const muscles = [
      { key: 'quads', label: 'Quadriceps (Legs)' },
      { key: 'hamstrings', label: 'Hamstrings & Glutes' },
      { key: 'shoulders', label: 'Shoulders & Upper Back' },
      { key: 'lowerBack', label: 'Lumbar & Core' },
      { key: 'calves', label: 'Calves & Achilles' }
    ];

    mapWrap.innerHTML = muscles.map(m => {
      const status = sorenessState[m.key] || 'Optimal';
      let statusClass = '';
      if (status.includes('DOMS') || status.includes('Mild')) statusClass = 'sore-mild';
      if (status.includes('Moderate') || status.includes('Tightness')) statusClass = 'sore-severe';

      return `
        <div class="muscle-zone-pill ${statusClass}" onclick="window.nourishApp.cycleMuscleSoreness('${m.key}')">
          <span>${m.label}</span>
          <span style="font-size: 0.75rem; opacity: 0.85;">${status}</span>
        </div>
      `;
    }).join('');
  }

  cycleMuscleSoreness(muscleKey) {
    const states = ['Optimal', 'Mild (DOMS)', 'Moderate Tightness', 'High Soreness (Repair Needed)'];
    const current = this.state.todayLog.sorenessMap[muscleKey] || 'Optimal';
    const nextIdx = (states.indexOf(current) + 1) % states.length;
    this.state.todayLog.sorenessMap[muscleKey] = states[nextIdx];

    this.saveState();
    this.playSound('click');
    this.renderSorenessMap();
    this.showToast(`🩺 ${muscleKey.toUpperCase()} updated: ${states[nextIdx]}`);
  }

  // Personalized Dashboard Overview
  renderDashboard() {
    const dashReadiness = document.getElementById('dash-readiness-score');
    const dashCalories = document.getElementById('dash-calories-val');
    const dashProtein = document.getElementById('dash-protein-val');
    const dashHydration = document.getElementById('dash-hydration-val');
    const dashConsultations = document.getElementById('dash-consultations-list');
    const dashSavedMealsGrid = document.getElementById('dash-saved-meals-grid');

    const log = this.state.todayLog;
    const user = this.state.user;

    if (dashReadiness) dashReadiness.innerText = `${log.recoveryReadinessScore}%`;
    if (dashCalories) dashCalories.innerText = `${log.caloriesConsumed} kcal`;
    if (dashProtein) dashProtein.innerText = `${log.proteinConsumed}g`;
    if (dashHydration) dashHydration.innerText = `${log.waterLoggedMl} ml`;

    // Render Consultation Bookings
    if (dashConsultations) {
      if (this.state.consultations.length === 0) {
        dashConsultations.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No upcoming consultations booked yet.</p>`;
      } else {
        dashConsultations.innerHTML = this.state.consultations.map(c => `
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); margin-bottom: 10px; border: 1px solid var(--border-subtle);">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="${c.coachAvatar}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;" />
              <div>
                <h5 style="font-size: 0.92rem; font-weight: 700;">${c.coachName}</h5>
                <p style="font-size: 0.78rem; color: var(--text-muted);">${c.date} • ${c.time}</p>
              </div>
            </div>
            <span style="background: var(--color-sage-light); color: var(--color-sage); font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: var(--radius-full);">${c.status}</span>
          </div>
        `).join('');
      }
    }

    // Render Saved Meals in Dashboard
    if (dashSavedMealsGrid) {
      const savedList = this.data.meals.filter(m => this.state.savedMeals.includes(m.id));
      if (savedList.length === 0) {
        dashSavedMealsGrid.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No saved meals in your collection yet.</p>`;
      } else {
        dashSavedMealsGrid.innerHTML = savedList.slice(0, 3).map(m => `
          <div style="display: flex; align-items: center; gap: 14px; padding: 12px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); cursor: pointer;" onclick="window.nourishApp.openMealModal('${m.id}')">
            <img src="${m.image}" style="width: 60px; height: 60px; border-radius: var(--radius-sm); object-fit: cover;" />
            <div style="flex-grow: 1;">
              <h5 style="font-size: 0.92rem; font-weight: 700; margin-bottom: 2px;">${m.title}</h5>
              <span style="font-size: 0.75rem; color: var(--color-terracotta); font-weight: 700;">${m.calories} kcal • ${m.protein}g Protein</span>
            </div>
            <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 0.8rem;"></i>
          </div>
        `).join('');
      }
    }
  }

  // Booking Modal
  openBookingModal(coachId) {
    const coach = this.data.professionals.find(c => c.id === coachId);
    if (!coach || !this.bookingModal) return;

    const bookingInner = document.getElementById('coach-booking-modal-inner');
    if (!bookingInner) return;

    bookingInner.innerHTML = `
      <div style="padding: 36px;">
        <div style="display: flex; align-items: center; gap: 18px; margin-bottom: 24px;">
          <img src="${coach.avatar}" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-terracotta);" />
          <div>
            <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--color-terracotta);">Clinical Intake & Strategy</span>
            <h3 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 800;">Book Session with ${coach.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${coach.title} • ${coach.hourlyRate}</p>
          </div>
        </div>

        <form id="booking-form" onsubmit="window.nourishApp.confirmBooking(event, '${coach.id}')" style="display: flex; flex-direction: column; gap: 18px;">
          <div>
            <label style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 6px;">Select Date</label>
            <input type="date" required value="2026-10-12" style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-subtle); color: var(--text-main);" />
          </div>

          <div>
            <label style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 6px;">Available Time Slot (EST)</label>
            <select required style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-subtle); color: var(--text-main);">
              <option>10:00 AM - 11:00 AM EST</option>
              <option>01:30 PM - 02:30 PM EST</option>
              <option>04:00 PM - 05:00 PM EST</option>
              <option>06:30 PM - 07:30 PM EST</option>
            </select>
          </div>

          <div>
            <label style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); display: block; margin-bottom: 6px;">Primary Recovery Goal / Clinical Biomarkers</label>
            <textarea rows="3" placeholder="E.g. Chronic post-workout DOMS, low HRV scores, optimize sleep stack, electrolyte cramping..." style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-subtle); color: var(--text-main);" required></textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span style="font-size: 0.88rem; font-weight: 700;">Total: <strong style="color: var(--color-terracotta);">${coach.hourlyRate}</strong></span>
            <button type="submit" class="btn-primary">
              <i class="fa-solid fa-calendar-check"></i> Confirm Consultation
            </button>
          </div>
        </form>
      </div>
    `;

    this.bookingModal.classList.add('active');
  }

  confirmBooking(e, coachId) {
    e.preventDefault();
    const coach = this.data.professionals.find(c => c.id === coachId);
    if (!coach) return;

    this.state.consultations.push({
      id: 'booking-' + Date.now(),
      coachName: coach.name,
      coachAvatar: coach.avatar,
      date: 'Monday, Oct 12, 2026',
      time: '10:00 AM EST',
      topic: 'Personalized Clinical Recovery & Biomarker Strategy',
      status: 'Confirmed'
    });

    this.saveState();
    this.closeAllModals();
    this.playSound('success');
    this.showToast(`🎉 Consultation confirmed with ${coach.name}! Added to your Dashboard.`);
    this.renderDashboard();
  }

  // Noom-style Onboarding & Plan Generator Modal
  openOnboardingModal() {
    if (!this.onboardingModal) return;

    const inner = document.getElementById('onboarding-modal-inner');
    if (!inner) return;

    inner.innerHTML = `
      <div style="padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <span style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: var(--color-terracotta); letter-spacing: 0.1em;">NOOM × CRONOMETER PRECISION ONBOARDING</span>
          <h2 style="font-family: var(--font-serif); font-size: 2rem; font-weight: 800; margin-top: 6px;">Build Your Custom Recovery Protocol</h2>
          <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 6px;">Answer 4 clinical questions to calculate your personalized macronutrient & biomarker targets.</p>
        </div>

        <form id="onboarding-form" onsubmit="window.nourishApp.finishOnboarding(event)" style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <label style="font-size: 0.88rem; font-weight: 800; margin-bottom: 10px; display: block;">1. What is your primary physical recovery focus?</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <label style="padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 600;">
                <input type="radio" name="ob_goal" value="muscle" checked style="accent-color: var(--color-terracotta);" />
                <span>💪 Muscle Hyper-Recovery</span>
              </label>
              <label style="padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 600;">
                <input type="radio" name="ob_goal" value="sleep" style="accent-color: var(--color-terracotta);" />
                <span>😴 Deep Sleep & CNS Reset</span>
              </label>
              <label style="padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 600;">
                <input type="radio" name="ob_goal" value="inflammation" style="accent-color: var(--color-terracotta);" />
                <span>🧘 Joint & Inflammation Shield</span>
              </label>
              <label style="padding: 14px; background: var(--bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 10px; cursor: pointer; font-size: 0.9rem; font-weight: 600;">
                <input type="radio" name="ob_goal" value="endurance" style="accent-color: var(--color-terracotta);" />
                <span>⚡ Endurance & Cellular Energy</span>
              </label>
            </div>
          </div>

          <div>
            <label style="font-size: 0.88rem; font-weight: 800; margin-bottom: 10px; display: block;">2. Weekly Training Intensity & Frequency</label>
            <select id="ob-activity" style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-subtle); color: var(--text-main); font-weight: 600;">
              <option value="high">High Strain (5-7 sessions/week of heavy lifting or endurance)</option>
              <option value="moderate">Moderate Strain (3-4 sessions/week)</option>
              <option value="light">Active Wellness (1-2 sessions/week + walking)</option>
            </select>
          </div>

          <div>
            <label style="font-size: 0.88rem; font-weight: 800; margin-bottom: 10px; display: block;">3. Dietary Philosophy</label>
            <select id="ob-diet" style="width: 100%; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-subtle); color: var(--text-main); font-weight: 600;">
              <option value="omnivore">High-Protein Omnivore (Wild fish, pasture beef, plants)</option>
              <option value="plant">100% Plant-Based / Sprouted Vegan</option>
              <option value="pescatarian">Mediterranean Pescatarian</option>
              <option value="glutenfree">Strict Anti-Inflammatory / Gluten-Free</option>
            </select>
          </div>

          <button type="submit" class="btn-primary" style="width: 100%; justify-content: center; padding: 14px; font-size: 1rem; margin-top: 10px;">
            <i class="fa-solid fa-wand-magic-sparkles"></i> Generate Clinical Recovery Protocol
          </button>
        </form>
      </div>
    `;

    this.onboardingModal.classList.add('active');
  }

  finishOnboarding(e) {
    e.preventDefault();
    const goal = document.querySelector('input[name="ob_goal"]:checked').value;
    const activity = document.getElementById('ob-activity').value;
    const diet = document.getElementById('ob-diet').value;

    if (goal === 'muscle') {
      this.state.user.calorieTarget = 2850;
      this.state.user.proteinTarget = 195;
      this.state.user.carbsTarget = 260;
      this.state.user.fatTarget = 80;
      this.setRecoveryMode('workout');
    } else if (goal === 'sleep') {
      this.state.user.calorieTarget = 2150;
      this.state.user.proteinTarget = 140;
      this.state.user.carbsTarget = 190;
      this.state.user.fatTarget = 70;
      this.setRecoveryMode('sleep');
    } else if (goal === 'inflammation') {
      this.state.user.calorieTarget = 2300;
      this.state.user.proteinTarget = 150;
      this.state.user.carbsTarget = 200;
      this.state.user.fatTarget = 75;
      this.setRecoveryMode('rest');
    } else {
      this.state.user.calorieTarget = 2900;
      this.state.user.proteinTarget = 160;
      this.state.user.carbsTarget = 310;
      this.state.user.fatTarget = 65;
      this.setRecoveryMode('energy');
    }

    this.saveState();
    this.closeAllModals();
    this.playSound('success');
    this.showToast('🚀 Personalized Recovery Protocol initialized! Navigating to Dashboard.');
    this.navigateTo('dashboard');
  }

  // Custom Food Modal
  openCustomFoodModal() {
    if (!this.customFoodModal) return;
    this.customFoodModal.classList.add('active');
  }

  saveCustomFood(e) {
    e.preventDefault();
    const name = document.getElementById('custom-food-name').value.trim();
    const cals = parseInt(document.getElementById('custom-food-cal').value) || 0;
    const pro = parseInt(document.getElementById('custom-food-pro').value) || 0;
    const carbs = parseInt(document.getElementById('custom-food-carb').value) || 0;
    const fat = parseInt(document.getElementById('custom-food-fat').value) || 0;
    const mealTime = document.getElementById('custom-food-time').value;

    if (!name) return;

    this.state.todayLog.mealsLogged.push({
      id: 'log-' + Date.now(),
      mealTime: mealTime,
      title: name,
      calories: cals,
      protein: pro,
      carbs: carbs,
      fat: fat,
      image: './images/image-1.png'
    });

    this.state.todayLog.caloriesConsumed += cals;
    this.state.todayLog.proteinConsumed += pro;
    this.state.todayLog.carbsConsumed += carbs;
    this.state.todayLog.fatConsumed += fat;

    this.saveState();
    this.closeAllModals();
    this.playSound('success');
    this.showToast(`✅ Logged custom food: "${name}"`);
    this.renderJournal();
    this.renderDashboard();
  }

  // AI Recovery Assistant Chat
  handleAIChat(query) {
    const chatWindow = document.getElementById('ai-coach-chat-window');
    if (!chatWindow) return;

    // User message
    const userBubble = document.createElement('div');
    userBubble.className = 'ai-chat-bubble user';
    userBubble.innerText = query;
    chatWindow.appendChild(userBubble);
    this.playSound('click');

    // Bot typing simulation
    const botBubble = document.createElement('div');
    botBubble.className = 'ai-chat-bubble bot';
    botBubble.innerHTML = `<em>Analyzing clinical recovery matrix...</em>`;
    chatWindow.appendChild(botBubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    setTimeout(() => {
      const q = query.toLowerCase();
      let response = '';

      if (q.includes('sore') || q.includes('doms') || q.includes('leg') || q.includes('muscle')) {
        response = `<strong>Clinical DOMS Protocol:</strong> Consume <strong>40g Leucine-rich protein</strong> within 45 mins. Pair with <strong>400mg Magnesium Bisglycinate</strong> and the <em>Wild Salmon Quinoa Recovery Bowl</em> to downregulate inflammatory cytokines.`;
      } else if (q.includes('sleep') || q.includes('tired') || q.includes('wake') || q.includes('insomnia')) {
        response = `<strong>Circadian Reset Strategy:</strong> Take <strong>30ml Montmorency Tart Cherry concentrate</strong> with <strong>500mg L-Tryptophan</strong> 90m before sleep. Switch to Warm Ivory ambient lighting and avoid screens.`;
      } else if (q.includes('cramp') || q.includes('hydrate') || q.includes('sweat') || q.includes('water')) {
        response = `<strong>Cellular Osmolality Protocol:</strong> Plain water is insufficient. Drink <strong>500ml water + 400mg Celtic sea salt + coconut water</strong>. Intracellular potassium-sodium balance stops neuromuscular spasms immediately.`;
      } else {
        response = `<strong>Nourish Clinical Insight:</strong> For optimal recovery, maintain a 1:1 Omega-6 to Omega-3 ratio, hit 1.8g protein per kg body weight, and track your morning HRV score. Check out our <em>Recovery Hub</em> for customized protocols!`;
      }

      botBubble.innerHTML = response;
      this.playSound('success');
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 600);
  }

  closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }

  updateBookmarkBadges() {
    const count = this.state.savedMeals.length;
    document.querySelectorAll('.saved-count-badge').forEach(b => {
      b.innerText = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  showToast(msg) {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      toastContainer.className = 'nourish-toast-container';
      document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = 'nourish-toast';
    toast.innerHTML = `<i class="fa-solid fa-bell" style="color: var(--color-terracotta)"></i> <span>${msg}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
  window.nourishApp = new NourishApp();
});
