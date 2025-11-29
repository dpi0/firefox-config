// *************************************************************
// CONSISTS OF 4 PARTS:
// 1. MY CUSTOM TWEAKS
// 2. FIREFOX-UI-FIX LEPTON'S TWEAKS
// 3. BETTERFOX'S TWEAKS
// 4. OPTIONAL HARDENING TWEAKS FROM MANY SOURCES
// *************************************************************

// -------------------------------------------------------------
// [1/4] MY CUSTOM TWEAKS
// disabled many performance tweaks (add carefully if really needed)
// kept only visual and necessary tweaks
// -------------------------------------------------------------

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
user_pref("media.videocontrols.picture-in-picture.enabled", false); // Disable Picture-in-Picture video support
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false); // Hide the Picture-in-Picture toggle button on videos
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);
user_pref("browser.discovery.enabled", false); // Disable extension discovery in about:addons
user_pref("browser.display.use_document_fonts", 0); // Force your custom fonts on all websites

// user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // Enables userChrome.css and userContent.css customization
// user_pref("gfx.canvas.accelerated", true); // Enables GPU acceleration for canvas rendering
// user_pref("network.http.max-connections", 1500); // Increases total max simultaneous HTTP connections
// user_pref("network.http.max-persistent-connections-per-server", 10); // Raises limit of persistent connections per server
// user_pref("media.hardware-video-decoding.force-enabled", true); // Forces hardware video decoding support
// user_pref("middlemouse.paste", true); // Enables middle-click paste (Unix/Linux behavior)
// user_pref("browser.sessionhistory.max_entries", 10); // Limits number of entries stored in tab's session history
// user_pref("browser.sessionhistory.max_total_viewers", 5); // Caps total content viewers cached for back/forward nav
// user_pref("content.notify.interval", 500000); // Controls content notification interval in microseconds (500ms)
// user_pref("content.switch.threshold", 1500000); // Sets CPU time threshold (µs) before switching content parsing task
// user_pref("content.interrupt.parsing", true); // Allows content parsing to be interrupted for better responsiveness
// user_pref("browser.urlbar.trimURLs", false); // Shows full URL (e.g., includes "https://" prefix)
// user_pref("layers.acceleration.force-enabled", true); // Forces hardware acceleration for all layer rendering
// user_pref("webgl.force-enabled", true); // Forces WebGL to be enabled, bypassing blacklist

// -------------------------------------------------------------
// [2/4] FIREFOX-UI-FIX LEPTON
// Below is taken directly from https://github.com/black7375/Firefox-UI-Fix/blob/911c3f524b5083d5cec14d82a64420a55590a55a/user.js
// only applies visual changes (no performance changes)
// i've made no changes to this
// -------------------------------------------------------------

// ** Theme Default Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref(
  "browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar",
  false,
);

// CSS's `:has()` selector #457 - 103 Above
user_pref("layout.css.has-selector.enabled", true);

// Browser Theme Based Scheme - Will be activate 95 Above
// user_pref("layout.css.prefers-color-scheme.content-override", 3);

// ** Theme Related Options ****************************************************
// == Theme Distribution Settings ==============================================
// The rows that are located continuously must be changed `true`/`false` explicitly because there is a collision.
// https://github.com/black7375/Firefox-UI-Fix/wiki/Options#important
user_pref("userChrome.tab.connect_to_window", true); // Original, Photon
user_pref("userChrome.tab.color_like_toolbar", true); // Original, Photon

user_pref("userChrome.tab.lepton_like_padding", true); // Original
user_pref("userChrome.tab.photon_like_padding", false); // Photon

user_pref("userChrome.tab.dynamic_separator", true); // Original, Proton
user_pref("userChrome.tab.static_separator", false); // Photon
user_pref("userChrome.tab.static_separator.selected_accent", false); // Just option
user_pref("userChrome.tab.bar_separator", false); // Just option

user_pref("userChrome.tab.newtab_button_like_tab", true); // Original
user_pref("userChrome.tab.newtab_button_smaller", false); // Photon
user_pref("userChrome.tab.newtab_button_proton", false); // Proton

user_pref("userChrome.icon.panel_full", true); // Original, Proton
user_pref("userChrome.icon.panel_photon", false); // Photon

// Original Only
user_pref("userChrome.tab.box_shadow", true);
user_pref("userChrome.tab.bottom_rounded_corner", true);

// Photon Only
user_pref("userChrome.tab.photon_like_contextline", false);
user_pref("userChrome.rounding.square_tab", false);

// Proton Only
// user_pref("userChrome.tab.supernova_like_contextline",   true);

