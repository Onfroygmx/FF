/******
* name: Onf user.js
* date: September 2021
* base version: V91
******/

/*
Sources:
url: https://github.com/arkenfox/user.js
*/

/*** Global Config ***/
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.shell.checkDefaultBrowser", false);
// WELCOME & WHAT'S NEW NOTICES
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);
/* 0=blank, 1=home, 2=last visited page, 3=resume previous session */
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
// Disable showing about:blank as soon as possible during startup
user_pref("browser.startup.blankWindow", false);
/* true=Activity Stream, false=blank page */
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);

// Disable "Confirm you want to leave" dialog on page close
user_pref("dom.disable_beforeunload", true);
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
// Block popup windows
user_pref("dom.disable_open_during_load", true);
// Limit events that can cause a popup [SETUP-WEB]
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// Disable WebGL (Web Graphics Library)
user_pref("webgl.disabled", true);
// Enforce Firefox blocklist
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
// Enforce window.opener protection
//user_pref("dom.targetBlankNoOpener.enabled", true); // [DEFAULT: true FF79+]
// Enforce "window.name" protection
//user_pref("privacy.window.name.update.enabled", true); //Default



/*** GEOLOCATION / LANGUAGE / LOCALE ***/
// Use Mozilla geolocation service instead of Google if permission is granted
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// Disable using the OS's geolocation service
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
// Disable region updates
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
// Set preferred language for displaying web pages
user_pref("intl.accept_languages", "en-US, en");
// Use US English locale regardless of the system locale
user_pref("javascript.use_us_english_locale", true);



/*** QUIETER FOX ***/
// Disable auto updates
// user_pref("app.update.auto", false);
// user_pref("app.update.background.scheduling.enabled", false);
// user_pref("browser.search.update", false);
// Disable recommendation pane in about:addons
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
/** TELEMETRY **/
// Disable data submission
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.ping-centre.telemetry", false);



/*** SAFE BROWSING (SB) ***/
// Disable SB checks for downloads
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");



/*** BLOCK IMPLICIT OUTBOUND ***/
// Disable prefetching
user_pref("network.prefetch-next", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.places.speculativeConnect.enabled", false);


/*** DNS / DoH / PROXY / SOCKS / IPv6 ***/
user_pref("network.dns.disableIPv6", true);
// Set the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// Disable using UNC (Uniform Naming Convention) paths
user_pref("network.file.disable_unc_paths", true);
// Disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", "");



/*** LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
// Display all parts of the url in the location bar ***/
//user_pref("browser.urlbar.trimURLs", false); // Default
// Disable url bar using search
user_pref("keyword.enabled", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// user_pref("browser.urlbar.suggest.quicksuggest", false); // Replaced FF 95
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0=never resolve single words, 1=heuristic (default), 2=always resolve */
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
// Disable Form Autofill
user_pref("browser.formfill.enable", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);



/*** PASSWORDS ***/
/* 0=once per session (default), 1=every time it's needed, 2=after n minutes */
//user_pref("security.ask_for_password", 2);
//user_pref("security.password_lifetime", 5);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.http.windows-sso.enabled", false);



/*** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.interval", 30000);
// 1005: disable automatic Firefox start and session restore after reboot
user_pref("toolkit.winRegisterApplicationRestart", false);
user_pref("browser.shell.shortcutFavicons", false);



/*** HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.tls.version.enable-deprecated", false);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", true);
/** CERTS / HPKP (HTTP Public Key Pinning) **/
// Disable or limit SHA-1 certificates
/* 0 = allow all
 * 1 = block all
 * 3 = only allow locally-added roots (e.g. anti-virus) (default)
 * 4 = only allow locally-added roots or for certs in 2015 and earlier */
user_pref("security.pki.sha1_enforcement_level", 1);
// Disable Windows 8.1's Microsoft Family Safety cert
/* 0=disable detecting Family Safety mode and importing the root
 * 1=only attempt to detect Family Safety mode (don't import the root)
 * 2=detect Family Safety mode and import the root */
user_pref("security.family_safety.mode", 0);
// Enable strict pinning
/* PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict */
user_pref("security.cert_pinning.enforcement_level", 2);
// Enable CRLite
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
// Enforce CSP (Content Security Policy)
//user_pref("security.csp.enable", true); //Default
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 1000);
/** MIXED CONTENT **/
// Disable insecure content on https pages
user_pref("security.mixed_content.block_display_content", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
/** UI (User Interface) **/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// Control "Add Security Exception" dialog on SSL warnings
/* 0=do neither 1=pre-populate url 2=pre-populate url + pre-fetch cert (default) */
user_pref("browser.ssl_override_behavior", 1);
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);
// Display "Not Secure" text on HTTP sites
// user_pref("security.insecure_connection_text.enabled", true);



/*** HEADERS / REFERERS ***/
// Control when to send a cross-origin referer
/* 0=always (default), 1=only if base domains match, 2=only if hosts match */
user_pref("network.http.referer.XOriginPolicy", 2);
// Control the amount of cross-origin information to send
/* 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", false);


/*** CONTAINERS ***/
// Enable Container Tabs and its UI setting
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);



