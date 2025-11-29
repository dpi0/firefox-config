// Enable data sanitization on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#option-1-clear-all-browsing-data-on-shutdown
// PREF: delete all browsing data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.downloads", true); // [HIDDEN]
user_pref("privacy.clearOnShutdown_v2.formdata", true);

// PREF: after crashes or restarts, do not save extra session data
// such as form content, scrollbar positions, and POST data
user_pref("browser.sessionstore.privacy_level", 2);

// Set cookie lifetime policy to session-only
user_pref("network.cookie.lifetimePolicy", 2);

// Disable saving of passwords and form data
user_pref("signon.rememberSignons", false);
user_pref("browser.formfill.enable", false);

// Disable session restore
user_pref("browser.sessionstore.enabled", false);

// Set startup page to a blank page
user_pref("browser.startup.page", 0);

// Disable various caches
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.cache.offline.enable", false);

// Disable service workers and related features
user_pref("dom.serviceWorkers.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.indexedDB.enabled", false);
user_pref("dom.storage.enabled", false);

// Enable first-party isolation and resist fingerprinting
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Disable telemetry and data reporting
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// Disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable studies and Normandy
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable Firefox Accounts
user_pref("identity.fxaccounts.enabled", false);

// Disable recommendations on new tab page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

user_pref("ui.key.menuAccessKey", 0); // Sets menu key to 0 (No key, eg disabling it), instead of default Alt
user_pref("ui.key.menuAccessKeyFocuses", false); // Disables focusing menu bar when access key is pressed
user_pref("mousewheel.default.delta_multiplier_x", 50); // Increases horizontal scroll sensitivity
user_pref("mousewheel.default.delta_multiplier_y", 30); // Increases vertical scroll sensitivity
user_pref("browser.startup.page", 3); // 0=blank page, 1=home page, 2=last visited page, 3=restore previous session
user_pref("apz.overscroll.enabled", false); // Disables elastic overscroll effect on touch/scroll devices
user_pref("nglayout.initialpaint.delay", 0); // Renders page immediately without initial paint delay
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // Enables improved search engine alias UI
user_pref("gfx.webrender.all", true); // Forces WebRender GPU compositor for all content rendering
user_pref("browser.aboutConfig.showWarning", false); // Remove the "Warn me when I attempt to access these preferences" warning in about:config
user_pref("accessibility.typeaheadfind.manual", false); // Disables manual type-ahead find
user_pref("accessibility.typeaheadfind.autostart", false); // Prevents auto-start of type-ahead find
user_pref("browser.bookmarks.showMobileBookmarks", false); // Hides "Mobile Bookmarks" folder in bookmarks UI
user_pref("browser.toolbars.bookmarks.visibility", "never"); // Completely hides the bookmarks toolbar
user_pref("full-screen-api.transition-duration.enter", "0 0 "); // Disables full-screen enter animation
user_pref("full-screen-api.transition-duration.leave", "0 0 "); // Disables full-screen exit animation
user_pref("full-screen-api.warning.delay", -1); // Disables the full-screen warning delay
user_pref("full-screen-api.warning.timeout", 0); // Disables the full-screen warning timeout
user_pref("browser.tabs.loadBookmarksInTabs", true); // Opens bookmarks in new tabs instead of current one
user_pref("browser.display.show_image_placeholders", false); // Prevents showing image placeholders when images are loading/missing
user_pref("media.autoplay.enabled", true); // Allows media autoplay (may be overridden by site settings)
user_pref("sidebar.revamp", false); // Disables the new sidebar design
user_pref("sidebar.revamp.defaultLauncherVisible", false); // Hides the sidebar launcher button by default
user_pref("browser.search.suggest.enabled.private", true); // Enabled toolbar search engine suggestions in private window
user_pref("browser.newtabpage.activity-stream.showSearch", false); // Remove the search bar from new tab page

// -------------------------------------------------------------
// [3/4] BETTERFOX TWEAKS
// Below is taken directly from https://github.com/yokoffing/Betterfox/blob/e66de491acd5e87f53abc3dfe9622f7ce5e2a101/user.js
// I've made some changes to below, and have denoted each change with "//mychange" as a comment right next to the change
// -------------------------------------------------------------

//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 138                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEMORY CACHE ***/
user_pref("browser.sessionhistory.max_total_viewers", 4);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", true); //mychange, false --> true
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("network.IDN_show_punycode", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
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
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/

// -------------------------------------------------------------
// [4/4] OPTIONAL HARDENING TWEAKS
// the sources i lift the user_pref from will be mentioned above each block
// -------------------------------------------------------------

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#password-credit-card-and-address-management
// PREF: disable login manager
user_pref("signon.rememberSignons", false); // disable built-in password manager

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#option-2-all-windows
// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// in both Normal and Private Browsing windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#captive-portal-detection
// PREF: disable captive portal detection
// [WARNING] Do NOT use for mobile devices!
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#always-ask-where-to-save-files
// PREF: ask where to save every file
user_pref("browser.download.useDownloadDir", false); // Make Firefox ask you where to save every download.

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#hide-top-sites
// PREF: hide weather on New Tab page
user_pref("browser.newtabpage.activity-stream.showWeather", false);

// https://github.com/yokoffing/Betterfox/wiki/Common-Overrides#disable-unified-search-button
// PREF: disable unified search button
user_pref("browser.urlbar.scotchBonnet.enableOverride", false);

// https://github.com/yokoffing/Betterfox/wiki/Common-Overrides#containers
// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);
