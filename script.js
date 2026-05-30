const listings = [
  {
    id: 1,
    title: "Modern Apartment in Kyrenia",
    location: "Kyrenia, North Cyprus",
    price: 120000,
    bedrooms: 2,
    bathrooms: 1,
    area: 92,
    type: "Apartment",
    status: "For Sale",
    agent: "Aylin Demir",
    phone: "+90 533 000 10 01",
    email: "aylin@celestate.com",
    description: "A modern apartment close to Kyrenia city center with open-plan living, balcony access, and nearby shops, schools, and transport routes.",
    features: ["City center access", "Balcony", "Open-plan kitchen", "Parking", "Near public transport"]
  },
  {
    id: 2,
    title: "Luxury Villa with Sea View",
    location: "Esentepe, North Cyprus",
    price: 450000,
    bedrooms: 4,
    bathrooms: 3,
    area: 245,
    type: "Villa",
    status: "For Sale",
    agent: "Mert Kaya",
    phone: "+90 533 000 10 02",
    email: "mert@celestate.com",
    description: "A spacious detached villa with sea views, landscaped outdoor space, private parking, and large interior rooms suitable for family living.",
    features: ["Sea view", "Private garden", "Large terrace", "Private parking", "En-suite bedroom"]
  },
  {
    id: 3,
    title: "Student Flat Near University",
    location: "Nicosia, North Cyprus",
    price: 75000,
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    type: "Flat",
    status: "For Sale",
    agent: "Selin Arda",
    phone: "+90 533 000 10 03",
    email: "selin@celestate.com",
    description: "A compact flat designed for students and young professionals, located near university facilities and essential daily services.",
    features: ["Near university", "Low maintenance", "Compact layout", "Investment option", "Central location"]
  },
  {
    id: 4,
    title: "Penthouse in Famagusta",
    location: "Famagusta, North Cyprus",
    price: 210000,
    bedrooms: 3,
    bathrooms: 2,
    area: 138,
    type: "Penthouse",
    status: "For Sale",
    agent: "Deniz Ertan",
    phone: "+90 533 000 10 04",
    email: "deniz@celestate.com",
    description: "A bright penthouse with a wide terrace, good natural light, and quick access to central Famagusta and coastal routes.",
    features: ["Large terrace", "Top floor", "Natural light", "City access", "Modern interior"]
  },
  {
    id: 5,
    title: "Cozy Studio Near EMU",
    location: "Famagusta, North Cyprus",
    price: 65000,
    bedrooms: 1,
    bathrooms: 1,
    area: 42,
    type: "Studio",
    status: "For Sale",
    agent: "Ece Tan",
    phone: "+90 533 000 10 05",
    email: "ece@celestate.com",
    description: "A small studio close to EMU, suitable for students, first-time buyers, or investors looking for a simple rental property.",
    features: ["Near EMU", "Student-friendly", "Easy rental potential", "Compact design", "Low budget"]
  },
  {
    id: 6,
    title: "Seaside Apartment in Kyrenia",
    location: "Kyrenia, North Cyprus",
    price: 185000,
    bedrooms: 2,
    bathrooms: 2,
    area: 110,
    type: "Apartment",
    status: "For Sale",
    agent: "Aylin Demir",
    phone: "+90 533 000 10 01",
    email: "aylin@celestate.com",
    description: "A well-positioned seaside apartment with two bedrooms, two bathrooms, and strong short-term rental potential.",
    features: ["Near sea", "Two bathrooms", "Rental potential", "Balcony", "Modern building"]
  },
  {
    id: 7,
    title: "Family House in Nicosia",
    location: "Nicosia, North Cyprus",
    price: 240000,
    bedrooms: 3,
    bathrooms: 2,
    area: 165,
    type: "House",
    status: "For Sale",
    agent: "Selin Arda",
    phone: "+90 533 000 10 03",
    email: "selin@celestate.com",
    description: "A family-oriented house with three bedrooms, a practical room layout, and access to schools, markets, and city services.",
    features: ["Family area", "Near schools", "Private entrance", "Storage space", "Quiet street"]
  },
  {
    id: 8,
    title: "Compact Studio in Famagusta",
    location: "Famagusta, North Cyprus",
    price: 58000,
    bedrooms: 1,
    bathrooms: 1,
    area: 39,
    type: "Studio",
    status: "For Sale",
    agent: "Ece Tan",
    phone: "+90 533 000 10 05",
    email: "ece@celestate.com",
    description: "An affordable compact studio suitable for students or investors who need a small, easy-to-maintain property.",
    features: ["Affordable", "Low maintenance", "Student area", "Simple layout", "Investment option"]
  },
  {
    id: 9,
    title: "Mountain View Villa in Alsancak",
    location: "Alsancak, North Cyprus",
    price: 390000,
    bedrooms: 4,
    bathrooms: 3,
    area: 230,
    type: "Villa",
    status: "For Sale",
    agent: "Mert Kaya",
    phone: "+90 533 000 10 02",
    email: "mert@celestate.com",
    description: "A four-bedroom villa with mountain views, outdoor seating areas, and a calm residential environment in Alsancak.",
    features: ["Mountain view", "Detached property", "Outdoor seating", "Quiet area", "Family suitable"]
  },
  {
    id: 10,
    title: "Modern Flat in Lefkosa Center",
    location: "Nicosia, North Cyprus",
    price: 98000,
    bedrooms: 2,
    bathrooms: 1,
    area: 78,
    type: "Flat",
    status: "For Sale",
    agent: "Selin Arda",
    phone: "+90 533 000 10 03",
    email: "selin@celestate.com",
    description: "A central two-bedroom flat with quick access to business areas, shops, restaurants, and public transport.",
    features: ["Central location", "Two bedrooms", "Public transport", "Modern finish", "Good value"]
  },
  {
    id: 11,
    title: "Luxury Beach Villa in Esentepe",
    location: "Esentepe, North Cyprus",
    price: 620000,
    bedrooms: 5,
    bathrooms: 4,
    area: 310,
    type: "Villa",
    status: "For Sale",
    agent: "Mert Kaya",
    phone: "+90 533 000 10 02",
    email: "mert@celestate.com",
    description: "A high-end beach villa with generous interior space, premium finishes, sea access, and strong lifestyle appeal.",
    features: ["Beach access", "Premium finish", "Large garden", "Five bedrooms", "Sea-facing terrace"]
  },
  {
    id: 12,
    title: "Affordable Apartment in Lefke",
    location: "Lefke, North Cyprus",
    price: 54000,
    bedrooms: 1,
    bathrooms: 1,
    area: 48,
    type: "Apartment",
    status: "For Sale",
    agent: "Deniz Ertan",
    phone: "+90 533 000 10 04",
    email: "deniz@celestate.com",
    description: "A low-budget apartment in Lefke, suitable for students, budget buyers, or small-scale property investors.",
    features: ["Budget-friendly", "Simple maintenance", "Student market", "Compact layout", "Entry-level investment"]
  },
  {
    id: 13,
    title: "Garden House in Lapta",
    location: "Lapta, North Cyprus",
    price: 265000,
    bedrooms: 3,
    bathrooms: 2,
    area: 175,
    type: "House",
    status: "For Sale",
    agent: "Aylin Demir",
    phone: "+90 533 000 10 01",
    email: "aylin@celestate.com",
    description: "A comfortable garden house in Lapta with private outdoor space and a practical layout for families.",
    features: ["Private garden", "Family layout", "Outdoor space", "Quiet location", "Parking"]
  },
  {
    id: 14,
    title: "City Apartment Near Dereboyu",
    location: "Nicosia, North Cyprus",
    price: 135000,
    bedrooms: 2,
    bathrooms: 1,
    area: 88,
    type: "Apartment",
    status: "For Sale",
    agent: "Selin Arda",
    phone: "+90 533 000 10 03",
    email: "selin@celestate.com",
    description: "A city apartment near Dereboyu, suitable for buyers who want access to cafes, shops, offices, and nightlife.",
    features: ["Near Dereboyu", "City lifestyle", "Two bedrooms", "Walkable area", "Rental demand"]
  },
  {
    id: 15,
    title: "Detached Villa in Bellapais",
    location: "Bellapais, North Cyprus",
    price: 780000,
    bedrooms: 5,
    bathrooms: 5,
    area: 350,
    type: "Villa",
    status: "For Sale",
    agent: "Mert Kaya",
    phone: "+90 533 000 10 02",
    email: "mert@celestate.com",
    description: "A premium detached villa in Bellapais with spacious rooms, strong privacy, and a luxury residential setting.",
    features: ["Detached villa", "Luxury area", "Five bathrooms", "Private plot", "High privacy"]
  }
];

const ADMIN_STORAGE_KEYS = {
  users: "celestateUsers",
  listingSubmissions: "celestateListingSubmissions",
  listingStats: "celestateListingStats",
  notifications: "celestateAdminNotifications"
};

const PUBLIC_LISTINGS_STORAGE_KEY = "celestatePublicListings";

const initialPublicListings = listings.map(function(listing) {
  return {
    ...listing,
    features: [...listing.features]
  };
});

function getStoredJson(key, fallbackValue) {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return fallbackValue;
    }

    return JSON.parse(storedValue);
  } catch (error) {
    return fallbackValue;
  }
}

function saveStoredJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getSeedPublicListings() {
  return initialPublicListings.map(function(listing) {
    return {
      ...listing,
      features: [...listing.features]
    };
  });
}

function ensurePublicListingsSeedData() {
  const storedPublicListings = getStoredJson(PUBLIC_LISTINGS_STORAGE_KEY, null);

  if (!Array.isArray(storedPublicListings) || storedPublicListings.length === 0) {
    saveStoredJson(PUBLIC_LISTINGS_STORAGE_KEY, getSeedPublicListings());
    return;
  }

  listings.splice(0, listings.length, ...storedPublicListings);
}

function savePublicListingsState() {
  saveStoredJson(PUBLIC_LISTINGS_STORAGE_KEY, listings);
}

function daysAgo(dayCount) {
  const date = new Date();
  date.setDate(date.getDate() - dayCount);
  return date.toISOString();
}

function createSeedAdminUsers() {
  return [
    {
      id: 1,
      name: "Customer User",
      email: "customer@celestate.com",
      role: "customer",
      status: "active",
      createdAt: daysAgo(74)
    },
    {
      id: 2,
      name: "Agent User",
      email: "agent@celestate.com",
      role: "agent",
      status: "active",
      createdAt: daysAgo(66)
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@celestate.com",
      role: "admin",
      status: "active",
      createdAt: daysAgo(120)
    },
    {
      id: 4,
      name: "Demo User",
      email: "demo@celestate.com",
      role: "customer",
      status: "active",
      createdAt: daysAgo(18)
    },
    {
      id: 5,
      name: "Olivia Stone",
      email: "olivia.stone@celestate.com",
      role: "customer",
      status: "inactive",
      createdAt: daysAgo(9)
    },
    {
      id: 6,
      name: "Ahmet Kaya",
      email: "ahmet.kaya@celestate.com",
      role: "agent",
      status: "active",
      createdAt: daysAgo(27)
    },
    {
      id: 7,
      name: "Sofia Reed",
      email: "sofia.reed@celestate.com",
      role: "customer",
      status: "active",
      createdAt: daysAgo(4)
    }
  ];
}

function createSeedListingSubmissions() {
  const approvedSubmissions = listings.slice(0, 8).map(function(listing, index) {
    return {
      id: 2000 + listing.id,
      linkedListingId: listing.id,
      title: listing.title,
      location: listing.location,
      price: listing.price,
      type: listing.type,
      bedrooms: listing.bedrooms,
      bathrooms: listing.bathrooms,
      area: listing.area,
      agent: "Agent User",
      phone: "+90 533 000 20 01",
      email: "agent@celestate.com",
      description: listing.description,
      features: listing.features,
      status: "approved",
      reason: "",
      submittedAt: daysAgo(20 - index),
      createdByEmail: "agent@celestate.com"
    };
  });

  return approvedSubmissions.concat([
    {
      id: 3001,
      title: "Riverside Loft in Kyrenia",
      location: "Kyrenia, North Cyprus",
      price: 162000,
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
      agent: "Agent User",
      phone: "+90 533 000 20 01",
      email: "agent@celestate.com",
      description: "A river-facing loft with open-plan living, a compact balcony, and easy access to city transport routes.",
      features: ["River view", "Balcony", "Open-plan layout", "Parking", "Central access"],
      status: "pending",
      reason: "",
      submittedAt: daysAgo(2),
      createdByEmail: "agent@celestate.com"
    },
    {
      id: 3002,
      title: "Sunset Terrace Villa",
      location: "Lapta, North Cyprus",
      price: 510000,
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      area: 260,
      agent: "Agent User",
      phone: "+90 533 000 20 01",
      email: "agent@celestate.com",
      description: "A terrace villa with evening light, private outdoor seating, and room for family gatherings.",
      features: ["Terrace", "Private garden", "Family layout", "Sea breeze", "Parking"],
      status: "pending",
      reason: "",
      submittedAt: daysAgo(1),
      createdByEmail: "agent@celestate.com"
    },
    {
      id: 3003,
      title: "Compact Student Studio",
      location: "Famagusta, North Cyprus",
      price: 62000,
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      area: 40,
      agent: "Agent User",
      phone: "+90 533 000 20 01",
      email: "agent@celestate.com",
      description: "An efficient studio tailored for student rental demand near the university district.",
      features: ["Student area", "Compact layout", "Low maintenance", "Rental demand", "Investment potential"],
      status: "rejected",
      reason: "Property photos were incomplete.",
      submittedAt: daysAgo(4),
      createdByEmail: "agent@celestate.com"
    },
    {
      id: 3004,
      title: "Coastal Family Home",
      location: "Alsancak, North Cyprus",
      price: 330000,
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      area: 168,
      agent: "Agent User",
      phone: "+90 533 000 20 01",
      email: "agent@celestate.com",
      description: "A detached family home near the coast with a quiet street and a practical indoor layout.",
      features: ["Family home", "Quiet street", "Coastal access", "Outdoor space", "Parking"],
      status: "archived",
      reason: "Archived after market review.",
      submittedAt: daysAgo(7),
      createdByEmail: "agent@celestate.com"
    }
  ]);
}

function createSeedListingStats() {
  const stats = {};

  listings.forEach(function(listing, index) {
    stats[listing.id] = {
      views: 90 + (index * 17),
      favorites: 8 + (index % 6)
    };
  });

  [3001, 3002, 3003, 3004].forEach(function(listingId) {
    stats[listingId] = {
      views: 0,
      favorites: 0
    };
  });

  return stats;
}

function ensureAdminSeedData() {
  ensurePublicListingsSeedData();

  const storedUsers = getStoredJson(ADMIN_STORAGE_KEYS.users, null);

  if (!Array.isArray(storedUsers) || storedUsers.length === 0) {
    saveStoredJson(ADMIN_STORAGE_KEYS.users, createSeedAdminUsers());
  }

  const storedSubmissions = getStoredJson(ADMIN_STORAGE_KEYS.listingSubmissions, null);

  if (!Array.isArray(storedSubmissions) || storedSubmissions.length === 0) {
    saveStoredJson(ADMIN_STORAGE_KEYS.listingSubmissions, createSeedListingSubmissions());
  } else {
    const hasAgentDemoListings = storedSubmissions.some(function(submission) {
      return submission.createdByEmail === "agent@celestate.com" || submission.email === "agent@celestate.com";
    });

    if (!hasAgentDemoListings) {
      const agentSeedSubmissions = createSeedListingSubmissions().filter(function(submission) {
        return submission.createdByEmail === "agent@celestate.com" || submission.email === "agent@celestate.com";
      });

      saveStoredJson(ADMIN_STORAGE_KEYS.listingSubmissions, agentSeedSubmissions.concat(storedSubmissions));
    }
  }

  const storedStats = getStoredJson(ADMIN_STORAGE_KEYS.listingStats, null);

  if (!storedStats || typeof storedStats !== "object" || Array.isArray(storedStats)) {
    saveStoredJson(ADMIN_STORAGE_KEYS.listingStats, createSeedListingStats());
  }

  const storedNotifications = getStoredJson(ADMIN_STORAGE_KEYS.notifications, null);

  if (!Array.isArray(storedNotifications)) {
    saveStoredJson(ADMIN_STORAGE_KEYS.notifications, []);
  }
}

function getAdminUsers() {
  ensureAdminSeedData();
  return getStoredJson(ADMIN_STORAGE_KEYS.users, createSeedAdminUsers());
}

function saveAdminUsers(users) {
  saveStoredJson(ADMIN_STORAGE_KEYS.users, users);
}

function getListingSubmissions() {
  ensureAdminSeedData();
  return getStoredJson(ADMIN_STORAGE_KEYS.listingSubmissions, createSeedListingSubmissions());
}

function saveListingSubmissions(submissions) {
  saveStoredJson(ADMIN_STORAGE_KEYS.listingSubmissions, submissions);
}

function getListingStats() {
  ensureAdminSeedData();
  return getStoredJson(ADMIN_STORAGE_KEYS.listingStats, createSeedListingStats());
}

function saveListingStats(stats) {
  saveStoredJson(ADMIN_STORAGE_KEYS.listingStats, stats);
}

function getListingStatRecord(listingId) {
  const stats = getListingStats();
  const numericListingId = Number(listingId);

  if (!stats[numericListingId]) {
    stats[numericListingId] = {
      views: 0,
      favorites: 0
    };
    saveListingStats(stats);
  }

  return stats[numericListingId];
}

function updateListingStat(listingId, field, delta) {
  const stats = getListingStats();
  const numericListingId = Number(listingId);

  if (!stats[numericListingId]) {
    stats[numericListingId] = {
      views: 0,
      favorites: 0
    };
  }

  stats[numericListingId][field] = Math.max(0, (stats[numericListingId][field] || 0) + delta);
  saveListingStats(stats);
}

function recordListingView(listingId) {
  updateListingStat(listingId, "views", 1);
}

function recordListingFavorite(listingId, isAddingFavorite) {
  updateListingStat(listingId, "favorites", isAddingFavorite ? 1 : -1);
}

function addAdminNotification(message) {
  const notifications = getStoredJson(ADMIN_STORAGE_KEYS.notifications, []);

  notifications.unshift({
    id: Date.now(),
    message: message,
    createdAt: new Date().toLocaleString()
  });

  saveStoredJson(ADMIN_STORAGE_KEYS.notifications, notifications.slice(0, 12));
}

function showAdminBanner(message, type = "success") {
  if (!adminNoticeBanner) {
    return;
  }

  adminNoticeBanner.textContent = message;
  adminNoticeBanner.className = `admin-notice-banner ${type}`;
}

