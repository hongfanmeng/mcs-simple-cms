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
  upload: {
    config: {
      provider: "strapi-provider-upload-aws-s3-advanced",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        endpoint: env("AWS_ENDPOINT"),
        params: {
          bucket: env("AWS_BUCKET"),
          acl: env("AWS_BUCKET_ACL"),
        },
        baseUrl: env("CDN_BASE_URL"),
        prefix: env("BUCKET_PREFIX"),
      },
    },
  },
});