/*** PLUGINS / MEDIA / WEBRTC ***/
// Disable WebRTC (Web Real-Time Communication)
// user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
//user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// Disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
user_pref("media.autoplay.blocking_policy", 2);
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);



/*** MISCELLANEOUS ***/
// Prevent accessibility services from accessing your browser
user_pref("accessibility.force_disabled", 1);
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// Disable page thumbnail collection
user_pref("browser.pagethumbnails.capturing_disabled", true);
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
// Disable various developer tools in browser context
user_pref("devtools.chrome.enabled", false);
// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false);
// Disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// Remove special permissions for certain mozilla domains
user_pref("permissions.manager.defaultsUrl", "");
// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// Enforce PDFJS, disable PDFJS scripting [SETUP-CHROME]
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);
// Disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
user_pref("network.protocol-handler.external.ms-windows-store", false);
// Disable permissions delegation
user_pref("permissions.delegation.enabled", false);
/** DOWNLOADS ***/
// Enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// Disable downloads panel opening on every download
user_pref("browser.download.alwaysOpenPanel", false);
// Enable user interaction for security by always asking how to handle new mimetypes
user_pref("browser.download.always_ask_before_handling_new_types", true);
/** EXTENSIONS ***/
// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 5);
user_pref("extensions.autoDisableScopes", 15);
// Disable bypassing 3rd party extension install prompts
user_pref("extensions.postDownloadThirdPartyPrompt", false);



/*** PERSISTENT STORAGE ***/
// 2701: disable or isolate 3rd-party cookies and site-data [SETUP-WEB]
/* 0 = Accept cookies and site data
 * 1 = (Block) All third-party cookies
 * 2 = (Block) All cookies
 * 3 = (Block) Cookies from unvisited websites
 * 4 = (Block) Cross-site tracking cookies (default)
 * 5 = (Isolate All) Cross-site cookies (TCP: Total Cookie Protection / dFPI: dynamic FPI) [1] */
//user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.contentblocking.category", "strict");
//user_pref("network.cookie.thirdparty.sessionOnly", true); // Default
//user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);  // Default
// Enable Local Storage Next Generation (LSNG)
//user_pref("dom.storage.next_gen", true);
// Enable state partitioning of service workers
user_pref("privacy.partition.serviceWorkers", true);


/*** SHUTDOWN ***/
// Delete cookies and site data on exit
/* 0=keep until they expire (default), 2=keep until you close Firefox */
//user_pref("network.cookie.lifetimePolicy", 2);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// Set what items to clear on shutdown
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
// Reset default items to clear with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", false);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", false);
user_pref("privacy.cpd.sessions", true);
// Reset default "Time range to clear"
user_pref("privacy.sanitize.timeSpan", 0);



/*** FPI (FIRST PARTY ISOLATION) ***/
user_pref("privacy.firstparty.isolate", false);
// Enforce SmartBlock shims: about:compat
user_pref("extensions.webcompat.enable_shims", true);


/*** RFP (RESIST FINGERPRINTING) ***/
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("privacy.resistFingerprinting.letterboxing", true);

/*** FINGERPRINTING ***/
user_pref("browser.display.use_system_colors", false);
// Enforce non-native widget theme
user_pref("widget.non-native-theme.enabled", true);
/* 1=most recent window or tab 2=new window, 3=new tab */
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);



/*** ACTIVITY_STREAM ***/
// 0105: disable some Activity Stream items
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false FF89+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
// 0106: clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");
// OTHER
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