const listingsContainer = document.getElementById("listingsContainer");
const heroSection = document.querySelector(".hero");
const listingsSection = document.getElementById("listings");
const searchInput = document.getElementById("searchInput");
const maxPriceInput = document.getElementById("maxPriceInput");
const priceError = document.getElementById("priceError");
const sortSelect = document.getElementById("sortSelect");
const pagination = document.getElementById("pagination");
const navAuthArea = document.getElementById("navAuthArea");
const heroBrowseButton = document.getElementById("heroBrowseButton");
const listingDetailsModal = document.getElementById("listingDetailsModal");
const modalBody = document.getElementById("modalBody");
const closeModalButton = document.getElementById("closeModalButton");
const favoritesSection = document.getElementById("favorites");
const favoritesContainer = document.getElementById("favoritesContainer");
const favoritesCount = document.getElementById("favoritesCount");
const showAllListingsButton = document.getElementById("showAllListingsButton");
const adminDashboard = document.getElementById("adminDashboard");
const adminSummaryGrid = document.getElementById("adminSummaryGrid");
const adminUsersContainer = document.getElementById("adminUsersContainer");
const adminListingsContainer = document.getElementById("adminListingsContainer");
const adminAnalyticsContainer = document.getElementById("adminAnalyticsContainer");
const adminRefreshButton = document.getElementById("adminRefreshButton");
const adminNoticeBanner = document.getElementById("adminNoticeBanner");
const agentDashboard = document.getElementById("agentDashboard");
const agentListingForm = document.getElementById("agentListingForm");
const agentResetFormButton = document.getElementById("agentResetFormButton");
const agentNoticeBanner = document.getElementById("agentNoticeBanner");
const agentListingsContainer = document.getElementById("agentListingsContainer");
const agentFormMessage = document.getElementById("agentFormMessage");
const agentManageRefreshButton = document.getElementById("agentManageRefreshButton");
const agentExportListingsButton = document.getElementById("agentExportListingsButton");
const agentAddNewListingButton = document.getElementById("agentAddNewListingButton");
const agentManageSummary = document.getElementById("agentManageSummary");
const agentManageListingsContainer = document.getElementById("agentManageListingsContainer");
const agentManagePagination = document.getElementById("agentManagePagination");
const agentListingSearchInput = document.getElementById("agentListingSearchInput");
const agentStatusFilter = document.getElementById("agentStatusFilter");
const agentTypeFilter = document.getElementById("agentTypeFilter");
const agentListingFormPanel = document.getElementById("agentListingFormPanel");
const agentEditingSubmissionId = document.getElementById("agentEditingSubmissionId");
const agentFormTitle = document.getElementById("agentFormTitle");
const agentFormSubtitle = document.getElementById("agentFormSubtitle");
const agentSubmitListingButton = document.getElementById("agentSubmitListingButton");
const agentCancelEditButton = document.getElementById("agentCancelEditButton");
const agentSaveDraftButton = document.getElementById("agentSaveDraftButton");
const agentSubmitForApprovalTopButton = document.getElementById("agentSubmitForApprovalTopButton");
const agentInquirySummary = document.getElementById("agentInquirySummary");
const agentInquirySearchInput = document.getElementById("agentInquirySearchInput");
const agentInquiryStatusFilter = document.getElementById("agentInquiryStatusFilter");
const agentInquiryListingFilter = document.getElementById("agentInquiryListingFilter");
const agentInquiriesContainer = document.getElementById("agentInquiriesContainer");
const agentInquiryPagination = document.getElementById("agentInquiryPagination");
const agentExportInquiriesButton = document.getElementById("agentExportInquiriesButton");
const agentResetInquiryFiltersButton = document.getElementById("agentResetInquiryFiltersButton");
const agentMessagesPanel = document.getElementById("agentMessagesPanel");
const agentMessageSearchInput = document.getElementById("agentMessageSearchInput");
const agentMessageListingFilter = document.getElementById("agentMessageListingFilter");
const agentMessageStatusFilter = document.getElementById("agentMessageStatusFilter");
const agentConversationList = document.getElementById("agentConversationList");
const agentChatPanel = document.getElementById("agentChatPanel");
const agentMessageDetailsPanel = document.getElementById("agentMessageDetailsPanel");
const agentMarkAllMessagesReadButton = document.getElementById("agentMarkAllMessagesReadButton");
const agentNewMessageButton = document.getElementById("agentNewMessageButton");
const agentMessageTabs = document.querySelectorAll("[data-agent-message-tab]");
const agentLeadSummary = document.getElementById("agentLeadSummary");
const agentLeadSearchInput = document.getElementById("agentLeadSearchInput");
const agentLeadStatusFilter = document.getElementById("agentLeadStatusFilter");
const agentLeadSourceFilter = document.getElementById("agentLeadSourceFilter");
const agentLeadsContainer = document.getElementById("agentLeadsContainer");
const agentLeadPagination = document.getElementById("agentLeadPagination");
const agentExportLeadsButton = document.getElementById("agentExportLeadsButton");
const agentAddLeadButton = document.getElementById("agentAddLeadButton");
const agentResetLeadFiltersButton = document.getElementById("agentResetLeadFiltersButton");

const LISTINGS_PER_ROW = 5;
const ROWS_PER_PAGE = 12;
const LISTINGS_PER_PAGE = LISTINGS_PER_ROW * ROWS_PER_PAGE;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MAX_PRICE_DIGITS = String(MAX_PRICE).length;

let currentPage = 1;
let agentManageCurrentPage = 1;
let agentInquiryCurrentPage = 1;
let agentLeadCurrentPage = 1;
let agentSelectedConversationId = null;
let agentMessageTab = "all";
const AGENT_LISTINGS_PER_PAGE = 6;
const AGENT_INQUIRIES_PER_PAGE = 7;
const AGENT_LEADS_PER_PAGE = 7;
const AGENT_LEADS_STORAGE_KEY = "celestateAgentLeads";

function getLoggedInUser() {
  const userData = localStorage.getItem("loggedInUser");

  if (!userData) {
    return null;
  }

  try {
    return JSON.parse(userData);
  } catch (error) {
    localStorage.removeItem("loggedInUser");
    return null;
  }
}

function getFavoriteStorageKey(user = getLoggedInUser()) {
  if (!user || !user.email) {
    return null;
  }

  return `favoriteListingIds:${user.email}`;
}

function getFavoriteIds() {
  const user = getLoggedInUser();
  const storageKey = getFavoriteStorageKey(user);

  if (!storageKey || user.role !== "customer") {
    return [];
  }

  try {
    const favoriteIds = JSON.parse(localStorage.getItem(storageKey) || "[]");

    if (!Array.isArray(favoriteIds)) {
      return [];
    }

    return favoriteIds.map(Number).filter(function(id) {
      return Number.isInteger(id);
    });
  } catch (error) {
    localStorage.removeItem(storageKey);
    return [];
  }
}

function saveFavoriteIds(favoriteIds) {
  const storageKey = getFavoriteStorageKey();

  if (!storageKey) {
    return;
  }

  localStorage.setItem(storageKey, JSON.stringify(favoriteIds));
}

function isFavoriteListing(listingId) {
  return getFavoriteIds().includes(Number(listingId));
}

function getFavoriteListings() {
  const favoriteIds = getFavoriteIds();

  return listings.filter(function(listing) {
    return favoriteIds.includes(listing.id);
  });
}

function updateFavoriteButtonState(button, listingId) {
  const isFavorite = isFavoriteListing(listingId);

  button.classList.toggle("active", isFavorite);
  button.textContent = isFavorite ? "♥" : "♡";
  button.setAttribute(
    "aria-label",
    isFavorite ? "Remove from favorites" : "Save to favorites"
  );
  button.setAttribute(
    "title",
    isFavorite ? "Remove from favorites" : "Save to favorites"
  );
}

function refreshVisibleFavoriteButtons(listingId) {
  document.querySelectorAll(`[data-favorite-id="${listingId}"]`).forEach(function(button) {
    updateFavoriteButtonState(button, listingId);
  });
}

function toggleFavorite(listingId) {
  const user = getLoggedInUser();

  if (!user) {
    renderLoginRequiredModal();
    return;
  }

  if (user.role !== "customer") {
    renderRoleRequiredModal(user);
    return;
  }

  const numericListingId = Number(listingId);
  const favoriteIds = getFavoriteIds();
  const isAlreadyFavorite = favoriteIds.includes(numericListingId);
  const updatedFavoriteIds = isAlreadyFavorite
    ? favoriteIds.filter(function(id) { return id !== numericListingId; })
    : [...favoriteIds, numericListingId];

  saveFavoriteIds(updatedFavoriteIds);
  recordListingFavorite(numericListingId, !isAlreadyFavorite);
  refreshVisibleFavoriteButtons(numericListingId);
  renderFavorites();

  const detailsMessage = document.getElementById("detailsMessage");

  if (detailsMessage) {
    detailsMessage.textContent = isAlreadyFavorite
      ? "Removed from My Favorites."
      : "Saved to My Favorites.";
    detailsMessage.className = "form-message success";
  }
}

function renderAuthNavigation() {
  if (!navAuthArea) {
    return;
  }

  const user = getLoggedInUser();

  if (!user) {
    navAuthArea.innerHTML = `<a href="login.html">Login</a>`;
    return;
  }

  const favoritesLink = user.role === "customer"
    ? `<a href="#favorites" class="nav-favorites" id="navFavoritesLink">My Favorites</a>`
    : "";

  const agentLink = user.role === "agent"
    ? `<a href="#agentDashboard" class="nav-agent" id="navAgentLink">Agent Dashboard</a>`
    : "";

  const adminLink = user.role === "admin"
    ? `<a href="#adminDashboard" class="nav-admin" id="navAdminLink">Admin Dashboard</a>`
    : "";

  navAuthArea.innerHTML = `
    ${agentLink}
    ${adminLink}
    ${favoritesLink}
    <span class="nav-user">${user.name} (${user.role})</span>
    <button type="button" class="nav-logout" id="logoutButton">Logout</button>
  `;

  const navAgentLink = document.getElementById("navAgentLink");

  if (navAgentLink) {
    navAgentLink.addEventListener("click", function(event) {
      event.preventDefault();
      showAgentDashboard();
    });
  }

  const navAdminLink = document.getElementById("navAdminLink");

  if (navAdminLink) {
    navAdminLink.addEventListener("click", function(event) {
      event.preventDefault();
      showAdminDashboard();
    });
  }

  const navFavoritesLink = document.getElementById("navFavoritesLink");

  if (navFavoritesLink) {
    navFavoritesLink.addEventListener("click", function(event) {
      event.preventDefault();
      showFavoritesSection();
    });
  }

  document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
}