// == Theme Compatibility Settings =============================================
// user_pref("userChrome.compatibility.accent_color",         true); // Firefox v103 Below
// user_pref("userChrome.compatibility.covered_header_image", true);
// user_pref("userChrome.compatibility.panel_cutoff",         true);
// user_pref("userChrome.compatibility.navbar_top_border",    true);
// user_pref("userChrome.compatibility.dynamic_separator",    true); // Need dynamic_separator

// user_pref("userChrome.compatibility.os.windows_maximized", true);
// user_pref("userChrome.compatibility.os.win11",             true);

// == Theme Custom Settings ====================================================
// -- User Chrome --------------------------------------------------------------
// user_pref("userChrome.theme.private",                       true);
// user_pref("userChrome.theme.proton_color.dark_blue_accent", true);
// user_pref("userChrome.theme.monospace",                     true);
// user_pref("userChrome.theme.transparent.frame",             true);
// user_pref("userChrome.theme.transparent.menu",              true);
// user_pref("userChrome.theme.transparent.panel",             true);
// user_pref("userChrome.theme.non_native_menu",               true); // only for linux

// user_pref("userChrome.decoration.disable_panel_animate",    true);
// user_pref("userChrome.decoration.disable_sidebar_animate",  true);
// user_pref("userChrome.decoration.panel_button_separator",   true);
// user_pref("userChrome.decoration.panel_arrow",              true);

// user_pref("userChrome.autohide.tab",                        true);
// user_pref("userChrome.autohide.tab.opacity",                true);
// user_pref("userChrome.autohide.tab.blur",                   true);
// user_pref("userChrome.autohide.tabbar",                     true);
// user_pref("userChrome.autohide.navbar",                     true);
// user_pref("userChrome.autohide.bookmarkbar",                true);
// user_pref("userChrome.autohide.sidebar",                    true);
// user_pref("userChrome.autohide.fill_urlbar",                true);
// user_pref("userChrome.autohide.back_button",                true);
// user_pref("userChrome.autohide.forward_button",             true);
// user_pref("userChrome.autohide.page_action",                true);
// user_pref("userChrome.autohide.toolbar_overlap",            true);
// user_pref("userChrome.autohide.toolbar_overlap.allow_layout_shift", true);

// user_pref("userChrome.hidden.tab_icon",                     true);
// user_pref("userChrome.hidden.tab_icon.always",              true);
// user_pref("userChrome.hidden.tabbar",                       true);
// user_pref("userChrome.hidden.navbar",                       true);
// user_pref("userChrome.hidden.private_indicator",            true);
// user_pref("userChrome.hidden.titlebar_container",           true);
// user_pref("userChrome.hidden.sidebar_header",               true);
// user_pref("userChrome.hidden.sidebar_header.vertical_tab_only", true);
// user_pref("userChrome.hidden.urlbar_iconbox",               true);
// user_pref("userChrome.hidden.urlbar_iconbox.label_only",    true);
// user_pref("userChrome.hidden.bookmarkbar_icon",             true);
// user_pref("userChrome.hidden.bookmarkbar_label",            true);
// user_pref("userChrome.hidden.disabled_menu",                true);

// user_pref("userChrome.centered.tab",                        true);
// user_pref("userChrome.centered.tab.label",                  true);
// user_pref("userChrome.centered.urlbar",                     true);
// user_pref("userChrome.centered.bookmarkbar",                true);

// user_pref("userChrome.counter.tab",                         true);
// user_pref("userChrome.counter.bookmark_menu",               true);

// user_pref("userChrome.combined.nav_button",                 true);
// user_pref("userChrome.combined.nav_button.home_button",     true);
// user_pref("userChrome.combined.urlbar.nav_button",          true);
// user_pref("userChrome.combined.urlbar.home_button",         true);
// user_pref("userChrome.combined.urlbar.reload_button",       true);
// user_pref("userChrome.combined.sub_button.none_background", true);
// user_pref("userChrome.combined.sub_button.as_normal",       true);

// user_pref("userChrome.rounding.square_button",              true);
// user_pref("userChrome.rounding.square_dialog",              true);
// user_pref("userChrome.rounding.square_panel",               true);
// user_pref("userChrome.rounding.square_panelitem",           true);
// user_pref("userChrome.rounding.square_menupopup",           true);
// user_pref("userChrome.rounding.square_menuitem",            true);
// user_pref("userChrome.rounding.square_infobox",             true);
// user_pref("userChrome.rounding.square_toolbar",             true);
// user_pref("userChrome.rounding.square_field",               true);
// user_pref("userChrome.rounding.square_urlView_item",        true);
// user_pref("userChrome.rounding.square_checklabel",          true);

