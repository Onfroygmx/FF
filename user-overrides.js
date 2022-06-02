

// user-override.js
// Perso
// Disable auto updates
user_pref("app.update.auto", false);
user_pref("app.update.background.scheduling.enabled", false);
user_pref("browser.search.update", false);
// Disable Push Notifications
user_pref("dom.push.enabled", false);
// Dsable service workers
user_pref("dom.serviceWorkers.enabled", false);
// Enabe tracking protection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Browser behavior
user_pref("browser.bookmarks.max_backups", 2);
// Disable fx accounts everywhere
user_pref("identity.fxaccounts.enabled", false);
// Don't close window with last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);
// Disable "Pocket"
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");

// FINGERPRINTING
user_pref("media.navigator.enabled", false);

// Don't swith to new opened tabs
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.loadDivertedInBackground", true);

/* LOCATION BAR / SEARCH / AUTO SUGGESTIONS ***/
user_pref("browser.formfill.expire_days", 0);
user_pref("browser.sessionhistory.max_entries", 5);
// Enable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", true);
// Set search region
user_pref("browser.search.region", "US");
user_pref("browser.urlbar.maxRichResults", 5);
user_pref("browser.search.hiddenOneOffs", "Google,Amazon.com,Bing,DuckDuckGo,Wikipedia (en)");
/* Only suggest bookmarks */
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.widget.inNavBar", true);
user_pref("browser.search.region "US");
user_pref("doh-rollout.home-region, "US");

// Enfore cleaning cookies on shutdown: Overides arkenfox.js
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.offlineApps", true);

// Enable userchrome.css usercontent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