function getMonthKey(dateValue) {
  const date = new Date(dateValue);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

function getMonthLabel(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleString(undefined, {
    month: "short",
    year: "numeric"
  });
}

function getCurrentAndPreviousMonthKeys(monthCount) {
  const keys = [];
  const now = new Date();

  for (let offset = monthCount - 1; offset >= 0; offset--) {
    const date = new Date(now.getFullYear(), now.getMonth() - offset, 1);
    keys.push(getMonthKey(date));
  }

  return keys;
}

function renderAdminSummary() {
  if (!adminSummaryGrid) {
    return;
  }

  const users = getAdminUsers();
  const submissions = getListingSubmissions().filter(function(submission) {
    return submission.status !== "draft";
  });
  const inquiries = getStoredJson("celestateInquiries", []);
  const statusCounts = submissions.reduce(function(accumulator, submission) {
    accumulator[submission.status] = (accumulator[submission.status] || 0) + 1;
    return accumulator;
  }, { pending: 0, approved: 0, rejected: 0, archived: 0 });

  const summaryCards = [
    {
      label: "Registered Users",
      value: users.length,
      detail: `${users.filter(function(user) { return user.status === "active"; }).length} active accounts`
    },
    {
      label: "Pending Listings",
      value: statusCounts.pending,
      detail: `${statusCounts.approved} approved, ${statusCounts.rejected} rejected`
    },
    {
      label: "Archived Listings",
      value: statusCounts.archived,
      detail: `${statusCounts.approved + statusCounts.pending + statusCounts.rejected} total submissions`
    },
    {
      label: "Inquiries Logged",
      value: inquiries.length,
      detail: "Messages stored locally for the demo"
    }
  ];

  adminSummaryGrid.innerHTML = summaryCards.map(function(card) {
    return `
      <article class="admin-summary-card">
        <p>${card.label}</p>
        <strong>${card.value}</strong>
        <span>${card.detail}</span>
      </article>
    `;
  }).join("");
}

function renderAdminUsers() {
  if (!adminUsersContainer) {
    return;
  }

  const currentUser = getLoggedInUser();
  const users = getAdminUsers().slice().sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });

  adminUsersContainer.innerHTML = `
    <div class="admin-table-wrapper">
      <table class="admin-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(function(user) {
            const isCurrentSession = currentUser && currentUser.email === user.email;
            const statusText = user.status === "active" ? "Active" : "Inactive";

            return `
              <tr>
                <td>
                  <div class="admin-cell-title">${user.name}</div>
                  <div class="admin-cell-subtitle">Current session ${isCurrentSession ? "(locked)" : ""}</div>
                </td>
                <td>${user.email}</td>
                <td>
                  <select class="admin-select" data-admin-user-role="${user.email}" ${isCurrentSession ? "disabled" : ""}>
                    <option value="customer" ${user.role === "customer" ? "selected" : ""}>Customer</option>
                    <option value="agent" ${user.role === "agent" ? "selected" : ""}>Agent</option>
                    <option value="admin" ${user.role === "admin" ? "selected" : ""}>Admin</option>
                  </select>
                </td>
                <td><span class="admin-status-pill status-${user.status}">${statusText}</span></td>
                <td>${new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button type="button" class="admin-action-button" data-admin-user-action="toggle-status" data-user-email="${user.email}" ${isCurrentSession ? "disabled" : ""}>
                    ${user.status === "active" ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getSubmissionDisplayStatus(submission) {
  return submission.status.charAt(0).toUpperCase() + submission.status.slice(1);
}

function renderAdminListings() {
  if (!adminListingsContainer) {
    return;
  }

  const submissions = getListingSubmissions().filter(function(submission) {
    return submission.status !== "draft";
  }).slice().sort(function(a, b) {
    if (a.status === b.status) {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    }

    const order = {
      pending: 1,
      approved: 2,
      rejected: 3,
      archived: 4,
      draft: 5
    };

    return (order[a.status] || 99) - (order[b.status] || 99);
  });

  adminListingsContainer.innerHTML = `
    <div class="admin-table-wrapper">
      <table class="admin-table admin-table--listings">
        <thead>
          <tr>
            <th>Listing</th>
            <th>Agent</th>
            <th>Status</th>
            <th>Decision reason</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${submissions.map(function(submission) {
            const isPending = submission.status === "pending";

            return `
              <tr>
                <td>
                  <div class="admin-cell-title">${submission.title}</div>
                  <div class="admin-cell-subtitle">${submission.location} · £${submission.price.toLocaleString()}</div>
                  <div class="admin-cell-meta">${submission.bedrooms} bed · ${submission.bathrooms} bath · ${submission.area} m² · ${submission.type}</div>
                </td>
                <td>
                  <div class="admin-cell-title">${submission.agent}</div>
                  <div class="admin-cell-subtitle">${submission.email}</div>
                </td>
                <td><span class="admin-status-pill status-${submission.status}">${getSubmissionDisplayStatus(submission)}</span></td>
                <td>
                  <textarea class="admin-reason-input" data-admin-reject-reason="${submission.id}" rows="2" placeholder="Reason for rejection">${submission.reason || ""}</textarea>
                </td>
                <td>
                  <div class="admin-action-stack">
                    <button type="button" class="admin-action-button" data-admin-listing-action="approve" data-listing-id="${submission.id}">Approve</button>
                    <button type="button" class="admin-action-button admin-action-button--danger" data-admin-listing-action="reject" data-listing-id="${submission.id}">Reject</button>
                    <button type="button" class="admin-action-button" data-admin-listing-action="archive" data-listing-id="${submission.id}">Archive</button>
                    <button type="button" class="admin-action-button admin-action-button--ghost" data-admin-listing-action="delete" data-listing-id="${submission.id}">Delete</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function getListingDisplayRecord(listingId) {
  const numericListingId = Number(listingId);
  const publicListing = listings.find(function(listing) {
    return listing.id === numericListingId;
  });

  if (publicListing) {
    return publicListing;
  }

  const submission = getListingSubmissions().find(function(item) {
    return Number(item.id) === numericListingId || Number(item.linkedListingId) === numericListingId;
  });

  if (!submission) {
    return null;
  }

  return submission;
}

function getFilteredMonthlyCounts(items, dateField, monthCount) {
  const monthKeys = getCurrentAndPreviousMonthKeys(monthCount);

  return monthKeys.map(function(monthKey) {
    const count = items.filter(function(item) {
      const parsedDate = item[`${dateField}ISO`] || item[dateField];
      return getMonthKey(parsedDate) === monthKey;
    }).length;

    return {
      label: getMonthLabel(monthKey),
      value: count
    };
  });
}

function renderAdminAnalytics() {
  if (!adminAnalyticsContainer) {
    return;
  }

  const users = getAdminUsers();
  const submissions = getListingSubmissions().filter(function(submission) {
    return submission.status !== "draft";
  });
  const stats = getListingStats();
  const inquiries = getStoredJson("celestateInquiries", []);

  const statusCounts = submissions.reduce(function(accumulator, submission) {
    accumulator[submission.status] = (accumulator[submission.status] || 0) + 1;
    return accumulator;
  }, { pending: 0, approved: 0, rejected: 0, archived: 0 });

  const topViewedListings = Object.entries(stats)
    .map(function(entry) {
      const listingId = Number(entry[0]);
      const record = getListingDisplayRecord(listingId);

      return {
        title: record ? record.title : `Listing ${listingId}`,
        count: entry[1].views || 0
      };
    })
    .sort(function(a, b) {
      return b.count - a.count;
    })
    .slice(0, 3);

  const topFavoritedListings = Object.entries(stats)
    .map(function(entry) {
      const listingId = Number(entry[0]);
      const record = getListingDisplayRecord(listingId);

      return {
        title: record ? record.title : `Listing ${listingId}`,
        count: entry[1].favorites || 0
      };
    })
    .sort(function(a, b) {
      return b.count - a.count;
    })
    .slice(0, 3);

  const userGrowth = getFilteredMonthlyCounts(users, "createdAt", 4);
  const inquiryTrend = getFilteredMonthlyCounts(inquiries, "createdAt", 7);

  adminAnalyticsContainer.innerHTML = `
    <div class="admin-metric-row">
      <article class="admin-metric-card">
        <p>Listings by status</p>
        <strong>${statusCounts.pending} pending</strong>
        <span>${statusCounts.approved} approved · ${statusCounts.rejected} rejected · ${statusCounts.archived} archived</span>
      </article>
      <article class="admin-metric-card">
        <p>User growth</p>
        <strong>${userGrowth.reduce(function(total, item) { return total + item.value; }, 0)} signups</strong>
        <span>${users.filter(function(user) { return user.status === "active"; }).length} active accounts</span>
      </article>
      <article class="admin-metric-card">
        <p>Inquiry volume</p>
        <strong>${inquiries.length} messages</strong>
        <span>Trends grouped by recent months</span>
      </article>
    </div>

    <div class="admin-analytics-grid">
      <section class="analytics-card">
        <h4>Most viewed listings</h4>
        <ol class="analytics-list">
          ${topViewedListings.map(function(item) {
            return `<li><span>${item.title}</span><strong>${item.count}</strong></li>`;
          }).join("")}
        </ol>
      </section>

      <section class="analytics-card">
        <h4>Most favorited listings</h4>
        <ol class="analytics-list">
          ${topFavoritedListings.map(function(item) {
            return `<li><span>${item.title}</span><strong>${item.count}</strong></li>`;
          }).join("")}
        </ol>
      </section>

      <section class="analytics-card">
        <h4>User growth metrics</h4>
        <div class="analytics-bars">
          ${userGrowth.map(function(item) {
            const maxValue = Math.max(1, ...userGrowth.map(function(bar) { return bar.value; }));
            return `
              <div class="analytics-bar-row">
                <span>${item.label}</span>
                <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width: ${Math.max(12, (item.value / maxValue) * 100)}%"></div></div>
                <strong>${item.value}</strong>
              </div>
            `;
          }).join("")}
        </div>
      </section>

      <section class="analytics-card">
        <h4>Inquiry volume trends</h4>
        <div class="analytics-bars">
          ${inquiryTrend.map(function(item) {
            const maxValue = Math.max(1, ...inquiryTrend.map(function(bar) { return bar.value; }));
            return `
              <div class="analytics-bar-row">
                <span>${item.label}</span>
                <div class="analytics-bar-track"><div class="analytics-bar-fill analytics-bar-fill--gold" style="width: ${Math.max(12, (item.value / maxValue) * 100)}%"></div></div>
                <strong>${item.value}</strong>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderAdminDashboard() {
  if (!adminDashboard) {
    return;
  }

  renderAdminSummary();
  renderAdminUsers();
  renderAdminListings();
  renderAdminAnalytics();
}

function showAdminDashboard() {
  const user = getLoggedInUser();

  if (!user || user.role !== "admin") {
    return;
  }

  if (heroSection) {
    heroSection.hidden = true;
  }

  if (listingsSection) {
    listingsSection.hidden = true;
  }

  if (favoritesSection) {
    favoritesSection.hidden = true;
  }

  if (agentDashboard) {
    agentDashboard.hidden = true;
  }

  if (adminDashboard) {
    adminDashboard.hidden = false;
  }

  renderAdminDashboard();
  showAdminBanner("Admin dashboard loaded.", "success");
}


function showAgentBanner(message, type = "success") {
  if (!agentNoticeBanner) {
    return;
  }

  agentNoticeBanner.textContent = message;
  agentNoticeBanner.className = `agent-notice-banner ${type}`;
}

function getAgentSubmissions(user = getLoggedInUser()) {
  if (!user || user.role !== "agent") {
    return [];
  }

  return getListingSubmissions()
    .filter(function(submission) {
      return submission.createdByEmail === user.email || submission.email === user.email;
    })
    .sort(function(a, b) {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });
}

function getAgentStatusLabel(status) {
  const labels = {
    approved: "Active",
    pending: "Pending Approval",
    rejected: "Rejected",
    archived: "Archived",
    draft: "Draft"
  };

  return labels[status] || getSubmissionDisplayStatus({ status: status || "pending" });
}

function getAgentListingViews(submission) {
  const stats = getListingStatRecord(submission.linkedListingId || submission.id);
  return stats.views || 0;
}

function getAgentListingFavorites(submission) {
  const stats = getListingStatRecord(submission.linkedListingId || submission.id);
  return stats.favorites || 0;
}

function getAgentListingInquiryCount(submission) {
  const inquiries = getStoredJson("celestateInquiries", []);
  const listingId = Number(submission.linkedListingId || submission.id);

  return inquiries.filter(function(inquiry) {
    return Number(inquiry.listingId) === listingId || inquiry.listingTitle === submission.title;
  }).length;
}

function getFilteredAgentListings() {
  const user = getLoggedInUser();
  const searchText = agentListingSearchInput ? agentListingSearchInput.value.trim().toLowerCase() : "";
  const selectedStatus = agentStatusFilter ? agentStatusFilter.value : "all";
  const selectedType = agentTypeFilter ? agentTypeFilter.value : "all";

  return getAgentSubmissions(user).filter(function(submission) {
    const searchableText = [
      submission.title,
      submission.location,
      submission.type,
      submission.status
    ].join(" ").toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesStatus = selectedStatus === "all" || submission.status === selectedStatus;
    const matchesType = selectedType === "all" || submission.type === selectedType;

    return matchesSearch && matchesStatus && matchesType;
  });
}

function renderAgentManageSummary() {
  if (!agentManageSummary) {
    return;
  }

  const submissions = getAgentSubmissions();
  const summaryItems = [
    {
      label: "Total Listings",
      value: submissions.length,
      detail: "All your records"
    },
    {
      label: "Active",
      value: submissions.filter(function(item) { return item.status === "approved"; }).length,
      detail: "Publicly visible"
    },
    {
      label: "Pending Approval",
      value: submissions.filter(function(item) { return item.status === "pending"; }).length,
      detail: "Waiting for admin"
    },
    {
      label: "Rejected",
      value: submissions.filter(function(item) { return item.status === "rejected"; }).length,
      detail: "Needs correction"
    },
    {
      label: "Archived",
      value: submissions.filter(function(item) { return item.status === "archived"; }).length,
      detail: "Hidden from public"
    },
    {
      label: "Draft",
      value: submissions.filter(function(item) { return item.status === "draft"; }).length,
      detail: "Saved privately"
    }
  ];

  agentManageSummary.innerHTML = summaryItems.map(function(item) {
    return `
      <article class="agent-summary-card">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
        <small>${item.detail}</small>
      </article>
    `;
  }).join("");
}

function renderAgentManageListings() {
  if (!agentManageListingsContainer || !agentManagePagination) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    agentManageListingsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>Agent login required</h4>
        <p>Log in as an agent to manage property listings.</p>
      </div>
    `;
    agentManagePagination.innerHTML = "";
    return;
  }

  const filteredListings = getFilteredAgentListings();
  const totalPages = Math.max(1, Math.ceil(filteredListings.length / AGENT_LISTINGS_PER_PAGE));

  if (agentManageCurrentPage > totalPages) {
    agentManageCurrentPage = totalPages;
  }

  if (filteredListings.length === 0) {
    agentManageListingsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>No listings match your filters</h4>
        <p>Try changing the search term, status, or type filter.</p>
      </div>
    `;
    agentManagePagination.innerHTML = "";
    return;
  }

  const startIndex = (agentManageCurrentPage - 1) * AGENT_LISTINGS_PER_PAGE;
  const currentPageItems = filteredListings.slice(startIndex, startIndex + AGENT_LISTINGS_PER_PAGE);

  agentManageListingsContainer.innerHTML = `
    <div class="agent-table-wrapper">
      <table class="agent-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Views</th>
            <th>Inquiries</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${currentPageItems.map(function(submission) {
            return `
              <tr>
                <td>
                  <div class="agent-property-cell">
                    <div class="agent-property-thumb">${createListingImageText(submission)}</div>
                    <div>
                      <strong>${submission.title}</strong>
                      <span>${submission.location}</span>
                    </div>
                  </div>
                </td>
                <td>${submission.type}</td>
                <td>£${Number(submission.price).toLocaleString()}</td>
                <td><span class="admin-status-pill status-${submission.status}">${getAgentStatusLabel(submission.status)}</span></td>
                <td>${getAgentListingViews(submission)}</td>
                <td>${getAgentListingInquiryCount(submission)}</td>
                <td>
                  <div class="agent-row-actions">
                    <button type="button" title="View details" data-agent-listing-action="view" data-submission-id="${submission.id}">👁</button>
                    <button type="button" title="Edit listing" data-agent-listing-action="edit" data-submission-id="${submission.id}">✎</button>
                    <button type="button" title="Duplicate listing" data-agent-listing-action="duplicate" data-submission-id="${submission.id}">⧉</button>
                    <button type="button" title="Delete listing" data-agent-listing-action="delete" data-submission-id="${submission.id}">⋮</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  const firstItem = startIndex + 1;
  const lastItem = Math.min(startIndex + currentPageItems.length, filteredListings.length);

  agentManagePagination.innerHTML = `
    <span>Showing ${firstItem} to ${lastItem} of ${filteredListings.length} listings</span>
    <div>
      <button type="button" data-agent-page="previous" ${agentManageCurrentPage === 1 ? "disabled" : ""}>←</button>
      ${Array.from({ length: totalPages }, function(_, index) {
        const page = index + 1;
        return `<button type="button" data-agent-page="${page}" class="${page === agentManageCurrentPage ? "active" : ""}">${page}</button>`;
      }).join("")}
      <button type="button" data-agent-page="next" ${agentManageCurrentPage === totalPages ? "disabled" : ""}>→</button>
    </div>
  `;
}

function renderAgentSubmissions() {
  if (!agentListingsContainer) {
    return;
  }

  const user = getLoggedInUser();
  const submissions = getAgentSubmissions(user).slice(0, 5);

  if (!user || user.role !== "agent") {
    agentListingsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>Agent login required</h4>
        <p>Log in as an agent to create and track property listings.</p>
      </div>
    `;
    return;
  }

  if (submissions.length === 0) {
    agentListingsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>No submissions yet</h4>
        <p>Create your first property listing using the form. It will appear here as pending review.</p>
      </div>
    `;
    return;
  }

  agentListingsContainer.innerHTML = submissions.map(function(submission) {
    return `
      <article class="agent-submission-card">
        <div class="agent-submission-topline">
          <span class="admin-status-pill status-${submission.status}">${getAgentStatusLabel(submission.status)}</span>
          <span>${new Date(submission.submittedAt).toLocaleDateString()}</span>
        </div>
        <h4>${submission.title}</h4>
        <p>${submission.location} · £${Number(submission.price).toLocaleString()}</p>
        <p>${submission.bedrooms} bed · ${submission.bathrooms} bath · ${submission.area} m² · ${submission.type}</p>
        ${submission.reason ? `<p class="agent-reason"><strong>Review note:</strong> ${submission.reason}</p>` : ""}
      </article>
    `;
  }).join("");
}

function normalizeInquiryStatus(status) {
  const value = String(status || "new").trim().toLowerCase();

  if (value === "sent" || value === "open" || value === "new") {
    return "new";
  }

  if (value === "in progress" || value === "in-progress" || value === "progress") {
    return "in-progress";
  }

  if (value === "closed" || value === "resolved") {
    return "closed";
  }

  if (value === "spam") {
    return "spam";
  }

  return "new";
}

function getInquiryStatusLabel(status) {
  const labels = {
    "new": "New",
    "in-progress": "In Progress",
    "closed": "Closed",
    "spam": "Spam"
  };

  return labels[normalizeInquiryStatus(status)] || "New";
}

function getInquiryStatusClass(status) {
  return `inquiry-status-${normalizeInquiryStatus(status)}`;
}

function createSeedAgentInquiries() {
  return [
    {
      id: 5101,
      listingId: 1,
      listingTitle: "Modern Apartment in Kyrenia",
      listingLocation: "Kyrenia, North Cyprus",
      listingPrice: 120000,
      customerName: "Michael Brown",
      customerEmail: "michael.brown@email.com",
      customerPhone: "+357 99 123456",
      message: "I am interested in this property. Can you share more details about the sea view and viewing availability?",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "new",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    },
    {
      id: 5102,
      listingId: 2,
      listingTitle: "Luxury Villa with Sea View",
      listingLocation: "Esentepe, North Cyprus",
      listingPrice: 450000,
      customerName: "Emily Johnson",
      customerEmail: "emily.johnson@email.com",
      customerPhone: "+357 97 654321",
      message: "Is this property still available? I would like to schedule a viewing next week.",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "in-progress",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: [
        {
          message: "Yes, it is available. I can arrange a viewing for next week.",
          createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toLocaleString()
        }
      ]
    },
    {
      id: 5103,
      listingId: 4,
      listingTitle: "Penthouse in Famagusta",
      listingLocation: "Famagusta, North Cyprus",
      listingPrice: 210000,
      customerName: "David Wilson",
      customerEmail: "david.wilson@email.com",
      customerPhone: "+357 95 112233",
      message: "What payment options are available for this property?",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "in-progress",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    },
    {
      id: 5104,
      listingId: 7,
      listingTitle: "Family House in Nicosia",
      listingLocation: "Nicosia, North Cyprus",
      listingPrice: 240000,
      customerName: "Sarah Williams",
      customerEmail: "sarah.williams@email.com",
      customerPhone: "+357 96 778899",
      message: "Please send more photos of the garden and living area.",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "new",
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    },
    {
      id: 5105,
      listingId: 5,
      listingTitle: "Cozy Studio Near EMU",
      listingLocation: "Famagusta, North Cyprus",
      listingPrice: 65000,
      customerName: "James Anderson",
      customerEmail: "j.anderson@email.com",
      customerPhone: "+357 99 887766",
      message: "Thank you for the information. I am not interested at the moment.",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "closed",
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    },
    {
      id: 5106,
      listingId: 9,
      listingTitle: "Mountain View Villa in Alsancak",
      listingLocation: "Alsancak, North Cyprus",
      listingPrice: 390000,
      customerName: "Olivia Martinez",
      customerEmail: "olivia.martinez@email.com",
      customerPhone: "+357 95 443322",
      message: "Is the price negotiable? I am looking for a serious investment opportunity.",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "in-progress",
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    },
    {
      id: 5107,
      listingId: 6,
      listingTitle: "Seaside Apartment in Kyrenia",
      listingLocation: "Kyrenia, North Cyprus",
      listingPrice: 185000,
      customerName: "Spam Inquiry",
      customerEmail: "spam@example.com",
      customerPhone: "+000 000000",
      message: "This looks like a great deal. Click here now.",
      agent: "Agent User",
      agentPhone: "+90 533 000 20 01",
      agentEmail: "agent@celestate.com",
      status: "spam",
      createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toLocaleString(),
      createdAtISO: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      agentReplies: []
    }
  ];
}

function ensureAgentInquirySeedData() {
  const allInquiries = getStoredJson("celestateInquiries", []);

  if (!Array.isArray(allInquiries)) {
    saveStoredJson("celestateInquiries", createSeedAgentInquiries());
    return;
  }

  const hasAgentDemoInquiries = allInquiries.some(function(inquiry) {
    return inquiry.agentEmail === "agent@celestate.com" || inquiry.seedForAgentDemo === true;
  });

  if (!hasAgentDemoInquiries) {
    const seededInquiries = createSeedAgentInquiries().map(function(inquiry) {
      return {
        ...inquiry,
        seedForAgentDemo: true
      };
    });

    saveStoredJson("celestateInquiries", seededInquiries.concat(allInquiries));
  }
}

function getInquiryDateValue(inquiry) {
  if (inquiry.createdAtISO) {
    return new Date(inquiry.createdAtISO).getTime();
  }

  if (inquiry.createdAt) {
    const parsedDate = new Date(inquiry.createdAt).getTime();

    if (!Number.isNaN(parsedDate)) {
      return parsedDate;
    }
  }

  return Number(inquiry.id) || 0;
}

function getAgentInquiries(user = getLoggedInUser()) {
  if (!user || user.role !== "agent") {
    return [];
  }

  ensureAgentInquirySeedData();

  const agentSubmissions = getAgentSubmissions(user);
  const agentListingIds = agentSubmissions.map(function(submission) {
    return Number(submission.linkedListingId || submission.id);
  });
  const agentListingTitles = agentSubmissions.map(function(submission) {
    return String(submission.title || "").toLowerCase();
  });
  const allInquiries = getStoredJson("celestateInquiries", []);

  return allInquiries
    .filter(function(inquiry) {
      const inquiryListingId = Number(inquiry.listingId);
      const inquiryTitle = String(inquiry.listingTitle || "").toLowerCase();
      const assignedAgentEmail = String(inquiry.agentEmail || inquiry.assignedAgentEmail || "").toLowerCase();

      return assignedAgentEmail === user.email.toLowerCase()
        || agentListingIds.includes(inquiryListingId)
        || agentListingTitles.includes(inquiryTitle);
    })
    .map(function(inquiry) {
      return {
        ...inquiry,
        status: normalizeInquiryStatus(inquiry.status)
      };
    })
    .sort(function(a, b) {
      return getInquiryDateValue(b) - getInquiryDateValue(a);
    });
}

function renderAgentInquiryListingOptions() {
  if (!agentInquiryListingFilter) {
    return;
  }

  const currentValue = agentInquiryListingFilter.value || "all";
  const listingsForFilter = Array.from(new Set(getAgentInquiries().map(function(inquiry) {
    return inquiry.listingTitle;
  }).filter(Boolean))).sort(function(a, b) {
    return a.localeCompare(b);
  });

  agentInquiryListingFilter.innerHTML = `
    <option value="all">All Listings</option>
    ${listingsForFilter.map(function(title) {
      return `<option value="${title}">${title}</option>`;
    }).join("")}
  `;

  if (listingsForFilter.includes(currentValue)) {
    agentInquiryListingFilter.value = currentValue;
  }
}

function getFilteredAgentInquiries() {
  const searchText = agentInquirySearchInput ? agentInquirySearchInput.value.trim().toLowerCase() : "";
  const selectedStatus = agentInquiryStatusFilter ? agentInquiryStatusFilter.value : "all";
  const selectedListing = agentInquiryListingFilter ? agentInquiryListingFilter.value : "all";

  return getAgentInquiries().filter(function(inquiry) {
    const searchableText = [
      inquiry.customerName,
      inquiry.customerEmail,
      inquiry.customerPhone,
      inquiry.listingTitle,
      inquiry.listingLocation,
      inquiry.message,
      inquiry.status
    ].join(" ").toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesStatus = selectedStatus === "all" || normalizeInquiryStatus(inquiry.status) === selectedStatus;
    const matchesListing = selectedListing === "all" || inquiry.listingTitle === selectedListing;

    return matchesSearch && matchesStatus && matchesListing;
  });
}

function renderAgentInquirySummary() {
  if (!agentInquirySummary) {
    return;
  }

  const inquiries = getAgentInquiries();
  const counts = inquiries.reduce(function(accumulator, inquiry) {
    const status = normalizeInquiryStatus(inquiry.status);
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, {
    "new": 0,
    "in-progress": 0,
    "closed": 0,
    "spam": 0
  });

  const summaryItems = [
    { label: "Total Inquiries", value: inquiries.length, detail: "All buyer messages" },
    { label: "New", value: counts["new"], detail: "Needs first response" },
    { label: "In Progress", value: counts["in-progress"], detail: "Conversation active" },
    { label: "Closed", value: counts["closed"], detail: "Completed conversations" },
    { label: "Spam", value: counts["spam"], detail: "Marked as spam" }
  ];

  agentInquirySummary.innerHTML = summaryItems.map(function(item) {
    return `
      <article class="agent-inquiry-summary-card">
        <strong>${item.value}</strong>
        <span>${item.label}</span>
        <small>${item.detail}</small>
      </article>
    `;
  }).join("");
}

function renderAgentInquiries() {
  if (!agentInquiriesContainer || !agentInquiryPagination) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    agentInquiriesContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>Agent login required</h4>
        <p>Log in as an agent to manage property inquiries.</p>
      </div>
    `;
    agentInquiryPagination.innerHTML = "";
    return;
  }

  renderAgentInquiryListingOptions();
  renderAgentInquirySummary();

  const filteredInquiries = getFilteredAgentInquiries();
  const totalPages = Math.max(1, Math.ceil(filteredInquiries.length / AGENT_INQUIRIES_PER_PAGE));

  if (agentInquiryCurrentPage > totalPages) {
    agentInquiryCurrentPage = totalPages;
  }

  if (filteredInquiries.length === 0) {
    agentInquiriesContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>No inquiries match your filters</h4>
        <p>Try another search term, status, or listing filter.</p>
      </div>
    `;
    agentInquiryPagination.innerHTML = "";
    return;
  }

  const startIndex = (agentInquiryCurrentPage - 1) * AGENT_INQUIRIES_PER_PAGE;
  const currentPageItems = filteredInquiries.slice(startIndex, startIndex + AGENT_INQUIRIES_PER_PAGE);

  agentInquiriesContainer.innerHTML = `
    <div class="agent-table-wrapper agent-inquiries-table-wrapper">
      <table class="agent-table agent-inquiries-table">
        <thead>
          <tr>
            <th>Buyer</th>
            <th>Property</th>
            <th>Inquiry Details</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${currentPageItems.map(function(inquiry) {
            return `
              <tr>
                <td>
                  <div class="agent-buyer-cell">
                    <div class="agent-buyer-avatar">${String(inquiry.customerName || "?").slice(0, 1).toUpperCase()}</div>
                    <div>
                      <strong>${inquiry.customerName || "Unknown buyer"}</strong>
                      <span>${inquiry.customerEmail || "No email"}</span>
                      <small>${inquiry.customerPhone || "No phone"}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="agent-property-cell">
                    <div class="agent-property-thumb">${createListingImageText({ title: inquiry.listingTitle || "Listing" })}</div>
                    <div>
                      <strong>${inquiry.listingTitle || "Unknown listing"}</strong>
                      <span>£${Number(inquiry.listingPrice || 0).toLocaleString()}</span>
                    </div>
                  </div>
                </td>
                <td><p class="agent-inquiry-preview">${inquiry.message || "No message provided."}</p></td>
                <td><span class="agent-inquiry-status ${getInquiryStatusClass(inquiry.status)}">${getInquiryStatusLabel(inquiry.status)}</span></td>
                <td>${inquiry.createdAt || new Date(getInquiryDateValue(inquiry)).toLocaleString()}</td>
                <td>
                  <div class="agent-row-actions agent-inquiry-actions">
                    <button type="button" title="Open conversation" data-agent-inquiry-action="view" data-inquiry-id="${inquiry.id}">💬</button>
                    <button type="button" title="Reply" data-agent-inquiry-action="reply" data-inquiry-id="${inquiry.id}">↩</button>
                    <button type="button" title="Mark in progress" data-agent-inquiry-action="progress" data-inquiry-id="${inquiry.id}">⌛</button>
                    <button type="button" title="Close inquiry" data-agent-inquiry-action="close" data-inquiry-id="${inquiry.id}">✓</button>
                    <button type="button" title="Mark as spam" data-agent-inquiry-action="spam" data-inquiry-id="${inquiry.id}">⋮</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  const firstItem = startIndex + 1;
  const lastItem = Math.min(startIndex + currentPageItems.length, filteredInquiries.length);

  agentInquiryPagination.innerHTML = `
    <span>Showing ${firstItem} to ${lastItem} of ${filteredInquiries.length} inquiries</span>
    <div>
      <button type="button" data-agent-inquiry-page="previous" ${agentInquiryCurrentPage === 1 ? "disabled" : ""}>←</button>
      ${Array.from({ length: totalPages }, function(_, index) {
        const page = index + 1;
        return `<button type="button" data-agent-inquiry-page="${page}" class="${page === agentInquiryCurrentPage ? "active" : ""}">${page}</button>`;
      }).join("")}
      <button type="button" data-agent-inquiry-page="next" ${agentInquiryCurrentPage === totalPages ? "disabled" : ""}>→</button>
    </div>
  `;
}

function updateInquiryRecord(inquiryId, updater) {
  const allInquiries = getStoredJson("celestateInquiries", []);
  const targetInquiry = allInquiries.find(function(inquiry) {
    return Number(inquiry.id) === Number(inquiryId);
  });

  if (!targetInquiry) {
    showAgentBanner("The selected inquiry could not be found.", "error");
    return null;
  }

  updater(targetInquiry);
  saveStoredJson("celestateInquiries", allInquiries);
  renderAgentInquiries();
  renderAdminDashboard();
  return targetInquiry;
}

function updateAgentInquiryStatus(inquiryId, status) {
  const updatedInquiry = updateInquiryRecord(inquiryId, function(inquiry) {
    inquiry.status = normalizeInquiryStatus(status);
    inquiry.updatedAt = new Date().toISOString();
  });

  if (updatedInquiry) {
    showAgentBanner(`${updatedInquiry.customerName || "Inquiry"} marked as ${getInquiryStatusLabel(status)}.`, "success");
  }
}

function renderAgentInquiryModal(inquiry, forceReply = false) {
  if (!modalBody) {
    return;
  }

  const replies = Array.isArray(inquiry.agentReplies) ? inquiry.agentReplies : [];

  modalBody.innerHTML = `
    <div class="modal-notice agent-inquiry-modal">
      <span class="agent-inquiry-status ${getInquiryStatusClass(inquiry.status)}">${getInquiryStatusLabel(inquiry.status)}</span>
      <h2>Inquiry from ${inquiry.customerName || "Customer"}</h2>
      <p>${inquiry.listingTitle || "Unknown listing"} · £${Number(inquiry.listingPrice || 0).toLocaleString()}</p>

      <div class="agent-inquiry-modal-grid">
        <section>
          <h3>Buyer Details</h3>
          <p><strong>Email:</strong> ${inquiry.customerEmail || "Not provided"}</p>
          <p><strong>Phone:</strong> ${inquiry.customerPhone || "Not provided"}</p>
          <p><strong>Date:</strong> ${inquiry.createdAt || new Date(getInquiryDateValue(inquiry)).toLocaleString()}</p>
        </section>

        <section>
          <h3>Property</h3>
          <p><strong>${inquiry.listingTitle || "Unknown listing"}</strong></p>
          <p>${inquiry.listingLocation || "Location not provided"}</p>
          <p>Agent: ${inquiry.agent || "Agent User"}</p>
        </section>
      </div>

      <h3>Customer Message</h3>
      <p class="agent-inquiry-message-box">${inquiry.message || "No message provided."}</p>

      <h3>Conversation History</h3>
      <div class="agent-reply-history">
        ${replies.length === 0 ? `<p>No replies have been sent yet.</p>` : replies.map(function(reply) {
          return `<article><strong>Agent reply</strong><span>${reply.createdAt}</span><p>${reply.message}</p></article>`;
        }).join("")}
      </div>

      <form id="agentReplyForm" class="agent-reply-form">
        <label for="agentReplyInput">Reply message</label>
        <textarea id="agentReplyInput" rows="5" placeholder="Write your reply to the customer..." ${forceReply ? "autofocus" : ""}></textarea>
        <p id="agentReplyMessage" class="form-message"></p>
        <div class="agent-form-actions">
          <button type="button" class="secondary-action-button" id="agentMarkClosedButton">Mark Closed</button>
          <button type="submit" class="agent-submit-button">Send Reply</button>
        </div>
      </form>
    </div>
  `;

  openModal();

  const replyForm = document.getElementById("agentReplyForm");
  const closeButton = document.getElementById("agentMarkClosedButton");

  if (replyForm) {
    replyForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const replyInput = document.getElementById("agentReplyInput");
      const replyMessage = document.getElementById("agentReplyMessage");
      const replyText = replyInput ? replyInput.value.trim() : "";

      if (replyMessage) {
        replyMessage.textContent = "";
        replyMessage.className = "form-message";
      }

      if (replyText.length < 5) {
        if (replyMessage) {
          replyMessage.textContent = "Write a reply before sending.";
        }
        return;
      }

      const updatedInquiry = updateInquiryRecord(inquiry.id, function(targetInquiry) {
        const existingReplies = Array.isArray(targetInquiry.agentReplies) ? targetInquiry.agentReplies : [];
        existingReplies.push({
          message: replyText,
          createdAt: new Date().toLocaleString(),
          createdAtISO: new Date().toISOString()
        });
        targetInquiry.agentReplies = existingReplies;
        targetInquiry.status = "in-progress";
        targetInquiry.updatedAt = new Date().toISOString();
      });

      if (updatedInquiry) {
        renderAgentInquiryModal(updatedInquiry);
        showAgentBanner(`Reply saved for ${updatedInquiry.customerName}.`, "success");
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function() {
      updateAgentInquiryStatus(inquiry.id, "closed");
      closeModal();
    });
  }
}

function handleAgentInquiryAction(action, inquiryId) {
  const inquiry = getAgentInquiries().find(function(item) {
    return Number(item.id) === Number(inquiryId);
  });

  if (!inquiry) {
    showAgentBanner("The selected inquiry could not be found.", "error");
    return;
  }

  if (action === "view") {
    renderAgentInquiryModal(inquiry);
    return;
  }

  if (action === "reply") {
    renderAgentInquiryModal(inquiry, true);
    return;
  }

  if (action === "progress") {
    updateAgentInquiryStatus(inquiryId, "in-progress");
    return;
  }

  if (action === "close") {
    updateAgentInquiryStatus(inquiryId, "closed");
    return;
  }

  if (action === "spam") {
    updateAgentInquiryStatus(inquiryId, "spam");
  }
}

function resetAgentInquiryFilters() {
  if (agentInquirySearchInput) {
    agentInquirySearchInput.value = "";
  }

  if (agentInquiryStatusFilter) {
    agentInquiryStatusFilter.value = "all";
  }

  if (agentInquiryListingFilter) {
    agentInquiryListingFilter.value = "all";
  }

  agentInquiryCurrentPage = 1;
  renderAgentInquiries();
  showAgentBanner("Inquiry filters reset.", "success");
}

function exportAgentInquiries() {
  const inquiriesForAgent = getAgentInquiries();
  const blob = new Blob([JSON.stringify(inquiriesForAgent, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "celestate-agent-inquiries.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showAgentBanner("Agent inquiries exported as JSON.", "success");
}


function safeAgentText(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function truncateAgentText(value, maxLength = 92) {
  const text = String(value || "").trim();

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3)}...`;
}

function getConversationMessagesFromInquiry(inquiry) {
  const messages = [];

  if (inquiry.message) {
    messages.push({
      id: `${inquiry.id}-customer-original`,
      sender: "customer",
      text: inquiry.message,
      createdAt: inquiry.createdAt || new Date(getInquiryDateValue(inquiry)).toLocaleString(),
      createdAtISO: inquiry.createdAtISO || ""
    });
  }

  if (Array.isArray(inquiry.customerFollowUps)) {
    inquiry.customerFollowUps.forEach(function(followUp, index) {
      messages.push({
        id: `${inquiry.id}-customer-followup-${index}`,
        sender: "customer",
        text: followUp.message || followUp.text || "",
        createdAt: followUp.createdAt || "",
        createdAtISO: followUp.createdAtISO || ""
      });
    });
  }

  if (Array.isArray(inquiry.agentReplies)) {
    inquiry.agentReplies.forEach(function(reply, index) {
      messages.push({
        id: `${inquiry.id}-agent-reply-${index}`,
        sender: "agent",
        text: reply.message || reply.text || "",
        createdAt: reply.createdAt || "",
        createdAtISO: reply.createdAtISO || ""
      });
    });
  }

  return messages.sort(function(a, b) {
    const aTime = a.createdAtISO ? new Date(a.createdAtISO).getTime() : new Date(a.createdAt).getTime();
    const bTime = b.createdAtISO ? new Date(b.createdAtISO).getTime() : new Date(b.createdAt).getTime();
    return (Number.isNaN(aTime) ? 0 : aTime) - (Number.isNaN(bTime) ? 0 : bTime);
  });
}

function getAgentConversationLastMessage(inquiry) {
  const messages = getConversationMessagesFromInquiry(inquiry);

  if (messages.length === 0) {
    return {
      sender: "system",
      text: "No messages yet.",
      createdAt: inquiry.createdAt || ""
    };
  }

  return messages[messages.length - 1];
}

function getAgentConversationLabels(inquiry) {
  if (Array.isArray(inquiry.labels) && inquiry.labels.length > 0) {
    return inquiry.labels;
  }

  const labels = [];
  const combinedText = `${inquiry.listingTitle || ""} ${inquiry.message || ""}`.toLowerCase();

  if (combinedText.includes("sea") || combinedText.includes("view")) {
    labels.push("Sea View");
  }

  if (combinedText.includes("viewing") || combinedText.includes("schedule") || combinedText.includes("interested")) {
    labels.push("Hot Lead");
  }

  if (normalizeInquiryStatus(inquiry.status) === "new") {
    labels.push("New");
  }

  return labels.slice(0, 3);
}

function isAgentConversationUnread(inquiry) {
  return inquiry.readByAgent !== true && normalizeInquiryStatus(inquiry.status) === "new";
}

function renderAgentMessageListingOptions() {
  if (!agentMessageListingFilter) {
    return;
  }

  const currentValue = agentMessageListingFilter.value || "all";
  const titles = Array.from(new Set(getAgentInquiries().map(function(inquiry) {
    return inquiry.listingTitle;
  }).filter(Boolean))).sort(function(a, b) {
    return a.localeCompare(b);
  });

  agentMessageListingFilter.innerHTML = `
    <option value="all">All Listings</option>
    ${titles.map(function(title) {
      return `<option value="${safeAgentText(title)}">${safeAgentText(title)}</option>`;
    }).join("")}
  `;

  if (titles.includes(currentValue)) {
    agentMessageListingFilter.value = currentValue;
  }
}

function getFilteredAgentConversations() {
  const searchText = agentMessageSearchInput ? agentMessageSearchInput.value.trim().toLowerCase() : "";
  const selectedListing = agentMessageListingFilter ? agentMessageListingFilter.value : "all";
  const selectedStatus = agentMessageStatusFilter ? agentMessageStatusFilter.value : "all";

  return getAgentInquiries().filter(function(inquiry) {
    const messagesText = getConversationMessagesFromInquiry(inquiry).map(function(message) {
      return message.text;
    }).join(" ");

    const searchableText = [
      inquiry.customerName,
      inquiry.customerEmail,
      inquiry.customerPhone,
      inquiry.listingTitle,
      inquiry.listingLocation,
      inquiry.status,
      messagesText,
      getAgentConversationLabels(inquiry).join(" "),
      inquiry.agentNote
    ].join(" ").toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesListing = selectedListing === "all" || inquiry.listingTitle === selectedListing;
    const matchesStatus = selectedStatus === "all" || normalizeInquiryStatus(inquiry.status) === selectedStatus;
    const matchesTab = agentMessageTab === "all"
      || (agentMessageTab === "unread" && isAgentConversationUnread(inquiry))
      || (agentMessageTab === "favorites" && inquiry.favoriteConversation === true);

    return matchesSearch && matchesListing && matchesStatus && matchesTab;
  });
}

function getSelectedAgentConversation(conversations) {
  const conversationList = conversations || getFilteredAgentConversations();

  if (conversationList.length === 0) {
    agentSelectedConversationId = null;
    return null;
  }

  const selected = conversationList.find(function(inquiry) {
    return Number(inquiry.id) === Number(agentSelectedConversationId);
  });

  if (selected) {
    return selected;
  }

  agentSelectedConversationId = conversationList[0].id;
  return conversationList[0];
}

function renderAgentConversationList(conversations) {
  if (!agentConversationList) {
    return;
  }

  if (conversations.length === 0) {
    agentConversationList.innerHTML = `
      <div class="agent-conversation-empty">
        <h4>No conversations found</h4>
        <p>Try changing the search or filters.</p>
      </div>
    `;
    return;
  }

  agentConversationList.innerHTML = conversations.map(function(inquiry) {
    const lastMessage = getAgentConversationLastMessage(inquiry);
    const isSelected = Number(inquiry.id) === Number(agentSelectedConversationId);
    const isUnread = isAgentConversationUnread(inquiry);

    return `
      <button type="button" class="agent-conversation-item ${isSelected ? "active" : ""} ${isUnread ? "unread" : ""}" data-agent-conversation-id="${inquiry.id}">
        <span class="agent-buyer-avatar">${safeAgentText(String(inquiry.customerName || "?").slice(0, 1).toUpperCase())}</span>
        <span class="agent-conversation-main">
          <strong>${safeAgentText(inquiry.customerName || "Unknown buyer")}</strong>
          <small>${safeAgentText(inquiry.listingTitle || "Unknown listing")}</small>
          <em>${safeAgentText(truncateAgentText(lastMessage.text, 68))}</em>
        </span>
        <span class="agent-conversation-meta">
          <small>${safeAgentText(lastMessage.createdAt || inquiry.createdAt || "")}</small>
          ${isUnread ? `<b>New</b>` : ""}
          ${inquiry.favoriteConversation ? `<i>♥</i>` : ""}
        </span>
      </button>
    `;
  }).join("");
}

function renderAgentChatPanel(inquiry) {
  if (!agentChatPanel) {
    return;
  }

  if (!inquiry) {
    agentChatPanel.innerHTML = `
      <div class="agent-chat-empty">
        <h4>Select a conversation</h4>
        <p>Choose a buyer message from the left side to view the conversation and reply.</p>
      </div>
    `;
    return;
  }

  const messages = getConversationMessagesFromInquiry(inquiry);

  agentChatPanel.innerHTML = `
    <div class="agent-chat-header">
      <div class="agent-buyer-cell">
        <div class="agent-buyer-avatar">${safeAgentText(String(inquiry.customerName || "?").slice(0, 1).toUpperCase())}</div>
        <div>
          <strong>${safeAgentText(inquiry.customerName || "Unknown buyer")}</strong>
          <span>${safeAgentText(inquiry.listingTitle || "Unknown listing")}</span>
        </div>
      </div>
      <div class="agent-chat-tools">
        <button type="button" data-agent-message-tool="call" title="Call buyer">☎</button>
        <button type="button" data-agent-message-tool="video" title="Video call">▣</button>
        <button type="button" data-agent-message-tool="more" title="More options">⋯</button>
      </div>
    </div>

    <div class="agent-chat-date">${safeAgentText(inquiry.createdAt || new Date(getInquiryDateValue(inquiry)).toLocaleString())}</div>

    <div class="agent-chat-thread" id="agentChatThread">
      ${messages.map(function(message) {
        const isAgent = message.sender === "agent";
        return `
          <article class="agent-chat-bubble ${isAgent ? "sent" : "received"}">
            <p>${safeAgentText(message.text)}</p>
            <span>${safeAgentText(message.createdAt || "")}</span>
          </article>
        `;
      }).join("")}
    </div>

    <form class="agent-chat-compose" id="agentChatComposeForm" data-conversation-id="${inquiry.id}">
      <input type="text" id="agentChatMessageInput" placeholder="Type your message..." autocomplete="off">
      <button type="submit">Send</button>
    </form>
  `;

  const thread = document.getElementById("agentChatThread");

  if (thread) {
    thread.scrollTop = thread.scrollHeight;
  }
}

function renderAgentMessageDetails(inquiry) {
  if (!agentMessageDetailsPanel) {
    return;
  }

  if (!inquiry) {
    agentMessageDetailsPanel.innerHTML = `
      <div class="agent-chat-empty">
        <h4>Conversation details</h4>
        <p>Buyer, property, labels, and notes appear here.</p>
      </div>
    `;
    return;
  }

  const labels = getAgentConversationLabels(inquiry);

  agentMessageDetailsPanel.innerHTML = `
    <div class="agent-message-detail-card">
      <h4>Conversation Details</h4>

      <div class="agent-message-detail-block">
        <span>Buyer</span>
        <strong>${safeAgentText(inquiry.customerName || "Unknown buyer")}</strong>
        <p>${safeAgentText(inquiry.customerEmail || "No email")}</p>
        <p>${safeAgentText(inquiry.customerPhone || "No phone")}</p>
      </div>

      <div class="agent-message-detail-block">
        <span>Property</span>
        <strong>${safeAgentText(inquiry.listingTitle || "Unknown listing")}</strong>
        <p>£${Number(inquiry.listingPrice || 0).toLocaleString()}</p>
        <p>${safeAgentText(inquiry.listingLocation || "No location")}</p>
      </div>

      <div class="agent-message-detail-block">
        <span>Status</span>
        <p><span class="agent-inquiry-status ${getInquiryStatusClass(inquiry.status)}">${getInquiryStatusLabel(inquiry.status)}</span></p>
      </div>

      <div class="agent-message-detail-block">
        <span>Labels</span>
        <div class="agent-label-list">
          ${labels.length === 0 ? `<em>No labels yet</em>` : labels.map(function(label) {
            return `<b>${safeAgentText(label)}</b>`;
          }).join("")}
        </div>
        <div class="agent-label-add-row">
          <input type="text" id="agentNewLabelInput" placeholder="Add label">
          <button type="button" data-agent-detail-action="add-label" data-conversation-id="${inquiry.id}">Add</button>
        </div>
      </div>

      <div class="agent-message-detail-block">
        <span>Notes</span>
        <textarea id="agentConversationNoteInput" rows="4" placeholder="Add private follow-up notes...">${safeAgentText(inquiry.agentNote || "")}</textarea>
        <button type="button" class="secondary-action-button full-width-button" data-agent-detail-action="save-note" data-conversation-id="${inquiry.id}">Save Note</button>
      </div>

      <div class="agent-message-detail-actions">
        <button type="button" data-agent-detail-action="toggle-favorite" data-conversation-id="${inquiry.id}">${inquiry.favoriteConversation ? "Remove Favorite" : "Add Favorite"}</button>
        <button type="button" data-agent-detail-action="close" data-conversation-id="${inquiry.id}">Close</button>
      </div>
    </div>
  `;
}

function renderAgentMessages() {
  if (!agentMessagesPanel || !agentConversationList || !agentChatPanel || !agentMessageDetailsPanel) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    agentConversationList.innerHTML = "";
    renderAgentChatPanel(null);
    renderAgentMessageDetails(null);
    return;
  }

  renderAgentMessageListingOptions();

  const conversations = getFilteredAgentConversations();
  const selectedConversation = getSelectedAgentConversation(conversations);

  renderAgentConversationList(conversations);
  renderAgentChatPanel(selectedConversation);
  renderAgentMessageDetails(selectedConversation);
}

function updateAgentConversationRecord(conversationId, updater, options = {}) {
  const updatedConversation = updateInquiryRecord(conversationId, function(inquiry) {
    updater(inquiry);
    inquiry.updatedAt = new Date().toISOString();
  });

  if (updatedConversation && options.message) {
    showAgentBanner(options.message, options.type || "success");
  }

  renderAgentMessages();
  return updatedConversation;
}

function selectAgentConversation(conversationId) {
  agentSelectedConversationId = Number(conversationId);

  updateAgentConversationRecord(conversationId, function(inquiry) {
    inquiry.readByAgent = true;
  });
}

function sendAgentConversationMessage(conversationId, messageText) {
  const text = messageText.trim();

  if (text.length < 2) {
    showAgentBanner("Write a message before sending.", "error");
    return;
  }

  agentSelectedConversationId = Number(conversationId);

  updateAgentConversationRecord(conversationId, function(inquiry) {
    const replies = Array.isArray(inquiry.agentReplies) ? inquiry.agentReplies : [];
    replies.push({
      message: text,
      createdAt: new Date().toLocaleString(),
      createdAtISO: new Date().toISOString()
    });
    inquiry.agentReplies = replies;
    inquiry.status = "in-progress";
    inquiry.readByAgent = true;
  }, {
    message: "Message sent and conversation updated."
  });
}

function markAllAgentMessagesAsRead() {
  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    return;
  }

  const conversationIds = getAgentInquiries(user).map(function(inquiry) {
    return Number(inquiry.id);
  });
  const allInquiries = getStoredJson("celestateInquiries", []);

  allInquiries.forEach(function(inquiry) {
    if (conversationIds.includes(Number(inquiry.id))) {
      inquiry.readByAgent = true;
    }
  });

  saveStoredJson("celestateInquiries", allInquiries);
  renderAgentInquiries();
  renderAgentMessages();
  showAgentBanner("All visible conversations marked as read.", "success");
}

function addAgentConversationLabel(conversationId) {
  const labelInput = document.getElementById("agentNewLabelInput");
  const label = labelInput ? labelInput.value.trim() : "";

  if (!label) {
    showAgentBanner("Enter a label first.", "error");
    return;
  }

  agentSelectedConversationId = Number(conversationId);

  updateAgentConversationRecord(conversationId, function(inquiry) {
    const labels = Array.isArray(inquiry.labels) ? inquiry.labels : getAgentConversationLabels(inquiry);

    if (!labels.map(function(item) { return item.toLowerCase(); }).includes(label.toLowerCase())) {
      labels.push(label);
    }

    inquiry.labels = labels.slice(0, 8);
  }, {
    message: "Label added to conversation."
  });
}

function saveAgentConversationNote(conversationId) {
  const noteInput = document.getElementById("agentConversationNoteInput");
  const note = noteInput ? noteInput.value.trim() : "";

  agentSelectedConversationId = Number(conversationId);

  updateAgentConversationRecord(conversationId, function(inquiry) {
    inquiry.agentNote = note;
  }, {
    message: "Conversation note saved."
  });
}

function toggleAgentConversationFavorite(conversationId) {
  agentSelectedConversationId = Number(conversationId);

  updateAgentConversationRecord(conversationId, function(inquiry) {
    inquiry.favoriteConversation = inquiry.favoriteConversation !== true;
  }, {
    message: "Conversation favorite status updated."
  });
}

function openAgentNewMessageModal() {
  if (!modalBody) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    showAgentBanner("Agent login required to create a new message.", "error");
    return;
  }

  const agentListings = getAgentSubmissions(user);
  const listingOptions = agentListings.length > 0 ? agentListings : listings.slice(0, 6);

  modalBody.innerHTML = `
    <div class="modal-notice agent-new-message-modal">
      <h2>New Message</h2>
      <p>Start a new buyer conversation and keep it linked to one of your property listings.</p>

      <form id="agentNewMessageForm" class="agent-reply-form">
        <div class="agent-two-columns">
          <div>
            <label for="agentNewMessageBuyerName">Buyer name</label>
            <input type="text" id="agentNewMessageBuyerName" placeholder="Example: Michael Brown" required>
          </div>
          <div>
            <label for="agentNewMessageBuyerEmail">Buyer email</label>
            <input type="email" id="agentNewMessageBuyerEmail" placeholder="buyer@example.com" required>
          </div>
        </div>

        <label for="agentNewMessageBuyerPhone">Buyer phone</label>
        <input type="tel" id="agentNewMessageBuyerPhone" placeholder="Example: +357 99 123456">

        <label for="agentNewMessageListingSelect">Related listing</label>
        <select id="agentNewMessageListingSelect" required>
          ${listingOptions.map(function(listing) {
            const listingId = Number(listing.linkedListingId || listing.id);
            return `<option value="${listingId}">${safeAgentText(listing.title)} · £${Number(listing.price || 0).toLocaleString()}</option>`;
          }).join("")}
        </select>

        <label for="agentNewMessageText">Message</label>
        <textarea id="agentNewMessageText" rows="5" placeholder="Write your first message to the buyer..." required></textarea>
        <p id="agentNewMessageFormMessage" class="form-message"></p>

        <div class="agent-form-actions">
          <button type="button" class="secondary-action-button" id="agentCancelNewMessageButton">Cancel</button>
          <button type="submit" class="agent-submit-button">Create Conversation</button>
        </div>
      </form>
    </div>
  `;

  openModal();

  const form = document.getElementById("agentNewMessageForm");
  const cancelButton = document.getElementById("agentCancelNewMessageButton");

  if (cancelButton) {
    cancelButton.addEventListener("click", closeModal);
  }

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      createAgentNewMessageConversation(listingOptions);
    });
  }
}

function createAgentNewMessageConversation(listingOptions) {
  const user = getLoggedInUser();
  const nameInput = document.getElementById("agentNewMessageBuyerName");
  const emailInput = document.getElementById("agentNewMessageBuyerEmail");
  const phoneInput = document.getElementById("agentNewMessageBuyerPhone");
  const listingSelect = document.getElementById("agentNewMessageListingSelect");
  const messageInput = document.getElementById("agentNewMessageText");
  const formMessage = document.getElementById("agentNewMessageFormMessage");

  if (!user || user.role !== "agent" || !nameInput || !emailInput || !listingSelect || !messageInput) {
    return;
  }

  const buyerName = nameInput.value.trim();
  const buyerEmail = emailInput.value.trim().toLowerCase();
  const buyerPhone = phoneInput ? phoneInput.value.trim() : "";
  const message = messageInput.value.trim();
  const listingId = Number(listingSelect.value);
  const selectedListing = listingOptions.find(function(listing) {
    return Number(listing.linkedListingId || listing.id) === listingId;
  });

  if (formMessage) {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  if (!buyerName || !buyerEmail || !message || !selectedListing) {
    if (formMessage) {
      formMessage.textContent = "Fill in the buyer, listing, and message fields.";
    }
    return;
  }

  const newInquiry = {
    id: Date.now(),
    listingId: Number(selectedListing.linkedListingId || selectedListing.id),
    listingTitle: selectedListing.title,
    listingLocation: selectedListing.location,
    listingPrice: Number(selectedListing.price || 0),
    customerName: buyerName,
    customerEmail: buyerEmail,
    customerPhone: buyerPhone,
    message: "Conversation started by the agent.",
    agent: user.name,
    agentPhone: selectedListing.phone || "+90 533 000 20 01",
    agentEmail: user.email,
    assignedAgentEmail: user.email,
    status: "in-progress",
    createdAt: new Date().toLocaleString(),
    createdAtISO: new Date().toISOString(),
    readByAgent: true,
    favoriteConversation: false,
    labels: ["Agent Started"],
    agentReplies: [
      {
        message: message,
        createdAt: new Date().toLocaleString(),
        createdAtISO: new Date().toISOString()
      }
    ]
  };

  const allInquiries = getStoredJson("celestateInquiries", []);
  allInquiries.unshift(newInquiry);
  saveStoredJson("celestateInquiries", allInquiries);

  agentSelectedConversationId = newInquiry.id;
  closeModal();
  renderAgentInquiries();
  renderAgentMessages();
  showAgentBanner("New conversation created.", "success");
}

function handleAgentMessageDetailAction(action, conversationId) {
  if (action === "add-label") {
    addAgentConversationLabel(conversationId);
    return;
  }

  if (action === "save-note") {
    saveAgentConversationNote(conversationId);
    return;
  }

  if (action === "toggle-favorite") {
    toggleAgentConversationFavorite(conversationId);
    return;
  }

  if (action === "close") {
    agentSelectedConversationId = Number(conversationId);
    updateAgentConversationRecord(conversationId, function(inquiry) {
      inquiry.status = "closed";
      inquiry.readByAgent = true;
    }, {
      message: "Conversation closed."
    });
  }
}



function normalizeLeadStatus(status) {
  const value = String(status || "new").trim().toLowerCase();

  if (["new", "fresh"].includes(value)) {
    return "new";
  }

  if (["contacted", "called", "emailed"].includes(value)) {
    return "contacted";
  }

  if (["qualified", "qualified lead"].includes(value)) {
    return "qualified";
  }

  if (["converted", "client", "closed-won"].includes(value)) {
    return "converted";
  }

  if (["lost", "closed", "not interested", "closed-lost"].includes(value)) {
    return "lost";
  }

  return "new";
}

function getLeadStatusLabel(status) {
  const labels = {
    new: "New",
    contacted: "Contacted",
    qualified: "Qualified",
    converted: "Converted",
    lost: "Lost"
  };

  return labels[normalizeLeadStatus(status)] || "New";
}

function getLeadStatusClass(status) {
  return `lead-status-${normalizeLeadStatus(status)}`;
}

function getLeadDateValue(lead) {
  if (lead.lastActivityISO) {
    return new Date(lead.lastActivityISO).getTime();
  }

  if (lead.createdAtISO) {
    return new Date(lead.createdAtISO).getTime();
  }

  return Number(lead.id) || 0;
}

function createSeedAgentLeads() {
  const now = Date.now();

  return [
    {
      id: 7101,
      agentEmail: "agent@celestate.com",
      name: "Michael Brown",
      email: "michael.brown@email.com",
      phone: "+357 99 123456",
      source: "Website",
      status: "new",
      listingTitle: "Modern Apartment in Kyrenia",
      listingPrice: 120000,
      notes: "Interested in a viewing and asked about availability.",
      createdAtISO: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 2 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 2 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7102,
      agentEmail: "agent@celestate.com",
      name: "Emily Johnson",
      email: "emily.johnson@email.com",
      phone: "+357 97 654321",
      source: "Property Inquiry",
      status: "contacted",
      listingTitle: "Luxury Villa with Sea View",
      listingPrice: 450000,
      notes: "Requested a viewing next week. Follow-up message already sent.",
      createdAtISO: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 18 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 18 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7103,
      agentEmail: "agent@celestate.com",
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "+357 95 112233",
      source: "Referral",
      status: "qualified",
      listingTitle: "Penthouse in Famagusta",
      listingPrice: 210000,
      notes: "Budget confirmed. Asked about payment options.",
      createdAtISO: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 2 * 24 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7104,
      agentEmail: "agent@celestate.com",
      name: "Sarah Williams",
      email: "sarah.williams@email.com",
      phone: "+357 96 778899",
      source: "Website",
      status: "qualified",
      listingTitle: "Family House in Nicosia",
      listingPrice: 240000,
      notes: "Wants extra garden and living room photos.",
      createdAtISO: new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 3 * 24 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7105,
      agentEmail: "agent@celestate.com",
      name: "James Taylor",
      email: "j.taylor@email.com",
      phone: "+357 99 887766",
      source: "Open House",
      status: "converted",
      listingTitle: "Cozy Studio Near EMU",
      listingPrice: 65000,
      notes: "Converted after open house follow-up.",
      createdAtISO: new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 4 * 24 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 4 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7106,
      agentEmail: "agent@celestate.com",
      name: "Olivia Lopez",
      email: "olivia.l@email.com",
      phone: "+357 95 443322",
      source: "Social Media",
      status: "new",
      listingTitle: "Mountain View Villa in Alsancak",
      listingPrice: 390000,
      notes: "Asked whether price is negotiable.",
      createdAtISO: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 5 * 24 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: 7107,
      agentEmail: "agent@celestate.com",
      name: "Daniel Carter",
      email: "daniel.c@email.com",
      phone: "+357 97 223344",
      source: "Website",
      status: "contacted",
      listingTitle: "Seaside Apartment in Kyrenia",
      listingPrice: 185000,
      notes: "Needs follow-up after receiving brochure.",
      createdAtISO: new Date(now - 6 * 24 * 60 * 60 * 1000).toISOString(),
      lastActivity: new Date(now - 6 * 24 * 60 * 60 * 1000).toLocaleString(),
      lastActivityISO: new Date(now - 6 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];
}

function getStoredAgentLeads() {
  const leads = getStoredJson(AGENT_LEADS_STORAGE_KEY, []);
  return Array.isArray(leads) ? leads : [];
}

function saveStoredAgentLeads(leads) {
  saveStoredJson(AGENT_LEADS_STORAGE_KEY, leads);
}

function mapInquiryStatusToLeadStatus(inquiryStatus) {
  const status = normalizeInquiryStatus(inquiryStatus);

  if (status === "new") {
    return "new";
  }

  if (status === "in-progress") {
    return "contacted";
  }

  if (status === "closed") {
    return "qualified";
  }

  return "lost";
}

function ensureAgentLeadSeedData(user = getLoggedInUser()) {
  if (!user || user.role !== "agent") {
    return;
  }

  let leads = getStoredAgentLeads();

  const hasSeedForAgent = leads.some(function(lead) {
    return lead.agentEmail === "agent@celestate.com" && lead.seedForAgentDemo === true;
  });

  if (!hasSeedForAgent) {
    const seedLeads = createSeedAgentLeads().map(function(lead) {
      return {
        ...lead,
        seedForAgentDemo: true
      };
    });
    leads = seedLeads.concat(leads);
  }

  const existingInquiryIds = leads.map(function(lead) {
    return Number(lead.inquiryId || 0);
  });

  const inquiryLeads = getAgentInquiries(user)
    .filter(function(inquiry) {
      return !existingInquiryIds.includes(Number(inquiry.id));
    })
    .map(function(inquiry) {
      return {
        id: Date.now() + Number(inquiry.id || 0),
        inquiryId: Number(inquiry.id),
        agentEmail: user.email,
        name: inquiry.customerName || "Unknown buyer",
        email: inquiry.customerEmail || "",
        phone: inquiry.customerPhone || "",
        source: "Property Inquiry",
        status: mapInquiryStatusToLeadStatus(inquiry.status),
        listingTitle: inquiry.listingTitle || "Unknown listing",
        listingPrice: Number(inquiry.listingPrice || 0),
        notes: inquiry.message || "Created from property inquiry.",
        createdAtISO: inquiry.createdAtISO || new Date(getInquiryDateValue(inquiry)).toISOString(),
        lastActivity: inquiry.createdAt || new Date(getInquiryDateValue(inquiry)).toLocaleString(),
        lastActivityISO: inquiry.createdAtISO || new Date(getInquiryDateValue(inquiry)).toISOString()
      };
    });

  if (inquiryLeads.length > 0) {
    leads = inquiryLeads.concat(leads);
  }

  saveStoredAgentLeads(leads);
}

function getAgentLeads(user = getLoggedInUser()) {
  if (!user || user.role !== "agent") {
    return [];
  }

  ensureAgentLeadSeedData(user);

  return getStoredAgentLeads()
    .filter(function(lead) {
      return String(lead.agentEmail || "").toLowerCase() === user.email.toLowerCase();
    })
    .map(function(lead) {
      return {
        ...lead,
        status: normalizeLeadStatus(lead.status)
      };
    })
    .sort(function(a, b) {
      return getLeadDateValue(b) - getLeadDateValue(a);
    });
}

function getFilteredAgentLeads() {
  const searchText = agentLeadSearchInput ? agentLeadSearchInput.value.trim().toLowerCase() : "";
  const selectedStatus = agentLeadStatusFilter ? agentLeadStatusFilter.value : "all";
  const selectedSource = agentLeadSourceFilter ? agentLeadSourceFilter.value : "all";

  return getAgentLeads().filter(function(lead) {
    const searchableText = [
      lead.name,
      lead.email,
      lead.phone,
      lead.source,
      lead.status,
      lead.listingTitle,
      lead.notes
    ].join(" ").toLowerCase();

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesStatus = selectedStatus === "all" || normalizeLeadStatus(lead.status) === selectedStatus;
    const matchesSource = selectedSource === "all" || lead.source === selectedSource;

    return matchesSearch && matchesStatus && matchesSource;
  });
}

function renderAgentLeadSummary() {
  if (!agentLeadSummary) {
    return;
  }

  const leads = getAgentLeads();
  const countByStatus = leads.reduce(function(accumulator, lead) {
    const status = normalizeLeadStatus(lead.status);
    accumulator[status] = (accumulator[status] || 0) + 1;
    return accumulator;
  }, { new: 0, contacted: 0, qualified: 0, converted: 0, lost: 0 });

  const summaryItems = [
    { label: "Total Leads", value: leads.length, detail: "All pipeline contacts", icon: "👥" },
    { label: "New Leads", value: countByStatus.new, detail: "Need first follow-up", icon: "☎" },
    { label: "Contacted", value: countByStatus.contacted, detail: "Follow-up started", icon: "✉" },
    { label: "Qualified", value: countByStatus.qualified, detail: "Strong buyer interest", icon: "▣" },
    { label: "Converted", value: countByStatus.converted, detail: "Moved to client stage", icon: "✓" }
  ];

  agentLeadSummary.innerHTML = summaryItems.map(function(item) {
    return `
      <article class="agent-summary-card agent-lead-summary-card">
        <span>${item.icon}</span>
        <strong>${item.value}</strong>
        <p>${item.label}</p>
        <small>${item.detail}</small>
      </article>
    `;
  }).join("");
}

function renderAgentLeads() {
  if (!agentLeadsContainer || !agentLeadPagination) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    agentLeadsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>Agent login required</h4>
        <p>Log in as an agent to manage leads.</p>
      </div>
    `;
    agentLeadPagination.innerHTML = "";
    return;
  }

  renderAgentLeadSummary();

  const filteredLeads = getFilteredAgentLeads();
  const totalPages = Math.max(1, Math.ceil(filteredLeads.length / AGENT_LEADS_PER_PAGE));

  if (agentLeadCurrentPage > totalPages) {
    agentLeadCurrentPage = totalPages;
  }

  if (filteredLeads.length === 0) {
    agentLeadsContainer.innerHTML = `
      <div class="agent-empty-card">
        <h4>No leads found</h4>
        <p>Try changing the search text, status filter, or source filter.</p>
      </div>
    `;
    agentLeadPagination.innerHTML = "";
    return;
  }

  const startIndex = (agentLeadCurrentPage - 1) * AGENT_LEADS_PER_PAGE;
  const currentPageItems = filteredLeads.slice(startIndex, startIndex + AGENT_LEADS_PER_PAGE);

  agentLeadsContainer.innerHTML = `
    <div class="agent-table-wrapper">
      <table class="agent-table agent-leads-table">
        <thead>
          <tr>
            <th>Lead</th>
            <th>Contact</th>
            <th>Source</th>
            <th>Status</th>
            <th>Last Activity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${currentPageItems.map(function(lead) {
            return `
              <tr>
                <td>
                  <div class="agent-buyer-cell">
                    <span class="agent-buyer-avatar">${safeAgentText(String(lead.name || "?").slice(0, 1).toUpperCase())}</span>
                    <div>
                      <strong>${safeAgentText(lead.name || "Unknown lead")}</strong>
                      <span>${safeAgentText(lead.email || "No email")}</span>
                      <small>${safeAgentText(lead.listingTitle || "No linked listing")}${lead.listingPrice ? ` · £${Number(lead.listingPrice).toLocaleString()}` : ""}</small>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="agent-cell-stack">
                    <strong>${safeAgentText(lead.phone || "No phone")}</strong>
                    <span>${safeAgentText(lead.email || "No email")}</span>
                  </div>
                </td>
                <td>${safeAgentText(lead.source || "Manual Entry")}</td>
                <td><span class="agent-lead-status ${getLeadStatusClass(lead.status)}">${getLeadStatusLabel(lead.status)}</span></td>
                <td>${safeAgentText(lead.lastActivity || new Date(getLeadDateValue(lead)).toLocaleString())}</td>
                <td>
                  <div class="agent-row-actions">
                    <button type="button" title="View lead details" data-agent-lead-action="view" data-lead-id="${lead.id}">👁</button>
                    <button type="button" title="Mark contacted" data-agent-lead-action="contacted" data-lead-id="${lead.id}">☎</button>
                    <button type="button" title="Qualify lead" data-agent-lead-action="qualified" data-lead-id="${lead.id}">✓</button>
                    <button type="button" title="Convert lead" data-agent-lead-action="converted" data-lead-id="${lead.id}">★</button>
                    <button type="button" title="Add note" data-agent-lead-action="note" data-lead-id="${lead.id}">⋮</button>
                  </div>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;

  const firstItem = startIndex + 1;
  const lastItem = Math.min(startIndex + currentPageItems.length, filteredLeads.length);

  agentLeadPagination.innerHTML = `
    <span>Showing ${firstItem} to ${lastItem} of ${filteredLeads.length} leads</span>
    <div>
      <button type="button" data-agent-lead-page="previous" ${agentLeadCurrentPage === 1 ? "disabled" : ""}>←</button>
      ${Array.from({ length: totalPages }, function(_, index) {
        const page = index + 1;
        return `<button type="button" data-agent-lead-page="${page}" class="${page === agentLeadCurrentPage ? "active" : ""}">${page}</button>`;
      }).join("")}
      <button type="button" data-agent-lead-page="next" ${agentLeadCurrentPage === totalPages ? "disabled" : ""}>→</button>
    </div>
  `;
}

function syncLinkedInquiryFromLead(lead) {
  if (!lead.inquiryId) {
    return;
  }

  const inquiryStatusByLeadStatus = {
    new: "new",
    contacted: "in-progress",
    qualified: "in-progress",
    converted: "closed",
    lost: "closed"
  };

  updateInquiryRecord(lead.inquiryId, function(inquiry) {
    inquiry.status = inquiryStatusByLeadStatus[normalizeLeadStatus(lead.status)] || inquiry.status;
    inquiry.updatedAt = new Date().toISOString();
  });
}

function updateAgentLeadRecord(leadId, updater, options = {}) {
  const leads = getStoredAgentLeads();
  const targetLead = leads.find(function(lead) {
    return Number(lead.id) === Number(leadId);
  });

  if (!targetLead) {
    showAgentBanner("The selected lead could not be found.", "error");
    return null;
  }

  updater(targetLead);
  targetLead.status = normalizeLeadStatus(targetLead.status);
  targetLead.lastActivity = new Date().toLocaleString();
  targetLead.lastActivityISO = new Date().toISOString();
  saveStoredAgentLeads(leads);

  if (targetLead.inquiryId) {
    syncLinkedInquiryFromLead(targetLead);
  }

  renderAgentLeads();
  renderAgentInquiries();
  renderAgentMessages();

  if (options.message) {
    showAgentBanner(options.message, options.type || "success");
  }

  return targetLead;
}

function updateAgentLeadStatus(leadId, status) {
  const updatedLead = updateAgentLeadRecord(leadId, function(lead) {
    lead.status = normalizeLeadStatus(status);
  }, {
    message: `Lead marked as ${getLeadStatusLabel(status)}.`
  });

  return updatedLead;
}

function renderAgentLeadModal(lead, mode = "view") {
  if (!modalBody) {
    return;
  }

  const isNoteMode = mode === "note";

  modalBody.innerHTML = `
    <div class="modal-notice agent-lead-modal">
      <span class="agent-lead-status ${getLeadStatusClass(lead.status)}">${getLeadStatusLabel(lead.status)}</span>
      <h2>${safeAgentText(lead.name || "Lead details")}</h2>
      <p>${safeAgentText(lead.source || "Manual Entry")} · ${safeAgentText(lead.listingTitle || "No linked listing")}</p>

      <div class="agent-inquiry-modal-grid">
        <section>
          <h3>Contact</h3>
          <p><strong>Email:</strong> ${safeAgentText(lead.email || "Not provided")}</p>
          <p><strong>Phone:</strong> ${safeAgentText(lead.phone || "Not provided")}</p>
          <p><strong>Last activity:</strong> ${safeAgentText(lead.lastActivity || new Date(getLeadDateValue(lead)).toLocaleString())}</p>
        </section>

        <section>
          <h3>Pipeline</h3>
          <p><strong>Source:</strong> ${safeAgentText(lead.source || "Manual Entry")}</p>
          <p><strong>Listing:</strong> ${safeAgentText(lead.listingTitle || "Not linked")}</p>
          <p><strong>Budget signal:</strong> ${lead.listingPrice ? `£${Number(lead.listingPrice).toLocaleString()}` : "Not set"}</p>
        </section>
      </div>

      <form id="agentLeadNoteForm" class="agent-reply-form">
        <label for="agentLeadNoteInput">Lead notes</label>
        <textarea id="agentLeadNoteInput" rows="6" placeholder="Add follow-up notes, buyer preferences, or next steps...">${safeAgentText(lead.notes || "")}</textarea>
        <p id="agentLeadNoteMessage" class="form-message"></p>
        <div class="agent-form-actions">
          <button type="button" class="secondary-action-button" data-lead-modal-status="contacted">Mark Contacted</button>
          <button type="button" class="secondary-action-button" data-lead-modal-status="qualified">Qualify</button>
          <button type="button" class="secondary-action-button" data-lead-modal-status="lost">Mark Lost</button>
          <button type="button" class="secondary-action-button" data-lead-modal-status="converted">Convert</button>
          <button type="submit" class="agent-submit-button">Save Note</button>
        </div>
      </form>
    </div>
  `;

  openModal();

  if (isNoteMode) {
    setTimeout(function() {
      const noteInput = document.getElementById("agentLeadNoteInput");
      if (noteInput) {
        noteInput.focus();
      }
    }, 100);
  }

  const noteForm = document.getElementById("agentLeadNoteForm");

  if (noteForm) {
    noteForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const noteInput = document.getElementById("agentLeadNoteInput");
      const noteText = noteInput ? noteInput.value.trim() : "";

      updateAgentLeadRecord(lead.id, function(targetLead) {
        targetLead.notes = noteText;
      }, {
        message: "Lead note saved."
      });

      closeModal();
    });

    noteForm.addEventListener("click", function(event) {
      const statusButton = event.target.closest("[data-lead-modal-status]");

      if (!statusButton) {
        return;
      }

      const nextStatus = statusButton.getAttribute("data-lead-modal-status");
      updateAgentLeadStatus(lead.id, nextStatus);
      closeModal();
    });
  }
}

function handleAgentLeadAction(action, leadId) {
  const lead = getAgentLeads().find(function(item) {
    return Number(item.id) === Number(leadId);
  });

  if (!lead) {
    showAgentBanner("The selected lead could not be found.", "error");
    return;
  }

  if (action === "view") {
    renderAgentLeadModal(lead);
    return;
  }

  if (["contacted", "qualified", "converted"].includes(action)) {
    updateAgentLeadStatus(leadId, action);
    return;
  }

  if (action === "note") {
    renderAgentLeadModal(lead, "note");
  }
}

function openAgentAddLeadModal() {
  if (!modalBody) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    showAgentBanner("Agent login required to add a lead.", "error");
    return;
  }

  const listingsForAgent = getAgentSubmissions(user);
  const listingOptions = listingsForAgent.length > 0 ? listingsForAgent : listings.slice(0, 8);

  modalBody.innerHTML = `
    <div class="modal-notice agent-lead-modal">
      <h2>Add New Lead</h2>
      <p>Manually add a buyer to your lead pipeline and link them to a relevant property.</p>

      <form id="agentAddLeadForm" class="agent-reply-form">
        <div class="agent-two-columns">
          <div>
            <label for="agentLeadNameInput">Lead name</label>
            <input type="text" id="agentLeadNameInput" placeholder="Example: Michael Brown" required>
          </div>
          <div>
            <label for="agentLeadEmailInput">Email</label>
            <input type="email" id="agentLeadEmailInput" placeholder="lead@example.com" required>
          </div>
        </div>

        <div class="agent-two-columns">
          <div>
            <label for="agentLeadPhoneInput">Phone</label>
            <input type="tel" id="agentLeadPhoneInput" placeholder="Example: +357 99 123456">
          </div>
          <div>
            <label for="agentLeadSourceInput">Source</label>
            <select id="agentLeadSourceInput">
              <option value="Manual Entry">Manual Entry</option>
              <option value="Website">Website</option>
              <option value="Property Inquiry">Property Inquiry</option>
              <option value="Referral">Referral</option>
              <option value="Open House">Open House</option>
              <option value="Social Media">Social Media</option>
            </select>
          </div>
        </div>

        <label for="agentLeadListingInput">Related listing</label>
        <select id="agentLeadListingInput">
          <option value="">No linked listing</option>
          ${listingOptions.map(function(listing) {
            const listingId = Number(listing.linkedListingId || listing.id);
            return `<option value="${listingId}">${safeAgentText(listing.title)} · £${Number(listing.price || 0).toLocaleString()}</option>`;
          }).join("")}
        </select>

        <label for="agentLeadStatusInput">Status</label>
        <select id="agentLeadStatusInput">
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>

        <label for="agentLeadNotesInput">Notes</label>
        <textarea id="agentLeadNotesInput" rows="5" placeholder="Buyer preferences, budget, next step, or follow-up notes."></textarea>
        <p id="agentAddLeadMessage" class="form-message"></p>

        <div class="agent-form-actions">
          <button type="button" class="secondary-action-button" id="agentCancelAddLeadButton">Cancel</button>
          <button type="submit" class="agent-submit-button">Save Lead</button>
        </div>
      </form>
    </div>
  `;

  openModal();

  const cancelButton = document.getElementById("agentCancelAddLeadButton");
  const form = document.getElementById("agentAddLeadForm");

  if (cancelButton) {
    cancelButton.addEventListener("click", closeModal);
  }

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      createAgentLeadFromForm(listingOptions);
    });
  }
}

