# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/mdit-vue/mdit-vue/compare/v3.0.0...v3.0.1) (2025-08-11)

**Note:** Version bump only for package @mdit-vue/monorepo

# [3.0.0](https://github.com/mdit-vue/mdit-vue/compare/v2.1.4...v3.0.0) (2025-08-11)

### Build System

- drop node 18 ([a4775a6](https://github.com/mdit-vue/mdit-vue/commit/a4775a6f3017ee1065075352429cde5587df8c0f))

### BREAKING CHANGES

- drop node 18 and migrate to pure ESM packages

## [2.1.4](https://github.com/mdit-vue/mdit-vue/compare/v2.1.3...v2.1.4) (2025-04-10)

### Bug Fixes

- **plugin-frontmatter:** extract frontmatter in parse step (close [#13](https://github.com/mdit-vue/mdit-vue/issues/13)) ([#14](https://github.com/mdit-vue/mdit-vue/issues/14)) ([1192bd2](https://github.com/mdit-vue/mdit-vue/commit/1192bd26430105738c2f00136aea48311be46bc7))

## [2.1.3](https://github.com/mdit-vue/mdit-vue/compare/v2.1.2...v2.1.3) (2024-05-13)

**Note:** Version bump only for package @mdit-vue/monorepo

## [2.1.2](https://github.com/mdit-vue/mdit-vue/compare/v2.1.1...v2.1.2) (2024-04-15)

### Bug Fixes

- sync markdown-it types updates ([#9](https://github.com/mdit-vue/mdit-vue/issues/9)) ([f6768b1](https://github.com/mdit-vue/mdit-vue/commit/f6768b10e0cd06843886448065369a1c3aa143bd))

## [2.1.1](https://github.com/mdit-vue/mdit-vue/compare/v2.1.0...v2.1.1) (2024-04-13)

### Bug Fixes

- **plugin-component:** inline html block tags to make cjs build work ([eb1a264](https://github.com/mdit-vue/mdit-vue/commit/eb1a2640cfe4675727aede7330d075476bb698d1))

# [2.1.0](https://github.com/mdit-vue/mdit-vue/compare/v2.0.0...v2.1.0) (2024-04-08)

### Features

- upgrade markdown-it types to v14 ([6839be8](https://github.com/mdit-vue/mdit-vue/commit/6839be8c090c9c1faa73c17a048a37cdf53b4625))

# [2.0.0](https://github.com/mdit-vue/mdit-vue/compare/v1.0.0...v2.0.0) (2023-12-08)

### Features

- bump to markdown-it 14 ([522950f](https://github.com/mdit-vue/mdit-vue/commit/522950f09cdbff37a26dbd5fccbbd57f931b3727))

### BREAKING CHANGES

- bump to markdown-it 14

# [1.0.0](https://github.com/mdit-vue/mdit-vue/compare/v0.12.1...v1.0.0) (2023-09-26)

### Bug Fixes

- **plugin-toc:** remove duplicate itemClass ([#7](https://github.com/mdit-vue/mdit-vue/issues/7)) ([7e0f1f0](https://github.com/mdit-vue/mdit-vue/commit/7e0f1f0283093cb29016b3798a5b503cf37a698a))

### BREAKING CHANGES

- drop support for node 16

## [0.12.1](https://github.com/mdit-vue/mdit-vue/compare/v0.12.0...v0.12.1) (2023-08-24)

**Note:** Version bump only for package mdit-vue

# [0.12.0](https://github.com/mdit-vue/mdit-vue/compare/v0.11.2...v0.12.0) (2023-02-10)

### Features

- **plugin-headers:** add shouldAllowNested option ([93e004d](https://github.com/mdit-vue/mdit-vue/commit/93e004d7a4aa3329799f59086036fa244898b0d8))
- **plugin-toc:** add shouldAllowNested option (close [#5](https://github.com/mdit-vue/mdit-vue/issues/5)) ([1f3b867](https://github.com/mdit-vue/mdit-vue/commit/1f3b8675ebaecc762fe4c7f1e5c0645157c1487f))
- **shared:** add shouldAllowNested option for resolveHeadersFromTokens ([9363b92](https://github.com/mdit-vue/mdit-vue/commit/9363b92c3ac3efbe47c1c58300ff10bbe93d35b3))

## [0.11.2](https://github.com/mdit-vue/mdit-vue/compare/v0.11.1...v0.11.2) (2022-12-23)

### Bug Fixes

- **shared:** avoid resolve headers in nested blocks ([ce146bd](https://github.com/mdit-vue/mdit-vue/commit/ce146bdb3f3c84320a9f7a0a4fac6f3f67bd67f8))

## [0.11.1](https://github.com/mdit-vue/mdit-vue/compare/v0.11.0...v0.11.1) (2022-08-30)

**Note:** Version bump only for package mdit-vue

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
