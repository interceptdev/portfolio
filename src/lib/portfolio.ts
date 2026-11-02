export type ProjectImage = {
  image: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
};

export type Project = ProjectImage & {
  id: string;
  name: string;
  category: "User Interface" | "Scripting";
  descriptor: string;
  description: string;
  scope: string[];
  color: string;
  additionalImages?: ProjectImage[];
};

// Screenshots supplied by intercept. Shop and HUD lead the hero and catalog.
// The first three entries are featured.
// Public image paths are automatically prefixed for GitHub Pages.
export const projects: Project[] = [
  {
    id: "gamepass-shop", name: "Gamepass shop", category: "User Interface",
    descriptor: "Gamepasses, gifting, and purchase flows.",
    description: "A Roblox shop interface with a featured release package, gamepass cards, a gifting panel, and persistent navigation. Bold icons and distinct product colors make each option easy to find.",
    scope: ["Shop interface", "Gifting flow", "Gamepass cards"], color: "#111111",
    image: "/work/gamepass-shop.png",
    alt: "Roblox gamepass shop with a release package, VIP, money and speed passes, and a recipient list for gifts.",
    width: 1435, height: 795,
  },
  {
    id: "gameplay-hud", name: "Gameplay HUD", category: "User Interface",
    descriptor: "Daily tasks, currencies, and quick navigation.",
    description: "An in-game HUD bringing daily objectives, task progress, currency balances, and the main navigation into a compact overlay. Store, backpack, quests, codes, stats, and trading stay close at hand.",
    scope: ["Daily objectives", "Currency display", "Navigation HUD"], color: "#141414",
    image: "/work/gameplay-hud.png",
    alt: "Roblox HUD with three daily elimination tasks, coin and diamond balances, and bottom navigation for Store, Backpack, Quests, Codes, Stats and Trade.",
    width: 1436, height: 623,
  },
  {
    id: "interaction-system", name: "Interaction system", category: "Scripting",
    descriptor: "Hold-to-interact with clear visual feedback.",
    description: "A Roblox interaction system using a hold prompt, progress feedback, an outlined target, and a visual beam connecting the player to the object. The system supports StreamingEnabled experiences.",
    scope: ["Interaction prompts", "Progress feedback", "StreamingEnabled support"], color: "#121212",
    image: "/work/interaction-system.png",
    alt: "Roblox character facing an outlined door with a Hold to Interact prompt and a visual beam connecting the character to the target.",
    width: 1280, height: 677,
  },
  {
    id: "menu-system", name: "Menu system", category: "Scripting",
    descriptor: "Home, teams, store, and rules in one place.",
    description: "A configurable Roblox main menu with welcome information, server details, changelogs, and dedicated navigation for teams, the store, rules, and credits.",
    scope: ["Main menu", "Team navigation", "Store integration"], color: "#151515",
    image: "/work/menu-system.png",
    alt: "Roblox main menu with Play, Home, Teams, Store, Rules and Credits navigation beside welcome, server data and changelog panels.",
    width: 1280, height: 677,
  },
  {
    id: "season-pass", name: "Season pass", category: "User Interface",
    descriptor: "Free and premium rewards with XP progression.",
    description: "A Roblox season-pass interface displaying separate free and premium reward tracks, locked rewards, level progression, and the player's current XP. The surrounding HUD keeps navigation and balances visible.",
    scope: ["Reward tracks", "Locked states", "XP progression"], color: "#111111",
    image: "/work/season-pass.png",
    alt: "Roblox season pass showing free and premium rewards, locked items, numbered tiers, and a Level 1 XP progress bar.",
    width: 1435, height: 795,
  },
  {
    id: "support-system", name: "Support system", category: "Scripting",
    descriptor: "Moderator calls, player reports, and bug reports.",
    description: "A three-part Roblox support interface for calling a moderator, reporting a player, or submitting a bug. Category selection, request details, and clear submission controls support requests routed through Discord webhooks.",
    scope: ["Support interface", "Report flows", "Discord webhooks"], color: "#141414",
    image: "/work/support-system.png",
    alt: "Roblox support window with Call Moderator, Report Player and Report Bug tabs, category selection, a description field and a Submit Request button.",
    width: 1280, height: 677,
  },
  {
    id: "trading-interface", name: "Trading interface", category: "User Interface",
    descriptor: "From player selection to the final offer.",
    description: "Three connected screens for a Roblox trading flow: choosing a player, accepting or declining a request, and comparing both players' offers with clear readiness states.",
    scope: ["Player selection", "Trade requests", "Offer comparison"], color: "#111111",
    image: "/work/trading-view.png", label: "Trading view",
    alt: "Two-column Roblox trading window showing both players' item offers, an Accept button and a Ready state.",
    width: 1435, height: 795,
    additionalImages: [
      { image: "/work/trade-players.png", label: "Player selection", alt: "Roblox trading player list with avatars, usernames and individual Trade buttons.", width: 1435, height: 795 },
      { image: "/work/trade-request.png", label: "Trade request", alt: "Incoming Roblox trade request with Accept and Decline buttons.", width: 1435, height: 795 },
    ],
  },
  {
    id: "reward-interfaces", name: "Reward interfaces", category: "User Interface",
    descriptor: "Daily rewards and time-based claims.",
    description: "A pair of reward screens using the same visual language. Playtime rewards show countdowns and claim states, while daily rewards distinguish available gifts from the next locked day.",
    scope: ["Playtime rewards", "Daily rewards", "Claim states"], color: "#141414",
    image: "/work/playtime-rewards.png", label: "Playtime rewards",
    alt: "Roblox playtime rewards window with a ready-to-claim reward and a locked ten-minute reward.",
    width: 1435, height: 795,
    additionalImages: [
      { image: "/work/daily-rewards.png", label: "Daily rewards", alt: "Roblox daily rewards window showing a claimable Day 1 gift and a locked Day 2 gift with a countdown.", width: 1435, height: 795 },
    ],
  },
  {
    id: "code-redemption", name: "Code redemption", category: "User Interface",
    descriptor: "A focused flow for redeeming game codes.",
    description: "A compact code-redemption window with an input, a prominent Redeem action, and a reminder of where to find new codes. The game's navigation and currency displays remain visible behind it.",
    scope: ["Code entry", "Redeem action", "Modal interface"], color: "#111111",
    image: "/work/code-redemption.png",
    alt: "Blue Roblox Codes window with an Enter Code Here field and green Redeem button.",
    width: 1435, height: 795,
  },
  {
    id: "rebirth-interface", name: "Rebirth interface", category: "User Interface",
    descriptor: "Reset conditions, rewards, and progress.",
    description: "A rebirth confirmation screen that puts the reset warning, retained purchases, reward benefits, and required progress in one view. A disabled action clearly indicates when the player is not ready.",
    scope: ["Reset warning", "Reward summary", "Progress states"], color: "#141414",
    image: "/work/rebirth.png",
    alt: "Purple Roblox Rebirth window displaying a reset warning, rebirth benefits, a speed progress bar and a Not Ready button.",
    width: 1435, height: 795,
  },
  {
    id: "inventory-interface", name: "Inventory interface", category: "User Interface",
    descriptor: "A searchable inventory above the hotbar.",
    description: "A compact inventory panel with capacity information, an item search field, and a grid of slots. The panel sits above the numbered hotbar without obscuring the game's main navigation.",
    scope: ["Item grid", "Inventory search", "Capacity display"], color: "#111111",
    image: "/work/inventory.png",
    alt: "Roblox inventory panel with capacity 5 of 100, a Search Items field, item slots and a numbered hotbar below.",
    width: 1435, height: 795,
  },
  {
    id: "upgrade-interface", name: "Upgrade interface", category: "User Interface",
    descriptor: "Current level, next level, and price.",
    description: "An upgrade shop presenting the item's icon, current and next level, and purchase cost in a single row. The orange header and purchase control distinguish upgrades from the other game windows.",
    scope: ["Upgrade shop", "Level comparison", "Purchase controls"], color: "#141414",
    image: "/work/upgrades.png",
    alt: "Orange Roblox Upgrade window offering a walkspeed upgrade from level 1 to 2 for 500 cash.",
    width: 1435, height: 795,
  },
  {
    id: "audio-settings", name: "Audio settings", category: "User Interface",
    descriptor: "Music and sound controls at a glance.",
    description: "A settings window with separate controls for music and sound effects. Large labels and explicit On and Off states keep the audio preferences easy to read.",
    scope: ["Settings window", "Music toggle", "Sound effects toggle"], color: "#111111",
    image: "/work/settings.png",
    alt: "Roblox Settings window with Music switched On and SFX switched Off.",
    width: 1435, height: 795,
  },
  {
    id: "darts-hud", name: "Darts match HUD", category: "User Interface",
    descriptor: "Player scores, turn states, and aiming feedback.",
    description: "A competitive darts interface framing the board with opposing player panels, scores, remaining darts, and the active turn. A timer, aiming indicator, and throwing instructions complete the match view.",
    scope: ["Match HUD", "Player scores", "Turn indicators"], color: "#141414",
    image: "/work/darts-hud.png",
    alt: "Roblox darts match with blue and red player score panels, a turn timer, dartboard, aiming indicator and Forfeit button.",
    width: 1280, height: 679,
  },
  {
    id: "admin-panel", name: "Admin panel", category: "User Interface",
    descriptor: "Announcements, players, events, and server controls.",
    description: "An administration interface with dedicated navigation for announcements, polls, events, players, and server settings. The shown server view pairs a shutdown message field with an explicit shutdown action.",
    scope: ["Admin navigation", "Server controls", "Message input"], color: "#111111",
    image: "/work/admin-panel.png",
    alt: "Roblox Admin Panel with announcements, polls, events, players and server tabs beside a server shutdown message field and red Shutdown button.",
    width: 1435, height: 795,
  },
  {
    id: "notification-system", name: "Notification system", category: "Scripting",
    descriptor: "Success, warning, and failure feedback.",
    description: "A Roblox notification system with distinct success, warning, and failure messages. The supplied showcase presents the three message types and describes animated transitions with sound-effect support.",
    scope: ["Status notifications", "Animated feedback", "Sound-effect support"], color: "#141414",
    image: "/work/notification-system.png",
    alt: "Roblox notification showcase with green Success, amber Warning and red Fail messages.",
    width: 1280, height: 677,
  },
  {
    id: "loading-screen", name: "Loading screen", category: "Scripting",
    descriptor: "Loading progress with tips and a skip prompt.",
    description: "A Roblox loading screen with a central identity mark, progress bar, background tip, and keyboard skip prompt. The supplied showcase describes smooth loading animations and progress indicators.",
    scope: ["Loading progress", "Background tips", "Skip prompt"], color: "#111111",
    image: "/work/loading-screen.png",
    alt: "Black Harmony loading screen with a central logo, progress bar, tip and Press Any Key to Skip Loading prompt.",
    width: 1280, height: 677,
  },
  {
    id: "area-entry-system", name: "Area entry system", category: "Scripting",
    descriptor: "Zone notifications with mobile and streaming support.",
    description: "A Roblox area-entry system displaying a clear notification as the player moves between zones. The supplied showcase describes animated notices, mobile support, unlimited zones, and StreamingEnabled compatibility.",
    scope: ["Zone detection", "Entry notifications", "StreamingEnabled support"], color: "#141414",
    image: "/work/area-entry-system.png",
    alt: "Area entry notification showcase with Class-D Containment Zone, Light Containment Zone and Outside Territory notices.",
    width: 1280, height: 677,
  },
  {
    id: "server-list", name: "Server list", category: "Scripting",
    descriptor: "Find a region, check capacity, and join.",
    description: "A Roblox server browser displaying regions, player counts, server identifiers, and join controls. Region filtering, a hide-full option, refresh, and a full-server state help players choose a server.",
    scope: ["Server discovery", "Region filters", "Join controls"], color: "#111111",
    image: "/work/server-list.png",
    alt: "Roblox server list with region and hide-full filters, refresh, player counts, Join Server buttons and a Server Full state.",
    width: 1280, height: 677,
  },
  {
    id: "radio-system", name: "Radio system V2", category: "Scripting",
    descriptor: "Channels, codenames, and panic signals.",
    description: "A Roblox radio system with team communication channels, a message feed, configurable codenames, and a panic-signal action. The showcase brings together the feed, settings, channel list, and codename panel.",
    scope: ["Radio channels", "Codename controls", "Panic signals"], color: "#141414",
    image: "/work/radio-system.png",
    alt: "Four Roblox radio interface views showing a communication feed, actions menu with panic signal, channel list and codename form.",
    width: 1280, height: 677,
  },
];

export const profile = {
  name: "intercept",
  discord: "intrcept",
  description: "UI designer & Roblox Lua scripter",
};

export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;