// user_pref("userChrome.padding.first_tab",                   true);
// user_pref("userChrome.padding.first_tab.always",            true);
// user_pref("userChrome.padding.drag_space",                  true);
// user_pref("userChrome.padding.drag_space.maximized",        true);

// user_pref("userChrome.padding.toolbar_button.compact",      true);
// user_pref("userChrome.padding.menu_compact",                true);
// user_pref("userChrome.padding.bookmark_menu.compact",       true);
// user_pref("userChrome.padding.urlView_expanding",           true);
// user_pref("userChrome.padding.urlView_result",              true);
// user_pref("userChrome.padding.panel_header",                true);

// user_pref("userChrome.urlbar.iconbox_with_separator",       true);

// user_pref("userChrome.urlView.as_commandbar",               true);
// user_pref("userChrome.urlView.full_width_padding",          true);
// user_pref("userChrome.urlView.always_show_page_actions",    true);
// user_pref("userChrome.urlView.move_icon_to_left",           true);
// user_pref("userChrome.urlView.go_button_when_typing",       true);
// user_pref("userChrome.urlView.focus_item_border",           true);

// user_pref("userChrome.tabbar.as_titlebar",                  true);
// user_pref("userChrome.tabbar.fill_width",                   true);
// user_pref("userChrome.tabbar.multi_row",                    true);
// user_pref("userChrome.tabbar.unscroll",                     true);
// user_pref("userChrome.tabbar.on_bottom",                    true);
// user_pref("userChrome.tabbar.on_bottom.above_bookmark",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.menubar_on_top",     true); // Need on_bottom
// user_pref("userChrome.tabbar.on_bottom.hidden_single_tab",  true); // Need on_bottom
// user_pref("userChrome.tabbar.one_liner",                    true);
// user_pref("userChrome.tabbar.one_liner.combine_navbar",     true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.tabbar_first",       true); // Need one_liner
// user_pref("userChrome.tabbar.one_liner.responsive",         true); // Need one_liner

// user_pref("userChrome.tab.bottom_rounded_corner.all",       true);
// user_pref("userChrome.tab.bottom_rounded_corner.australis", true);
// user_pref("userChrome.tab.bottom_rounded_corner.edge",      true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome",    true);
// user_pref("userChrome.tab.bottom_rounded_corner.chrome_legacy", true);
// user_pref("userChrome.tab.bottom_rounded_corner.wave",      true);
// user_pref("userChrome.tab.always_show_tab_icon",            true);
// user_pref("userChrome.tab.close_button_at_pinned",          true);
// user_pref("userChrome.tab.close_button_at_pinned.always",   true);
// user_pref("userChrome.tab.close_button_at_pinned.background", true);
// user_pref("userChrome.tab.close_button_at_hover.always",    true); // Need close_button_at_hover
// user_pref("userChrome.tab.close_button_at_hover.with_selected", true);  // Need close_button_at_hover
// user_pref("userChrome.tab.sound_show_label",                true); // Need remove sound_hide_label
// user_pref("userChrome.tab.container.on_top",                true);
// user_pref("userChrome.tab.container.always_long",           true);
// user_pref("userChrome.tab.sound_with_favicons.on_center",   true);
// user_pref("userChrome.tab.selected_bold",                   true);

// user_pref("userChrome.navbar.as_sidebar",                   true);

// user_pref("userChrome.bookmarkbar.multi_row",               true);

// user_pref("userChrome.findbar.floating_on_top",             true);

// user_pref("userChrome.panel.remove_strip",                  true);
// user_pref("userChrome.panel.full_width_separator",          true);
// user_pref("userChrome.panel.full_width_padding",            true);

// user_pref("userChrome.sidebar.overlap",                     true);

// user_pref("userChrome.icon.disabled",                       true);
// user_pref("userChrome.icon.account_image_to_right",         true);
// user_pref("userChrome.icon.account_label_to_right",         true);
// user_pref("userChrome.icon.menu.full",                      true);
// user_pref("userChrome.icon.global_menu.mac",                true);

// -- User Content -------------------------------------------------------------
// user_pref("userContent.player.ui.twoline",                  true);

// user_pref("userContent.newTab.hidden_logo",                 true);
// user_pref("userContent.newTab.background_image",            true); // Need wallpaper image to `userContent.css`. :root { --uc-newTab-wallpaper: url("../icons/background_image.png"); }

// user_pref("userContent.page.proton_color.dark_blue_accent", true);
// user_pref("userContent.page.proton_color.system_accent",    true);
// user_pref("userContent.page.dark_mode.pdf",                 true);
// user_pref("userContent.page.monospace",                     true);

