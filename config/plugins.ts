export default ({ env }) => ({
  "cloudflare-pages": {
    enabled: true,
    config: {
      instances: [
        {
          name: "production website",
          hook_url: env("CLOUDFLARE_PAGES_HOOK_URL"),
        },
      ],
    },
  },
});