function createAgentLeadFromForm(listingOptions) {
  const user = getLoggedInUser();
  const nameInput = document.getElementById("agentLeadNameInput");
  const emailInput = document.getElementById("agentLeadEmailInput");
  const phoneInput = document.getElementById("agentLeadPhoneInput");
  const sourceInput = document.getElementById("agentLeadSourceInput");
  const listingInput = document.getElementById("agentLeadListingInput");
  const statusInput = document.getElementById("agentLeadStatusInput");
  const notesInput = document.getElementById("agentLeadNotesInput");
  const messageBox = document.getElementById("agentAddLeadMessage");

  if (!user || user.role !== "agent" || !nameInput || !emailInput) {
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const phone = phoneInput ? phoneInput.value.trim() : "";
  const source = sourceInput ? sourceInput.value : "Manual Entry";
  const selectedListingId = listingInput ? Number(listingInput.value) : 0;
  const selectedListing = listingOptions.find(function(listing) {
    return Number(listing.linkedListingId || listing.id) === selectedListingId;
  });
  const status = statusInput ? normalizeLeadStatus(statusInput.value) : "new";
  const notes = notesInput ? notesInput.value.trim() : "";

  if (messageBox) {
    messageBox.textContent = "";
    messageBox.className = "form-message";
  }

  if (!name || !email || !email.includes("@")) {
    if (messageBox) {
      messageBox.textContent = "Enter a valid lead name and email address.";
    }
    return;
  }

  const newLead = {
    id: Date.now(),
    agentEmail: user.email,
    name: name,
    email: email,
    phone: phone,
    source: source,
    status: status,
    listingTitle: selectedListing ? selectedListing.title : "",
    listingPrice: selectedListing ? Number(selectedListing.price || 0) : 0,
    notes: notes,
    createdAtISO: new Date().toISOString(),
    lastActivity: new Date().toLocaleString(),
    lastActivityISO: new Date().toISOString()
  };

  const leads = getStoredAgentLeads();
  leads.unshift(newLead);
  saveStoredAgentLeads(leads);

  closeModal();
  agentLeadCurrentPage = 1;
  renderAgentLeads();
  showAgentBanner("New lead added to the pipeline.", "success");
}

function resetAgentLeadFilters() {
  if (agentLeadSearchInput) {
    agentLeadSearchInput.value = "";
  }

  if (agentLeadStatusFilter) {
    agentLeadStatusFilter.value = "all";
  }

  if (agentLeadSourceFilter) {
    agentLeadSourceFilter.value = "all";
  }

  agentLeadCurrentPage = 1;
  renderAgentLeads();
  showAgentBanner("Lead filters reset.", "success");
}

function exportAgentLeads() {
  const leadsForAgent = getAgentLeads();
  const blob = new Blob([JSON.stringify(leadsForAgent, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "celestate-agent-leads.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showAgentBanner("Agent leads exported as JSON.", "success");
}

function renderAgentDashboard() {
  setAgentFormDefaults();
  renderAgentMessages();
  renderAgentLeads();
  renderAgentInquiries();
  renderAgentManageSummary();
  renderAgentManageListings();
  renderAgentSubmissions();
}

function showAgentDashboard() {
  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    return;
  }

  if (heroSection) {
    heroSection.hidden = true;
  }

  if (listingsSection) {
    listingsSection.hidden = true;
  }

  if (favoritesSection) {
    favoritesSection.hidden = true;
  }

  if (adminDashboard) {
    adminDashboard.hidden = true;
  }

  if (agentDashboard) {
    agentDashboard.hidden = false;
  }

  renderAgentDashboard();
  showAgentBanner("Agent dashboard loaded. Manage listings, inquiries, messages, and leads from one place.", "success");
}

function showAgentBanner(message, type = "success") {
  if (!agentNoticeBanner) {
    return;
  }

  agentNoticeBanner.textContent = message;
  agentNoticeBanner.className = `agent-notice-banner ${type}`;
}

function setAgentFormDefaults() {
  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    return;
  }

  const phoneInput = document.getElementById("agentListingPhoneInput");

  if (phoneInput && phoneInput.value.trim() === "") {
    phoneInput.value = "+90 533 000 20 01";
  }
}

function setAgentFormMode(mode, submission = null) {
  if (!agentEditingSubmissionId || !agentSubmitListingButton || !agentFormTitle || !agentFormSubtitle || !agentCancelEditButton) {
    return;
  }

  if (mode === "edit" && submission) {
    agentEditingSubmissionId.value = String(submission.id);
    agentFormTitle.textContent = "Edit Listing";
    agentFormSubtitle.textContent = "Update this listing's details. Approved listings are updated immediately in this front-end demo.";
    agentSubmitListingButton.textContent = "Save Listing Changes";
    agentCancelEditButton.hidden = false;
    return;
  }

  agentEditingSubmissionId.value = "";
  agentFormTitle.textContent = "Add New Listing";
  agentFormSubtitle.textContent = "Create a detailed property record and either save it as a draft or submit it for admin approval.";
  agentSubmitListingButton.textContent = "Submit for Approval →";
  agentCancelEditButton.hidden = true;
}

function resetAgentListingForm() {
  if (!agentListingForm) {
    return;
  }

  agentListingForm.reset();
  setAgentFormMode("create");
  setAgentFormDefaults();

  if (agentFormMessage) {
    agentFormMessage.textContent = "";
    agentFormMessage.className = "form-message";
  }
}

function setOptionalInputValue(id, value) {
  const input = document.getElementById(id);

  if (input) {
    input.value = value === undefined || value === null ? "" : value;
  }
}

function setFeatureCheckboxes(features) {
  const featureValues = Array.isArray(features) ? features : [];

  document.querySelectorAll(".agent-feature-checkbox").forEach(function(checkbox) {
    checkbox.checked = featureValues.includes(checkbox.value);
  });
}

function fillAgentListingForm(submission, mode = "edit") {
  if (!submission || !agentListingForm) {
    return;
  }

  document.getElementById("agentListingTitleInput").value = mode === "duplicate"
    ? `${submission.title} Copy`
    : submission.title;
  document.getElementById("agentListingLocationInput").value = submission.location || "";
  document.getElementById("agentListingPriceInput").value = submission.price || "";
  document.getElementById("agentListingTypeInput").value = submission.type || "";
  document.getElementById("agentListingBedroomsInput").value = submission.bedrooms || 0;
  document.getElementById("agentListingBathroomsInput").value = submission.bathrooms || 1;
  document.getElementById("agentListingAreaInput").value = submission.area || "";
  document.getElementById("agentListingPhoneInput").value = submission.phone || "+90 533 000 20 01";
  document.getElementById("agentListingDescriptionInput").value = submission.description || "";

  setOptionalInputValue("agentListingListingTypeInput", submission.listingType || submission.statusText || "For Sale");
  setOptionalInputValue("agentListingPricePerSqftInput", submission.pricePerSqft || "");
  setOptionalInputValue("agentListingYearlyTaxInput", submission.yearlyTax || "");
  setOptionalInputValue("agentListingServiceChargeInput", submission.serviceCharge || "");
  setOptionalInputValue("agentListingLandAreaInput", submission.landArea || "");
  setOptionalInputValue("agentListingYearBuiltInput", submission.yearBuilt || "");
  setOptionalInputValue("agentListingFloorInput", submission.floorNumber || "");
  setOptionalInputValue("agentListingFurnishingInput", submission.furnishing || "Unspecified");
  setOptionalInputValue("agentListingReferenceInput", submission.referenceId || "");
  setOptionalInputValue("agentListingVideoUrlInput", submission.videoUrl || "");

  const defaultCheckboxFeatures = Array.from(document.querySelectorAll(".agent-feature-checkbox")).map(function(checkbox) {
    return checkbox.value;
  });
  const existingFeatures = Array.isArray(submission.features) ? submission.features : [];
  const customFeatures = existingFeatures.filter(function(feature) {
    return !defaultCheckboxFeatures.includes(feature);
  });

  setFeatureCheckboxes(existingFeatures);
  document.getElementById("agentListingFeaturesInput").value = customFeatures.join(", ");

  if (mode === "edit") {
    setAgentFormMode("edit", submission);
  } else {
    setAgentFormMode("create");
  }

  if (agentListingFormPanel) {
    agentListingFormPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getOptionalInputValue(id) {
  const input = document.getElementById(id);
  return input ? input.value.trim() : "";
}

function getOptionalNumberValue(id) {
  const value = getOptionalInputValue(id);
  return value === "" ? 0 : Number(value);
}

function getAgentListingFormData() {
  const title = getOptionalInputValue("agentListingTitleInput");
  const location = getOptionalInputValue("agentListingLocationInput");
  const price = getOptionalNumberValue("agentListingPriceInput");
  const type = getOptionalInputValue("agentListingTypeInput");
  const listingType = getOptionalInputValue("agentListingListingTypeInput") || "For Sale";
  const bedrooms = getOptionalNumberValue("agentListingBedroomsInput");
  const bathrooms = getOptionalNumberValue("agentListingBathroomsInput");
  const area = getOptionalNumberValue("agentListingAreaInput");
  const phone = getOptionalInputValue("agentListingPhoneInput");
  const description = getOptionalInputValue("agentListingDescriptionInput");
  const featuresText = getOptionalInputValue("agentListingFeaturesInput");
  const customFeatures = featuresText
    .split(",")
    .map(function(feature) { return feature.trim(); })
    .filter(Boolean);
  const checkedFeatures = Array.from(document.querySelectorAll(".agent-feature-checkbox:checked"))
    .map(function(checkbox) { return checkbox.value; });
  const features = Array.from(new Set(checkedFeatures.concat(customFeatures))).slice(0, 12);

  return {
    title: title,
    location: location,
    price: price,
    type: type,
    listingType: listingType,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    area: area,
    phone: phone,
    description: description,
    features: features,
    pricePerSqft: getOptionalNumberValue("agentListingPricePerSqftInput"),
    negotiable: Boolean(document.getElementById("agentListingNegotiableInput") && document.getElementById("agentListingNegotiableInput").checked),
    yearlyTax: getOptionalNumberValue("agentListingYearlyTaxInput"),
    serviceCharge: getOptionalNumberValue("agentListingServiceChargeInput"),
    landArea: getOptionalNumberValue("agentListingLandAreaInput"),
    yearBuilt: getOptionalNumberValue("agentListingYearBuiltInput"),
    floorNumber: getOptionalNumberValue("agentListingFloorInput"),
    furnishing: getOptionalInputValue("agentListingFurnishingInput") || "Unspecified",
    referenceId: getOptionalInputValue("agentListingReferenceInput"),
    videoUrl: getOptionalInputValue("agentListingVideoUrlInput")
  };
}

function validateAgentListingForm(formData, submissionStatus = "pending") {
  if (submissionStatus === "draft") {
    if (!formData.title) {
      return "Add at least a property title before saving a draft.";
    }

    return "";
  }

  if (!formData.title || !formData.location || !formData.type || !formData.phone || !formData.description) {
    return "Please fill in all required fields.";
  }

  if (!Number.isFinite(formData.price) || formData.price < 1 || formData.price > MAX_PRICE) {
    return "Price must be between £1 and £1,000,000.";
  }

  if (!Number.isInteger(formData.bedrooms) || formData.bedrooms < 0 || formData.bedrooms > 20) {
    return "Bedrooms must be a whole number between 0 and 20.";
  }

  if (!Number.isInteger(formData.bathrooms) || formData.bathrooms < 1 || formData.bathrooms > 20) {
    return "Bathrooms must be a whole number between 1 and 20.";
  }

  if (!Number.isFinite(formData.area) || formData.area < 10 || formData.area > 2000) {
    return "Area must be between 10 m² and 2000 m².";
  }

  if (formData.features.length === 0) {
    return "Please add at least one property feature.";
  }

  if (formData.description.length < 25) {
    return "Description should be at least 25 characters.";
  }

  return "";
}

function syncApprovedSubmissionToPublicListing(submission) {
  const publicListingId = Number(submission.linkedListingId || submission.id);
  const publicListing = listings.find(function(listing) {
    return listing.id === publicListingId;
  });

  if (!publicListing) {
    return;
  }

  Object.assign(publicListing, {
    title: submission.title,
    location: submission.location,
    price: submission.price,
    bedrooms: submission.bedrooms,
    bathrooms: submission.bathrooms,
    area: submission.area,
    type: submission.type,
    agent: submission.agent,
    phone: submission.phone,
    email: submission.email,
    description: submission.description,
    features: Array.isArray(submission.features) ? submission.features : [],
    pricePerSqft: submission.pricePerSqft || 0,
    negotiable: Boolean(submission.negotiable),
    yearlyTax: submission.yearlyTax || 0,
    serviceCharge: submission.serviceCharge || 0,
    landArea: submission.landArea || 0,
    yearBuilt: submission.yearBuilt || 0,
    floorNumber: submission.floorNumber || 0,
    furnishing: submission.furnishing || "Unspecified",
    referenceId: submission.referenceId || "",
    videoUrl: submission.videoUrl || ""
  });

  savePublicListingsState();
}

function updateAgentListingSubmission(editingId, formData, submissionStatus = "pending") {
  const user = getLoggedInUser();
  const submissions = getListingSubmissions();
  const targetSubmission = submissions.find(function(submission) {
    return Number(submission.id) === Number(editingId);
  });

  if (!targetSubmission) {
    return "The selected listing could not be found.";
  }

  if (targetSubmission.createdByEmail !== user.email && targetSubmission.email !== user.email) {
    return "You can only edit your own listings.";
  }

  Object.assign(targetSubmission, {
    title: formData.title,
    location: formData.location,
    price: formData.price,
    type: formData.type,
    listingType: formData.listingType,
    bedrooms: formData.bedrooms,
    bathrooms: formData.bathrooms,
    area: formData.area,
    phone: formData.phone,
    description: formData.description,
    features: formData.features,
    pricePerSqft: formData.pricePerSqft,
    negotiable: formData.negotiable,
    yearlyTax: formData.yearlyTax,
    serviceCharge: formData.serviceCharge,
    landArea: formData.landArea,
    yearBuilt: formData.yearBuilt,
    floorNumber: formData.floorNumber,
    furnishing: formData.furnishing,
    referenceId: formData.referenceId,
    videoUrl: formData.videoUrl,
    agent: user.name,
    email: user.email,
    createdByEmail: user.email,
    updatedAt: new Date().toISOString()
  });

  if (submissionStatus === "draft") {
    targetSubmission.status = "draft";
    targetSubmission.reason = "Saved as draft by agent.";
  } else if (targetSubmission.status === "draft" || targetSubmission.status === "rejected") {
    targetSubmission.status = "pending";
    targetSubmission.reason = "Updated by agent and submitted for review.";
  }

  saveListingSubmissions(submissions);

  if (targetSubmission.status === "approved") {
    syncApprovedSubmissionToPublicListing(targetSubmission);
  }

  renderAgentDashboard();
  renderAdminDashboard();
  renderListings(listings);

  if (submissionStatus !== "draft") {
    addAdminNotification(`${targetSubmission.title} was updated by ${user.name}.`);
  }

  return "";
}

function createAgentListingSubmission(formData, submissionStatus = "pending") {
  const user = getLoggedInUser();
  const submissionId = Date.now();
  const newSubmission = {
    id: submissionId,
    linkedListingId: submissionId,
    title: formData.title,
    location: formData.location,
    price: formData.price,
    type: formData.type || "Unspecified",
    listingType: formData.listingType || "For Sale",
    bedrooms: formData.bedrooms || 0,
    bathrooms: formData.bathrooms || 0,
    area: formData.area || 0,
    agent: user.name,
    phone: formData.phone || "+90 533 000 20 01",
    email: user.email,
    description: formData.description || "Draft listing description has not been completed yet.",
    features: formData.features || [],
    pricePerSqft: formData.pricePerSqft || 0,
    negotiable: Boolean(formData.negotiable),
    yearlyTax: formData.yearlyTax || 0,
    serviceCharge: formData.serviceCharge || 0,
    landArea: formData.landArea || 0,
    yearBuilt: formData.yearBuilt || 0,
    floorNumber: formData.floorNumber || 0,
    furnishing: formData.furnishing || "Unspecified",
    referenceId: formData.referenceId || "",
    videoUrl: formData.videoUrl || "",
    status: submissionStatus,
    reason: submissionStatus === "draft" ? "Saved as draft by agent." : "",
    submittedAt: new Date().toISOString(),
    createdByEmail: user.email
  };

  const submissions = getListingSubmissions();
  submissions.unshift(newSubmission);
  saveListingSubmissions(submissions);

  const stats = getListingStats();
  stats[submissionId] = {
    views: 0,
    favorites: 0
  };
  saveListingStats(stats);

  if (submissionStatus !== "draft") {
    addAdminNotification(`${newSubmission.title} was submitted by ${user.name} for review.`);
  }

  return newSubmission;
}

function submitAgentListing(submissionStatus = "pending") {
  const user = getLoggedInUser();

  if (!user || user.role !== "agent") {
    showAgentBanner("Only an agent account can submit listings.", "error");
    return;
  }

  const formData = getAgentListingFormData();
  const validationError = validateAgentListingForm(formData, submissionStatus);

  if (agentFormMessage) {
    agentFormMessage.textContent = "";
    agentFormMessage.className = "form-message";
  }

  if (validationError) {
    if (agentFormMessage) {
      agentFormMessage.textContent = validationError;
    }
    return;
  }

  const editingId = agentEditingSubmissionId ? agentEditingSubmissionId.value : "";

  if (editingId) {
    const updateError = updateAgentListingSubmission(editingId, formData, submissionStatus);

    if (updateError) {
      if (agentFormMessage) {
        agentFormMessage.textContent = updateError;
      }
      return;
    }

    if (agentFormMessage) {
      agentFormMessage.textContent = submissionStatus === "draft" ? "Draft saved successfully." : "Listing updated successfully.";
      agentFormMessage.classList.add("success");
    }

    showAgentBanner(submissionStatus === "draft" ? "Draft saved." : "Listing changes saved.", "success");
  } else {
    const newSubmission = createAgentListingSubmission(formData, submissionStatus);

    if (agentFormMessage) {
      agentFormMessage.textContent = submissionStatus === "draft"
        ? "Listing saved as a draft. It is not visible to admin until you submit it for approval."
        : "Listing submitted for admin review. It is currently pending.";
      agentFormMessage.classList.add("success");
    }

    showAgentBanner(
      submissionStatus === "draft"
        ? `${newSubmission.title} saved as draft.`
        : `${newSubmission.title} submitted successfully.`,
      "success"
    );
  }

  agentListingForm.reset();
  setAgentFormMode("create");
  setAgentFormDefaults();
  renderAgentDashboard();
  renderAdminDashboard();
}

function renderAgentSubmissionDetailsModal(submission) {
  if (!modalBody) {
    return;
  }

  modalBody.innerHTML = `
    <div class="modal-notice agent-listing-modal">
      <span class="admin-status-pill status-${submission.status}">${getAgentStatusLabel(submission.status)}</span>
      <h2>${submission.title}</h2>
      <p>${submission.location} · £${Number(submission.price).toLocaleString()}</p>
      <div class="details-grid">
        <div><strong>${submission.bedrooms}</strong><span>Bedrooms</span></div>
        <div><strong>${submission.bathrooms}</strong><span>Bathrooms</span></div>
        <div><strong>${submission.area}</strong><span>m²</span></div>
        <div><strong>${submission.type}</strong><span>Type</span></div>
      </div>
      <h3>Description</h3>
      <p>${submission.description}</p>
      <h3>Performance</h3>
      <p>${getAgentListingViews(submission)} views · ${getAgentListingFavorites(submission)} favorites · ${getAgentListingInquiryCount(submission)} inquiries</p>
      <h3>Additional Listing Details</h3>
      <p>${submission.listingType || "For Sale"} · ${submission.furnishing || "Unspecified"} · Reference: ${submission.referenceId || "Not set"}</p>
      <div class="details-features">
        ${(submission.features || []).map(function(feature) { return `<span>${feature}</span>`; }).join("")}
      </div>
    </div>
  `;

  openModal();
}

function handleAgentListingAction(action, submissionId) {
  const user = getLoggedInUser();
  const submissions = getListingSubmissions();
  const submission = submissions.find(function(item) {
    return Number(item.id) === Number(submissionId);
  });

  if (!user || user.role !== "agent" || !submission) {
    return;
  }

  if (submission.createdByEmail !== user.email && submission.email !== user.email) {
    showAgentBanner("You can only manage your own listings.", "error");
    return;
  }

  if (action === "view") {
    renderAgentSubmissionDetailsModal(submission);
    return;
  }

  if (action === "edit") {
    fillAgentListingForm(submission, "edit");
    showAgentBanner(`Editing ${submission.title}.`, "success");
    return;
  }

  if (action === "duplicate") {
    fillAgentListingForm(submission, "duplicate");
    showAgentBanner("Listing copied into the form. Submit it as a new pending listing.", "success");
    return;
  }

  if (action === "delete") {
    const confirmDelete = window.confirm(`Delete ${submission.title}? This will remove it from your demo listings.`);

    if (!confirmDelete) {
      return;
    }

    const targetIndex = submissions.findIndex(function(item) {
      return Number(item.id) === Number(submissionId);
    });

    if (targetIndex !== -1) {
      submissions.splice(targetIndex, 1);
      saveListingSubmissions(submissions);
    }

    const publicListingIndex = listings.findIndex(function(listing) {
      return Number(listing.id) === Number(submission.linkedListingId || submission.id);
    });

    if (publicListingIndex !== -1 && submission.status === "approved") {
      listings.splice(publicListingIndex, 1);
      savePublicListingsState();
      renderListings(listings);
    }

    renderAgentDashboard();
    renderAdminDashboard();
    showAgentBanner(`${submission.title} deleted from your listings.`, "success");
  }
}

function exportAgentListings() {
  const listingsForAgent = getAgentSubmissions();
  const blob = new Blob([JSON.stringify(listingsForAgent, null, 2)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "celestate-agent-listings.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showAgentBanner("Agent listings exported as JSON.", "success");
}

function bindAgentPanelEvents() {
  if (agentListingForm) {
    agentListingForm.addEventListener("submit", function(event) {
      event.preventDefault();
      submitAgentListing("pending");
    });
  }

  if (agentSaveDraftButton) {
    agentSaveDraftButton.addEventListener("click", function() {
      submitAgentListing("draft");
    });
  }

  if (agentResetFormButton) {
    agentResetFormButton.addEventListener("click", resetAgentListingForm);
  }

  if (agentCancelEditButton) {
    agentCancelEditButton.addEventListener("click", resetAgentListingForm);
  }

  if (agentAddNewListingButton) {
    agentAddNewListingButton.addEventListener("click", function() {
      resetAgentListingForm();
      if (agentListingFormPanel) {
        agentListingFormPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  if (agentManageRefreshButton) {
    agentManageRefreshButton.addEventListener("click", function() {
      renderAgentDashboard();
      showAgentBanner("Agent listings refreshed.", "success");
    });
  }

  if (agentExportListingsButton) {
    agentExportListingsButton.addEventListener("click", exportAgentListings);
  }

  [agentListingSearchInput, agentStatusFilter, agentTypeFilter].forEach(function(control) {
    if (!control) {
      return;
    }

    const eventName = control.tagName === "INPUT" ? "input" : "change";
    control.addEventListener(eventName, function() {
      agentManageCurrentPage = 1;
      renderAgentManageListings();
    });
  });

  if (agentManageListingsContainer) {
    agentManageListingsContainer.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-agent-listing-action]");

      if (!actionButton) {
        return;
      }

      handleAgentListingAction(
        actionButton.getAttribute("data-agent-listing-action"),
        actionButton.getAttribute("data-submission-id")
      );
    });
  }

  if (agentManagePagination) {
    agentManagePagination.addEventListener("click", function(event) {
      const pageButton = event.target.closest("[data-agent-page]");

      if (!pageButton || pageButton.disabled) {
        return;
      }

      const pageAction = pageButton.getAttribute("data-agent-page");
      const filteredListings = getFilteredAgentListings();
      const totalPages = Math.max(1, Math.ceil(filteredListings.length / AGENT_LISTINGS_PER_PAGE));

      if (pageAction === "previous") {
        agentManageCurrentPage = Math.max(1, agentManageCurrentPage - 1);
      } else if (pageAction === "next") {
        agentManageCurrentPage = Math.min(totalPages, agentManageCurrentPage + 1);
      } else {
        agentManageCurrentPage = Number(pageAction);
      }

      renderAgentManageListings();
    });
  }

  [agentInquirySearchInput, agentInquiryStatusFilter, agentInquiryListingFilter].forEach(function(control) {
    if (!control) {
      return;
    }

    const eventName = control.tagName === "INPUT" ? "input" : "change";
    control.addEventListener(eventName, function() {
      agentInquiryCurrentPage = 1;
      renderAgentInquiries();
    });
  });

  if (agentResetInquiryFiltersButton) {
    agentResetInquiryFiltersButton.addEventListener("click", resetAgentInquiryFilters);
  }

  if (agentExportInquiriesButton) {
    agentExportInquiriesButton.addEventListener("click", exportAgentInquiries);
  }

  if (agentInquiriesContainer) {
    agentInquiriesContainer.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-agent-inquiry-action]");

      if (!actionButton) {
        return;
      }

      handleAgentInquiryAction(
        actionButton.getAttribute("data-agent-inquiry-action"),
        actionButton.getAttribute("data-inquiry-id")
      );
    });
  }

  if (agentInquiryPagination) {
    agentInquiryPagination.addEventListener("click", function(event) {
      const pageButton = event.target.closest("[data-agent-inquiry-page]");

      if (!pageButton || pageButton.disabled) {
        return;
      }

      const pageAction = pageButton.getAttribute("data-agent-inquiry-page");
      const filteredInquiries = getFilteredAgentInquiries();
      const totalPages = Math.max(1, Math.ceil(filteredInquiries.length / AGENT_INQUIRIES_PER_PAGE));

      if (pageAction === "previous") {
        agentInquiryCurrentPage = Math.max(1, agentInquiryCurrentPage - 1);
      } else if (pageAction === "next") {
        agentInquiryCurrentPage = Math.min(totalPages, agentInquiryCurrentPage + 1);
      } else {
        agentInquiryCurrentPage = Number(pageAction);
      }

      renderAgentInquiries();
    });
  }
  [agentMessageSearchInput, agentMessageListingFilter, agentMessageStatusFilter].forEach(function(control) {
    if (!control) {
      return;
    }

    const eventName = control.tagName === "INPUT" ? "input" : "change";
    control.addEventListener(eventName, function() {
      renderAgentMessages();
    });
  });

  agentMessageTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      agentMessageTabs.forEach(function(button) {
        button.classList.remove("active");
      });

      tab.classList.add("active");
      agentMessageTab = tab.getAttribute("data-agent-message-tab") || "all";
      renderAgentMessages();
    });
  });

  if (agentConversationList) {
    agentConversationList.addEventListener("click", function(event) {
      const conversationButton = event.target.closest("[data-agent-conversation-id]");

      if (!conversationButton) {
        return;
      }

      selectAgentConversation(conversationButton.getAttribute("data-agent-conversation-id"));
    });
  }

  if (agentChatPanel) {
    agentChatPanel.addEventListener("submit", function(event) {
      const form = event.target.closest("#agentChatComposeForm");

      if (!form) {
        return;
      }

      event.preventDefault();
      const input = document.getElementById("agentChatMessageInput");
      const text = input ? input.value : "";
      sendAgentConversationMessage(form.getAttribute("data-conversation-id"), text);
    });

    agentChatPanel.addEventListener("click", function(event) {
      const toolButton = event.target.closest("[data-agent-message-tool]");

      if (!toolButton) {
        return;
      }

      const tool = toolButton.getAttribute("data-agent-message-tool");
      const labels = {
        call: "Call action is a visual demo. Use the buyer phone number in the details panel.",
        video: "Video call action is a visual demo for this front-end prototype.",
        more: "More conversation tools are represented as a visual demo."
      };

      showAgentBanner(labels[tool] || "Conversation tool clicked.", "success");
    });
  }

  if (agentMessageDetailsPanel) {
    agentMessageDetailsPanel.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-agent-detail-action]");

      if (!actionButton) {
        return;
      }

      handleAgentMessageDetailAction(
        actionButton.getAttribute("data-agent-detail-action"),
        actionButton.getAttribute("data-conversation-id")
      );
    });
  }

  if (agentMarkAllMessagesReadButton) {
    agentMarkAllMessagesReadButton.addEventListener("click", markAllAgentMessagesAsRead);
  }

  if (agentNewMessageButton) {
    agentNewMessageButton.addEventListener("click", openAgentNewMessageModal);
  }

  [agentLeadSearchInput, agentLeadStatusFilter, agentLeadSourceFilter].forEach(function(control) {
    if (!control) {
      return;
    }

    const eventName = control.tagName === "INPUT" ? "input" : "change";
    control.addEventListener(eventName, function() {
      agentLeadCurrentPage = 1;
      renderAgentLeads();
    });
  });

  if (agentResetLeadFiltersButton) {
    agentResetLeadFiltersButton.addEventListener("click", resetAgentLeadFilters);
  }

  if (agentExportLeadsButton) {
    agentExportLeadsButton.addEventListener("click", exportAgentLeads);
  }

  if (agentAddLeadButton) {
    agentAddLeadButton.addEventListener("click", openAgentAddLeadModal);
  }

  if (agentLeadsContainer) {
    agentLeadsContainer.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-agent-lead-action]");

      if (!actionButton) {
        return;
      }

      handleAgentLeadAction(
        actionButton.getAttribute("data-agent-lead-action"),
        actionButton.getAttribute("data-lead-id")
      );
    });
  }

  if (agentLeadPagination) {
    agentLeadPagination.addEventListener("click", function(event) {
      const pageButton = event.target.closest("[data-agent-lead-page]");

      if (!pageButton || pageButton.disabled) {
        return;
      }

      const pageAction = pageButton.getAttribute("data-agent-lead-page");
      const filteredLeads = getFilteredAgentLeads();
      const totalPages = Math.max(1, Math.ceil(filteredLeads.length / AGENT_LEADS_PER_PAGE));

      if (pageAction === "previous") {
        agentLeadCurrentPage = Math.max(1, agentLeadCurrentPage - 1);
      } else if (pageAction === "next") {
        agentLeadCurrentPage = Math.min(totalPages, agentLeadCurrentPage + 1);
      } else {
        agentLeadCurrentPage = Number(pageAction);
      }

      renderAgentLeads();
    });
  }

}