// == Theme Default Settings ===================================================
// -- User Chrome --------------------------------------------------------------
user_pref("userChrome.compatibility.theme", true);
user_pref("userChrome.compatibility.os", true);

user_pref("userChrome.theme.built_in_contrast", true);
user_pref("userChrome.theme.system_default", true);
user_pref("userChrome.theme.proton_color", true);
user_pref("userChrome.theme.proton_chrome", true); // Need proton_color
user_pref("userChrome.theme.fully_color", true); // Need proton_color
user_pref("userChrome.theme.fully_dark", true); // Need proton_color

user_pref("userChrome.decoration.cursor", true);
user_pref("userChrome.decoration.field_border", true);
user_pref("userChrome.decoration.download_panel", true);
user_pref("userChrome.decoration.animate", true);

user_pref("userChrome.padding.tabbar_width", true);
user_pref("userChrome.padding.tabbar_height", true);
user_pref("userChrome.padding.toolbar_button", true);
user_pref("userChrome.padding.navbar_width", true);
user_pref("userChrome.padding.urlbar", true);
user_pref("userChrome.padding.bookmarkbar", true);
user_pref("userChrome.padding.infobar", true);
user_pref("userChrome.padding.menu", true);
user_pref("userChrome.padding.bookmark_menu", true);
user_pref("userChrome.padding.global_menubar", true);
user_pref("userChrome.padding.panel", true);
user_pref("userChrome.padding.popup_panel", true);

user_pref("userChrome.tab.multi_selected", true);
user_pref("userChrome.tab.unloaded", true);
user_pref("userChrome.tab.letters_cleary", true);
user_pref("userChrome.tab.close_button_at_hover", true);
user_pref("userChrome.tab.sound_hide_label", true);
user_pref("userChrome.tab.sound_with_favicons", true);
user_pref("userChrome.tab.pip", true);
user_pref("userChrome.tab.container", true);
user_pref("userChrome.tab.crashed", true);

user_pref("userChrome.fullscreen.overlap", true);
user_pref("userChrome.fullscreen.show_bookmarkbar", true);

user_pref("userChrome.icon.library", true);
user_pref("userChrome.icon.panel", true);
user_pref("userChrome.icon.menu", true);
user_pref("userChrome.icon.context_menu", true);
user_pref("userChrome.icon.global_menu", true);
user_pref("userChrome.icon.global_menubar", true);
user_pref("userChrome.icon.1-25px_stroke", true);

// -- User Content -------------------------------------------------------------
user_pref("userContent.player.ui", true);
user_pref("userContent.player.icon", true);
user_pref("userContent.player.noaudio", true);
user_pref("userContent.player.size", true);
user_pref("userContent.player.click_to_play", true);
user_pref("userContent.player.animate", true);

user_pref("userContent.newTab.full_icon", true);
user_pref("userContent.newTab.animate", true);
user_pref("userContent.newTab.pocket_to_last", true);
user_pref("userContent.newTab.searchbar", true);

user_pref("userContent.page.field_border", true);
user_pref("userContent.page.illustration", true);
user_pref("userContent.page.proton_color", true);
user_pref("userContent.page.dark_mode", true); // Need proton_color
user_pref("userContent.page.proton", true); // Need proton_color

// ** Useful Options ***********************************************************
// Tab preview
// https://blog.nightly.mozilla.org/2024/02/06/a-preview-of-tab-previews-these-weeks-in-firefox-issue-153/
user_pref("browser.tabs.hoverPreview.enabled", true);

// Paste suggestion at urlbar
// https://blog.nightly.mozilla.org/2023/12/04/url-gonna-want-to-check-this-out-these-weeks-in-firefox-issue-150/
user_pref("browser.urlbar.clipboard.featureGate", true);

// Integrated calculator at urlbar
user_pref("browser.urlbar.suggest.calculator", true);

// Integrated unit convertor at urlbar
// user_pref("browser.urlbar.unitConversion.enabled", true);

// Draw in Titlebar
// user_pref("browser.tabs.drawInTitlebar", true);
// user_pref("browser.tabs.inTitlebar",        1); // Nightly, 96 Above

// Searchbar, Removed from settings starting with FF v122
// user_pref("browser.search.widget.inNavBar",    true);

// Firefox view search
// https://blog.nightly.mozilla.org/2023/12/14/better-searching-in-firefox-to-close-out-2023-these-weeks-in-firefox-issue-151/
// user_pref("browser.firefox-view.search.enabled",       true);
// user_pref("browser.firefox-view.virtual-list.enabled", true);

