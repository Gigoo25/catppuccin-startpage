// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Toledo, US",
    scale: "F",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dai ly",
      background_url: "src/img/banners/cbg-13.gif",
      categories: [
        {
          name: "personal",
          links: [
            {
              name: "icloud",
              url: "https://www.icloud.com",
              icon: "cloud",
              icon_color: palette.green,
            },
            {
              name: "homeassistant",
              url: "https://home.stocchis.com",
              icon: "home",
              icon_color: palette.sky,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "bible",
          links: [
            {
              name: "bible",
              url: "https://www.bible.com/",
              icon: "bible",
              icon_color: palette.rosewater,
            },
            {
              name: "biblehub",
              url: "https://biblehub.com/",
              icon: "bible",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "emby",
              url: "https://emby.stocchis.com",
              icon: "movie",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "management",
          links: [
            {
              name: "unifi",
              url: "https://unifi.stocchis.com/",
              icon: "network",
              icon_color: palette.blue,
            },
            {
              name: "proxmox",
              url: "https://192.168.5.171:8006/",
              icon: "server",
              icon_color: palette.peach,
            },
            {
              name: "truenas",
              url: "https://bigchungus.stocchis.com/",
              icon: "server",
              icon_color: palette.teal,
            },
            {
              name: "portainer",
              url: "http://192.168.5.174:30777/#!/auth",
              icon: "packages",
              icon_color: palette.sky,
            },
            {
              name: "nginx",
              url: "https://nginx.stocchis.com/",
              icon: "cloud-data-connection",
              icon_color: palette.maroon,
            },
            {
              name: "gatus",
              url: "https://gatus.stocchis.com/",
              icon: "alert-hexagon",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chores",
      background_url: "src/img/banners/cbg-14.gif",
      categories: [
        {
          name: "finance",
          links: [
            {
              name: "ally",
              url: "https://secure.ally.com/",
              icon: "cash-banknote",
              icon_color: palette.mauve,
            },
            {
              name: "huntington",
              url: "https://www.huntington.com/",
              icon: "cash-banknote",
              icon_color: palette.green,
            },
            {
              name: "everydollar",
              url: "https://www.ramseysolutions.com/ramseyplus/everydollar",
              icon: "pig-money",
              icon_color: palette.green,
            },
            {
              name: "redemption",
              url: "https://www.simplechurchgiving.net/App/Giving/rede1700123",
              icon: "moneybag",
              icon_color: palette.rosewater,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