bindAgentPanelEvents();

function applyPublicListingFromSubmission(submission) {
  const existingListing = listings.find(function(listing) {
    return listing.id === Number(submission.linkedListingId || submission.id);
  });

  if (existingListing) {
    return existingListing;
  }

  const publicListing = {
    id: Number(submission.linkedListingId || submission.id),
    title: submission.title,
    location: submission.location,
    price: submission.price,
    bedrooms: submission.bedrooms,
    bathrooms: submission.bathrooms,
    area: submission.area,
    type: submission.type,
    status: submission.listingType || "For Sale",
    agent: submission.agent,
    phone: submission.phone || "+90 533 000 00 00",
    email: submission.email,
    description: submission.description || "Approved listing available for public viewing.",
    features: Array.isArray(submission.features) && submission.features.length > 0
      ? submission.features
      : ["Approved listing", "Public visibility"],
    pricePerSqft: submission.pricePerSqft || 0,
    negotiable: Boolean(submission.negotiable),
    yearlyTax: submission.yearlyTax || 0,
    serviceCharge: submission.serviceCharge || 0,
    landArea: submission.landArea || 0,
    yearBuilt: submission.yearBuilt || 0,
    floorNumber: submission.floorNumber || 0,
    furnishing: submission.furnishing || "Unspecified",
    referenceId: submission.referenceId || "",
    videoUrl: submission.videoUrl || ""
  };

  listings.push(publicListing);
  savePublicListingsState();
  return publicListing;
}