// Firefox screenshot
// https://blog.nightly.mozilla.org/2024/01/22/happy-new-year-these-weeks-in-firefox-issue-152/
// user_pref("screenshots.browser.component.enabled", true);

// ** Scrolling Settings *******************************************************
// == Only Sharpen Scrolling ===================================================
//         Pref                                             Value      Original
/*
user_pref("mousewheel.min_line_scroll_amount",                 10); //        5
user_pref("general.smoothScroll.mouseWheel.durationMinMS",     80); //       50
user_pref("general.smoothScroll.currentVelocityWeighting", "0.15"); //   "0.25"
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6"); //    "0.4"
*/

// == Smooth Scrolling ==========================================================
// ** Scrolling Options ********************************************************
// based on natural smooth scrolling v2 by aveyo
// this preset will reset couple extra variables for consistency
//         Pref                                              Value                 Original
/*
user_pref("apz.allow_zooming",                               true);            ///     true
user_pref("apz.force_disable_desktop_zooming_scrollbars",   false);            ///    false
user_pref("apz.paint_skipping.enabled",                      true);            ///     true
user_pref("apz.windows.use_direct_manipulation",             true);            ///     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);            ///    false
user_pref("general.smoothScroll.currentVelocityWeighting", "0.12");            ///   "0.25" <- 1. If scroll too slow, set to "0.15"
user_pref("general.smoothScroll.durationToIntervalRatio",    1000);            ///      200
user_pref("general.smoothScroll.lines.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.lines.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.mouseWheel.durationMaxMS",    100);            ///      200
user_pref("general.smoothScroll.mouseWheel.durationMinMS",      0);            ///       50
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);            ///      100
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);   ///      120
user_pref("general.smoothScroll.msdPhysics.enabled",                  true);   ///    false
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);   ///     1250
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",     200);   ///     1000
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         10);   ///       12
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",  "1.20");   ///    "1.3"
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",   1000);   ///     2000
user_pref("general.smoothScroll.other.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.other.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pages.durationMaxMS",         100);            ///      150
user_pref("general.smoothScroll.pages.durationMinMS",           0);            ///      150
user_pref("general.smoothScroll.pixels.durationMaxMS",        100);            ///      150
user_pref("general.smoothScroll.pixels.durationMinMS",          0);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMaxMS",    100);            ///      150
user_pref("general.smoothScroll.scrollbars.durationMinMS",      0);            ///      150
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");            ///    "0.4"
user_pref("layers.async-pan-zoom.enabled",                   true);            ///     true
user_pref("layout.css.scroll-behavior.spring-constant",   "250.0");            ///   "250.0"
user_pref("mousewheel.acceleration.factor",                     3);            ///       10
user_pref("mousewheel.acceleration.start",                     -1);            ///       -1
user_pref("mousewheel.default.delta_multiplier_x",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_y",            100);            ///      100
user_pref("mousewheel.default.delta_multiplier_z",            100);            ///      100
user_pref("mousewheel.min_line_scroll_amount",                  0);            ///        5
user_pref("mousewheel.system_scroll_override.enabled",       true);            ///     true <- 2. If scroll too fast, set to false
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); ///     true
user_pref("mousewheel.transaction.timeout",                  1500);            ///     1500
user_pref("toolkit.scrollbox.horizontalScrollDistance",         4);            ///        5
user_pref("toolkit.scrollbox.verticalScrollDistance",           3);            ///        3
*/

// -------------------------------------------------------------
// [3/4] BETTERFOX TWEAKS
// Taken directly from https://github.com/yokoffing/Betterfox/blob/3b159ac8fbb3d5921db8ff1763aa51cff12ea1ec/user.js
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
 * version: 144                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("gfx.content.skia-font-cache-size", 32);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("webgl.max-size", 16384);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEMORY CACHE ***/
user_pref("browser.cache.memory.capacity", 131072);
user_pref("browser.cache.memory.max_entry_size", 20480);
user_pref("browser.sessionhistory.max_total_viewers", 4);
user_pref("browser.sessionstore.max_tabs_undo", 10);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 262144);
user_pref("media.memory_caches_combined_limit_kb", 1048576);
user_pref("media.cache_readahead_limit", 600);
user_pref("media.cache_resume_threshold", 300);

/** IMAGE CACHE ***/
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 65536);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.request.max-start-delay", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheEntries", 10000);
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

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", true); /** //mychange **/
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

/** AI ***/
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

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

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#option-1-increased-protection
// PREF: enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 2);
user_pref("network.trr.max-fails", 5);
