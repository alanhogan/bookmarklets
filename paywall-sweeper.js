// For when certain sites show you an onerous paywall.
// Compile with jQuery option on at https://alanhogan.github.io/bookmarkleter/
// Version 0.2

// Rhymes with Doomblerg
$('#graphics-paywall-overlay, .leaderboard-container, #banner-container').remove();
$('body, html').removeAttr('data-paywall-overlay-status');