function bindAdminPanelEvents() {
  if (adminRefreshButton) {
    adminRefreshButton.addEventListener("click", function() {
      renderAdminDashboard();
      showAdminBanner("Dashboard refreshed.", "success");
    });
  }

  if (adminUsersContainer) {
    adminUsersContainer.addEventListener("change", function(event) {
      const roleSelect = event.target.closest("[data-admin-user-role]");

      if (!roleSelect) {
        return;
      }

      const userEmail = roleSelect.getAttribute("data-admin-user-role");
      const users = getAdminUsers();
      const targetUser = users.find(function(user) {
        return user.email === userEmail;
      });

      if (!targetUser) {
        return;
      }

      targetUser.role = roleSelect.value;
      saveAdminUsers(users);
      renderAdminDashboard();
      showAdminBanner(`Role updated for ${targetUser.name}.`, "success");
    });

    adminUsersContainer.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-admin-user-action]");

      if (!actionButton) {
        return;
      }

      const userEmail = actionButton.getAttribute("data-user-email");
      const users = getAdminUsers();
      const targetUser = users.find(function(user) {
        return user.email === userEmail;
      });

      if (!targetUser) {
        return;
      }

      if (actionButton.getAttribute("data-admin-user-action") === "toggle-status") {
        targetUser.status = targetUser.status === "active" ? "inactive" : "active";
        saveAdminUsers(users);
        renderAdminDashboard();
        showAdminBanner(`${targetUser.name} account ${targetUser.status}.`, "success");
      }
    });
  }

  if (adminListingsContainer) {
    adminListingsContainer.addEventListener("click", function(event) {
      const actionButton = event.target.closest("[data-admin-listing-action]");

      if (!actionButton) {
        return;
      }

      const listingId = Number(actionButton.getAttribute("data-listing-id"));
      const action = actionButton.getAttribute("data-admin-listing-action");
      const submissions = getListingSubmissions();
      const targetIndex = submissions.findIndex(function(item) {
        return Number(item.id) === listingId;
      });

      if (targetIndex === -1) {
        return;
      }

      const targetSubmission = submissions[targetIndex];

      if (action === "approve") {
        targetSubmission.status = "approved";
        targetSubmission.reason = "";
        applyPublicListingFromSubmission(targetSubmission);
        saveListingSubmissions(submissions);
        showAdminBanner(`${targetSubmission.title} approved and published.`, "success");
      }

      if (action === "reject") {
        const reasonField = adminListingsContainer.querySelector(`[data-admin-reject-reason="${listingId}"]`);
        const reasonText = reasonField ? reasonField.value.trim() : "";

        targetSubmission.status = "rejected";
        targetSubmission.reason = reasonText || "Rejected by admin.";
        saveListingSubmissions(submissions);
        showAdminBanner(`${targetSubmission.title} rejected.`, "error");
      }

      if (action === "archive") {
        targetSubmission.status = "archived";
        targetSubmission.reason = targetSubmission.reason || "Archived by admin.";

        const publicListingIndex = listings.findIndex(function(listing) {
          return listing.id === Number(targetSubmission.linkedListingId || targetSubmission.id);
        });

        if (publicListingIndex !== -1) {
          listings.splice(publicListingIndex, 1);
          savePublicListingsState();
        }

        saveListingSubmissions(submissions);
        showAdminBanner(`${targetSubmission.title} archived.`, "success");
      }

      if (action === "delete") {
        const publicListingIndex = listings.findIndex(function(listing) {
          return listing.id === Number(targetSubmission.linkedListingId || targetSubmission.id);
        });

        if (publicListingIndex !== -1) {
          listings.splice(publicListingIndex, 1);
          savePublicListingsState();
        }

        submissions.splice(targetIndex, 1);
        saveListingSubmissions(submissions);
        showAdminBanner(`${targetSubmission.title} deleted.`, "success");
      }

      renderAdminDashboard();
    });
  }
}

