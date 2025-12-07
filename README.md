Bug occurs when:

- Using vitest 4
- running tests with jsdom
- A remote function imports (directly or indirectly) the `pg` package.

At its simplest it looks like the export conditions are not being followed so it's getting the "require" version instead
of the "import" version.

To reproduce:
- pnpm install
- pnpm test
- See the error "require is not defined" coming from `vite-plugin-sveltekit-remote` in the `pg` package
