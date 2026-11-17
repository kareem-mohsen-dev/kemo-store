const products = [
      { id: 1, name: "بلوفر وردي وتنورة طويلة", audience: "women", label: "الأكثر طلباً", detail: "بلوفر تريكو · وردي وتنورة بني", price: 1350, image: "images/صور بنات/1.png" },
      { id: 2, name: "جاكيت جينز وبنطلون فاتح", audience: "women", label: "وصل حديثاً", detail: "جاكيت جينز · أزرق وبنطلون بيج", price: 1600, image: "images/صور بنات/2.png" },
      { id: 3, name: "بالطو طويل نبيتي", audience: "women", label: "قطعة مميزة", detail: "بالطو طويل · نبيتي", price: 2200, image: "images/صور بنات/3.png" },
      { id: 4, name: "كارديجان شتوي فاتح", audience: "women", label: "", detail: "إطلالات صوفية · أبيض ورمادي", price: 1450, image: "images/صور بنات/4.png" },
      { id: 5, name: "بالطو أسود طويل", audience: "women", label: "وصل حديثاً", detail: "بالطو شتوي · أسود", price: 2300, image: "images/صور بنات/5.png" },
      { id: 6, name: "بالطو رمادي كاروهات", audience: "women", label: "", detail: "معطف شتوي · رمادي", price: 2200, image: "images/صور بنات/6.png" },
      { id: 7, name: "بلوزة وتنورة بنقشة", audience: "women", label: "اختيارنا", detail: "بلوزة سوداء وتنورة · نقشة أبيض وأسود", price: 1500, image: "images/صور بنات/7.png" },
      { id: 8, name: "فيست شتوي وبنطلون", audience: "women", label: "", detail: "فيست طويل · رمادي", price: 1400, image: "images/صور بنات/8.png" },
      { id: 9, name: "كارديجان رجالي رمادي", audience: "men", label: "قطعة أساسية", detail: "كارديجان · رمادي", price: 1400, image: "images/صور شباب/1.png" },
      { id: 10, name: "تريننج رياضي رمادي", audience: "men", label: "", detail: "طقم رياضي · رمادي", price: 1650, image: "images/صور شباب/2.png" },
      { id: 11, name: "بليزر كحلي وبنطلون بيج", audience: "men", label: "وصل حديثاً", detail: "بليزر · كحلي وبنطلون بيج", price: 2400, image: "images/صور شباب/3.png" },
      { id: 12, name: "جاكيتات جينز وكاجوال", audience: "men", label: "", detail: "جاكيتات كاجوال · أزرق ونبيتي", price: 1800, image: "images/صور شباب/4.png" },
      { id: 13, name: "طقم وردي للبنات", audience: "kids", label: "وصل حديثاً", detail: "طقم قطعتين · وردي", price: 850, image: "images/صور اطفال/1.png" },
      { id: 14, name: "كارديجان نبيتي للبنات", audience: "kids", label: "", detail: "كارديجان بأزرار · نبيتي", price: 700, image: "images/صور اطفال/2.png" },
      { id: 15, name: "طقم بلوزة وتنورة", audience: "kids", label: "قطعة دافية", detail: "بلوزة وتنورة · بني وبيج", price: 950, image: "images/صور اطفال/3.png" },
      { id: 16, name: "طقم بلوفر وبنطلون بيج", audience: "kids", label: "", detail: "بلوفر وبنطلون · بيج", price: 900, image: "images/صور اطفال/4.png" },
      { id: 17, name: "معطف أبيض طويل", audience: "women", label: "وصل حديثاً", detail: "إطلالة شتوية محتشمة · أبيض", price: 2100, image: "images/صور بنات/9.png" },
      { id: 18, name: "قميص وبنطلون أبيض", audience: "women", label: "اختيارنا", detail: "طقم كاجوال · أبيض", price: 1500, image: "images/صور بنات/10.png" },
      { id: 19, name: "جاكيت أسود بسوستة", audience: "men", label: "", detail: "جاكيت كاجوال · أسود", price: 1700, image: "images/صور شباب/5.png" },
      { id: 20, name: "جاكيت جلد بني", audience: "men", label: "إطلالة مميزة", detail: "جاكيت جلد · بني", price: 2800, image: "images/صور شباب/6.png" },
      { id: 21, name: "بالطو بني طويل", audience: "men", label: "", detail: "معطف رجالي · بني", price: 2400, image: "images/صور شباب/7.png" },
      { id: 22, name: "جاكيت بومبر زيتي", audience: "men", label: "", detail: "جاكيت كاجوال · زيتي", price: 1900, image: "images/صور شباب/8.png" },
      { id: 23, name: "سويت شيرت بيج وبنطلون", audience: "men", label: "وصل حديثاً", detail: "سويت شيرت · بيج وبنطلون أسود", price: 1500, image: "images/صور شباب/9.png" },
      { id: 24, name: "سويت شيرت كحلي مطبوع", audience: "men", label: "اختيارنا", detail: "سويت شيرت · كحلي وبنطلون جينز", price: 1600, image: "images/صور شباب/10.png" },
      { id: 25, name: "تريننج وردي للبنات", audience: "kids", label: "وصل حديثاً", detail: "طقم رياضي · وردي", price: 900, image: "images/صور اطفال/5.png" },
      { id: 26, name: "جاكيت مبطن بغطاء رأس", audience: "kids", label: "", detail: "جاكيت أطفال · كحلي", price: 1250, image: "images/صور اطفال/6.png" },
      { id: 27, name: "كارديجان بيج وبنطلون", audience: "kids", label: "اختيارنا", detail: "كارديجان · بيج وبنطلون أزرق", price: 850, image: "images/صور اطفال/7.png" },
      { id: 28, name: "جاكيت رمادي للأطفال", audience: "kids", label: "", detail: "جاكيت شتوي · رمادي وبنطلون أسود", price: 1100, image: "images/صور اطفال/8.png" },
      { id: 29, name: "تريننج رمادي للأطفال", audience: "kids", label: "", detail: "طقم رياضي · رمادي", price: 950, image: "images/صور اطفال/9.png" },
      { id: 30, name: "سالوبيت قطني مطبوع", audience: "kids", label: "وصل حديثاً", detail: "سالوبيت قطني · أخضر برسمة", price: 650, image: "images/صور اطفال/10.jpg" }
    ];
    const productSizes = {
      women: ["XS", "S", "M", "L", "XL"],
      men: ["S", "M", "L", "XL", "XXL"],
      kids: ["2-3 سنوات", "4-5 سنوات", "6-7 سنوات", "8-9 سنوات", "10-12 سنة"]
    };
    const productColors = {
      women: ["أسود", "أوف وايت", "بيج", "بني", "رمادي", "زيتي", "نبيتي", "وردي"],
      men: ["أسود", "أبيض", "بيج", "بني", "رمادي", "زيتي", "كحلي", "أزرق"],
      kids: ["أبيض", "أسود", "بيج", "رمادي", "أزرق", "أخضر", "وردي", "نبيتي"]
    };
    const SHIPPING_FEE = 50;
    const DELIVERY_TIME = "يومين";
    const formatPrice = amount => `${amount.toLocaleString("ar-EG")} ج.م`;
    const productGrid = document.getElementById("productGrid");
    const savedCart = JSON.parse(localStorage.getItem("kemo-store-cart") || "{}");
    const cart = Object.fromEntries(Object.entries(savedCart).map(([key, quantity]) => [
      key.includes("::") ? key : `${key}::غير محدد::غير محدد`,
      quantity
    ]));
    const favorites = new Set(
      (localStorage.getItem("kemo-store-favorites") || "").split(",").filter(Boolean).map(Number)
    );
    let activeFilter = "all";
    let searchQuery = "";
    let selectedProductId;
    let lastOptionsTrigger;
    let lastCheckoutTrigger;
    let toastTimer;

    function getCartEntry(key) {
      const [id, size, color] = key.split("::");
      return { product: products.find(item => item.id === Number(id)), size, color };
    }

    function fillSelect(select, options, placeholder) {
      select.textContent = "";
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = placeholder;
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      select.appendChild(placeholderOption);
      options.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    }

    function openProductOptions(id, trigger) {
      const product = products.find(item => item.id === id);
      selectedProductId = id;
      lastOptionsTrigger = trigger;
      document.getElementById("modalProductImage").src = product.image;
      document.getElementById("modalProductName").textContent = product.name;
      document.getElementById("modalProductPrice").textContent = formatPrice(product.price);
      fillSelect(document.getElementById("productSize"), productSizes[product.audience], "اختار المقاس");
      fillSelect(document.getElementById("productColor"), productColors[product.audience], "اختار اللون");
      document.querySelectorAll("[data-size-guide]").forEach(guide => {
        guide.hidden = guide.dataset.sizeGuide !== product.audience;
      });
      document.querySelector(".size-guide").open = false;
      const backdrop = document.getElementById("productOptionsBackdrop");
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden", "false");
      document.body.classList.add("locked");
      document.getElementById("productSize").focus();
    }

    function closeProductOptions() {
      const backdrop = document.getElementById("productOptionsBackdrop");
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden", "true");
      updateBodyLock();
      if (lastOptionsTrigger && lastOptionsTrigger.isConnected) lastOptionsTrigger.focus();
      selectedProductId = undefined;
      lastOptionsTrigger = undefined;
    }

    function updateBodyLock() {
      const isLocked = ["cartDrawer", "productOptionsBackdrop", "checkoutBackdrop"]
        .some(id => document.getElementById(id).classList.contains("open"));
      document.body.classList.toggle("locked", isLocked);
    }

    function openCheckout(trigger) {
      lastCheckoutTrigger = trigger;
      const backdrop = document.getElementById("checkoutBackdrop");
      backdrop.classList.add("open");
      backdrop.setAttribute("aria-hidden", "false");
      updateBodyLock();
      document.getElementById("customerName").focus();
    }

    function closeCheckout() {
      const backdrop = document.getElementById("checkoutBackdrop");
      backdrop.classList.remove("open");
      backdrop.setAttribute("aria-hidden", "true");
      updateBodyLock();
      if (lastCheckoutTrigger && lastCheckoutTrigger.isConnected) lastCheckoutTrigger.focus();
      lastCheckoutTrigger = undefined;
    }

    function renderProducts() {
      const visible = products.filter(product =>
        (activeFilter === "all" ||
          (activeFilter === "favorites" ? favorites.has(product.id) : product.audience === activeFilter)) &&
        `${product.name} ${product.detail}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      productGrid.innerHTML = visible.length ? visible.map(product => `
        <article class="product-card" id="product-${product.id}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.label ? `<span class="product-label">${product.label}</span>` : ""}
            <button class="favorite ${favorites.has(product.id) ? "active" : ""}" data-favorite="${product.id}" aria-pressed="${favorites.has(product.id)}" aria-label="${favorites.has(product.id) ? `إزالة ${product.name} من المفضلة` : `أضيفي ${product.name} للمفضلة`}"><svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10A4.8 4.8 0 0 1 12 6.3a4.8 4.8 0 0 1 8.8 2.5Z"/></svg></button>
            <button class="quick-add" data-options="${product.id}">اختار المقاس واللون +</button>
          </div>
          <div class="product-info">
            <div class="product-meta"><span class="product-name">${product.name}</span><span class="product-price">${formatPrice(product.price)}</span></div>
            <div class="product-detail">${product.detail}</div>
            <button class="product-share" data-share="${product.id}" aria-label="شارك ${product.name} على واتساب">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.3m-6.6 6.9 6.6 4.3"/></svg>
              مشاركة على واتساب
            </button>
          </div>
        </article>`).join("") : `<p class="empty-cart">${activeFilter === "favorites" ? "لسه مفيش قطع في المفضلة." : "ملقيناش قطع بالاسم ده، جربي كلمة تانية."}</p>`;
      productGrid.querySelectorAll("[data-options]").forEach(button => button.addEventListener("click", () => openProductOptions(Number(button.dataset.options), button)));
      productGrid.querySelectorAll("[data-share]").forEach(button => button.addEventListener("click", () => shareProduct(Number(button.dataset.share))));
      productGrid.querySelectorAll("[data-favorite]").forEach(button => button.addEventListener("click", () => {
        const product = products.find(item => item.id === Number(button.dataset.favorite));
        const id = product.id;
        const wasFavorite = favorites.has(id);
        if (wasFavorite) favorites.delete(id);
        else favorites.add(id);
        localStorage.setItem("kemo-store-favorites", [...favorites].join(","));
        const isFavorite = favorites.has(id);
        button.classList.toggle("active", isFavorite);
        button.setAttribute("aria-pressed", String(isFavorite));
        button.setAttribute("aria-label", isFavorite ? `إزالة ${product.name} من المفضلة` : `أضيفي ${product.name} للمفضلة`);
        showToast(isFavorite ? "اتضافت للمفضلة ♡" : "اتشالت من المفضلة");
        if (activeFilter === "favorites" && !isFavorite) renderProducts();
      }));
    }

    function shareProduct(id) {
      const product = products.find(item => item.id === id);
      const shareUrl = ["http:", "https:"].includes(window.location.protocol)
        ? `${window.location.href.split("#")[0]}#product-${product.id}`
        : "";
      const message = [
        "شوف القطعة دي من Kemo Store:",
        product.name,
        `السعر: ${formatPrice(product.price)}`,
        ...(shareUrl ? [`رابط القطعة: ${shareUrl}`] : [])
      ].join("\n");
      if (!shareUrl) showToast("رابط القطعة هيظهر بعد نشر الموقع على الإنترنت");
      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }

    function scrollToSharedProduct() {
      const match = window.location.hash.match(/^#product-(\d+)$/);
      if (!match) return;
      const id = Number(match[1]);
      if (!products.some(product => product.id === id)) return;
      activeFilter = "all";
      searchQuery = "";
      document.getElementById("searchInput").value = "";
      document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.toggle("active", button.dataset.filter === activeFilter);
      });
      renderProducts();
      const card = document.getElementById(`product-${id}`);
      if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    function saveCart() {
      localStorage.setItem("kemo-store-cart", JSON.stringify(cart));
      renderCart();
    }
    function addToCart(id, size, color) {
      const key = `${id}::${size}::${color}`;
      cart[key] = (cart[key] || 0) + 1;
      saveCart();
      showToast("اتضافت القطعة لسلتك");
    }
    function renderCart() {
      const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
      const count = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
      const subtotal = entries.reduce((sum, [key, quantity]) => sum + getCartEntry(key).product.price * quantity, 0);
      const shipping = entries.length ? SHIPPING_FEE : 0;
      document.getElementById("bagCount").textContent = count;
      document.getElementById("drawerCount").textContent = `(${count.toLocaleString("ar-EG")})`;
      document.getElementById("cartShipping").textContent = entries.length ? formatPrice(shipping) : "—";
      document.getElementById("cartTotal").textContent = formatPrice(subtotal + shipping);
      document.getElementById("cartItems").innerHTML = entries.length ? entries.map(([key, quantity]) => {
        const { product, size, color } = getCartEntry(key);
        return `<div class="cart-item"><img src="${product.image}" alt=""><div><div class="cart-item-name">${product.name}</div><div class="cart-item-price">${formatPrice(product.price)}</div><div class="cart-item-variant">المقاس: ${size} · اللون: ${color}</div><div class="quantity"><button data-quantity="${key}" data-change="-1" aria-label="تقليل الكمية">−</button><span>${quantity.toLocaleString("ar-EG")}</span><button data-quantity="${key}" data-change="1" aria-label="زيادة الكمية">+</button></div></div><button class="remove-item" data-remove="${key}" aria-label="حذف ${product.name}">×</button></div>`;
      }).join("") : `<div class="empty-cart">لسه سلتك فاضية... اختاري قطعة بتحبيها 🤍</div>`;
      document.querySelectorAll("[data-quantity]").forEach(button => button.addEventListener("click", () => {
        const id = button.dataset.quantity;
        cart[id] += Number(button.dataset.change);
        if (cart[id] <= 0) delete cart[id];
        saveCart();
      }));
      document.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => {
        delete cart[button.dataset.remove];
        saveCart();
      }));
    }
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
    }
    function toggleCart(open) {
      document.getElementById("overlay").classList.toggle("open", open);
      document.getElementById("cartDrawer").classList.toggle("open", open);
      document.getElementById("cartDrawer").setAttribute("aria-hidden", String(!open));
      updateBodyLock();
    }

    document.querySelectorAll(".filter-btn").forEach(button => button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-btn").forEach(item => item.classList.toggle("active", item === button));
      renderProducts();
    }));
    document.querySelectorAll("[data-audience-link]").forEach(link => link.addEventListener("click", () => {
      activeFilter = link.dataset.audienceLink;
      document.querySelectorAll(".filter-btn").forEach(button => button.classList.toggle("active", button.dataset.filter === activeFilter));
      renderProducts();
    }));
    document.getElementById("cartToggle").addEventListener("click", () => toggleCart(true));
    document.getElementById("closeCart").addEventListener("click", () => toggleCart(false));
    document.getElementById("overlay").addEventListener("click", () => toggleCart(false));
    document.getElementById("checkoutButton").addEventListener("click", event => {
      const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
      if (!entries.length) {
        showToast("ضيفي قطعة للسلة الأول");
        return;
      }
      openCheckout(event.currentTarget);
    });
    document.getElementById("closeCheckout").addEventListener("click", closeCheckout);
    document.getElementById("checkoutBackdrop").addEventListener("click", event => {
      if (event.target === event.currentTarget) closeCheckout();
    });
    document.getElementById("deliveryForm").addEventListener("submit", event => {
      event.preventDefault();
      const entries = Object.entries(cart).filter(([, quantity]) => quantity > 0);
      if (!entries.length) {
        closeCheckout();
        showToast("ضيفي قطعة للسلة الأول");
        return;
      }

      const orderLines = entries.map(([key, quantity]) => {
        const { product, size, color } = getCartEntry(key);
        return `- ${product.name} — المقاس: ${size}، اللون: ${color} × ${quantity.toLocaleString("ar-EG")} = ${formatPrice(product.price * quantity)}`;
      });
      const subtotal = entries.reduce((sum, [key, quantity]) =>
        sum + getCartEntry(key).product.price * quantity, 0
      );
      const total = subtotal + SHIPPING_FEE;
      const deliveryDetails = {
        name: document.getElementById("customerName").value.trim(),
        phone: document.getElementById("customerPhone").value.trim(),
        governorate: document.getElementById("customerGovernorate").value.trim(),
        address: document.getElementById("customerAddress").value.trim(),
        notes: document.getElementById("deliveryNotes").value.trim() || "لا توجد"
      };
      const message = [
        "مرحباً، أود طلب المنتجات التالية:",
        "",
        `الاسم: ${deliveryDetails.name}`,
        `رقم الموبايل: ${deliveryDetails.phone}`,
        `المحافظة: ${deliveryDetails.governorate}`,
        `العنوان: ${deliveryDetails.address}`,
        `ملاحظات التوصيل: ${deliveryDetails.notes}`,
        "",
        "المنتجات:",
        "",
        ...orderLines,
        "",
        `قيمة المنتجات: ${formatPrice(subtotal)}`,
        `الشحن: ${formatPrice(SHIPPING_FEE)}`,
        `الإجمالي شامل الشحن: ${formatPrice(total)}`,
        `مدة التوصيل المتوقعة: خلال ${DELIVERY_TIME}`,
        "",
        "هل المنتجات بالمقاسات والألوان المطلوبة متاحة الآن؟"
      ].join("\n");
      const whatsappUrl = `https://wa.me/201020012512?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      event.currentTarget.reset();
      closeCheckout();
      toggleCart(false);
    });
    document.getElementById("closeProductOptions").addEventListener("click", closeProductOptions);
    document.getElementById("productOptionsBackdrop").addEventListener("click", event => {
      if (event.target === event.currentTarget) closeProductOptions();
    });
    document.getElementById("confirmProductAdd").addEventListener("click", () => {
      const size = document.getElementById("productSize").value;
      const color = document.getElementById("productColor").value;
      if (!size || !color) {
        showToast("اختار المقاس واللون الأول");
        return;
      }
      addToCart(selectedProductId, size, color);
      closeProductOptions();
    });
    document.addEventListener("keydown", event => {
      if (event.key !== "Escape") return;
      if (document.getElementById("checkoutBackdrop").classList.contains("open")) closeCheckout();
      else if (document.getElementById("productOptionsBackdrop").classList.contains("open")) closeProductOptions();
    });
    document.getElementById("searchToggle").addEventListener("click", () => {
      const panel = document.getElementById("searchPanel");
      panel.classList.toggle("open");
      if (panel.classList.contains("open")) document.getElementById("searchInput").focus();
      else { searchQuery = ""; document.getElementById("searchInput").value = ""; renderProducts(); }
    });
    document.getElementById("searchInput").addEventListener("input", event => {
      searchQuery = event.target.value.trim();
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      renderProducts();
    });
    document.getElementById("menuToggle").addEventListener("click", event => {
      const isOpen = document.getElementById("navLinks").classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded", String(isOpen));
    });
    document.querySelectorAll("#navLinks a").forEach(link => link.addEventListener("click", () => {
      document.getElementById("navLinks").classList.remove("open");
      document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
    }));
    document.getElementById("subscribeForm").addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("formMessage").textContent = "أهلاً بيكي في Kemo Store! استنّي جديدنا قريباً.";
      event.currentTarget.reset();
    });
    renderProducts();
    renderCart();
    window.addEventListener("hashchange", scrollToSharedProduct);
    scrollToSharedProduct();