bindAdminPanelEvents();

function restoreCustomerView() {
  if (heroSection) {
    heroSection.hidden = false;
  }

  if (listingsSection) {
    listingsSection.hidden = false;
  }

  if (favoritesSection) {
    favoritesSection.hidden = true;
  }

  if (agentDashboard) {
    agentDashboard.hidden = true;
  }

  if (adminDashboard) {
    adminDashboard.hidden = true;
  }
}

function renderAppByRole() {
  ensureAdminSeedData();

  const user = getLoggedInUser();

  if (user && user.role === "admin") {
    showAdminDashboard();
    return;
  }

  if (user && user.role === "agent") {
    showAgentDashboard();
    return;
  }

  restoreCustomerView();

  if (adminNoticeBanner) {
    adminNoticeBanner.textContent = "";
    adminNoticeBanner.className = "admin-notice-banner";
  }
}

function sanitizeMaxPriceInput() {
  let value = maxPriceInput.value;

  value = value.replace(/\D/g, "");

  if (value.length > MAX_PRICE_DIGITS) {
    value = value.slice(0, MAX_PRICE_DIGITS);
  }

  if (Number(value) > MAX_PRICE) {
    value = String(MAX_PRICE);
  }

  maxPriceInput.value = value;
}

function createListingImageText(listing) {
  const words = listing.title.split(" ").slice(0, 2).join(" ");
  return words || "Property";
}

