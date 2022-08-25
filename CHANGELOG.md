# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.11.0](https://github.com/mdit-vue/mdit-vue/compare/v0.10.0...v0.11.0) (2022-08-25)

### Features

- **plugin-sfc:** extract all script blocks ([8c39df6](https://github.com/mdit-vue/mdit-vue/commit/8c39df6e27c800b5c471955202a4204093412cc1))

# [0.10.0](https://github.com/mdit-vue/mdit-vue/compare/v0.9.4...v0.10.0) (2022-08-23)

### Features

- **plugin-headers:** resolve link property for headers ([da2954f](https://github.com/mdit-vue/mdit-vue/commit/da2954fbf89d40df2e9015784c5e66f8dd97da2a))
- **types:** add link property to header ([7461417](https://github.com/mdit-vue/mdit-vue/commit/746141707b2cb0c0206310acfdcc6df58fd020f0))

## [0.9.4](https://github.com/mdit-vue/mdit-vue/compare/v0.9.3...v0.9.4) (2022-08-23)

### Bug Fixes

- **plugin-component:** handle multiline component tags correctly ([53724fa](https://github.com/mdit-vue/mdit-vue/commit/53724fa62dfd45112fe92d868d3dd5352757bd0c))

## [0.9.3](https://github.com/mdit-vue/mdit-vue/compare/v0.9.2...v0.9.3) (2022-08-20)

### Bug Fixes

- **plugin-headers:** avoid headers being overridden by another rendering ([de1030b](https://github.com/mdit-vue/mdit-vue/commit/de1030b327f8aa13a809cb2ddf842fcdd3d0d7e5))
- **plugin-title:** avoid title being overridden by another rendering ([43cc020](https://github.com/mdit-vue/mdit-vue/commit/43cc0206b75b1ffcd70c221ba179c77af4ac79a5))

## [0.9.2](https://github.com/mdit-vue/mdit-vue/compare/v0.9.1...v0.9.2) (2022-08-18)

### Bug Fixes

- **plugin-toc:** avoid toc being overridden by another rendering ([c145c26](https://github.com/mdit-vue/mdit-vue/commit/c145c26c0d79389974c9f6cd387db9e8a26daa99))

## [0.9.1](https://github.com/mdit-vue/mdit-vue/compare/v0.9.0...v0.9.1) (2022-07-26)

### Bug Fixes

- **plugin-sfc:** expose MarkdownSfcBlocks type ([c2a91de](https://github.com/mdit-vue/mdit-vue/commit/c2a91dec810555c674d72eea3890b3a09920b298))

# [0.9.0](https://github.com/mdit-vue/mdit-vue/compare/v0.8.1...v0.9.0) (2022-07-26)

### Features

- **plugin-sfc:** extract SFC blocks as structured data ([5a0aa54](https://github.com/mdit-vue/mdit-vue/commit/5a0aa54f23a853a9b335311ed074af7dafca94f9))

### BREAKING CHANGES

- **plugin-sfc:** the type of `env.sfcBlocks` has been changed

## [0.8.1](https://github.com/mdit-vue/mdit-vue/compare/v0.8.0...v0.8.1) (2022-07-22)

### Bug Fixes

- **plugin-component:** make component tags behave like inline tags in some cases ([9db6f9c](https://github.com/mdit-vue/mdit-vue/commit/9db6f9c1cf37935c23253408faf196f5b40c4ab3))

# [0.8.0](https://github.com/mdit-vue/mdit-vue/compare/v0.7.1...v0.8.0) (2022-07-22)

### Features

- **plugin-component:** add blockTags and inlineTags options ([4651422](https://github.com/mdit-vue/mdit-vue/commit/4651422dc3c4a2c4aab6d5eff23164e92d8a4430))

## [0.7.1](https://github.com/mdit-vue/mdit-vue/compare/v0.7.0...v0.7.1) (2022-07-20)

**Note:** Version bump only for package mdit-vue

# [0.7.0](https://github.com/mdit-vue/mdit-vue/compare/v0.6.0...v0.7.0) (2022-07-18)

### Features

- **plugin-frontmatter:** extract content without frontmatter into `env.content` ([a9d5cef](https://github.com/mdit-vue/mdit-vue/commit/a9d5cef9b791bad122cd6e86af0905cab8c2b583))

# [0.6.0](https://github.com/mdit-vue/mdit-vue/compare/v0.5.0...v0.6.0) (2022-07-11)

### Features

- **types:** extract types from shared package ([5fc56ce](https://github.com/mdit-vue/mdit-vue/commit/5fc56ce6439159584e09e13ca9a6e87abe8f4389))

# [0.5.0](https://github.com/mdit-vue/mdit-vue/compare/v0.4.0...v0.5.0) (2022-07-06)

### Features

- **plugin-frontmatter:** add frontmatter plugin ([bcffc7a](https://github.com/mdit-vue/mdit-vue/commit/bcffc7a7fef0c48a869d703f0358d168524ac19e))

# [0.4.0](https://github.com/mdit-vue/mdit-vue/compare/v0.3.1...v0.4.0) (2022-07-02)

### Features

- **plugin-headers:** add headers plugin ([636aa9b](https://github.com/mdit-vue/mdit-vue/commit/636aa9be80051922ee290d61a5074f7d90d7b793))
- **plugin-title:** add title plugin ([662e153](https://github.com/mdit-vue/mdit-vue/commit/662e153b74226df6db57531e71ab5f8d563da780))

## [0.3.1](https://github.com/mdit-vue/mdit-vue/compare/v0.3.0...v0.3.1) (2022-06-25)

### Bug Fixes

- **plugin-toc:** export types ([310320e](https://github.com/mdit-vue/mdit-vue/commit/310320eb12087b0296ed8840b5d581887568b15f))

# [0.3.0](https://github.com/mdit-vue/mdit-vue/compare/v0.2.0...v0.3.0) (2022-06-25)

### Features

- **plugin-toc:** add toc plugin ([e64cc2c](https://github.com/mdit-vue/mdit-vue/commit/e64cc2ce3bbc89999d373f8a00fb3a049d6af58f))
- **shared:** add html escape and unescape utils ([e1103c2](https://github.com/mdit-vue/mdit-vue/commit/e1103c21998aec77c67cdefd3cbb4994c127124c))

# [0.2.0](https://github.com/mdit-vue/mdit-vue/compare/v0.1.1...v0.2.0) (2022-06-23)

### Features

- **plugin-sfc:** add sfc plugin ([1eb4e0a](https://github.com/mdit-vue/mdit-vue/commit/1eb4e0a7dfb18c44da435fd2df1e6293087d3f3b))
- **shared:** add shared package ([9e36bdc](https://github.com/mdit-vue/mdit-vue/commit/9e36bdce8635ae048e8b0f2cc2d02cc0448ad09f))

## [0.1.1](https://github.com/mdit-vue/mdit-vue/compare/v0.1.0...v0.1.1) (2022-06-23)

### Bug Fixes

- **plugin-component:** add js extension to work with esm ([42ccdad](https://github.com/mdit-vue/mdit-vue/commit/42ccdadeefd78f19c92e05fdbd8bc209e25045dd))

# 0.1.0 (2022-06-22)

### Features

- **plugin-component:** add component plugin ([cd2eeaa](https://github.com/mdit-vue/mdit-vue/commit/cd2eeaac624a83f23db8c98159eeb4326e1842f4))