function createListingCard(listing) {
  const card = document.createElement("article");
  card.className = "listing-card";
  card.tabIndex = 0;
  card.dataset.listingId = listing.id;

  card.innerHTML = `
    <div class="listing-image">
      <button
        type="button"
        class="favorite-button"
        data-favorite-id="${listing.id}"
        aria-label="Save to favorites"
        title="Save to favorites"
      >♡</button>
      <span>${createListingImageText(listing)}</span>
    </div>

    <div class="listing-status-row">
      <span class="listing-status">${listing.status}</span>
      <span class="listing-type">${listing.type}</span>
    </div>

    <h3>${listing.title}</h3>
    <p class="location">${listing.location}</p>
    <p class="price">£${listing.price.toLocaleString()}</p>
    <p>${listing.bedrooms} bedrooms • ${listing.bathrooms} bathrooms • ${listing.area} m²</p>
    <button type="button" class="details-button">View Details</button>
  `;

  const favoriteButton = card.querySelector(".favorite-button");
  updateFavoriteButtonState(favoriteButton, listing.id);

  favoriteButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleFavorite(listing.id);
  });

  favoriteButton.addEventListener("keydown", function(event) {
    event.stopPropagation();
  });

  card.addEventListener("click", function() {
    openListingDetails(listing.id);
  });

  card.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openListingDetails(listing.id);
    }
  });

  return card;
}

function renderListings(listingsToRender) {
  listingsContainer.innerHTML = "";

  if (listingsToRender.length === 0) {
    listingsContainer.innerHTML = `<p class="empty-message">No listings found.</p>`;
    pagination.innerHTML = "";
    return;
  }

  const startIndex = (currentPage - 1) * LISTINGS_PER_PAGE;
  const endIndex = startIndex + LISTINGS_PER_PAGE;
  const listingsForCurrentPage = listingsToRender.slice(startIndex, endIndex);

  listingsForCurrentPage.forEach(function(listing) {
    listingsContainer.appendChild(createListingCard(listing));
  });

  renderPagination(listingsToRender.length);
}

function renderFavorites() {
  if (!favoritesContainer || !favoritesCount) {
    return;
  }

  const user = getLoggedInUser();

  if (!user || user.role !== "customer") {
    favoritesContainer.innerHTML = `
      <div class="empty-favorites-card">
        <h3>Customer login required</h3>
        <p>Log in as a customer to save and view favorite properties.</p>
        <a href="login.html" class="modal-primary-link">Go to Login</a>
      </div>
    `;
    favoritesCount.textContent = "";
    return;
  }

  const favoriteListings = getFavoriteListings();
  favoritesContainer.innerHTML = "";
  favoritesCount.textContent = `${favoriteListings.length} saved ${favoriteListings.length === 1 ? "property" : "properties"}`;

  if (favoriteListings.length === 0) {
    favoritesContainer.innerHTML = `
      <div class="empty-favorites-card">
        <h3>No favorites saved yet</h3>
        <p>Click the heart button on any property card to save it here.</p>
      </div>
    `;
    return;
  }

  favoriteListings.forEach(function(listing) {
    favoritesContainer.appendChild(createListingCard(listing));
  });
}

function showFavoritesSection() {
  const user = getLoggedInUser();

  if (!user) {
    renderLoginRequiredModal();
    return;
  }

  if (user.role !== "customer") {
    renderRoleRequiredModal(user);
    return;
  }

  favoritesSection.hidden = false;
  renderFavorites();
  favoritesSection.scrollIntoView({ behavior: "smooth" });
}

function hideFavoritesSection() {
  favoritesSection.hidden = true;
  document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
}

function renderPagination(totalListings) {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalListings / LISTINGS_PER_PAGE);

  if (totalPages <= 1) {
    return;
  }

  const previousButton = document.createElement("button");
  previousButton.textContent = "Previous";
  previousButton.disabled = currentPage === 1;

  previousButton.addEventListener("click", function() {
    currentPage--;
    applyFilters(false);
  });

  pagination.appendChild(previousButton);

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = page;

    if (page === currentPage) {
      pageButton.className = "active";
    }

    pageButton.addEventListener("click", function() {
      currentPage = page;
      applyFilters(false);
    });

    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener("click", function() {
    currentPage++;
    applyFilters(false);
  });

  pagination.appendChild(nextButton);
}

function applyFilters(resetPage = true) {
  if (resetPage) {
    currentPage = 1;
  }

  const searchText = searchInput.value.toLowerCase().trim();
  const maxPriceValue = maxPriceInput.value;
  const sortValue = sortSelect.value;
  priceError.textContent = "";

  if (maxPriceValue !== "") {
    const maxPrice = Number(maxPriceValue);

    if (maxPrice < MIN_PRICE) {
      priceError.textContent = "Maximum price cannot be below £0.";
      renderListings([]);
      return;
    }

    if (maxPrice > MAX_PRICE) {
      priceError.textContent = "Maximum price cannot be higher than £1,000,000.";
      renderListings([]);
      return;
    }
  }

  const filteredListings = listings.filter(function(listing) {
    const searchableText = [
      listing.title,
      listing.location,
      listing.type,
      listing.status,
      listing.agent,
      listing.description,
      listing.features.join(" ")
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(searchText);
    const matchesPrice = maxPriceValue === "" || listing.price <= Number(maxPriceValue);

    return matchesSearch && matchesPrice;
  });

  const sortedListings = [...filteredListings];

  if (sortValue === "price-low-high") {
    sortedListings.sort(function(a, b) {
      return a.price - b.price;
    });
  }

  if (sortValue === "price-high-low") {
    sortedListings.sort(function(a, b) {
      return b.price - a.price;
    });
  }

  renderListings(sortedListings);
}

function openModal() {
  listingDetailsModal.classList.add("show");
  listingDetailsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  listingDetailsModal.classList.remove("show");
  listingDetailsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderLoginRequiredModal() {
  modalBody.innerHTML = `
    <div class="modal-notice">
      <h2>Login required</h2>
      <p>You need to log in as a customer before using property details or favorites in this demo.</p>
      <a class="modal-primary-link" href="login.html">Go to Login</a>
    </div>
  `;

  openModal();
}

function renderRoleRequiredModal(user) {
  modalBody.innerHTML = `
    <div class="modal-notice">
      <h2>Customer access only</h2>
      <p>You are currently logged in as <strong>${user.role}</strong>. This user-guide feature is for the customer role.</p>
      <button type="button" class="modal-secondary-button" id="switchRoleButton">Switch Account</button>
    </div>
  `;

  openModal();

  document.getElementById("switchRoleButton").addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  });
}

function openListingDetails(listingId) {
  const user = getLoggedInUser();

  if (!user) {
    renderLoginRequiredModal();
    return;
  }

  if (user.role !== "customer") {
    renderRoleRequiredModal(user);
    return;
  }

  const listing = listings.find(function(item) {
    return item.id === Number(listingId);
  });

  if (!listing) {
    return;
  }

  recordListingView(listing.id);

  modalBody.innerHTML = `
    <div class="details-hero">
      <div class="details-image">
        <button
          type="button"
          class="favorite-button details-favorite-button"
          data-favorite-id="${listing.id}"
          id="modalFavoriteButton"
          aria-label="Save to favorites"
          title="Save to favorites"
        >♡</button>
        <span>${createListingImageText(listing)}</span>
      </div>
      <div class="details-summary">
        <span class="listing-status">${listing.status}</span>
        <h2>${listing.title}</h2>
        <p class="details-location">${listing.location}</p>
        <p class="details-price">£${listing.price.toLocaleString()}</p>
      </div>
    </div>

    <div class="details-grid">
      <div><strong>${listing.bedrooms}</strong><span>Bedrooms</span></div>
      <div><strong>${listing.bathrooms}</strong><span>Bathrooms</span></div>
      <div><strong>${listing.area} m²</strong><span>Area</span></div>
      <div><strong>${listing.type}</strong><span>Type</span></div>
    </div>

    <section class="details-section">
      <h3>Description</h3>
      <p>${listing.description}</p>
    </section>

    <section class="details-section">
      <h3>Property Features</h3>
      <ul class="feature-list">
        ${listing.features.map(function(feature) {
          return `<li>${feature}</li>`;
        }).join("")}
      </ul>
    </section>

    <section class="agent-card">
      <div>
        <h3>Contact Agent</h3>
        <p><strong>${listing.agent}</strong></p>
        <p>${listing.phone}</p>
        <p>${listing.email}</p>
      </div>
      <button type="button" class="inquiry-button" id="showInquiryButton">Send Message</button>
    </section>

    <section class="inquiry-section" id="inquirySection">
      <div class="inquiry-intro">
        <p class="section-kicker">Customer message</p>
        <h3>Send Inquiry to Agent</h3>
        <p>Your message will be linked to <strong>${listing.title}</strong> and sent to <strong>${listing.agent}</strong> in this front-end demo.</p>
      </div>

      <div class="inquiry-layout">
        <aside class="agent-profile-card">
          <div class="agent-avatar" aria-hidden="true">${listing.agent.split(" ").map(function(part) { return part[0]; }).join("").slice(0, 2)}</div>
          <h4>${listing.agent}</h4>
          <p>Licensed Real Estate Agent</p>
          <ul>
            <li>${listing.phone}</li>
            <li>${listing.email}</li>
          </ul>
        </aside>

        <form class="inquiry-form" id="inquiryForm">
          <div class="inquiry-form-grid">
            <div class="form-group inquiry-field">
              <label for="inquiryNameInput">Full Name</label>
              <input type="text" id="inquiryNameInput" value="${user.name}" required>
            </div>

            <div class="form-group inquiry-field">
              <label for="inquiryEmailInput">Email Address</label>
              <input type="email" id="inquiryEmailInput" value="${user.email}" required>
            </div>

            <div class="form-group inquiry-field">
              <label for="inquiryPhoneInput">Phone Number</label>
              <input type="tel" id="inquiryPhoneInput" placeholder="Example: +90 533 123 45 67">
            </div>
          </div>

          <div class="form-group inquiry-field">
            <label for="inquiryMessageInput">Message</label>
            <textarea id="inquiryMessageInput" rows="6" required>Hello, I am interested in this property. Could you please provide more information or arrange a viewing?</textarea>
          </div>

          <button type="submit" class="inquiry-submit-button">Send Message</button>
          <p class="inquiry-security-note">Your information is stored locally for this demo and linked to the selected listing.</p>
          <p class="form-message" id="inquiryMessage"></p>
        </form>
      </div>
    </section>

    <p class="form-message" id="detailsMessage"></p>
  `;

  openModal();

  const modalFavoriteButton = document.getElementById("modalFavoriteButton");
  updateFavoriteButtonState(modalFavoriteButton, listing.id);

  modalFavoriteButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleFavorite(listing.id);
  });

  document.getElementById("showInquiryButton").addEventListener("click", function() {
    const inquirySection = document.getElementById("inquirySection");
    const messageInput = document.getElementById("inquiryMessageInput");

    inquirySection.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(function() {
      messageInput.focus();
    }, 350);
  });

  document.getElementById("inquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    saveInquiry(listing, user);
  });
}

function getInquiryStorageKey(user) {
  return `customerInquiries:${user.email}`;
}

function getStoredInquiries(user) {
  const storageKey = getInquiryStorageKey(user);

  try {
    const savedInquiries = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(savedInquiries) ? savedInquiries : [];
  } catch (error) {
    localStorage.removeItem(storageKey);
    return [];
  }
}

function saveInquiry(listing, user) {
  const nameInput = document.getElementById("inquiryNameInput");
  const emailInput = document.getElementById("inquiryEmailInput");
  const phoneInput = document.getElementById("inquiryPhoneInput");
  const messageInput = document.getElementById("inquiryMessageInput");
  const messageBox = document.getElementById("inquiryMessage");

  const customerName = nameInput.value.trim();
  const customerEmail = emailInput.value.trim().toLowerCase();
  const customerPhone = phoneInput.value.trim();
  const messageText = messageInput.value.trim();

  messageBox.textContent = "";
  messageBox.className = "form-message";

  if (!customerName || !customerEmail || !messageText) {
    messageBox.textContent = "Please fill in your name, email, and message.";
    return;
  }

  if (!customerEmail.includes("@") || !customerEmail.includes(".")) {
    messageBox.textContent = "Please enter a valid email address.";
    return;
  }

  const inquiry = {
    id: Date.now(),
    listingId: listing.id,
    listingTitle: listing.title,
    listingLocation: listing.location,
    listingPrice: listing.price,
    customerName: customerName,
    customerEmail: customerEmail,
    customerPhone: customerPhone,
    message: messageText,
    agent: listing.agent,
    agentPhone: listing.phone,
    agentEmail: listing.email,
    assignedAgentEmail: listing.email,
    status: "new",
    createdAt: new Date().toLocaleString(),
    createdAtISO: new Date().toISOString(),
    agentReplies: []
  };

  const customerInquiries = getStoredInquiries(user);
  customerInquiries.push(inquiry);
  localStorage.setItem(getInquiryStorageKey(user), JSON.stringify(customerInquiries));

  const allInquiries = JSON.parse(localStorage.getItem("celestateInquiries") || "[]");
  allInquiries.push(inquiry);
  localStorage.setItem("celestateInquiries", JSON.stringify(allInquiries));

  messageBox.textContent = `Message sent to ${listing.agent}. Your inquiry was saved for this demo.`;
  messageBox.classList.add("success");
  messageInput.value = "";
}

searchInput.addEventListener("input", function() {
  applyFilters(true);
});

maxPriceInput.addEventListener("input", function() {
  sanitizeMaxPriceInput();
  applyFilters(true);
});

sortSelect.addEventListener("change", function() {
  applyFilters(true);
});

heroBrowseButton.addEventListener("click", function() {
  document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
});

if (showAllListingsButton) {
  showAllListingsButton.addEventListener("click", hideFavoritesSection);
}

closeModalButton.addEventListener("click", closeModal);

listingDetailsModal.addEventListener("click", function(event) {
  if (event.target === listingDetailsModal) {
    closeModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && listingDetailsModal.classList.contains("show")) {
    closeModal();
  }
});

renderAuthNavigation();
renderAppByRole();
renderListings(listings);
renderFavorites();
