# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.23.0](https://github.com/swagger-api/apidom/compare/v0.22.0...v0.23.0) (2022-04-25)


### Bug Fixes

* **apidom-ls:** fix linting of Operation.bindings ([2a34be9](https://github.com/swagger-api/apidom/commit/2a34be9b2bb591ee172886aa00ecb9f18b158f82)), closes [#1370](https://github.com/swagger-api/apidom/issues/1370)


### Features

* **apidom-ls:** add Channel Bindings meta config ([#1374](https://github.com/swagger-api/apidom/issues/1374)) ([f2afc7c](https://github.com/swagger-api/apidom/commit/f2afc7c8d7a133f254be0b13bb1372fe7c627ee3)), closes [#1371](https://github.com/swagger-api/apidom/issues/1371)
* **apidom-ls:** add Message Bindings docs meta config ([#1375](https://github.com/swagger-api/apidom/issues/1375)) ([5b351a4](https://github.com/swagger-api/apidom/commit/5b351a4b787e2fce5d4e3ec1fa52711396ded77f)), closes [#1314](https://github.com/swagger-api/apidom/issues/1314)
* **apidom-ls:** add Operation Bindings meta config ([#1372](https://github.com/swagger-api/apidom/issues/1372)) ([51edb6f](https://github.com/swagger-api/apidom/commit/51edb6f6ff332d916a96b24778e197c9c3dea6f9)), closes [#1370](https://github.com/swagger-api/apidom/issues/1370)
* **apidom-ls:** add Server Bindings docs meta config ([#1373](https://github.com/swagger-api/apidom/issues/1373)) ([6352dad](https://github.com/swagger-api/apidom/commit/6352dadbf00908890d8ff6b741357135e3e9a3fd)), closes [#1315](https://github.com/swagger-api/apidom/issues/1315)





# [0.22.0](https://github.com/swagger-api/apidom/compare/v0.21.0...v0.22.0) (2022-04-21)


### Features

* **apidom-ls:** add support for AsyncAPI 2.3 ([#1354](https://github.com/swagger-api/apidom/issues/1354)) ([95e8456](https://github.com/swagger-api/apidom/commit/95e845607cfee8c9a7e9ecdb3c38b5a9d0a1e95d)), closes [#1317](https://github.com/swagger-api/apidom/issues/1317)





# [0.21.0](https://github.com/swagger-api/apidom/compare/v0.20.1...v0.21.0) (2022-04-18)


### Bug Fixes

* **reference:** enhance OpenAPI 3.1 dereferecing  ([4b1bdbe](https://github.com/swagger-api/apidom/commit/4b1bdbee4ef85ee24792948844c0d62093b81b83)), closes [#1336](https://github.com/swagger-api/apidom/issues/1336)
* **reference:** enhance OpenAPI 3.1 resolution ([#1339](https://github.com/swagger-api/apidom/issues/1339)) ([1dff277](https://github.com/swagger-api/apidom/commit/1dff2770b415ad27d0c1f884416ad2971bba7228)), closes [#1337](https://github.com/swagger-api/apidom/issues/1337)


### Features

* **apidom-ls:** support oneOf field in Operation.message field ([#1341](https://github.com/swagger-api/apidom/issues/1341)) ([5604de0](https://github.com/swagger-api/apidom/commit/5604de0472197246c2fdc65dd8b9c7c1aa3e914c)), closes [#1340](https://github.com/swagger-api/apidom/issues/1340)





## [0.20.1](https://github.com/swagger-api/apidom/compare/v0.20.0...v0.20.1) (2022-04-12)


### Bug Fixes

* **apidom-ls:** enhance docs config for Channel Item Object ([073b285](https://github.com/swagger-api/apidom/commit/073b2857e278661acb47e29019e7bf1c620359ec)), closes [#1313](https://github.com/swagger-api/apidom/issues/1313)
* **apidom-ls:** enhance docs config formatting for AsyncAPI ([#1316](https://github.com/swagger-api/apidom/issues/1316)) ([1c9d287](https://github.com/swagger-api/apidom/commit/1c9d2871e3e4b85e04bc0a622e113b20e4d2abc7)), closes [#1313](https://github.com/swagger-api/apidom/issues/1313)





# [0.20.0](https://github.com/swagger-api/apidom/compare/v0.19.0...v0.20.0) (2022-04-11)


### Bug Fixes

* **apidom-ls:** fix all documentation URLs to point to AsyncAPI 2.3.0 docs ([#1286](https://github.com/swagger-api/apidom/issues/1286)) ([6f8ac59](https://github.com/swagger-api/apidom/commit/6f8ac595c777af9e061837a2972d8ff96f5fef48)), closes [#1284](https://github.com/swagger-api/apidom/issues/1284)
* **apidom-ls:** make formatting of JSON/YAML better ([#1305](https://github.com/swagger-api/apidom/issues/1305)) ([0a01e29](https://github.com/swagger-api/apidom/commit/0a01e295ca0da56f353faabd959fa7f5997fee89)), closes [#1284](https://github.com/swagger-api/apidom/issues/1284)
* **apidom-ls:** use amqps in proper context only ([#1302](https://github.com/swagger-api/apidom/issues/1302)) ([2105c72](https://github.com/swagger-api/apidom/commit/2105c726ba4b4525f57bae70ac0f6e0b79dca070)), closes [#1287](https://github.com/swagger-api/apidom/issues/1287)


### Features

* **YAML:** implement YAML 1.2 serializer for ApiDOM ([#1282](https://github.com/swagger-api/apidom/issues/1282)) ([618a7de](https://github.com/swagger-api/apidom/commit/618a7de82f8937944dc031d5cb37f644831b637a)), closes [#134](https://github.com/swagger-api/apidom/issues/134)





# [0.19.0](https://github.com/swagger-api/apidom/compare/v0.18.1...v0.19.0) (2022-03-10)


### Bug Fixes

* **ns-api-deisgn-systems:** fix detection for JSON format ([5e7245b](https://github.com/swagger-api/apidom/commit/5e7245b3549ed40cbd2478386b833ef40e872f80))
* **ns-api-design-systems:** detect JSON properly ([15d4828](https://github.com/swagger-api/apidom/commit/15d48283fc731e72b91a8aba9c887994cc1236d1))
* **ns-asyncapi-2:** fix bug regarding refracting of Operation.message ([#1239](https://github.com/swagger-api/apidom/issues/1239)) ([f3e744c](https://github.com/swagger-api/apidom/commit/f3e744c9eff5db7ffb665a6240b7b67eb217af43)), closes [#427](https://github.com/swagger-api/apidom/issues/427)


### Features

* introduce API Design System namespace ([#1207](https://github.com/swagger-api/apidom/issues/1207)) ([c28a5d6](https://github.com/swagger-api/apidom/commit/c28a5d608a951a45dd6e32363829202706d9c2d0))
* **ns-api-design-systems:** add more attributes to Annotations ([04e34ab](https://github.com/swagger-api/apidom/commit/04e34ab67938885a91d311a634693c40a7ee5afa))
* **ns-api-design-systems:** add POC of OpenAPI 3.1 validator ([#1224](https://github.com/swagger-api/apidom/issues/1224)) ([1e137a0](https://github.com/swagger-api/apidom/commit/1e137a0f761cb5bbb9ea3a060cf97df14aea571a))
* **ns-api-design-systems:** add selector mechanism ([#1221](https://github.com/swagger-api/apidom/issues/1221)) ([91c700d](https://github.com/swagger-api/apidom/commit/91c700d51c74861850c00af87b0eea5c405a74f7))
* **ns-api-design-systems:** introduce adapters ([#1219](https://github.com/swagger-api/apidom/issues/1219)) ([b83d5f7](https://github.com/swagger-api/apidom/commit/b83d5f76819aa81ac7fde22d447b50ec95d0ac7e))
* **ns-api-design-systems:** introduce Standard Identifer plugin ([#1215](https://github.com/swagger-api/apidom/issues/1215)) ([c49dfa8](https://github.com/swagger-api/apidom/commit/c49dfa8e80908d6cd84ca04b21064a49d0de8c8d))
* **ns-api-design-systems:** validate request Content-Type ([#1227](https://github.com/swagger-api/apidom/issues/1227)) ([fb90dfc](https://github.com/swagger-api/apidom/commit/fb90dfc1faf796b33ded77476bd7458949035bbe))
* **ns-api-design-systems:** validate request header ([#1226](https://github.com/swagger-api/apidom/issues/1226)) ([51810e1](https://github.com/swagger-api/apidom/commit/51810e1ac7142e55bb6039e94fc2ecb01132bf04))
* **ns-api-design-systems:** validate status codes ([#1225](https://github.com/swagger-api/apidom/issues/1225)) ([fbec933](https://github.com/swagger-api/apidom/commit/fbec9331bebf10e4324d025e2940839545d8810e))





## [0.18.1](https://github.com/swagger-api/apidom/compare/v0.18.0...v0.18.1) (2022-02-16)


### Bug Fixes

* **apidom-ast:** fix how unraw library is used ([#1193](https://github.com/swagger-api/apidom/issues/1193)) ([da80349](https://github.com/swagger-api/apidom/commit/da803498e50ab40c1a312fc6d9653f74ae98f255)), closes [#1192](https://github.com/swagger-api/apidom/issues/1192)
* **apidom-ls:** use import of ajv with full file extension ([ea12865](https://github.com/swagger-api/apidom/commit/ea12865574fea34cccaf274890b8d548edaae6ee)), closes [#930](https://github.com/swagger-api/apidom/issues/930)





# [0.18.0](https://github.com/swagger-api/apidom/compare/v0.17.0...v0.18.0) (2022-02-16)


### Bug Fixes

* **apidom-ls:** fix duplicated diagnostics ([7c86c77](https://github.com/swagger-api/apidom/commit/7c86c77fc594f0c7fdbd5f274518e5dc44060881)), closes [#1078](https://github.com/swagger-api/apidom/issues/1078)
* **apidom-ls:** fix partial keys identification ([318799f](https://github.com/swagger-api/apidom/commit/318799f8e39678d6c0f3fc4658775566db0ec641))


### Features

* **apidom-ast:** convert to ESM ([#1175](https://github.com/swagger-api/apidom/issues/1175)) ([75231d6](https://github.com/swagger-api/apidom/commit/75231d690e485c9e96da5fb806fc35712018f81c)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **apidom-core:** convert to ESM ([#1177](https://github.com/swagger-api/apidom/issues/1177)) ([0e1b784](https://github.com/swagger-api/apidom/commit/0e1b7845ddf70454b9230353639561c56bf1e6a4)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **apidom-ls:** convert to ESM ([#1186](https://github.com/swagger-api/apidom/issues/1186)) ([a7d6bd7](https://github.com/swagger-api/apidom/commit/a7d6bd7fa310d7462b972e8597d7e08c72ee7bf7)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **apidom-ls:** rules for schema additionalProperties ([73e6d1d](https://github.com/swagger-api/apidom/commit/73e6d1d793e35c6c43362cd71aec5ae918baa43c))
* **apidom-ns-asyncapi-2:** convert to ESM ([#1178](https://github.com/swagger-api/apidom/issues/1178)) ([b970733](https://github.com/swagger-api/apidom/commit/b970733c179ec361bd4203acb3f56957efa1a127)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **asyncapi-2:** add support for AsyncAPI 2.2.0 specification ([#1151](https://github.com/swagger-api/apidom/issues/1151)) ([f94c38f](https://github.com/swagger-api/apidom/commit/f94c38fbb26051d1ef9f62a9086533aeef7574c1)), closes [#1130](https://github.com/swagger-api/apidom/issues/1130)
* convert 3 additional packages to ESM modules ([#1185](https://github.com/swagger-api/apidom/issues/1185)) ([b1f314b](https://github.com/swagger-api/apidom/commit/b1f314bb68cb57e18d9e925e0c5191c31faba49a)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **ns-asyncapi-2:** add support for Message.payload empty values ([fa8e4cd](https://github.com/swagger-api/apidom/commit/fa8e4cd0c6c8c9f991403992520e029e863044a3)), closes [#1112](https://github.com/swagger-api/apidom/issues/1112) [#1076](https://github.com/swagger-api/apidom/issues/1076)
* **ns-openapi-3-1:** convert to ESM ([dfd7773](https://github.com/swagger-api/apidom/commit/dfd77731e54294519996c34ded7740dbe3f755b7)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **parser-adapter-asyncapi-json-2:** convert to ESM ([e4ce197](https://github.com/swagger-api/apidom/commit/e4ce197daea06cfa6c2b08df35a2c1a04d54bc82)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **parser-adapter-asyncapi-yaml-2:** convert to ESM ([1904567](https://github.com/swagger-api/apidom/commit/190456764c3c338a4eb0d3adf5f501d552afe41f)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **parser-adapter-json:** convert to ESM ([3fbe9be](https://github.com/swagger-api/apidom/commit/3fbe9be2bdfa5ad7b6b0cbdcd8a241dd4ef484a4)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **parser-adapter-opneapi-json-3-1:** convert to ESM ([f6de4df](https://github.com/swagger-api/apidom/commit/f6de4df8c23bb6fd403a41ef36988c9ea30f7aa9)), closes [#930](https://github.com/swagger-api/apidom/issues/930)
* **parser:** convert to ESM ([22d0c72](https://github.com/swagger-api/apidom/commit/22d0c72e08da5d2c0458d648939bde94be9b142a)), closes [#930](https://github.com/swagger-api/apidom/issues/930)





# [0.17.0](https://github.com/swagger-api/apidom/compare/v0.16.0...v0.17.0) (2022-01-14)


### Features

* **apidom-ls:** add rules for allowed fields ([e71c156](https://github.com/swagger-api/apidom/commit/e71c1563a132b6db381dcc7d6c789ec0d6e313ad))
* **apidom-ls:** add rules for components ([4473af7](https://github.com/swagger-api/apidom/commit/4473af7e544ca67ba292e70361d50e70d1f75344))
* **apidom-ls:** add rules for http and kafka message binding ([7a8fed2](https://github.com/swagger-api/apidom/commit/7a8fed233bda5e5a2a8997b1e6a9afadf286d248))
* **apidom-ls:** add rules for message ([95345f6](https://github.com/swagger-api/apidom/commit/95345f6ece5da91234e32460fd69ecc65987b1ee))
* **apidom-ls:** add rules for parameter ([f81a7ee](https://github.com/swagger-api/apidom/commit/f81a7ee711a1767da43a18282afe0f39e9b02b75))
* **apidom-ls:** add rules for server bindings ([6f400ab](https://github.com/swagger-api/apidom/commit/6f400abbd85dde926aee7ecff6bbfa344e9c388f))





# [0.16.0](https://github.com/swagger-api/apidom/compare/v0.15.1...v0.16.0) (2022-01-12)


### Features

* **web-tree-sitter:** initialize in lazy manner ([90003c4](https://github.com/swagger-api/apidom/commit/90003c44e10ce118fa6ab8e10a80288d24b0ca72)), closes [#476](https://github.com/swagger-api/apidom/issues/476)





## [0.15.1](https://github.com/swagger-api/apidom/compare/v0.15.0...v0.15.1) (2021-12-29)


### Bug Fixes

* amend browser patches ([a8d11a8](https://github.com/swagger-api/apidom/commit/a8d11a88d9e7ba8b2aa997f7949da7e3884fbe09)), closes [#1035](https://github.com/swagger-api/apidom/issues/1035)





# [0.15.0](https://github.com/swagger-api/apidom/compare/v0.14.0...v0.15.0) (2021-12-10)


### Features

* **apidom-ls:** add rules for channel items, operation, traits ([3d924db](https://github.com/swagger-api/apidom/commit/3d924dbbcab245071171204bdebf437190b95488))
* **apidom-ls:** add rules for channel parameter and empty spec ([82bacff](https://github.com/swagger-api/apidom/commit/82bacff56fce36ef0ac66ac94a4bc5504cfadc32))





# [0.14.0](https://github.com/swagger-api/apidom/compare/v0.13.0...v0.14.0) (2021-12-08)


### Bug Fixes

* **apidom-ls:** fix securityScheme lint ([e351e9e](https://github.com/swagger-api/apidom/commit/e351e9e677264641cb16771fad70d3f27e822174))
* **replace-empty-element:** map additional Schema keywords ([c9622dd](https://github.com/swagger-api/apidom/commit/c9622dd8effbc12583d8938badaa3910281dc72a)), closes [#969](https://github.com/swagger-api/apidom/issues/969)


### Features

* **apidom-ls:** add logs to completion-service ([b6ea639](https://github.com/swagger-api/apidom/commit/b6ea639c1427f1c479c65c08addc5ffb6379a976))
* **apidom-ls:** add trace function ([5c77c9b](https://github.com/swagger-api/apidom/commit/5c77c9b3943f52e747c0a76edfc05de80af46018))
* **apidom-ls:** expand provided symbols ([2b49302](https://github.com/swagger-api/apidom/commit/2b49302d97102f1e473aae895a6f9fe9bd03735f))
* **apidom-ls:** fix cache and add performance(/)logs mechanism ([14bd6a8](https://github.com/swagger-api/apidom/commit/14bd6a8bbb439b3117d3580a735fd3bf477a4725))





# [0.13.0](https://github.com/swagger-api/apidom/compare/v0.12.0...v0.13.0) (2021-12-06)


### Bug Fixes

* **apidom-ls:** update completion service doc processing ([214a7b1](https://github.com/swagger-api/apidom/commit/214a7b1d9193c408582b632aa8d00f1a9892b06c))


### Features

* add '*-binding' classes to binding elements ([395bbf6](https://github.com/swagger-api/apidom/commit/395bbf6c6c6285a31d782baba765f9e0476ff321))
* add class  to channel-binding elements ([6197441](https://github.com/swagger-api/apidom/commit/61974415dc19915ea741bc7bd55b4f96e94d9250))
* add referenced-element to channelItem ([1bc9771](https://github.com/swagger-api/apidom/commit/1bc97710d3d3dd8b20c400e43d809794979bc2c8))
* **apidom-ls:** add asyncapi channels and servers rules ([2dbe838](https://github.com/swagger-api/apidom/commit/2dbe838000e10e1c93f2d59c41eb77b6386ac3ce))





# [0.12.0](https://github.com/swagger-api/apidom/compare/v0.11.0...v0.12.0) (2021-12-04)


### Bug Fixes

* **apidom-ls:** correct partial keys in YAML ([a5c14cf](https://github.com/swagger-api/apidom/commit/a5c14cfee5a8a3f4153b4bb8d145fc4290db3109))
* **apidom-ls:** fix completion and validation edge cases ([a9c67d4](https://github.com/swagger-api/apidom/commit/a9c67d41e815e0be0a4f0cd526583837f7fc3436))
* **apidom-ls:** fix completion in empty line ([00f8be5](https://github.com/swagger-api/apidom/commit/00f8be53a60cc42d188b9dae1e7048c390f32e39))
* **apidom-ls:** fix completion scenarios with update apidom core ([3540870](https://github.com/swagger-api/apidom/commit/3540870ce6e38e2765d5f353f1c0ff50e246593e))


### Features

* **apidom-ls:** add more asyncapi rules and logic minor fixes ([81cf99f](https://github.com/swagger-api/apidom/commit/81cf99f46cadbaaebdab79aca74cf4d2c9a99bf8))





# [0.11.0](https://github.com/swagger-api/apidom/compare/v0.10.0...v0.11.0) (2021-12-02)


### Bug Fixes

* **ns-asyncapi-2:** fix empty node mapping ([603ac8a](https://github.com/swagger-api/apidom/commit/603ac8a293e5ace80e9d112885bb831160f3d8f1))


### Features

* **adapter-yaml-1-2:** add full support for empty nodes ([2984f59](https://github.com/swagger-api/apidom/commit/2984f59f5e7cb1f2693883766051e7b0c45f94b4)), closes [#916](https://github.com/swagger-api/apidom/issues/916)
* **ns-asyncapi-2:** add support for empty noes in sequences ([94d6765](https://github.com/swagger-api/apidom/commit/94d6765d598f090d739902762e9a8765cca56253)), closes [#916](https://github.com/swagger-api/apidom/issues/916)
* **ns-openapi-3-1:** add support for empty nodes in sequences ([f660341](https://github.com/swagger-api/apidom/commit/f6603417b77fb169c1bd3d58071bcaa29ea187f7)), closes [#916](https://github.com/swagger-api/apidom/issues/916)


### Performance Improvements

* implement optimized tree-sitter CST access ([f672afd](https://github.com/swagger-api/apidom/commit/f672afd5f21f68a6dbd65444b87c12df3e845979)), closes [#691](https://github.com/swagger-api/apidom/issues/691)





# [0.10.0](https://github.com/swagger-api/apidom/compare/v0.9.0...v0.10.0) (2021-11-25)


### Features

* **apidom-ls:** - improve logic and update config ([c8f33b2](https://github.com/swagger-api/apidom/commit/c8f33b28dab990aa777e94b71d80c743c327e43b))





# [0.9.0](https://github.com/swagger-api/apidom/compare/v0.8.0...v0.9.0) (2021-11-17)


### Bug Fixes

* **apidom-ls:** fix ls completion ([e91d547](https://github.com/swagger-api/apidom/commit/e91d5479047afc1dc35f87eda638775385ada477))
* **apidom-ls:** fix yaml empty lines completion ([a81b48d](https://github.com/swagger-api/apidom/commit/a81b48db7b1fad308160cdc47cabac3f16910b83))
* **apidom-ls:** update package-lock.json ([1fcd5f4](https://github.com/swagger-api/apidom/commit/1fcd5f4ca50f03e46f3fd853a4f13934d03e96d6))


### Features

* **apidom-ls:** apply refractorPluginReplaceEmptyElement to parser ([4d30a59](https://github.com/swagger-api/apidom/commit/4d30a596f78412494a8b0bc8cf9edf75c1db83bb))
* **apidom-ls:** enhance ls features ([249dba6](https://github.com/swagger-api/apidom/commit/249dba64d582e52800bf0ea3df2c863294bb3122))





# [0.8.0](https://github.com/swagger-api/apidom/compare/v0.7.0...v0.8.0) (2021-11-15)


### Bug Fixes

* **ns-asynapi-2:** fix traversal key map ([8ef14b4](https://github.com/swagger-api/apidom/commit/8ef14b47cc0cf2e42e6356273851f2a5168c9024))
* **ns-openapi-3-1:** fix bug in replace empty el. plugin ([f3413d0](https://github.com/swagger-api/apidom/commit/f3413d082cef010146468cb1444092a2d20d0c9b)), closes [#812](https://github.com/swagger-api/apidom/issues/812)
* **ns-openapi-3-1:** fix bug in replace empty el. plugin ([221bac3](https://github.com/swagger-api/apidom/commit/221bac3f84ea2388ead0c3b4c29a540d989f9704)), closes [#812](https://github.com/swagger-api/apidom/issues/812)


### Features

* add plugin for replacing empty elements ([#879](https://github.com/swagger-api/apidom/issues/879)) ([c073f58](https://github.com/swagger-api/apidom/commit/c073f5853bc1e37c540b0bebec74efa82e7b359f)), closes [#883](https://github.com/swagger-api/apidom/issues/883)
* **ns-asyncapi-2:** add support for bindinds empty elements mapping ([#890](https://github.com/swagger-api/apidom/issues/890)) ([9743bc5](https://github.com/swagger-api/apidom/commit/9743bc59d2834f7951565abb5076debf3c929473)), closes [#812](https://github.com/swagger-api/apidom/issues/812)
* **ns-asyncapi-2:** add support for full empty elements mapping ([b5c8134](https://github.com/swagger-api/apidom/commit/b5c8134bb9f9b3aaa69e123657d8a95bb8f48c39)), closes [#833](https://github.com/swagger-api/apidom/issues/833)
* **ns-asyncapi-2:** introduce non-concrete Elements ([5f3d87d](https://github.com/swagger-api/apidom/commit/5f3d87d54f8a2c3940c9e9ccd816ccfdd24ddbcd)), closes [#833](https://github.com/swagger-api/apidom/issues/833)
* **ns-openapi-3-1:** add support for full empty elements mapping ([#894](https://github.com/swagger-api/apidom/issues/894)) ([cc1dbdc](https://github.com/swagger-api/apidom/commit/cc1dbdc8026674b88b1176a821d258445d5d6747)), closes [#891](https://github.com/swagger-api/apidom/issues/891)





# [0.7.0](https://github.com/swagger-api/apidom/compare/v0.6.0...v0.7.0) (2021-11-08)


### Features

* **apidom-ls:** implement ns/version check, update rules ([91d4a83](https://github.com/swagger-api/apidom/commit/91d4a83303e581aba8845cb5ef93f10872e9d7ae))





# [0.6.0](https://github.com/swagger-api/apidom/compare/v0.5.1...v0.6.0) (2021-11-04)


### Bug Fixes

* **apidom-ls:** fixes quick fix for empty value ([ab4938f](https://github.com/swagger-api/apidom/commit/ab4938f98078ae87c27f67771a80a67e5077ffc6))
* **apidom-ls:** fixes quoted/unquoted completion ([aa912d3](https://github.com/swagger-api/apidom/commit/aa912d3b380861db2c1106a18a77c2cf1f8c5874))
* **apidom-ls:** implement ref completion ([69d9c8f](https://github.com/swagger-api/apidom/commit/69d9c8f993f3fe6941c3e70a884b63b18a254774))
* update version, spec-version, api-version meta ([ddee593](https://github.com/swagger-api/apidom/commit/ddee593c0aa1f94e2d1eed1cb8a93f28b8e46db4))


### Features

* **apidom-ls:** support all AsyncAPI 2.x in json schema validation ([4cd47b3](https://github.com/swagger-api/apidom/commit/4cd47b3f0cae1d6563689104ef550181b0b337b1))





## [0.5.1](https://github.com/swagger-api/apidom/compare/v0.5.0...v0.5.1) (2021-11-01)


### Bug Fixes

* **adapter-yaml-1-2:** avoid annotation accumulation ([e5c694b](https://github.com/swagger-api/apidom/commit/e5c694bc62cdc2f19d2dfbd056d060a119176a20)), closes [#814](https://github.com/swagger-api/apidom/issues/814)


### Performance Improvements

* **adapter-json:** optimize indirect syntactic analysis ([731d1f5](https://github.com/swagger-api/apidom/commit/731d1f5d635f469003949fc52a6717dd1e5d35a6)), closes [#691](https://github.com/swagger-api/apidom/issues/691)
* **adapter-yaml:** optimize syntactic analysis ([aa78da6](https://github.com/swagger-api/apidom/commit/aa78da6b8b6be57d0009325079896eb42b0d3b8f)), closes [#691](https://github.com/swagger-api/apidom/issues/691)





# [0.5.0](https://github.com/swagger-api/apidom/compare/v0.4.0...v0.5.0) (2021-10-26)


### Features

* add schema type related metadata to namespaces ([433a2c2](https://github.com/swagger-api/apidom/commit/433a2c29aaccad4bf63e27fc4b79ea5f47f6c050))
* **apidom-ls:** completion and validation fixes ([2ded62c](https://github.com/swagger-api/apidom/commit/2ded62c6a7fd2c407fbf9d48322a60872dbad81a))
* **apidom-ls:** document cache ([aefaa44](https://github.com/swagger-api/apidom/commit/aefaa441af833e031c32f2bccdc9e953179dd1c6))
* **apidom-ls:** single ajv instance ([a93d428](https://github.com/swagger-api/apidom/commit/a93d428ddf83576540c71dbdee5cdc7e7eee8567))
* **apidom-ls:** update validation providers and json schemas ([a49154b](https://github.com/swagger-api/apidom/commit/a49154b0f6d435da3375035222d769e3a1c04c35))


### Performance Improvements

* optimize JSON direct syntactic analysis ([5b5887e](https://github.com/swagger-api/apidom/commit/5b5887ec1d38a0cb3b4c542997818f39cda84108)), closes [#691](https://github.com/swagger-api/apidom/issues/691)
* optimize predicates for AsyncAPI namesapce ([7c7817f](https://github.com/swagger-api/apidom/commit/7c7817faa93b827a3d3827f929e2671cd9b90d8c)), closes [#691](https://github.com/swagger-api/apidom/issues/691)
* optimize predicates for base namespace ([e23b670](https://github.com/swagger-api/apidom/commit/e23b670c232d3d94bb0e889faaca616d03d01b6e)), closes [#691](https://github.com/swagger-api/apidom/issues/691)
* optimize predicates for OpenAPI namespace ([5e106c2](https://github.com/swagger-api/apidom/commit/5e106c27ff329ebd29bc383b72f6a095f3e452e1)), closes [#691](https://github.com/swagger-api/apidom/issues/691)





# [0.4.0](https://github.com/swagger-api/apidom/compare/v0.3.0...v0.4.0) (2021-10-22)


### Features

* **core:** add polymorphic support for structural predicates ([67874f6](https://github.com/swagger-api/apidom/commit/67874f631159e45afdd3e918689e200ef8ac8e07)), closes [#803](https://github.com/swagger-api/apidom/issues/803)
* **reference:** expose errors from package ([3fd2bfc](https://github.com/swagger-api/apidom/commit/3fd2bfcc91a46401dabdefc0d6446354bd94ee88)), closes [#798](https://github.com/swagger-api/apidom/issues/798)





# [0.3.0](https://github.com/swagger-api/apidom/compare/v0.2.1...v0.3.0) (2021-10-05)


### Features

* add support for AsyncAPI 2.2.0 specification ([82f0e54](https://github.com/swagger-api/apidom/commit/82f0e543f62d0b013d145e23ebd817cb40097039)), closes [#688](https://github.com/swagger-api/apidom/issues/688)





## [0.2.1](https://github.com/swagger-api/apidom/compare/v0.2.0...v0.2.1) (2021-09-30)


### Bug Fixes

* **build:** bundle copy of built wasm files with npm distribution ([69b97eb](https://github.com/swagger-api/apidom/commit/69b97ebac24103437bdf8d2e29db54770fe5119c)), closes [#709](https://github.com/swagger-api/apidom/issues/709)





# 0.2.0 (2021-09-28)


### Bug Fixes

* **adapters:** expose nanemspace instances from adapters ([e885d9e](https://github.com/swagger-api/apidom/commit/e885d9e9dce9f5e01c1730cefa196cc21b9a5b8b))
* **apidom-ls:** refs [#297](https://github.com/swagger-api/apidom/issues/297) - bump yaml-js version ([38ac243](https://github.com/swagger-api/apidom/commit/38ac243c7780f769af78da7056a823c6454b844f))
* **apidom:** add 'typeRoots' to tsconfig ([80c3cf2](https://github.com/swagger-api/apidom/commit/80c3cf25ef764bdeb5e8e5b9af2f4c040327c361))
* **apidom:** fix refract structures hydration ([#227](https://github.com/swagger-api/apidom/issues/227)) ([3309a70](https://github.com/swagger-api/apidom/commit/3309a70637b1e237a582cfa66b32b124a6dde0d1)), closes [#226](https://github.com/swagger-api/apidom/issues/226)
* **AST:** compensate for inconsistent tree-sitter SyntaxNode API ([8d04daa](https://github.com/swagger-api/apidom/commit/8d04daaf0ea4ed99d430fdd87a72c5ba0afff67c)), closes [#69](https://github.com/swagger-api/apidom/issues/69)
* **asyncapi-2-1:** add IBM MQ visitor mapping ([04d1e43](https://github.com/swagger-api/apidom/commit/04d1e43a359c0a8e366db13752028dc95d8e9668))
* **asyncapi-2-1:** fix parsing of Operation.message field ([#561](https://github.com/swagger-api/apidom/issues/561)) ([ea7fc15](https://github.com/swagger-api/apidom/commit/ea7fc152593bdbb1ccd04affbaf899471f99a915)), closes [#543](https://github.com/swagger-api/apidom/issues/543)
* **asyncapi:** allow replace Schema for Reference in Message.payload ([ae11834](https://github.com/swagger-api/apidom/commit/ae11834838976e3c31304e0929ecfd676c27a98f)), closes [#427](https://github.com/swagger-api/apidom/issues/427)
* avoid webpack bug by changing type mapping ([#282](https://github.com/swagger-api/apidom/issues/282)) ([5433197](https://github.com/swagger-api/apidom/commit/543319781088b7105a23417562e75f7f02cfc7a0))
* **editor:** 2nd pane scrolling ([4e26c81](https://github.com/swagger-api/apidom/commit/4e26c81abdaf849db487216c242cdde0826dd7da))
* **editor:** actual oas3.1 spec in fixtures ([bcb3435](https://github.com/swagger-api/apidom/commit/bcb3435510bcedf0cbb8614c75f3b568fbd9b5a4))
* **editor:** add extra var check in topbar component ([508afb0](https://github.com/swagger-api/apidom/commit/508afb0916f27f186541d805cf9562f493b76bf8))
* **editor:** add extra var check in topbar component ([57b812a](https://github.com/swagger-api/apidom/commit/57b812a4287ec275469d2325b674272be7c48633))
* **editor:** add try/catch for download resolved actions ([22cbace](https://github.com/swagger-api/apidom/commit/22cbace6cd81a7adbc00d817d566e36b72de59c2))
* **editor:** add wait and extra checks for cypress monaco.spec ([9d08168](https://github.com/swagger-api/apidom/commit/9d08168cf5d7587677b44c63c97ac9d758484fa0))
* **editor:** additional `dispose()` on unmount ([0ba77d5](https://github.com/swagger-api/apidom/commit/0ba77d5329b9a4d2f46621a8f9b99b4e906c0b6c))
* **editor:** allow hover tooltip to exceed its container ([1cd4c89](https://github.com/swagger-api/apidom/commit/1cd4c894d4d37dcdd7dbb4de91813d67b0d3e3ba))
* **editor:** apidom.worker import editor from node_modules ([643718e](https://github.com/swagger-api/apidom/commit/643718ecf3e335eeeb52b4f9fc4e4132b1db1121))
* **editor:** apidomContext required for codeActions ([4225011](https://github.com/swagger-api/apidom/commit/42250114032b93dcf2682479092ae46af22e6469))
* **editor:** codeActions error handling with unsupported spec ([d6a6dda](https://github.com/swagger-api/apidom/commit/d6a6ddab446e32c18e7f32fb928a2fc11f1c1378))
* **editor:** convertToYaml should always return a response ([22e609d](https://github.com/swagger-api/apidom/commit/22e609d1029aff05d3158e6ea939a5a44c258de7))
* **editor:** convertToYaml should always return a response ([a0c8282](https://github.com/swagger-api/apidom/commit/a0c8282d38e532ab34af87c466eb18c1213a45eb))
* **editor:** documentSymbols error handling for unsupported spec ([98b5c5e](https://github.com/swagger-api/apidom/commit/98b5c5e585bbe46ebadff1e78e1e05766dea1c99))
* **editor:** documentSymbolsAdapter call correct worker method ([bb06083](https://github.com/swagger-api/apidom/commit/bb0608372f343185efbce3d1f5ceb1c6b3694e39))
* **editor:** FileMenuDropdown state update checks ([e669f2f](https://github.com/swagger-api/apidom/commit/e669f2fc4f0e5a7eb2670770cb9d22c2e8d03d23))
* **editor:** genericEditorPlugin layout no console errors ([21d5782](https://github.com/swagger-api/apidom/commit/21d57824d3bae95350b5e33edc38808b3ded141d))
* **editor:** genericEditorPlugin layout no console errors ([85c7e7d](https://github.com/swagger-api/apidom/commit/85c7e7d97d306f1dc80776d365035dc2025c9bc4))
* **editor:** hover error handling with unsupported spec ([7e4b490](https://github.com/swagger-api/apidom/commit/7e4b490898c9f1fe09d3687840a17ab8cbe19624))
* **editor:** importUrl label control for unit test ([3378b81](https://github.com/swagger-api/apidom/commit/3378b81da6510bbbcadd71e0f2f4ec5a54c4739b))
* **editor:** initializeParsers should return a promise ([bc08608](https://github.com/swagger-api/apidom/commit/bc08608cb5e24fb6f567f123a18e3ab336588fc3))
* **editor:** jsonService doValidation ([dedf41e](https://github.com/swagger-api/apidom/commit/dedf41e577eac49826184c8b6d7524026a8edd9c))
* **editor:** monaco theme updates ([380c39f](https://github.com/swagger-api/apidom/commit/380c39f2ecfb6fe882b306fab2884209f75a9904))
* **editor:** more monaco theme updates ([9cf2ee0](https://github.com/swagger-api/apidom/commit/9cf2ee0c4cfcc8c4736eb4392b080d6541834353))
* **editor:** more robust check for await topbarActions result ([8cc7720](https://github.com/swagger-api/apidom/commit/8cc77201704f0786a17ec40be3009476db21de4a))
* **editor:** more robust check for await topbarActions result ([867c0c0](https://github.com/swagger-api/apidom/commit/867c0c0d45b996407107d3709f33e743f12c5914))
* **editor:** re-enable minimap in monaco ([8265c31](https://github.com/swagger-api/apidom/commit/8265c31914655468528d31e6a05549f4fca76532))
* **editor:** reinstantiate generator lists on specVersion change ([7eedd88](https://github.com/swagger-api/apidom/commit/7eedd8826cebb36b579d73f428283c3b4d4a35a3))
* **editor:** reinstantiate generator lists on specVersion change ([42aca80](https://github.com/swagger-api/apidom/commit/42aca80fca5cac8cdc42965a792705f5c11df076))
* **editor:** remove extraneous constructor .bind ([57bc622](https://github.com/swagger-api/apidom/commit/57bc6224a5b6f8acb97a233d60c33b05f3409373))
* **editor:** revert webpack config back to single entry point ([cdf7463](https://github.com/swagger-api/apidom/commit/cdf74631b585a390e6dc2e22b351194ce7f69985))
* **editor:** saveAsYaml file extension ([83826aa](https://github.com/swagger-api/apidom/commit/83826aaa27c26552e497f777a9e55beb089646b1))
* **editor:** semanticHighlighting.enabled setting ([0e49fbb](https://github.com/swagger-api/apidom/commit/0e49fbb41e1d7842a3bac6905645a86bb0c2c9a2))
* **editor:** topbar color, font sizes, padding ([5c2e7a3](https://github.com/swagger-api/apidom/commit/5c2e7a359b4a2e439b47b02edba349d9ec806851))
* **editor:** topbar padding and fonts ([d319323](https://github.com/swagger-api/apidom/commit/d319323148cfc831a13615b1f13a8300273c0f1e))
* **editor:** unhandled promise rejection for unsupported definitions ([f03b5ae](https://github.com/swagger-api/apidom/commit/f03b5ae8fb4ef7831e160abc4dccf57ebaff5c53))
* **editor:** update changelog statuses ([e757a3e](https://github.com/swagger-api/apidom/commit/e757a3edbc02a3ff16805ed3045936c6bf44e3b9))
* **editor:** use p2m for diagnostics markers ([e386971](https://github.com/swagger-api/apidom/commit/e386971443b8a812585189ece0d9ceedaa8b0086))
* **editor:** wip disabled hooks for Topbar - linting ([a7271b1](https://github.com/swagger-api/apidom/commit/a7271b1f6929f0bb854eafef4e345e65ca3fdd03))
* **editor:** worker error handling with unsupported spec ([167dc3f](https://github.com/swagger-api/apidom/commit/167dc3f1bd74c216e6a794dea84dd479f3fc8e37))
* **elements:** use proper types for accessors ([6c43de4](https://github.com/swagger-api/apidom/commit/6c43de48c6976eab4e0e41bcf8c31d7eff67e3d3)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* **generic-editor:** fix [#553](https://github.com/swagger-api/apidom/issues/553) - baseURI for deref ([51f45b2](https://github.com/swagger-api/apidom/commit/51f45b24241873b817a51e02e08069b5a774a88b))
* **interpret:** fix icon position to stay always in the same place ([e814b87](https://github.com/swagger-api/apidom/commit/e814b87b86203b8a0f4270c4eb44881d4575e9b8))
* **lexical-analysis:** fix lexical analyzer init. in browser env ([fe91458](https://github.com/swagger-api/apidom/commit/fe91458d0d87390c98471640e9fd32ee182f7e15)), closes [#451](https://github.com/swagger-api/apidom/issues/451)
* missing comma in tsconfig.json ([28265fb](https://github.com/swagger-api/apidom/commit/28265fb91e3648d332616c18b4e174ea6c39042c))
* **namespaces:** fix duplicates in mixed fields visitor ([725ecce](https://github.com/swagger-api/apidom/commit/725ecce4d0a438fba36f62c33516cb8e1ad0e33c))
* **ns-asyncapi-2-0:** fix typo in specification object ([3460aea](https://github.com/swagger-api/apidom/commit/3460aeac9ff986c1fe23e82a883eee04a68c57ef)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-openapi-3-1:** fix bug in embedded-resources- plugin ([2809390](https://github.com/swagger-api/apidom/commit/2809390e7744e4635a85555203ba0b3218fab0e6)), closes [#362](https://github.com/swagger-api/apidom/issues/362)
* **ns-openapi-3-1:** fix bugs in Schema Object refracting ([e9e0cd0](https://github.com/swagger-api/apidom/commit/e9e0cd02addc24397c6802337cd3f0553fe75a50)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **openapi3-1-yaml:** fix PathItem visitor ([523a0c1](https://github.com/swagger-api/apidom/commit/523a0c1f638cd1a75a94472bccaf6c90b7f9b64e))
* **openapi3-1:** fix problem in Paht Item object visiting ([0bea447](https://github.com/swagger-api/apidom/commit/0bea447a25aedf1197581051fd2b7f9f32d35d95))
* **OpenApi3.1:** add source maps to generic Object visitors ([2e1aca5](https://github.com/swagger-api/apidom/commit/2e1aca523a3dd54493cb53116637cc6391cfb927))
* **OpenApi3.1:** disallow extensions on Reference Object ([457e45d](https://github.com/swagger-api/apidom/commit/457e45d066a8e247a834480f16ef06f7a61783ee))
* **OpenApiVisitor:** add sourcMap ([bdc2da7](https://github.com/swagger-api/apidom/commit/bdc2da792854d1a05eead0fe8526f73d6823e6b2)), closes [#48](https://github.com/swagger-api/apidom/issues/48)
* **parser:** fix sync/async inconsistencies ([d1c29f3](https://github.com/swagger-api/apidom/commit/d1c29f3605be43b815194a0876e92cf5212b2ef4)), closes [#310](https://github.com/swagger-api/apidom/issues/310)
* **playground:** allow resolve and dereference in certain conditions ([3ac6951](https://github.com/swagger-api/apidom/commit/3ac69515c2d77cc4aab167281d7a5d1d96991348)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** change initial state to empty one ([a4abaf9](https://github.com/swagger-api/apidom/commit/a4abaf9d8ddeb87d9284908d3d92b571e8cc7cba))
* **playground:** close import dialog before backdrop ([3c5b37c](https://github.com/swagger-api/apidom/commit/3c5b37c4210e85d97fb688ab0d09d6d213a4fd3f))
* **playground:** fix display of resolve console output ([fed0281](https://github.com/swagger-api/apidom/commit/fed02811e31957a963ed21c229ca6db53483508f))
* **playground:** fix paths to wasm files loaded by web worker ([5b35dfe](https://github.com/swagger-api/apidom/commit/5b35dfe2918632e7db6e89ec907a4f76a63af1e5))
* **playground:** fix transpilation of refractors ([b0746fa](https://github.com/swagger-api/apidom/commit/b0746fa9bc15ae4bebd9244a1cf5c73f929078f6))
* **playground:** reset file input after using it ([d5ecbfc](https://github.com/swagger-api/apidom/commit/d5ecbfc3e58f931141af8bd866fa96baf3e5b6f5))
* **reference:** allow dereferencing other elements than ParseResult ([0b099ee](https://github.com/swagger-api/apidom/commit/0b099ee821790d11769dea8c5a91d906f83996e5)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **reference:** allow resolution on other elements than ParseResult ([4d4696b](https://github.com/swagger-api/apidom/commit/4d4696b20754478f27524d4b68f794ebe19cf65f)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **reference:** fix bug in reference predicate logic ([8b5176a](https://github.com/swagger-api/apidom/commit/8b5176a211fbe99ca683f7fb253c765952e26eba))
* **reference:** fix incorrect JSON Schema dereference in OAS 3.1 ([2f1fefa](https://github.com/swagger-api/apidom/commit/2f1fefa948dbe49a80b208a3f6af054346723e8d)), closes [#607](https://github.com/swagger-api/apidom/issues/607)
* **reference:** fix resolution of Schema Object  field ([#525](https://github.com/swagger-api/apidom/issues/525)) ([58350fe](https://github.com/swagger-api/apidom/commit/58350fe1f4354d7a9094ea859268320e461000b6)), closes [#524](https://github.com/swagger-api/apidom/issues/524)
* **reference:** handle inner media types properly during resolution ([d67ca7c](https://github.com/swagger-api/apidom/commit/d67ca7c1f6f319f6676eb3f1f9abea88e0dc7408))
* **reference:** unwrap result after dereferencing ([d4aee1e](https://github.com/swagger-api/apidom/commit/d4aee1ea1f08a1e7b22569d0de1fe5fe923c9013)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **yaml-1-2:** add support for parsing more corner cases ([7b5aff9](https://github.com/swagger-api/apidom/commit/7b5aff9a6f015e4119b2f7f967b9ad3ae6a26a03)), closes [#290](https://github.com/swagger-api/apidom/issues/290)
* **yaml:** fix YAML parsing in browsing environemnt ([8168986](https://github.com/swagger-api/apidom/commit/81689867d6f3dded56b1aee694ec4595c53bd3c0)), closes [#232](https://github.com/swagger-api/apidom/issues/232)


### Features

* **adapters:** make adapters understand refractorOpts ([a314eb5](https://github.com/swagger-api/apidom/commit/a314eb584ec58284e11e22f54385c7af0f7b895b))
* add 1st POC of ApiDOM ([7d5a241](https://github.com/swagger-api/apidom/commit/7d5a241681e50faf481ce80e029c8ec3c72f6a56))
* add additional predicates ([93e49aa](https://github.com/swagger-api/apidom/commit/93e49aa95fce6ce971f0527af9b9be001fffa216))
* add apidom-reference package ([17bd14a](https://github.com/swagger-api/apidom/commit/17bd14a63d43419a1e345f0747a7d2be034c70e1))
* add ArrayElement.set method to minim types ([250fa70](https://github.com/swagger-api/apidom/commit/250fa70c807245f0224b30521f20c1b718e7f527))
* add base predicates ([b435155](https://github.com/swagger-api/apidom/commit/b43515561a05a787c801504c11f42e34fefe6a49)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* add CST to AST transformer for tree-sitter ([9d3f03c](https://github.com/swagger-api/apidom/commit/9d3f03ca870c203d93a9bf9a1a909000d4d12add)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* add extensions support to additional objects ([a658668](https://github.com/swagger-api/apidom/commit/a658668eb4eaa5aecf48a4c20ea5d49a342c37cb)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* add findAtOffset function ([59145fe](https://github.com/swagger-api/apidom/commit/59145fe5a7b2bc3ecc96140c89c93de5d37b4310))
* add OpenApi 3.1 support ([9d48576](https://github.com/swagger-api/apidom/commit/9d48576b01b43b2dff451614f6e483fce1e089ce)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* add reference related metadata to namespaces ([e66cdaa](https://github.com/swagger-api/apidom/commit/e66cdaa7e21e533549175f9f47966a3c6baf9308))
* add support for abstract references ([e246112](https://github.com/swagger-api/apidom/commit/e246112169260d679e0349bff0e6b76469e5408d)), closes [#9](https://github.com/swagger-api/apidom/issues/9)
* add support for AsyncAPI 2.1.0 specification ([c7840c4](https://github.com/swagger-api/apidom/commit/c7840c4d979cddc904d4170aff1635ad695a8fe4)), closes [#461](https://github.com/swagger-api/apidom/issues/461)
* add support for errors and missing literals ([3dc5c3a](https://github.com/swagger-api/apidom/commit/3dc5c3abf191f8900d6f7b7e5a229d458412f2c8)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* add support for generic JSON -> ApiDOM transformation ([47998c9](https://github.com/swagger-api/apidom/commit/47998c9c25f3a100d0386be2b82ab46982c726bd))
* add support for generic YAML -> ApiDOM transformation ([0a1de40](https://github.com/swagger-api/apidom/commit/0a1de4015aa3f7a023d729b73fcb6eb6a1d545a3))
* add support for JSON comments ([87c745e](https://github.com/swagger-api/apidom/commit/87c745e48e30520c1db449d1db8e57da6b95b384)), closes [#4](https://github.com/swagger-api/apidom/issues/4)
* add support for parse errors ([b4392b2](https://github.com/swagger-api/apidom/commit/b4392b2594d523b252eaa1b745b544477aef6022)), closes [#4](https://github.com/swagger-api/apidom/issues/4)
* add support for parsing empty files ([653d78a](https://github.com/swagger-api/apidom/commit/653d78a5d10d9460785c4e70c34931f382bd4853))
* add support for servers field ([718d15b](https://github.com/swagger-api/apidom/commit/718d15b8e77c4f70eda9f586bf42d437193b5790)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* add support for worker environment ([b375f57](https://github.com/swagger-api/apidom/commit/b375f5755d0233120544e2709e5d6614d2554712)), closes [#287](https://github.com/swagger-api/apidom/issues/287)
* add YAML WASM support ([#107](https://github.com/swagger-api/apidom/issues/107)) ([a4ddf1a](https://github.com/swagger-api/apidom/commit/a4ddf1a6b592a26b43b06db944014b053b6f880e)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **apidom-ast:** introduce async version of visit function ([b627409](https://github.com/swagger-api/apidom/commit/b6274091798e382d674bf339495925eed37c4c9b))
* **apidom-ast:** introduce normalizing and merging visitors ([1aa2786](https://github.com/swagger-api/apidom/commit/1aa2786bc80d9cbf43291109a043e4d0acfa6cf4))
* **apidom-ls:** deref and definition service, various enhancements ([18876a2](https://github.com/swagger-api/apidom/commit/18876a26125c6f6940e57877cea75cf108e8fd4f))
* **apidom-ls:** initial deref service ([c490e45](https://github.com/swagger-api/apidom/commit/c490e453b82801c286ecec7a119114ef0f9e4b7c))
* **apidom-lsp:** first LSP server and VS Code Client extension ([20c1acf](https://github.com/swagger-api/apidom/commit/20c1acffc993e9f791975e7275ba32edc4441a8e))
* **apidom-lsp:** Standalone LSP Server, server ad e2e tests ([7898578](https://github.com/swagger-api/apidom/commit/789857833d447667e1152b64a50fd3a7b77c7b8f))
* **apidom-ls:** standard linter functions and clenup ([e1dda94](https://github.com/swagger-api/apidom/commit/e1dda94a299852aceb78e514bff4f4b0dcf88cb4))
* **apidom-ls:** updated language service library ([bcb2e81](https://github.com/swagger-api/apidom/commit/bcb2e81861cb9f1c4664503038ca696259823889))
* **apidom-monaco:** apidom monaco POC ([a8595b7](https://github.com/swagger-api/apidom/commit/a8595b788f49985be0b633c34be828916b4ed1ce))
* **apidom:** add mechanism to compute parent edges ([#391](https://github.com/swagger-api/apidom/issues/391)) ([4e526d4](https://github.com/swagger-api/apidom/commit/4e526d480526353efeab67889f6be8678ac5a1b7)), closes [#383](https://github.com/swagger-api/apidom/issues/383)
* **apidom:** add refractor for base types ([a4647a7](https://github.com/swagger-api/apidom/commit/a4647a78ff6f4b7fd2963089cb2b31273b0e13cd)), closes [#368](https://github.com/swagger-api/apidom/issues/368)
* **apidom:** add support for element identity via refractor plugins ([#565](https://github.com/swagger-api/apidom/issues/565)) ([94080db](https://github.com/swagger-api/apidom/commit/94080dba39359f89c40155dea6eb8ee86f3d7f5a)), closes [#528](https://github.com/swagger-api/apidom/issues/528)
* **apidom:** add support for transforming ApiDOM into S-expressions ([305e1c9](https://github.com/swagger-api/apidom/commit/305e1c9c2cd35e3b5e722953f1c25d7243a4d9f3)), closes [#429](https://github.com/swagger-api/apidom/issues/429)
* **apidom:** embed AST nodes into parsed structures ([f7e3f76](https://github.com/swagger-api/apidom/commit/f7e3f76259795cbf8d2fae55c4b4631ca32727de)), closes [#10](https://github.com/swagger-api/apidom/issues/10)
* apidomls initial language service ([735951e](https://github.com/swagger-api/apidom/commit/735951ec4e5359740326b5a1c0bc67d372b5cf5e))
* **AST:** add support for directives in YAML transformer ([ddd7d63](https://github.com/swagger-api/apidom/commit/ddd7d6330384e4435d29cf9b4c83d9b2fe53fffc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** add support for YAML AST errors ([a72f5a5](https://github.com/swagger-api/apidom/commit/a72f5a50cc3a4e89179339a43634171ab315800f)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** add YAML CST -> AST transformation for all common types ([e2e1e1b](https://github.com/swagger-api/apidom/commit/e2e1e1b59b5ac79857da22912d36adf902d2ed7b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **ast:** enhance core traversal mechanism to support cycles ([285e768](https://github.com/swagger-api/apidom/commit/285e768627513b2998ac6d4faea1b8b8c33fb94d))
* **AST:** incorporate missing nodes into AST ([65a75b8](https://github.com/swagger-api/apidom/commit/65a75b863a5176a568edd5476e40ae9d3df9c2b0)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **AST:** incorporate Presentation info model into YAML ([18b8960](https://github.com/swagger-api/apidom/commit/18b89605dd2466935088e47caaed06f7f231d2be)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** introduce YAML AST models and predicates ([9ba4561](https://github.com/swagger-api/apidom/commit/9ba4561e6ff58957e24cae6351229805cde241b1)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **ast:** make cycle detection configurable ([7569b43](https://github.com/swagger-api/apidom/commit/7569b43e8cd30a64f43ac7a3e8022d52b9df5894))
* **ast:** make errors and missing nodes part of AST ([6142fab](https://github.com/swagger-api/apidom/commit/6142fabc9520321c1cf2e8fc8107ce992eb02806)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **asyncapi-2-0-0:** finish refractor implementation ([526fc4f](https://github.com/swagger-api/apidom/commit/526fc4f266fc2c8c402461cab63f2e8fd176cf5f))
* **asyncapi-2-0:** add support for Schema cycles ([d7d094d](https://github.com/swagger-api/apidom/commit/d7d094d515d84d47f8ae6a41f70d5d038c719797)), closes [#427](https://github.com/swagger-api/apidom/issues/427)
* **asyncapi-2-1:** add support for Channel Item dereferencing ([3300cb7](https://github.com/swagger-api/apidom/commit/3300cb7b790521ae9bd73222cd453ecb6b1fde8e)), closes [#558](https://github.com/swagger-api/apidom/issues/558)
* **asyncapi-2-1:** add support for Channel Item ext. resolution ([e0e8895](https://github.com/swagger-api/apidom/commit/e0e8895941d8d4d582e4e4254aa316e807cfc705)), closes [#559](https://github.com/swagger-api/apidom/issues/559)
* **asyncapi-ns:** add predicates ([9a25dd2](https://github.com/swagger-api/apidom/commit/9a25dd2ef05a294069cd22b3f2613f2a56b0f88b)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* **AsyncApi2.0.0-Yaml:** add AsyncApi 2.0.0 adapter ([3aa325a](https://github.com/swagger-api/apidom/commit/3aa325ac612da5c892ec332b393afd3c34cc6f2d)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AsyncApi2.0:** add support for ChannelItem object ([2a06d98](https://github.com/swagger-api/apidom/commit/2a06d981777d4c64216456099c4e0de5e5428731)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Channels object ([a86241a](https://github.com/swagger-api/apidom/commit/a86241a6ca6676cc6282ce2513717ba274aed7df)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for MemberElement sourcemaps ([e419a57](https://github.com/swagger-api/apidom/commit/e419a57b028ef17ed9850109a6debbbcd4b288fe)), closes [#71](https://github.com/swagger-api/apidom/issues/71)
* **AsyncApi2.0:** add support for Parameters object ([d468a73](https://github.com/swagger-api/apidom/commit/d468a73dc186792c95da065c2e974a1f1d171281))
* **AsyncApi2.0:** add support for Server object ([4e507e9](https://github.com/swagger-api/apidom/commit/4e507e907416a6ff9061c7022a164f2bebf3cedb)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Server Variable Object ([7ea19fe](https://github.com/swagger-api/apidom/commit/7ea19fe91f5476ebebc8982874fa877c4935e560)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Servers object ([bf37684](https://github.com/swagger-api/apidom/commit/bf376842dbaa54a29c0f9a9700c2e44b71613232)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for unknown values and fields ([2c994af](https://github.com/swagger-api/apidom/commit/2c994af5e825ada8381774937eaa3c86bf26b09a)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **AsyncAPI:** add namespace for AsyncAPI specification ([9e6d37a](https://github.com/swagger-api/apidom/commit/9e6d37a53bb0b735b59bea268dcf51c794fc070c))
* **asyncapi:** add refractor generics ([be3c8d1](https://github.com/swagger-api/apidom/commit/be3c8d16ec7115e299d1084d6688229998b6c198))
* **asyncapi:** add traversal specific to asyncapi ([6ba0f44](https://github.com/swagger-api/apidom/commit/6ba0f44f478cf62065cdf8bf144e73cd35897acc))
* attempts of POC2 ([9af4924](https://github.com/swagger-api/apidom/commit/9af4924c22c05e5be45db956dbb707ec0767bfc1)), closes [#7](https://github.com/swagger-api/apidom/issues/7) [#6](https://github.com/swagger-api/apidom/issues/6) [#5](https://github.com/swagger-api/apidom/issues/5) [#3](https://github.com/swagger-api/apidom/issues/3)
* build proper JSON ast parser with visitor pattern support ([0f65112](https://github.com/swagger-api/apidom/commit/0f651123da588e169a07977520694b870319bdc6))
* demonstrate overlay mechanism in JavaScript ([d320e2f](https://github.com/swagger-api/apidom/commit/d320e2f183514f04a4cb3d078226fc92243c42c8))
* **dereference:** add initial work on external resolution ([816341c](https://github.com/swagger-api/apidom/commit/816341cf795d1e01f11ea5309c6621e0cf569a4b))
* **editor:** add a cancel button for importUrl modal ([405702d](https://github.com/swagger-api/apidom/commit/405702dde10b3c0c552525fd45b0a3770761c76c))
* **editor:** add a cancel button for importUrl modal ([cd8910c](https://github.com/swagger-api/apidom/commit/cd8910c4a96bc8697517f50e8a7bd2bcf246449d))
* **editor:** add apidom-ls babel alias ([76f863b](https://github.com/swagger-api/apidom/commit/76f863b4b1664fdba1a7b9cf8fa20307ee17c730))
* **editor:** add errorModal support to saveAsJson, saveAsYaml ([c8af156](https://github.com/swagger-api/apidom/commit/c8af156a4cfc185aad9f722d93ce16bc0c7d6395))
* **editor:** add errorModal support to saveAsJson, saveAsYaml ([049e9fb](https://github.com/swagger-api/apidom/commit/049e9fb8e9fe8643513c2bd83ccdb8ec4905508f))
* **editor:** add jest .spyOn for file/edit topbarActions ([9799d1b](https://github.com/swagger-api/apidom/commit/9799d1b3aa4fecedbe88b8fd75cdca2fb2eb1b13))
* **editor:** add jest .spyOn for file/edit topbarActions ([eeb7b12](https://github.com/swagger-api/apidom/commit/eeb7b129a29edb96f7b1695b3f7fe99b9e7721f7))
* **editor:** add public dispose method to workerManager ([81bea10](https://github.com/swagger-api/apidom/commit/81bea10f1db74ca0f2e5031d1a216ac6829d79bc))
* **editor:** additional converter return string cases ([a1f2100](https://github.com/swagger-api/apidom/commit/a1f210046ec0f70cfc966e1fa70d2def23e83f5b))
* **editor:** apply theming to minimap background ([928cc72](https://github.com/swagger-api/apidom/commit/928cc72e309fc0f89a7900a3ca30063a33a0ae51))
* **editor:** apply updated styles for error and warning modals ([5e2fc9b](https://github.com/swagger-api/apidom/commit/5e2fc9bb6b01b29b209e06f4d415cd68fd0f15f8))
* **editor:** clear editor when yaml or empty case ([e2e6925](https://github.com/swagger-api/apidom/commit/e2e69255201e794da80b8529bef691e4a70d5907))
* **editor:** clear editor with simple json case ([e677b3c](https://github.com/swagger-api/apidom/commit/e677b3cc2d76e052f0f9db18abcd8cc2d9ffd452))
* **editor:** clearEditor detects spec type for re-init ([baefef3](https://github.com/swagger-api/apidom/commit/baefef302607b4cff16bd61bb33271e946ad41fc))
* **editor:** clearEditor.actions ([ac9c79b](https://github.com/swagger-api/apidom/commit/ac9c79b71423ce47fc1ffaf70bc1e0cdd4db5f0b))
* **editor:** codeActions provider ([98a7cbd](https://github.com/swagger-api/apidom/commit/98a7cbd9ed79c9bcd6bbbc96a0a74311a532b0df))
* **editor:** completionItemsAdapter with apidom ([66e8778](https://github.com/swagger-api/apidom/commit/66e8778a7ce4141d2da47099031088d8392f9f19))
* **editor:** convertJsonToYaml.actions ([3daca5c](https://github.com/swagger-api/apidom/commit/3daca5c27533bfdd0f8baff4c9e4fb5ae132ce04))
* **editor:** convertOas2ToOas3.actions ([188ee24](https://github.com/swagger-api/apidom/commit/188ee24e9d6f5a6cfef1c5459b61e405f9769e52))
* **editor:** convertToOas3 now uses non-mock data ([c8aef1d](https://github.com/swagger-api/apidom/commit/c8aef1d7cea3165daba9ed2be2ef99a21723734b))
* **editor:** convertToOas3 now uses non-mock data ([c4c74c3](https://github.com/swagger-api/apidom/commit/c4c74c34cc971c503f7df65f4cb2177b934742e9))
* **editor:** custom monaco light/dark themes ([cb23902](https://github.com/swagger-api/apidom/commit/cb23902015b3cc5577460c7f4cd18250b9efbf91))
* **editor:** custom react hook for languageFormat ([3da03b5](https://github.com/swagger-api/apidom/commit/3da03b5f0bfaea982bd3d7fd5d45f4579c8d05c3))
* **editor:** default wordWrap and minimap settings ([b7b9729](https://github.com/swagger-api/apidom/commit/b7b9729bf6f34e9cde089bbbbbaf1c46e1e059d5))
* **editor:** demo of doValidate from jsonService ([46b9054](https://github.com/swagger-api/apidom/commit/46b9054034e9b78cfa4bd020c9c09ec58cc42ae8))
* **editor:** demo test apidom-ls is readable ([a364781](https://github.com/swagger-api/apidom/commit/a3647819eb11811d380813d11758c73ffc24b464))
* **editor:** dev buttons to toggle/detect language ([ad7c0d5](https://github.com/swagger-api/apidom/commit/ad7c0d5f1b1629ba502bcd2db09750fcc40d5f2f))
* **editor:** dev buttons to toggle/detect language ([eb2f9bd](https://github.com/swagger-api/apidom/commit/eb2f9bd17ee50f3875128ab121f1d577c47f2028))
* **editor:** documentSymbolsAdapter ([9f2cf3a](https://github.com/swagger-api/apidom/commit/9f2cf3a3bd648f336b27bdb34d2de5f163f76c6d))
* **editor:** downloadGeneratedFile now uses non-mock data ([655f7c2](https://github.com/swagger-api/apidom/commit/655f7c23547b0a757eb5d08d7a7d6d6227984ba5))
* **editor:** downloadGeneratedFile now uses non-mock data ([eb36194](https://github.com/swagger-api/apidom/commit/eb36194c5cc2ee5d5981848c9cf4ffdd1f7e96a6))
* **editor:** editor pane shrink/expand responsiveness ([0b699f9](https://github.com/swagger-api/apidom/commit/0b699f9ac3566368f61eb991dd5812afb8de1bd8))
* **editor:** editor value onChange renders in swagger-ui ([76db19b](https://github.com/swagger-api/apidom/commit/76db19b6c431062c90b93f3d1835cff02de7bf19))
* **editor:** editor value onChange renders in swagger-ui ([4791680](https://github.com/swagger-api/apidom/commit/4791680e002e246a4c03d52b3b716eacaa38bacb))
* **editor:** EditorComponent as parent to vendor editor container ([39f4344](https://github.com/swagger-api/apidom/commit/39f4344e275267c5d7514569a510b32389a169c0))
* **editor:** experimental: pass monaco instance ([c7aacff](https://github.com/swagger-api/apidom/commit/c7aacffb83b1db672811a07fc63ea401f55cc4a8))
* **editor:** extract setupMode from setup ([fcd6be4](https://github.com/swagger-api/apidom/commit/fcd6be4680a61e722dfc26d28a1d484579cfe5c5))
* **editor:** FileMenuDropdown language format detection ([6570033](https://github.com/swagger-api/apidom/commit/65700333d7673d7433ea41df7c2b124b9b1164e9))
* **editor:** fixtures.actions ([a2111a6](https://github.com/swagger-api/apidom/commit/a2111a6db92f6630ab46aef3128f15647c7ccedb))
* **editor:** for OAS generator lists, remove need for swagger-client ([d4dc655](https://github.com/swagger-api/apidom/commit/d4dc655a12d05c74d98992698f46057165551611))
* **editor:** generator download deprecate use of swagger-client ([4d15e5c](https://github.com/swagger-api/apidom/commit/4d15e5cb65b7ed8437183ad7f0235ddda705b77c))
* **editor:** generator.actions ([26aaf1b](https://github.com/swagger-api/apidom/commit/26aaf1beac39991bb3bd79d140fcb383d30e7901))
* **editor:** GeneratorMenuDropdown component ([92d5264](https://github.com/swagger-api/apidom/commit/92d5264f01f1135abcb7ec7ca438d02ca9ac32f7))
* **editor:** generators list now uses actual/default values ([dc4d10b](https://github.com/swagger-api/apidom/commit/dc4d10b869dc4a18f93a80cd551448b9f65ebdae))
* **editor:** generators list now uses actual/default values ([216c27b](https://github.com/swagger-api/apidom/commit/216c27b6c7a5bcfb69ecde11693dd7dc4aacf49c))
* **editor:** GenericEditorContainer ([b46a20d](https://github.com/swagger-api/apidom/commit/b46a20d172d48f773f5511e47fcaf2a1d4ec0193))
* **editor:** GenericEditorContainer ([cf0374d](https://github.com/swagger-api/apidom/commit/cf0374da22420c99b2720223d2ac06146c16b5fb))
* **editor:** getSpecVersion helper for isOAS3/isSwagger2 ([c86de43](https://github.com/swagger-api/apidom/commit/c86de43d6c4c12e404f80992cb09ba57ca9136bb))
* **editor:** getSpecVersion helper for isOAS3/isSwagger2 ([f0b6155](https://github.com/swagger-api/apidom/commit/f0b6155cb349783ac0019ef25c4489b0a85fbb2d))
* **editor:** hoverAdapter for json ([58f8921](https://github.com/swagger-api/apidom/commit/58f89218a30c81f8e780a6f95358c6ab3495afff))
* **editor:** ideLayoutPreset with editorAreaLayout ([#571](https://github.com/swagger-api/apidom/issues/571)) ([18df907](https://github.com/swagger-api/apidom/commit/18df90707c23732d0da10255aaf6f97e8c26f967))
* **editor:** Import URL styling updates ([4d9756b](https://github.com/swagger-api/apidom/commit/4d9756b7d752a4ad4d9fbfe4e43a2d398025831e))
* **editor:** importFile will update swagger state ([b287c06](https://github.com/swagger-api/apidom/commit/b287c0623bc5238f2a3fb944a0c8ea1559d30f08))
* **editor:** importFile will update swagger state ([6df626e](https://github.com/swagger-api/apidom/commit/6df626eaa2bf450e231f05845be9a3b03be4e00e))
* **editor:** importFromURL will update swagger state ([e7c90ac](https://github.com/swagger-api/apidom/commit/e7c90ac396cdb213be31de0fae997fad62e23480))
* **editor:** importFromURL will update swagger state ([d59ad54](https://github.com/swagger-api/apidom/commit/d59ad5429c709f446549b75fe5a707f06d5159f9))
* **editor:** importFromURL.actions ([11b1e8b](https://github.com/swagger-api/apidom/commit/11b1e8b05124c9072815d23d026004d3fa3f712a))
* **editor:** improve and fix apidom-ls integration ([c675c1d](https://github.com/swagger-api/apidom/commit/c675c1db329164ec2be39165c2c86e68a4abdce0))
* **editor:** initial apidom.worker ([fa3123d](https://github.com/swagger-api/apidom/commit/fa3123d55a70bea3167d3b06c6a08dd6ba46dea6))
* **editor:** initial diagnosticsAdapter ([2197a16](https://github.com/swagger-api/apidom/commit/2197a16952a0897608d87d5c2a3e08b3fb11270f))
* **editor:** initial migrated react components ([b2192bc](https://github.com/swagger-api/apidom/commit/b2192bced1436366383ee81eb859d80761859af9))
* **editor:** initial migrated react components ([c5f128c](https://github.com/swagger-api/apidom/commit/c5f128c48a785ec2f285654ba8409e89c57474ab))
* **editor:** initial providers for documentSymbols and Hover ([c5230a4](https://github.com/swagger-api/apidom/commit/c5230a472880f792069bb6a45d70798233b15692))
* **editor:** initializeParsers sample with apidom parser ([5223d24](https://github.com/swagger-api/apidom/commit/5223d241e553a1f5b0616d41da862fe621607c12))
* **editor:** jest test for FileMenuDropdown ([5b3b464](https://github.com/swagger-api/apidom/commit/5b3b4646a6e1ffc90a9da0c1abac0206665d6966))
* **editor:** jest test for FileMenuDropdown ([410eacf](https://github.com/swagger-api/apidom/commit/410eacf71c7e113d5b9b7f10a5404c15c66e9973))
* **editor:** jest tests for EditMenuDropdown ([f97e171](https://github.com/swagger-api/apidom/commit/f97e171bee8031ae6776dc14ad144a24923aac95))
* **editor:** jest tests for EditMenuDropdown ([ef72932](https://github.com/swagger-api/apidom/commit/ef72932c4a71ee331bfc3e45ec84ceefc2dfbd34))
* **editor:** jest tests for topbar generated server/client ([72d37a5](https://github.com/swagger-api/apidom/commit/72d37a59336abb38f4ea58400e1ff4ce01859f39))
* **editor:** jest tests for topbar generated server/client ([3528bfe](https://github.com/swagger-api/apidom/commit/3528bfe51a7643139a405087e2e10d97c194a836))
* **editor:** keydown support to load default definitions ([eddc283](https://github.com/swagger-api/apidom/commit/eddc283df008d8c59cc98b847d34696790f5bdea))
* **editor:** language utils-helper ([44effc8](https://github.com/swagger-api/apidom/commit/44effc84a6572ec9a85145a3e2252e612230e7e3))
* **editor:** languageKind ([b003706](https://github.com/swagger-api/apidom/commit/b003706bb66a1a23d7d35c54d755b7d9f5644036))
* **editor:** load default definitions for oas2/oas3/asyncapi2 ([e340324](https://github.com/swagger-api/apidom/commit/e3403244e21b65445f1e8bd8b0689dbe2927b7a5))
* **editor:** load default oas3.1 definition ([58e889c](https://github.com/swagger-api/apidom/commit/58e889cbdfa9adde619512edc408782f92de0767))
* **editor:** migrate StandaloneLayout to functional component ([fdfaf61](https://github.com/swagger-api/apidom/commit/fdfaf6137bb4d3e5f2f8a31d2f0e9b909a131411))
* **editor:** migrated swagger styling from less to sass ([2b913b9](https://github.com/swagger-api/apidom/commit/2b913b960b3eae4cb3f1cbed7ae4838d861e0eb7))
* **editor:** migrated swagger styling from less to sass ([e41ef99](https://github.com/swagger-api/apidom/commit/e41ef99aa17da73afaaaca5c5ce3bbda3cfe6c27))
* **editor:** modal close x button ([ac0d2ac](https://github.com/swagger-api/apidom/commit/ac0d2accca28bdd1e14c0311efcde7a760e35b63))
* **editor:** ModalConfirmWrapper and ModalErrorWrapper components ([ea956da](https://github.com/swagger-api/apidom/commit/ea956da758213cd5a9078f731b6b564feb56b51c))
* **editor:** ModalInputWrapper and ImportUrl components ([87937e9](https://github.com/swagger-api/apidom/commit/87937e9741c109b40899ec1e0eb64de576d8f9f1))
* **editor:** monaco theme selector widget ([2120b6e](https://github.com/swagger-api/apidom/commit/2120b6e85037a8ffa75c6368e1a8909d36607b73))
* **editor:** monaco workers imported via node_modules ([820b8a2](https://github.com/swagger-api/apidom/commit/820b8a221e0a2aec2714aa71d5966a3a2be28c15))
* **editor:** MonacoEditor load apidom.worker as web worker ([ecd83a2](https://github.com/swagger-api/apidom/commit/ecd83a266a37d04af53116cae5c5bae18453599e))
* **editor:** MonacoEditor load editor.worker.js from web worker ([3b22262](https://github.com/swagger-api/apidom/commit/3b22262bcb512640a01a41a056e086687dae251f))
* **editor:** move monaco setup to external export ([ef4d966](https://github.com/swagger-api/apidom/commit/ef4d96699ed73679d4f2f05f91864b3de0bdc56b))
* **editor:** move some FileMenu items to EditMenu Hooks ([9508041](https://github.com/swagger-api/apidom/commit/9508041f13c0265967edd49e73d5d07ae30d5637))
* **editor:** POC migrated with `swagger-ui-react` and `presets` ([3eec23f](https://github.com/swagger-api/apidom/commit/3eec23fa231c0b92b6570f21042f2a6f12c24c68))
* **editor:** POC migrated with `swagger-ui-react` and `presets` ([59a9ed2](https://github.com/swagger-api/apidom/commit/59a9ed260584413237f9f9ed2add0f75e65420ee))
* **editor:** propagate isOAS3_1 flag to clearEditor ([3843a89](https://github.com/swagger-api/apidom/commit/3843a89c1ffe34e5fff92d7232ed6b9acad3826a))
* **editor:** propagate isOAS3_1 flag to SaveAsJsonOrYaml ([eadf969](https://github.com/swagger-api/apidom/commit/eadf9694a5e0495ccec1f7dd9d0332e555cd3e96))
* **editor:** react hooks edit menu ([894244a](https://github.com/swagger-api/apidom/commit/894244aab031fae8a25eba8f39c01e3727e67e11))
* **editor:** react hooks File menu ([626abb2](https://github.com/swagger-api/apidom/commit/626abb25eab8bb4b2f6e37da74e1ad63bb2d63fd))
* **editor:** react hooks for Topbar component ([b187c3c](https://github.com/swagger-api/apidom/commit/b187c3cff9e3e88bd67ed46595ea175769425a68))
* **editor:** react-modal for importUrl ([8397209](https://github.com/swagger-api/apidom/commit/8397209fd2c417121d7995eac898a76c2dff5a8f))
* **editor:** react-modal for importUrl ([a7f50c3](https://github.com/swagger-api/apidom/commit/a7f50c330a7737045f9f9a98ba7de766828ec6da))
* **editor:** ReactModalPortal styles ([5e3f6f8](https://github.com/swagger-api/apidom/commit/5e3f6f8a247194babc8357dac887465494faa622))
* **editor:** remove unneeded `initializeParsers` ([64b1936](https://github.com/swagger-api/apidom/commit/64b1936e710213827a44531d6293cf07d7613bc6))
* **editor:** replace component `Link` with local `LinkHome` ([e5badc0](https://github.com/swagger-api/apidom/commit/e5badc036ec5cde91fb31ebe66323be6c8845e1e))
* **editor:** replace component `Link` with local `LinkHome` ([a81a929](https://github.com/swagger-api/apidom/commit/a81a92922176c2f258d41082d8501dc643d06cc0))
* **editor:** retrieve spec from swagger-ui ([74455e1](https://github.com/swagger-api/apidom/commit/74455e1ca8558f55f4dfda23e8b75b585ba167ff))
* **editor:** retrieve spec from swagger-ui ([1c614d5](https://github.com/swagger-api/apidom/commit/1c614d52a1226111624d5afecea41f12361915a8))
* **editor:** sample openapi syntax highlighter ([865a864](https://github.com/swagger-api/apidom/commit/865a86431ae72daf42274af1f978b1be5a1b0192))
* **editor:** SaveAsJsonOrYaml function component ([a6b53b3](https://github.com/swagger-api/apidom/commit/a6b53b3606a5033244c2cecb3fa82c1abe5a6870))
* **editor:** saveAsJsonOrYaml.actions ([a465b02](https://github.com/swagger-api/apidom/commit/a465b0283c8ddb5863ccf5eb2af4dcd8b82d9f47))
* **editor:** saveAsYaml confirmation modal ([7045ba3](https://github.com/swagger-api/apidom/commit/7045ba3464fda72c8562536844c81bfa3d58373e))
* **editor:** saveAsYaml confirmation modal ([b62db66](https://github.com/swagger-api/apidom/commit/b62db663445b5c2bc4588ad6e1c99bdb5b947404))
* **editor:** semanticTokensAdapter provider ([856a41b](https://github.com/swagger-api/apidom/commit/856a41bcd2e3d1c61b995fc1471225a89e332184))
* **editor:** set language to apidom; remove onChangeLanguageValue ([71ccc28](https://github.com/swagger-api/apidom/commit/71ccc2867a943139da5e25a739411359218f79fa))
* **editor:** showErrorModal with close ([a9627b3](https://github.com/swagger-api/apidom/commit/a9627b38510eb20ddfd6a8efe8e7e9b11fa4e449))
* **editor:** showErrorModal with close ([cae578c](https://github.com/swagger-api/apidom/commit/cae578c76194d81453109b54aa7bd9b828a18200))
* **editor:** spec detection for known http generators ([47db420](https://github.com/swagger-api/apidom/commit/47db4205b23643be71687027b7a22eb778ba9e04))
* **editor:** temp hello.worker ([627f83a](https://github.com/swagger-api/apidom/commit/627f83ac3dd4a11de6238a4e1b24590c542b5d0d))
* **editor:** textarea demo component ([b713b5a](https://github.com/swagger-api/apidom/commit/b713b5af29c2eb71b68c5901c14c5c194b0df1e1))
* **editor:** textarea demo component ([ce71efb](https://github.com/swagger-api/apidom/commit/ce71efbd16f86a75c8ec5cd947e0c37d2a50ec29))
* **editor:** ThemeSelectionIcon component ([95022be](https://github.com/swagger-api/apidom/commit/95022beb74b5aa0070688e5c971b9baf2ff4583e))
* **editor:** update ImportUrl modal style ([04975da](https://github.com/swagger-api/apidom/commit/04975da6e8a61e0471b015e9fe9b4ccadd3941ab))
* **editor:** update modal styles ([c3f822d](https://github.com/swagger-api/apidom/commit/c3f822da32bb48852bbf4bf1c3dada71fdbf5cf4))
* **editor:** use methods from apidom-ls for registered providers ([a412998](https://github.com/swagger-api/apidom/commit/a4129984be32cddcd464ae79103f2be5c3ec7c76))
* **editor:** use same generator baseUrl for oas3 and oas3_1 ([158e753](https://github.com/swagger-api/apidom/commit/158e7534186bf1efa45e4b7d4428470dbd7ac248))
* **editor:** use synchronous getLegend() for semanticTokensAdapter ([54da77e](https://github.com/swagger-api/apidom/commit/54da77e2d41306239cfc361ce849a96b52cf1a02))
* **editor:** utils for isValidJson and isValidYaml ([55d6a67](https://github.com/swagger-api/apidom/commit/55d6a6765c7856f8f51add1a68c7f5cefcbfe116))
* **editor:** utils-getSpecVersion ([36bba3e](https://github.com/swagger-api/apidom/commit/36bba3e1f10eb9427b89aeb8df629adadd611f12))
* **editor:** webpack outputs workers without chunk in filename ([f07a693](https://github.com/swagger-api/apidom/commit/f07a6935120dbe91f236fc6e3220d0d21cdb615d))
* **editor:** wip - light and dark themes ([0487ca5](https://github.com/swagger-api/apidom/commit/0487ca57ff5b472a7596d93bf92fe64e539f5193))
* **editor:** wip disabled hooks for FileMenuDropdown ([4b809ad](https://github.com/swagger-api/apidom/commit/4b809ad47d373eef301df6cc822b3f293c4d3ce8))
* **editor:** wip: setup with ApidomWorker and WorkerManager ([59fd2ce](https://github.com/swagger-api/apidom/commit/59fd2ceff6a6a255782a790e6b06a08bdc01c515))
* **editor:** wip: switch to apidom placeholders ([c3454b4](https://github.com/swagger-api/apidom/commit/c3454b4016d7af6b624ae6c12dec98c9c522b4fa))
* **editor:** worker-loader with commented hello.worker ([ecca99a](https://github.com/swagger-api/apidom/commit/ecca99a77616ad34215d7fe8f6578d6fc1e23422))
* **editor:** working setup with workerManager ([843e1c0](https://github.com/swagger-api/apidom/commit/843e1c0029b74f70f84550153c1f8b60f2f08650))
* embed metadata into resulting tree ([04d672d](https://github.com/swagger-api/apidom/commit/04d672d798992faa3b8ae037305ac8f1f31320fe))
* **extensions:** add extensions support for info/(license|contact) ([0dc34ab](https://github.com/swagger-api/apidom/commit/0dc34ab565203d254d15c0d91193222503c1f78b)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* **extensions:** add support for OpenApi extensions for Info ([1f56875](https://github.com/swagger-api/apidom/commit/1f568759515f4af61cb3ce7a75df96ef04456297)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* **generic-editor:** integrate react support ([71ad70d](https://github.com/swagger-api/apidom/commit/71ad70d131dde34b17462fc4412b60e35f6f0012))
* **generic-editor:** integrate with ApiDOM ([5a82cf2](https://github.com/swagger-api/apidom/commit/5a82cf2122085b7d1a01099b37f2d1ed13a97d5d))
* **generic-editor:** scaffold generic editor SwaggerUI plugin ([697f683](https://github.com/swagger-api/apidom/commit/697f683c32ded0ebf65652ef0d10cba0012f40d0))
* implement generic depth first traversal ([6078ed0](https://github.com/swagger-api/apidom/commit/6078ed0baa25b85f8ba1f4057f87071313027099))
* implement plugginable architecture ([499e3bd](https://github.com/swagger-api/apidom/commit/499e3bd032807e82c5da4024b20bf869adf4145a)), closes [#20](https://github.com/swagger-api/apidom/issues/20)
* implement recursive search algorithm ([#80](https://github.com/swagger-api/apidom/issues/80)) ([db3e146](https://github.com/swagger-api/apidom/commit/db3e1460872cdcca979ea73168bc15076deb580d)), closes [#77](https://github.com/swagger-api/apidom/issues/77)
* implement YAML CST to AST transformer ([8a84320](https://github.com/swagger-api/apidom/commit/8a84320ee068bec04889ac248c664435636dcaea)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* introduce namespace refractor ([c75dc8a](https://github.com/swagger-api/apidom/commit/c75dc8a09583658acc1b144b33fcb11c109e72d6))
* introduce our own AST layer ([c3c137e](https://github.com/swagger-api/apidom/commit/c3c137e0a8aaa2f9803022392579b8358cdfd7bf)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **metadata:** add conventions to append metadata to ApiDOM tree ([#78](https://github.com/swagger-api/apidom/issues/78)) ([91fd38f](https://github.com/swagger-api/apidom/commit/91fd38f53a6b0103da6066443de78f6bc28ddf19)), closes [#76](https://github.com/swagger-api/apidom/issues/76)
* **ns-asyncapi-2-0:** add accessors to Schema Element ([906b317](https://github.com/swagger-api/apidom/commit/906b317c572df1851a6ae7e88e11d2f573a0d9dc)), closes [#424](https://github.com/swagger-api/apidom/issues/424)
* **ns-asyncapi-2-0:** add components/parameters support ([f9a7545](https://github.com/swagger-api/apidom/commit/f9a7545f5d026e0b4a3b77868e37502c75f12913)), closes [#304](https://github.com/swagger-api/apidom/issues/304)
* **ns-asyncapi-2-0:** add elements for all Binding Objects ([7c97c89](https://github.com/swagger-api/apidom/commit/7c97c89609a6353cb58df27802766f0410f1dba4)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for AsyncApi2_0 Object ([d971cb9](https://github.com/swagger-api/apidom/commit/d971cb99f22065fb3f06e3c4c17152e43985b853)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for ChannelBindings Object ([fa48929](https://github.com/swagger-api/apidom/commit/fa48929c818e8f6be491b2038b9dc1d228f0f0b1)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Components Object ([6c7cd91](https://github.com/swagger-api/apidom/commit/6c7cd91bb05e0711000ad72bf628548959b1eb18)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Operation Object ([d1f1d72](https://github.com/swagger-api/apidom/commit/d1f1d7283b3b35e95709938241e065f76deda6b0)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Schema Object ([44c3da6](https://github.com/swagger-api/apidom/commit/44c3da6e8ac63f93ae8ac75eebb79607239dde82)), closes [#424](https://github.com/swagger-api/apidom/issues/424)
* **ns-asyncapi-2-0:** add full support for ServerBindings Object ([fc1a4d6](https://github.com/swagger-api/apidom/commit/fc1a4d60c1b264ad3eeb6f45352d3022f65fdbd3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add metadata to Server.url field ([a1ef9ff](https://github.com/swagger-api/apidom/commit/a1ef9ff2e96a96ff1d16d1ac153d45ef6f48840b))
* **ns-asyncapi-2-0:** add mqtt5 binding elements ([a445b37](https://github.com/swagger-api/apidom/commit/a445b37c3360043e712d322a5669964c8706e563)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for all remaining binding objects ([67b239c](https://github.com/swagger-api/apidom/commit/67b239c3ecc23ae406ed009d02b0a70fc2c22c39)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP 0.9.1 Server Binding Obj ([51ef9eb](https://github.com/swagger-api/apidom/commit/51ef9eb5792e42b261aef20964c827b9df7e5613)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP 1.0 bindings ([91f8dbd](https://github.com/swagger-api/apidom/commit/91f8dbda19ad60006696beaefab847261db74ffd)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Channel Binding Object ([8d38adc](https://github.com/swagger-api/apidom/commit/8d38adc45157625c0a12e08005edef1c9529f374)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Message Binding Object ([698c1e6](https://github.com/swagger-api/apidom/commit/698c1e6ddf212fe04236edd4a8604503aef181c8)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Operation Binding Object ([6104684](https://github.com/swagger-api/apidom/commit/6104684cbb595736c3bfde54ebeccbcd65205db7)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for CorrelationID Object ([c3c5e3c](https://github.com/swagger-api/apidom/commit/c3c5e3cd20da309f79a027905a8e28d0fb530e5f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for DefaultContentType Object ([96856f9](https://github.com/swagger-api/apidom/commit/96856f9cd14be5cfb0dd4df97b8562130e156858)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for ExternalDocs Object ([5a01768](https://github.com/swagger-api/apidom/commit/5a01768bd69197d8dfed0f0d283723530f0ae45d)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Channel Bidning Obj ([f67dabd](https://github.com/swagger-api/apidom/commit/f67dabda6af60fa9264a865553911a1981a13fdd)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Message Binding Object ([b5a10e2](https://github.com/swagger-api/apidom/commit/b5a10e25984cddacc61bc6c05da6f928f6cc7a53)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Operation Binding Object ([1813f04](https://github.com/swagger-api/apidom/commit/1813f045ab92fe41f05519b78d1337a484506a73)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Server Binding Obj ([57b9213](https://github.com/swagger-api/apidom/commit/57b92131ebe7b4788a17dff2bd477dab43eed773)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Channel Obj ([4006f15](https://github.com/swagger-api/apidom/commit/4006f15b2f138f438e7232fc98a11c0a3f82c544)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Message Binding Object ([51d79ae](https://github.com/swagger-api/apidom/commit/51d79ae00d3ddcb7eace662d2ab57450e984c17a)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Op. Binding Object ([4b82b14](https://github.com/swagger-api/apidom/commit/4b82b1431debe30ceccb5090b3cae06716973d18)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Server Binding ([a62e76c](https://github.com/swagger-api/apidom/commit/a62e76c14d95faf5428300dd73a52818f8a74b2f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Message Object ([3b33f1b](https://github.com/swagger-api/apidom/commit/3b33f1ba0cf1cfcfe5e368d571d401a20f32edf3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Message Trait Object ([500181e](https://github.com/swagger-api/apidom/commit/500181eb2b80aab5e4dde18baf0d6559e5cfd20f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MessageBindings Object ([c8a5c63](https://github.com/swagger-api/apidom/commit/c8a5c632fd341ef78e64bfc5c21c5df584bd124c)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Channel Binding Obj ([fcf8300](https://github.com/swagger-api/apidom/commit/fcf83005b8482fe561217b6f354ea21e676275ac)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Message Binding Object ([62033ba](https://github.com/swagger-api/apidom/commit/62033ba72e04dc906078aca2c99965d507c3e087)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Operation Binding Object ([f11bc26](https://github.com/swagger-api/apidom/commit/f11bc26281d51bb25b7cea0c8bcd49c7fbeb1f96)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Server Binding Object ([1a41383](https://github.com/swagger-api/apidom/commit/1a41383b8cd89dc58560d1b28ffe9d24c0638fa3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OAuthFlow Object ([54949fa](https://github.com/swagger-api/apidom/commit/54949fab7451b4ac98e975753043ba59381745eb)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OAuthFlows Object ([f759bb5](https://github.com/swagger-api/apidom/commit/f759bb5ac915cac12ce55b4c324193e45ea93167)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OperationBindings Object ([e5500eb](https://github.com/swagger-api/apidom/commit/e5500ebea9e63bdc4619992560f182771d56626e)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OperationTrait Object ([8e72347](https://github.com/swagger-api/apidom/commit/8e72347d798e7b45b9d507f4125cca8e8b1158fb)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Security Scheme Object ([b706269](https://github.com/swagger-api/apidom/commit/b706269fc9e7fee6b57399d5f20661e165ae48d9)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Tag Object ([d31f532](https://github.com/swagger-api/apidom/commit/d31f532d8a060b5ff3e5a74f6a17c490a1ac4e76)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Tags Object ([e25d704](https://github.com/swagger-api/apidom/commit/e25d704ddb3a5d634a5ea1abfe47567a8e4cb937)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Message Binding Obj ([43f0cb7](https://github.com/swagger-api/apidom/commit/43f0cb7c81ba34f51c9b09008d825850cf85cb8a)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Operation Binding Obj ([c194516](https://github.com/swagger-api/apidom/commit/c1945161752e71cce42a43b169443fdd8abb4611)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Operation Binding Object ([e7bc510](https://github.com/swagger-api/apidom/commit/e7bc5106b773b60905af74dee639c7f797cb10c4)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Server Binding Obj ([148aaa5](https://github.com/swagger-api/apidom/commit/148aaa5ff8c59c57d1418135e41c7a85884927a5)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** complete key mapping for namespace visiting ([364ad68](https://github.com/swagger-api/apidom/commit/364ad6887f223138534ab703a6a6100c1a941662))
* **ns-asyncapi-2-0:** introduce plugginable refracting ([#278](https://github.com/swagger-api/apidom/issues/278)) ([32cd470](https://github.com/swagger-api/apidom/commit/32cd47076e978c721980119934098051bad9032d))
* **ns-asyncapi-2:** add reference metadata ([808073f](https://github.com/swagger-api/apidom/commit/808073f0e8a971a77957708c8a98bece6aa24813))
* **ns-openapi-3-1:** add  Contents of String-Encoded Data vocabulary ([88cd7e1](https://github.com/swagger-api/apidom/commit/88cd7e1a33e441aec57d72ddd54fa71ef8634d89)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add additional metadata to outside context objs ([1bc0d14](https://github.com/swagger-api/apidom/commit/1bc0d1415a97a35e8fa10b7ae07261213b15af41)), closes [#450](https://github.com/swagger-api/apidom/issues/450)
* **ns-openapi-3-1:** add all possible keywords for Schema element ([c1237b1](https://github.com/swagger-api/apidom/commit/c1237b1ec321a232a731826e29a4e29c66762f25)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Applicator vocabulary to Schema Object ([78173c4](https://github.com/swagger-api/apidom/commit/78173c4c1eba60a6cf0e2088505ecf9132601178)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Basic Meta-Data vocabulary to Schema Object ([249c4f8](https://github.com/swagger-api/apidom/commit/249c4f87146f5cb6f736e726d75348925d88cb9b)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Core vocabulary to Schema Object ([fac8af3](https://github.com/swagger-api/apidom/commit/fac8af35db90e3eade3812b51aa8c84aef536afe)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Discriminator Object ([#342](https://github.com/swagger-api/apidom/issues/342)) ([987f755](https://github.com/swagger-api/apidom/commit/987f75514afbc6dc7613afe9aa726fcbe85c2b74)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Encoding Object ([56b3b79](https://github.com/swagger-api/apidom/commit/56b3b795a51aff8895595bd88cd67275526a2e6b)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** add Example Object ([382fccf](https://github.com/swagger-api/apidom/commit/382fccf72dd582cb47d8c37949395700530676cd)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** add meta about HeaderElement name ([f54712d](https://github.com/swagger-api/apidom/commit/f54712dde8d39a0b74a6b420d48dbcf3e2b8707a)), closes [#444](https://github.com/swagger-api/apidom/issues/444)
* **ns-openapi-3-1:** add meta about http status code to Response ([8d80c7e](https://github.com/swagger-api/apidom/commit/8d80c7ea9a1de6b4ec45a246d89af0555629eafd)), closes [#444](https://github.com/swagger-api/apidom/issues/444)
* **ns-openapi-3-1:** add metadata to Server.url field ([fe4e371](https://github.com/swagger-api/apidom/commit/fe4e371dbb530d668b19c1516c1c9c1538ea1867))
* **ns-openapi-3-1:** add OAS vocabulary to Schema Object ([1506602](https://github.com/swagger-api/apidom/commit/1506602fde40b146b5c91b8d301627d9496f836b)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add reference metadata ([5ab586e](https://github.com/swagger-api/apidom/commit/5ab586ef366b0bbd57674520baa6fa1dd8f3d3ea))
* **ns-openapi-3-1:** add Semantic Content vocabulary to Schema ([ed8535a](https://github.com/swagger-api/apidom/commit/ed8535a14e68d9aca71f1d5ce267cddc121a3c3e)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add support for Boolean JSON Schemas ([3fc340f](https://github.com/swagger-api/apidom/commit/3fc340f142b482245f2fea30d856091e104f7fc0))
* **ns-openapi-3-1:** add support for Header Object ([8cfef80](https://github.com/swagger-api/apidom/commit/8cfef8051992b0e6c1804630415beeb8509a43ac))
* **ns-openapi-3-1:** add support for JSON Schema Dialect ([15e3449](https://github.com/swagger-api/apidom/commit/15e3449e37d557a89eb1a12d44f7c3d8ee250365)), closes [#339](https://github.com/swagger-api/apidom/issues/339)
* **ns-openapi-3-1:** add support for Link Object ([1007315](https://github.com/swagger-api/apidom/commit/100731572c56b4835d8e0b1c1fdbb2712cec92f3))
* **ns-openapi-3-1:** add support for OAuth Flow Object ([b53fa53](https://github.com/swagger-api/apidom/commit/b53fa53c702c8374870bf013430d2c27b26db551))
* **ns-openapi-3-1:** add support for OAuth Flows Object ([8cd324c](https://github.com/swagger-api/apidom/commit/8cd324c42b583b5958b952182d3c47b8b0369139))
* **ns-openapi-3-1:** add support for Security Scheme Object ([5bb977e](https://github.com/swagger-api/apidom/commit/5bb977e0f21ff11f3e959f7e4ae462e4e1b840f8))
* **ns-openapi-3-1:** add support for Tag Object ([e9c1f11](https://github.com/swagger-api/apidom/commit/e9c1f11fa2d83266501b1f8b471c13b902861266))
* **ns-openapi-3-1:** add support for XML Object ([bbddb3e](https://github.com/swagger-api/apidom/commit/bbddb3e65f8c7213e44914704fdf1cf600e40fab)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add tests using dehydrated ApiDOM snapshots ([b60353a](https://github.com/swagger-api/apidom/commit/b60353abdddc0e64245986d20d2e794697e9de5f)), closes [#438](https://github.com/swagger-api/apidom/issues/438) [#360](https://github.com/swagger-api/apidom/issues/360)
* **ns-openapi-3-1:** add Unevaluated vocabulary to Schema Object ([4ba72e5](https://github.com/swagger-api/apidom/commit/4ba72e58ae91d4380f6475df7808f18a7017a772)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Validation vocabulary to Schema Object ([55a98ce](https://github.com/swagger-api/apidom/commit/55a98ce1c954abfcbb22cf566e9b5e74ff879e85)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** complete key mapping for namespace visiting ([#274](https://github.com/swagger-api/apidom/issues/274)) ([0a2ef19](https://github.com/swagger-api/apidom/commit/0a2ef19d347a93ba669991f09bea13d55d7aa605))
* **ns-openapi-3-1:** finish Calback Object ([b11a5c8](https://github.com/swagger-api/apidom/commit/b11a5c8aaa2a6bfde6aab98f8ecfee774d8f8b51)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Components Object ([e840834](https://github.com/swagger-api/apidom/commit/e840834f4e66d09f94dd811627622a99a503435e)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Media TYpe Object ([57de422](https://github.com/swagger-api/apidom/commit/57de42265579762aafe5dd2b6090eb324511b3ed)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish OpenAPI Object ([adeacff](https://github.com/swagger-api/apidom/commit/adeacff4a9e95f464dd0c23f418a55ff5c0f2b8f)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Request Body Object ([12a21fd](https://github.com/swagger-api/apidom/commit/12a21fdb3cf840b1f3380255880ef4cf0d764c98)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** implement refractor plugin for  inheritance ([9171db9](https://github.com/swagger-api/apidom/commit/9171db92f4001c0cb1c3ee24a544fc4964d17728)), closes [#362](https://github.com/swagger-api/apidom/issues/362)
* **ns-openapi-3-1:** implement refractor plugin for $id inheritance ([e7bd45a](https://github.com/swagger-api/apidom/commit/e7bd45a53cb5f75bfbdd21cea7875e6835e88abe)), closes [#363](https://github.com/swagger-api/apidom/issues/363)
* **ns-openapi-3-1:** introduce plugginable refracting ([dc311e9](https://github.com/swagger-api/apidom/commit/dc311e9838d9bbc025591309dd86bb6b08c33434))
* **OAS ns:** add support for response->content->mediaType-schema ([7277139](https://github.com/swagger-api/apidom/commit/7277139983ed25f2064a62797019d172a241aee4))
* **openapi-3-1:** finish refractor implementation ([987ddc1](https://github.com/swagger-api/apidom/commit/987ddc1250414771d95aabebab90c7366a3004e5))
* **openapi-3.1-adapter:** add support for browser build fragments ([30782a0](https://github.com/swagger-api/apidom/commit/30782a03e947bfc995fbe94bfe8c997432171abd)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **openapi-ns:** add predicates ([46a2161](https://github.com/swagger-api/apidom/commit/46a2161dbac60ee48d57dac70f9348035548f3a9)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* **OpenApi3.1-Json:** add support for Parameter and Reference Object ([a4c5525](https://github.com/swagger-api/apidom/commit/a4c55255b98c40429ccd245c7e1ea363fe01e5ab))
* **OpenApi3.1-Yaml:** add support for additional objects ([5479c92](https://github.com/swagger-api/apidom/commit/5479c92d0d411637d34622d1c47d3b29629a3b71)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Components and Schema ([ef44ceb](https://github.com/swagger-api/apidom/commit/ef44cebdcaa61fbf8b58f384a945d777fd62d72f)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for empty pair empty value ([eef46e8](https://github.com/swagger-api/apidom/commit/eef46e8c21fd1cd891a64293381bd0cce2b7abbc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for generic visitors ([7dce6f5](https://github.com/swagger-api/apidom/commit/7dce6f5b392f6f4b8b528ee378ae8df7fbda0026)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Info, License and Contact ([b4161b6](https://github.com/swagger-api/apidom/commit/b4161b68910351460f9358df3051bfb6360b377d)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for OpenApi.security field ([7065807](https://github.com/swagger-api/apidom/commit/7065807dcac0e93a202b99cc06f51f69a7c9992b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Parameter and Reference Object ([ee754f6](https://github.com/swagger-api/apidom/commit/ee754f614d47cb41488a3468633698a3c71f0321))
* **OpenApi3.1-Yaml:** add support for Responses and Response ([3a6667a](https://github.com/swagger-api/apidom/commit/3a6667a97fc85e02d7e9b93652a0aac015785e42)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Server and ServerVariable ([51de6e4](https://github.com/swagger-api/apidom/commit/51de6e453f72441738f3cba23abdf9e8670aceaf)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for stream comments ([b34e0ae](https://github.com/swagger-api/apidom/commit/b34e0ae6a3811b979ca3358e7c55adab6ea7183b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for streams ([#114](https://github.com/swagger-api/apidom/issues/114)) ([29260c5](https://github.com/swagger-api/apidom/commit/29260c513411d7fd66305b81d5c3a92a0b802fdc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1:** add additional metadata to Operation ([4f3684b](https://github.com/swagger-api/apidom/commit/4f3684b75155abd7ae2cd53ef0f791029bb1d45f)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add fixed and mixed fields generic visitors ([666ba12](https://github.com/swagger-api/apidom/commit/666ba126088921c29360abcb34424930ac1d675b)), closes [#91](https://github.com/swagger-api/apidom/issues/91)
* **OpenApi3.1:** add support for additional fields to Operation ([4b2452a](https://github.com/swagger-api/apidom/commit/4b2452a88919a904bc6f20ddbc43a650de44d107)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for additional fields to Operation ([#88](https://github.com/swagger-api/apidom/issues/88)) ([e69b47a](https://github.com/swagger-api/apidom/commit/e69b47a36700ccd5da9591c7632622451f80bb2a)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for MemberElement sourcemaps ([cd569e0](https://github.com/swagger-api/apidom/commit/cd569e00267a1f3ef104b3579017c2245de56ad7)), closes [#71](https://github.com/swagger-api/apidom/issues/71)
* **OpenApi3.1:** add support for Paths and PathItem objects ([#68](https://github.com/swagger-api/apidom/issues/68)) ([de2cf3e](https://github.com/swagger-api/apidom/commit/de2cf3e2ed07d9ac61144d61e4bcf4f388f3f3fc)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for unknown object fields ([cc0400e](https://github.com/swagger-api/apidom/commit/cc0400e04c85c9690a3feb1da79dc105780aee18)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **OpenApi3.1:** add support for unknown values ([90dce03](https://github.com/swagger-api/apidom/commit/90dce036eed2de1421cce5067e6f42d6a0a97c42)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **OpenApi3.1:** all support for all Operation fields ([21dcbcc](https://github.com/swagger-api/apidom/commit/21dcbccb1b39d9d9f792c79c35e614f21454c85c)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **parser:** add AsyncAPI 2.0 adapter ([#57](https://github.com/swagger-api/apidom/issues/57)) ([2535860](https://github.com/swagger-api/apidom/commit/2535860dbb9a6d1e8342fca0f7647dea611ef0d9))
* **parser:** add AsyncAPI 2.0.0 adapter implementation ([#58](https://github.com/swagger-api/apidom/issues/58)) ([c7cb963](https://github.com/swagger-api/apidom/commit/c7cb96379748cf07fab2201568405e16c164b133))
* **parser:** introduce API for finding namespace ([7650220](https://github.com/swagger-api/apidom/commit/765022082a316cf4b16b25245e757136f0a18f57)), closes [#234](https://github.com/swagger-api/apidom/issues/234)
* **PathItemObject:** implement all properties ([9f9407c](https://github.com/swagger-api/apidom/commit/9f9407cbcd68b7e1dc63fab49ed187484f8b70c0)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **playground:** add multiple enhancements ([82b54d0](https://github.com/swagger-api/apidom/commit/82b54d056a24fdf66e9bd8923e054649905a04ca))
* **playground:** add non working resolve integration ([ad13897](https://github.com/swagger-api/apidom/commit/ad138972d789063049ca95805692f14f745ac59c))
* **playground:** add s-expression and value interpretations ([99a1f36](https://github.com/swagger-api/apidom/commit/99a1f360a166b438291344523bf7209af1461322)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** add support for AsyncAPI 2.1 ([3565989](https://github.com/swagger-api/apidom/commit/35659890fd6ace4a7bfc4333928843b6f11faa7c)), closes [#461](https://github.com/swagger-api/apidom/issues/461)
* **playground:** add support for injectable interpreter ([d79270c](https://github.com/swagger-api/apidom/commit/d79270c769fd57a0de8f107396558fe39ee0b8e2))
* **playground:** enhance dereferencing with interpreter options ([2c94c27](https://github.com/swagger-api/apidom/commit/2c94c277866d0f6263e12c4759d3e7084329f516)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** integrate dereference ([9eb1167](https://github.com/swagger-api/apidom/commit/9eb11676451d91361c297c3eec49b7465204d1f8))
* **playground:** integrate resolver ([9c50482](https://github.com/swagger-api/apidom/commit/9c50482465bbc0234266115fefeaab1e341afbe7))
* **playground:** visual playgrand for ApiDOM features ([44d2b0c](https://github.com/swagger-api/apidom/commit/44d2b0c0af65a5718df8437e993a16cf4a9295fa))
* **predicates:** add predicates for higher order minim types ([7bb8c26](https://github.com/swagger-api/apidom/commit/7bb8c26279909ac8e14308d31d3ac0eb153d06f2)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* prepare codebase for schema support ([16054c8](https://github.com/swagger-api/apidom/commit/16054c8db3396eb62b330b32349f5ce2db6e1ec4)), closes [#9](https://github.com/swagger-api/apidom/issues/9)
* **referece:** add support for couting referece depth ([dfdb887](https://github.com/swagger-api/apidom/commit/dfdb887f3ac44c9e4e7ca6c3c96cf9d3f3f367d4))
* **referece:** add support for setting max depth of resolution ([0e71846](https://github.com/swagger-api/apidom/commit/0e7184618a14ff24bd276cd14638155160697b4b))
* **reference:** add additional metadata during dereference ([659323c](https://github.com/swagger-api/apidom/commit/659323c9a4bfc2e58eceeb74d5178c22b5308328)), closes [#384](https://github.com/swagger-api/apidom/issues/384)
* **reference:** add AsyncApi 2.0.0 dereference ([2f34e19](https://github.com/swagger-api/apidom/commit/2f34e19dfbb972fa8ce7f2d8b010a5fb7c097bf7)), closes [#304](https://github.com/swagger-api/apidom/issues/304)
* **reference:** add AsyncApi 2.0.0 external resolution ([#334](https://github.com/swagger-api/apidom/issues/334)) ([b3a3914](https://github.com/swagger-api/apidom/commit/b3a391481360004d3d4a56c1467cece557442ec8)), closes [#305](https://github.com/swagger-api/apidom/issues/305)
* **reference:** add AsyncApi 2.0.x JSON reference parser ([e3aa9af](https://github.com/swagger-api/apidom/commit/e3aa9af6876979e0fe1eab1d8eac5b5e98a4f271))
* **reference:** add AsyncApi 2.0.x YAML reference parser ([5eea3ba](https://github.com/swagger-api/apidom/commit/5eea3ba69d039ab753f09c4a547d74c509a7f6dd))
* **reference:** add binary parser plugin ([7c52686](https://github.com/swagger-api/apidom/commit/7c526869c1498618a0784b6010ca2a1e68833d33)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add file resolver implementation ([12a8663](https://github.com/swagger-api/apidom/commit/12a866325ec05d1c4662be0a4be7ad2f69fcf431))
* **reference:** add HTTP resolver implementation ([d00cd7f](https://github.com/swagger-api/apidom/commit/d00cd7f06de155d629fa89d55032f27bf8c143fe))
* **reference:** add infra code for running plugins ([1bb65e9](https://github.com/swagger-api/apidom/commit/1bb65e931f5d844a59d3631e5bca930d06bc0e0b))
* **reference:** add json reference parser ([a09311a](https://github.com/swagger-api/apidom/commit/a09311afbfa98dbef0b548c415840cac6d09bb08))
* **reference:** add naive support for  keyword ([15880a8](https://github.com/swagger-api/apidom/commit/15880a8426b566ea6615c58a9f1265b2fb16264b)), closes [#371](https://github.com/swagger-api/apidom/issues/371)
* **reference:** add OAS 3.1 Example.externalValue dereference ([751188f](https://github.com/swagger-api/apidom/commit/751188fc92ee883535fa58a57a9683414b3765a0)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add OAS 3.1 Example.externalValue ext. resolution ([fd93841](https://github.com/swagger-api/apidom/commit/fd93841a1725b0f8ea7aee0971c3784bdf7e7c20)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add OpenApi 3.1.x JSON reference parser ([dda56c8](https://github.com/swagger-api/apidom/commit/dda56c8245a91181b10f22f432e7ea809c2ce672))
* **reference:** add OpenApi 3.1.x YAML reference parser ([f7301fc](https://github.com/swagger-api/apidom/commit/f7301fca32f837ee68c6da46707d664ef1c895d4))
* **reference:** add parsing machinery ([c050ae0](https://github.com/swagger-api/apidom/commit/c050ae0feab59caef78066c723beac0cd530b386))
* **reference:** add POC implementation of JSON Schema deference ([f585e1f](https://github.com/swagger-api/apidom/commit/f585e1f7f3bfedfaa2065c37a7ab9369ddd2dc07)), closes [#366](https://github.com/swagger-api/apidom/issues/366)
* **reference:** add predicate for Reference like elements ([23f3a87](https://github.com/swagger-api/apidom/commit/23f3a871314181049ad11a15bbc8c37cfaad55c6))
* **reference:** add primitive dereference api ([8c0b2d8](https://github.com/swagger-api/apidom/commit/8c0b2d894dbd93265b545309454b70e3a730ead4))
* **reference:** add public library API ([243e832](https://github.com/swagger-api/apidom/commit/243e83233eddc60389012e40dcaad980a455fa5a))
* **reference:** add single point of entry to resolve machinery ([ec46f7d](https://github.com/swagger-api/apidom/commit/ec46f7dd8b79e46c30ed3943400669b2b1725a9e))
* **reference:** add support for $anchor  during dereference ([cf0f403](https://github.com/swagger-api/apidom/commit/cf0f403ce32dee1f4117cdb88c10dd3fecb9a8c8)), closes [#376](https://github.com/swagger-api/apidom/issues/376)
* **reference:** add support for OAS 3.1 Link deference ([18c4363](https://github.com/swagger-api/apidom/commit/18c43636fc806f7356d0de61ddb0e23fafea4e6c)), closes [#463](https://github.com/swagger-api/apidom/issues/463)
* **reference:** add support for OAS 3.1 Link ext. resolution ([b001ce8](https://github.com/swagger-api/apidom/commit/b001ce8e3e4ce04659686fd0c62f2ca83d3e509c)), closes [#465](https://github.com/swagger-api/apidom/issues/465)
* **reference:** add support for OAS 3.1 Path Item dereference ([02717c9](https://github.com/swagger-api/apidom/commit/02717c933e65e807a0358c7617b9a708835d9ceb)), closes [#458](https://github.com/swagger-api/apidom/issues/458)
* **reference:** add support for OAS 3.1 Path Item ext. resolution ([24189b8](https://github.com/swagger-api/apidom/commit/24189b86637f43828d29bd92829d08f1a50f67dc)), closes [#459](https://github.com/swagger-api/apidom/issues/459)
* **reference:** add support for resolving ApiDOM agains JSON Pointer ([3f179a0](https://github.com/swagger-api/apidom/commit/3f179a07c016216090e4fc86b9a6c35c59cebf69))
* **reference:** add support for Schema Object external resolution ([1376148](https://github.com/swagger-api/apidom/commit/1376148385236929d66df6b7a0b984bf46e4d485)), closes [#307](https://github.com/swagger-api/apidom/issues/307)
* **reference:** add support for switching external resolution on/off ([16d5696](https://github.com/swagger-api/apidom/commit/16d5696bdda8ccc7e21d3b496d897030dffd1259))
* **reference:** add support for tracking depth ([0fcecf0](https://github.com/swagger-api/apidom/commit/0fcecf0fca9410ab82c08e5809e0d47e0c43fe09)), closes [#320](https://github.com/swagger-api/apidom/issues/320)
* **reference:** add support for unkonwn URIs ([a03f7b7](https://github.com/swagger-api/apidom/commit/a03f7b7b1d857c4ca80ce3ac838f57cc3349d130)), closes [#473](https://github.com/swagger-api/apidom/issues/473)
* **reference:** add support utils for for resolve agorytm ([fb13bd0](https://github.com/swagger-api/apidom/commit/fb13bd0249317e7d0913e2f22a8c1b1b56c90d24))
* **reference:** add various helpers for external resolution ([0e8317d](https://github.com/swagger-api/apidom/commit/0e8317d591f5698c6a0b1f335cc655a0d3f40161))
* **reference:** add yaml reference parser ([19eac45](https://github.com/swagger-api/apidom/commit/19eac45d073eb9347466faf79790229d5bc44d4f))
* **Reference:** annotate Reference elements with classes ([29895a7](https://github.com/swagger-api/apidom/commit/29895a724e5d257f8c421d2a81fb73b64b68aa26))
* **reference:** expose JSON Pointer utils ([b7bd3f2](https://github.com/swagger-api/apidom/commit/b7bd3f23a5aef923d2b89758f12699103b441942))
* **reference:** finalize reference resolver algorithm ([61ab29b](https://github.com/swagger-api/apidom/commit/61ab29b17d9ffb0ae8fdc73e022c9b3711869abe))
* **reference:** ignore external references by configration ([b5e89f8](https://github.com/swagger-api/apidom/commit/b5e89f83dbf1df4a5975ef02c3e3f7e64c2f8eae)), closes [#324](https://github.com/swagger-api/apidom/issues/324)
* **reference:** implement POC of external dereference ([1f99a31](https://github.com/swagger-api/apidom/commit/1f99a3145b4f6da3fccf56f61d2cba983e387641))
* **reference:** implement semantic external resolution ([7d62f24](https://github.com/swagger-api/apidom/commit/7d62f243ce393a0709bb747dd7409fb6ae19fe74))
* **reference:** incorporate dereference into overall achitecture ([#285](https://github.com/swagger-api/apidom/issues/285)) ([f9c6c86](https://github.com/swagger-api/apidom/commit/f9c6c8667acc08c86c84c4d9584100d6884dad90))
* **reference:** introduce mutating transcluder ([481bffa](https://github.com/swagger-api/apidom/commit/481bffa81cc5e7543fd47f3608a2f2f779fe941d))
* **reference:** introduce POC of dereference algorithm ([2b3b69f](https://github.com/swagger-api/apidom/commit/2b3b69fc5f51bc1b3c05026ad7a31c9661d2fca1))
* **reference:** introduce ReferenceSet + abstract Reference ([d46296b](https://github.com/swagger-api/apidom/commit/d46296bf3ea18495f355783f0a26a6c516f17bd7))
* **reference:** introduce resolve strategies framework ([4aa9309](https://github.com/swagger-api/apidom/commit/4aa93092b1a76d989c91d8b9be728aff794f89c7))
* **reference:** prepare for introducing parsing [#1](https://github.com/swagger-api/apidom/issues/1) ([e18e0ad](https://github.com/swagger-api/apidom/commit/e18e0ade32333bdccbe193b58a8a90ee93f23e30))
* **reference:** provide pre-computed refSet for dereferencing ([d9b36a5](https://github.com/swagger-api/apidom/commit/d9b36a5f03f68f44355746c0aeacd70be764119f)), closes [#338](https://github.com/swagger-api/apidom/issues/338)
* **reference:** reduce Reference Objects into ReferenceMap ([bb01d74](https://github.com/swagger-api/apidom/commit/bb01d74ba66c532f29f003ef59b5dfdf03e697ba))
* **reference:** support OAS 3.1 Boolean JSON Schema dereference ([3c8820a](https://github.com/swagger-api/apidom/commit/3c8820a5e632652a7d21916cab4a601ed0271adf)), closes [#471](https://github.com/swagger-api/apidom/issues/471)
* **reference:** support relative URIs in Schema. keywords ([4c550c2](https://github.com/swagger-api/apidom/commit/4c550c2a0ad073457fe50caa5c6dd65870c6ab63)), closes [#371](https://github.com/swagger-api/apidom/issues/371)
* **reference:** use CWD as default baseURI ([85baeb0](https://github.com/swagger-api/apidom/commit/85baeb008ca3918fdd8da982fc94bbaaf66fcc83)), closes [#544](https://github.com/swagger-api/apidom/issues/544)
* setup generic editor repo ([78e6f17](https://github.com/swagger-api/apidom/commit/78e6f176a52bc98b977699b80257f4624afa95a0))
* standardize parse result API ([75fb7db](https://github.com/swagger-api/apidom/commit/75fb7dba665582c45a78fc6baf04d64885f6b989))
* **traversal:** add traverse function ([3d1c64d](https://github.com/swagger-api/apidom/commit/3d1c64dda1d52f761750a901bb0d1206171b4a47))
* type declarations for all packages ([4556b31](https://github.com/swagger-api/apidom/commit/4556b3170db4f2d27d288facb3263ba82cb17036))
* **yaml-ast:** add support for formatting string scalars ([c88b34f](https://github.com/swagger-api/apidom/commit/c88b34f7abc7dd29399949dcb2b83a9391c8a34f)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for explicit Failsafe schema ([27bf0d4](https://github.com/swagger-api/apidom/commit/27bf0d492c0aaf84716d265f1315259119ce3ea7)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for explicit JSON schema ([84025b1](https://github.com/swagger-api/apidom/commit/84025b186bb46ba0cb0194876e0e2f8aa5dc52cf)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for YAML block folded scalars ([038d3af](https://github.com/swagger-api/apidom/commit/038d3afeed363518aee16d62ef33e0aa749c5374)), closes [#249](https://github.com/swagger-api/apidom/issues/249)
* **yaml:** add support for YAML block scalar literals ([e5e4c7a](https://github.com/swagger-api/apidom/commit/e5e4c7ab5361843e68255e9f9fbc292bb205cbf2)), closes [#249](https://github.com/swagger-api/apidom/issues/249)
* **yaml:** normalize scalars before formatting ([542f965](https://github.com/swagger-api/apidom/commit/542f965b3d774e33b491805da0cacf64cc840e5f)), closes [#250](https://github.com/swagger-api/apidom/issues/250)


### Performance Improvements

* **ns-asyncapi-2-0:** introduce visitor shortcut ([78a54dc](https://github.com/swagger-api/apidom/commit/78a54dc5e6f6c1116b30003510f7dedefbce015e)), closes [#398](https://github.com/swagger-api/apidom/issues/398)
* **ns-openapi-3-1:** fold refractor plugins into refracting phase ([7d23400](https://github.com/swagger-api/apidom/commit/7d23400361737f9663a27975fc75aaa80a513214)), closes [#400](https://github.com/swagger-api/apidom/issues/400)
* **ns-openapi-3-1:** introduce visitor shortcut ([91b96ad](https://github.com/swagger-api/apidom/commit/91b96ad4c0056d18b91f7f0bf150934ff88785e9)), closes [#396](https://github.com/swagger-api/apidom/issues/396)
* **parser-adapter-yaml-1-2:** analyze performance profile ([89c8959](https://github.com/swagger-api/apidom/commit/89c89598ed1611290baa1c9a5f9199abf8583ffc)), closes [#408](https://github.com/swagger-api/apidom/issues/408)
* **perser-adaper-json:** fold syntactic analysis phases ([c983b47](https://github.com/swagger-api/apidom/commit/c983b47294ca7e4b204608caa04f1b98d48b16d9)), closes [#406](https://github.com/swagger-api/apidom/issues/406)
* remove transcluder from all semantic parsers ([906bd04](https://github.com/swagger-api/apidom/commit/906bd048f889227b959a7dd61336d4be10fb15c4)), closes [#412](https://github.com/swagger-api/apidom/issues/412)





# 0.1.0 (2021-09-28)


### Bug Fixes

* **adapters:** expose nanemspace instances from adapters ([e885d9e](https://github.com/swagger-api/apidom/commit/e885d9e9dce9f5e01c1730cefa196cc21b9a5b8b))
* **apidom-ls:** refs [#297](https://github.com/swagger-api/apidom/issues/297) - bump yaml-js version ([38ac243](https://github.com/swagger-api/apidom/commit/38ac243c7780f769af78da7056a823c6454b844f))
* **apidom:** add 'typeRoots' to tsconfig ([80c3cf2](https://github.com/swagger-api/apidom/commit/80c3cf25ef764bdeb5e8e5b9af2f4c040327c361))
* **apidom:** fix refract structures hydration ([#227](https://github.com/swagger-api/apidom/issues/227)) ([3309a70](https://github.com/swagger-api/apidom/commit/3309a70637b1e237a582cfa66b32b124a6dde0d1)), closes [#226](https://github.com/swagger-api/apidom/issues/226)
* **AST:** compensate for inconsistent tree-sitter SyntaxNode API ([8d04daa](https://github.com/swagger-api/apidom/commit/8d04daaf0ea4ed99d430fdd87a72c5ba0afff67c)), closes [#69](https://github.com/swagger-api/apidom/issues/69)
* **asyncapi-2-1:** add IBM MQ visitor mapping ([04d1e43](https://github.com/swagger-api/apidom/commit/04d1e43a359c0a8e366db13752028dc95d8e9668))
* **asyncapi-2-1:** fix parsing of Operation.message field ([#561](https://github.com/swagger-api/apidom/issues/561)) ([ea7fc15](https://github.com/swagger-api/apidom/commit/ea7fc152593bdbb1ccd04affbaf899471f99a915)), closes [#543](https://github.com/swagger-api/apidom/issues/543)
* **asyncapi:** allow replace Schema for Reference in Message.payload ([ae11834](https://github.com/swagger-api/apidom/commit/ae11834838976e3c31304e0929ecfd676c27a98f)), closes [#427](https://github.com/swagger-api/apidom/issues/427)
* avoid webpack bug by changing type mapping ([#282](https://github.com/swagger-api/apidom/issues/282)) ([5433197](https://github.com/swagger-api/apidom/commit/543319781088b7105a23417562e75f7f02cfc7a0))
* **editor:** 2nd pane scrolling ([4e26c81](https://github.com/swagger-api/apidom/commit/4e26c81abdaf849db487216c242cdde0826dd7da))
* **editor:** actual oas3.1 spec in fixtures ([bcb3435](https://github.com/swagger-api/apidom/commit/bcb3435510bcedf0cbb8614c75f3b568fbd9b5a4))
* **editor:** add extra var check in topbar component ([508afb0](https://github.com/swagger-api/apidom/commit/508afb0916f27f186541d805cf9562f493b76bf8))
* **editor:** add extra var check in topbar component ([57b812a](https://github.com/swagger-api/apidom/commit/57b812a4287ec275469d2325b674272be7c48633))
* **editor:** add try/catch for download resolved actions ([22cbace](https://github.com/swagger-api/apidom/commit/22cbace6cd81a7adbc00d817d566e36b72de59c2))
* **editor:** add wait and extra checks for cypress monaco.spec ([9d08168](https://github.com/swagger-api/apidom/commit/9d08168cf5d7587677b44c63c97ac9d758484fa0))
* **editor:** additional `dispose()` on unmount ([0ba77d5](https://github.com/swagger-api/apidom/commit/0ba77d5329b9a4d2f46621a8f9b99b4e906c0b6c))
* **editor:** allow hover tooltip to exceed its container ([1cd4c89](https://github.com/swagger-api/apidom/commit/1cd4c894d4d37dcdd7dbb4de91813d67b0d3e3ba))
* **editor:** apidom.worker import editor from node_modules ([643718e](https://github.com/swagger-api/apidom/commit/643718ecf3e335eeeb52b4f9fc4e4132b1db1121))
* **editor:** apidomContext required for codeActions ([4225011](https://github.com/swagger-api/apidom/commit/42250114032b93dcf2682479092ae46af22e6469))
* **editor:** codeActions error handling with unsupported spec ([d6a6dda](https://github.com/swagger-api/apidom/commit/d6a6ddab446e32c18e7f32fb928a2fc11f1c1378))
* **editor:** convertToYaml should always return a response ([22e609d](https://github.com/swagger-api/apidom/commit/22e609d1029aff05d3158e6ea939a5a44c258de7))
* **editor:** convertToYaml should always return a response ([a0c8282](https://github.com/swagger-api/apidom/commit/a0c8282d38e532ab34af87c466eb18c1213a45eb))
* **editor:** documentSymbols error handling for unsupported spec ([98b5c5e](https://github.com/swagger-api/apidom/commit/98b5c5e585bbe46ebadff1e78e1e05766dea1c99))
* **editor:** documentSymbolsAdapter call correct worker method ([bb06083](https://github.com/swagger-api/apidom/commit/bb0608372f343185efbce3d1f5ceb1c6b3694e39))
* **editor:** FileMenuDropdown state update checks ([e669f2f](https://github.com/swagger-api/apidom/commit/e669f2fc4f0e5a7eb2670770cb9d22c2e8d03d23))
* **editor:** genericEditorPlugin layout no console errors ([21d5782](https://github.com/swagger-api/apidom/commit/21d57824d3bae95350b5e33edc38808b3ded141d))
* **editor:** genericEditorPlugin layout no console errors ([85c7e7d](https://github.com/swagger-api/apidom/commit/85c7e7d97d306f1dc80776d365035dc2025c9bc4))
* **editor:** hover error handling with unsupported spec ([7e4b490](https://github.com/swagger-api/apidom/commit/7e4b490898c9f1fe09d3687840a17ab8cbe19624))
* **editor:** importUrl label control for unit test ([3378b81](https://github.com/swagger-api/apidom/commit/3378b81da6510bbbcadd71e0f2f4ec5a54c4739b))
* **editor:** initializeParsers should return a promise ([bc08608](https://github.com/swagger-api/apidom/commit/bc08608cb5e24fb6f567f123a18e3ab336588fc3))
* **editor:** jsonService doValidation ([dedf41e](https://github.com/swagger-api/apidom/commit/dedf41e577eac49826184c8b6d7524026a8edd9c))
* **editor:** monaco theme updates ([380c39f](https://github.com/swagger-api/apidom/commit/380c39f2ecfb6fe882b306fab2884209f75a9904))
* **editor:** more monaco theme updates ([9cf2ee0](https://github.com/swagger-api/apidom/commit/9cf2ee0c4cfcc8c4736eb4392b080d6541834353))
* **editor:** more robust check for await topbarActions result ([8cc7720](https://github.com/swagger-api/apidom/commit/8cc77201704f0786a17ec40be3009476db21de4a))
* **editor:** more robust check for await topbarActions result ([867c0c0](https://github.com/swagger-api/apidom/commit/867c0c0d45b996407107d3709f33e743f12c5914))
* **editor:** re-enable minimap in monaco ([8265c31](https://github.com/swagger-api/apidom/commit/8265c31914655468528d31e6a05549f4fca76532))
* **editor:** reinstantiate generator lists on specVersion change ([7eedd88](https://github.com/swagger-api/apidom/commit/7eedd8826cebb36b579d73f428283c3b4d4a35a3))
* **editor:** reinstantiate generator lists on specVersion change ([42aca80](https://github.com/swagger-api/apidom/commit/42aca80fca5cac8cdc42965a792705f5c11df076))
* **editor:** remove extraneous constructor .bind ([57bc622](https://github.com/swagger-api/apidom/commit/57bc6224a5b6f8acb97a233d60c33b05f3409373))
* **editor:** revert webpack config back to single entry point ([cdf7463](https://github.com/swagger-api/apidom/commit/cdf74631b585a390e6dc2e22b351194ce7f69985))
* **editor:** saveAsYaml file extension ([83826aa](https://github.com/swagger-api/apidom/commit/83826aaa27c26552e497f777a9e55beb089646b1))
* **editor:** semanticHighlighting.enabled setting ([0e49fbb](https://github.com/swagger-api/apidom/commit/0e49fbb41e1d7842a3bac6905645a86bb0c2c9a2))
* **editor:** topbar color, font sizes, padding ([5c2e7a3](https://github.com/swagger-api/apidom/commit/5c2e7a359b4a2e439b47b02edba349d9ec806851))
* **editor:** topbar padding and fonts ([d319323](https://github.com/swagger-api/apidom/commit/d319323148cfc831a13615b1f13a8300273c0f1e))
* **editor:** unhandled promise rejection for unsupported definitions ([f03b5ae](https://github.com/swagger-api/apidom/commit/f03b5ae8fb4ef7831e160abc4dccf57ebaff5c53))
* **editor:** update changelog statuses ([e757a3e](https://github.com/swagger-api/apidom/commit/e757a3edbc02a3ff16805ed3045936c6bf44e3b9))
* **editor:** use p2m for diagnostics markers ([e386971](https://github.com/swagger-api/apidom/commit/e386971443b8a812585189ece0d9ceedaa8b0086))
* **editor:** wip disabled hooks for Topbar - linting ([a7271b1](https://github.com/swagger-api/apidom/commit/a7271b1f6929f0bb854eafef4e345e65ca3fdd03))
* **editor:** worker error handling with unsupported spec ([167dc3f](https://github.com/swagger-api/apidom/commit/167dc3f1bd74c216e6a794dea84dd479f3fc8e37))
* **elements:** use proper types for accessors ([6c43de4](https://github.com/swagger-api/apidom/commit/6c43de48c6976eab4e0e41bcf8c31d7eff67e3d3)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* **generic-editor:** fix [#553](https://github.com/swagger-api/apidom/issues/553) - baseURI for deref ([51f45b2](https://github.com/swagger-api/apidom/commit/51f45b24241873b817a51e02e08069b5a774a88b))
* **interpret:** fix icon position to stay always in the same place ([e814b87](https://github.com/swagger-api/apidom/commit/e814b87b86203b8a0f4270c4eb44881d4575e9b8))
* **lexical-analysis:** fix lexical analyzer init. in browser env ([fe91458](https://github.com/swagger-api/apidom/commit/fe91458d0d87390c98471640e9fd32ee182f7e15)), closes [#451](https://github.com/swagger-api/apidom/issues/451)
* missing comma in tsconfig.json ([28265fb](https://github.com/swagger-api/apidom/commit/28265fb91e3648d332616c18b4e174ea6c39042c))
* **namespaces:** fix duplicates in mixed fields visitor ([725ecce](https://github.com/swagger-api/apidom/commit/725ecce4d0a438fba36f62c33516cb8e1ad0e33c))
* **ns-asyncapi-2-0:** fix typo in specification object ([3460aea](https://github.com/swagger-api/apidom/commit/3460aeac9ff986c1fe23e82a883eee04a68c57ef)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-openapi-3-1:** fix bug in embedded-resources- plugin ([2809390](https://github.com/swagger-api/apidom/commit/2809390e7744e4635a85555203ba0b3218fab0e6)), closes [#362](https://github.com/swagger-api/apidom/issues/362)
* **ns-openapi-3-1:** fix bugs in Schema Object refracting ([e9e0cd0](https://github.com/swagger-api/apidom/commit/e9e0cd02addc24397c6802337cd3f0553fe75a50)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **openapi3-1-yaml:** fix PathItem visitor ([523a0c1](https://github.com/swagger-api/apidom/commit/523a0c1f638cd1a75a94472bccaf6c90b7f9b64e))
* **openapi3-1:** fix problem in Paht Item object visiting ([0bea447](https://github.com/swagger-api/apidom/commit/0bea447a25aedf1197581051fd2b7f9f32d35d95))
* **OpenApi3.1:** add source maps to generic Object visitors ([2e1aca5](https://github.com/swagger-api/apidom/commit/2e1aca523a3dd54493cb53116637cc6391cfb927))
* **OpenApi3.1:** disallow extensions on Reference Object ([457e45d](https://github.com/swagger-api/apidom/commit/457e45d066a8e247a834480f16ef06f7a61783ee))
* **OpenApiVisitor:** add sourcMap ([bdc2da7](https://github.com/swagger-api/apidom/commit/bdc2da792854d1a05eead0fe8526f73d6823e6b2)), closes [#48](https://github.com/swagger-api/apidom/issues/48)
* **parser:** fix sync/async inconsistencies ([d1c29f3](https://github.com/swagger-api/apidom/commit/d1c29f3605be43b815194a0876e92cf5212b2ef4)), closes [#310](https://github.com/swagger-api/apidom/issues/310)
* **playground:** allow resolve and dereference in certain conditions ([3ac6951](https://github.com/swagger-api/apidom/commit/3ac69515c2d77cc4aab167281d7a5d1d96991348)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** change initial state to empty one ([a4abaf9](https://github.com/swagger-api/apidom/commit/a4abaf9d8ddeb87d9284908d3d92b571e8cc7cba))
* **playground:** close import dialog before backdrop ([3c5b37c](https://github.com/swagger-api/apidom/commit/3c5b37c4210e85d97fb688ab0d09d6d213a4fd3f))
* **playground:** fix display of resolve console output ([fed0281](https://github.com/swagger-api/apidom/commit/fed02811e31957a963ed21c229ca6db53483508f))
* **playground:** fix paths to wasm files loaded by web worker ([5b35dfe](https://github.com/swagger-api/apidom/commit/5b35dfe2918632e7db6e89ec907a4f76a63af1e5))
* **playground:** fix transpilation of refractors ([b0746fa](https://github.com/swagger-api/apidom/commit/b0746fa9bc15ae4bebd9244a1cf5c73f929078f6))
* **playground:** reset file input after using it ([d5ecbfc](https://github.com/swagger-api/apidom/commit/d5ecbfc3e58f931141af8bd866fa96baf3e5b6f5))
* **reference:** allow dereferencing other elements than ParseResult ([0b099ee](https://github.com/swagger-api/apidom/commit/0b099ee821790d11769dea8c5a91d906f83996e5)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **reference:** allow resolution on other elements than ParseResult ([4d4696b](https://github.com/swagger-api/apidom/commit/4d4696b20754478f27524d4b68f794ebe19cf65f)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **reference:** fix bug in reference predicate logic ([8b5176a](https://github.com/swagger-api/apidom/commit/8b5176a211fbe99ca683f7fb253c765952e26eba))
* **reference:** fix incorrect JSON Schema dereference in OAS 3.1 ([2f1fefa](https://github.com/swagger-api/apidom/commit/2f1fefa948dbe49a80b208a3f6af054346723e8d)), closes [#607](https://github.com/swagger-api/apidom/issues/607)
* **reference:** fix resolution of Schema Object  field ([#525](https://github.com/swagger-api/apidom/issues/525)) ([58350fe](https://github.com/swagger-api/apidom/commit/58350fe1f4354d7a9094ea859268320e461000b6)), closes [#524](https://github.com/swagger-api/apidom/issues/524)
* **reference:** handle inner media types properly during resolution ([d67ca7c](https://github.com/swagger-api/apidom/commit/d67ca7c1f6f319f6676eb3f1f9abea88e0dc7408))
* **reference:** unwrap result after dereferencing ([d4aee1e](https://github.com/swagger-api/apidom/commit/d4aee1ea1f08a1e7b22569d0de1fe5fe923c9013)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **yaml-1-2:** add support for parsing more corner cases ([7b5aff9](https://github.com/swagger-api/apidom/commit/7b5aff9a6f015e4119b2f7f967b9ad3ae6a26a03)), closes [#290](https://github.com/swagger-api/apidom/issues/290)
* **yaml:** fix YAML parsing in browsing environemnt ([8168986](https://github.com/swagger-api/apidom/commit/81689867d6f3dded56b1aee694ec4595c53bd3c0)), closes [#232](https://github.com/swagger-api/apidom/issues/232)


### Features

* **adapters:** make adapters understand refractorOpts ([a314eb5](https://github.com/swagger-api/apidom/commit/a314eb584ec58284e11e22f54385c7af0f7b895b))
* add 1st POC of ApiDOM ([7d5a241](https://github.com/swagger-api/apidom/commit/7d5a241681e50faf481ce80e029c8ec3c72f6a56))
* add additional predicates ([93e49aa](https://github.com/swagger-api/apidom/commit/93e49aa95fce6ce971f0527af9b9be001fffa216))
* add apidom-reference package ([17bd14a](https://github.com/swagger-api/apidom/commit/17bd14a63d43419a1e345f0747a7d2be034c70e1))
* add ArrayElement.set method to minim types ([250fa70](https://github.com/swagger-api/apidom/commit/250fa70c807245f0224b30521f20c1b718e7f527))
* add base predicates ([b435155](https://github.com/swagger-api/apidom/commit/b43515561a05a787c801504c11f42e34fefe6a49)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* add CST to AST transformer for tree-sitter ([9d3f03c](https://github.com/swagger-api/apidom/commit/9d3f03ca870c203d93a9bf9a1a909000d4d12add)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* add extensions support to additional objects ([a658668](https://github.com/swagger-api/apidom/commit/a658668eb4eaa5aecf48a4c20ea5d49a342c37cb)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* add findAtOffset function ([59145fe](https://github.com/swagger-api/apidom/commit/59145fe5a7b2bc3ecc96140c89c93de5d37b4310))
* add OpenApi 3.1 support ([9d48576](https://github.com/swagger-api/apidom/commit/9d48576b01b43b2dff451614f6e483fce1e089ce)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* add reference related metadata to namespaces ([e66cdaa](https://github.com/swagger-api/apidom/commit/e66cdaa7e21e533549175f9f47966a3c6baf9308))
* add support for abstract references ([e246112](https://github.com/swagger-api/apidom/commit/e246112169260d679e0349bff0e6b76469e5408d)), closes [#9](https://github.com/swagger-api/apidom/issues/9)
* add support for AsyncAPI 2.1.0 specification ([c7840c4](https://github.com/swagger-api/apidom/commit/c7840c4d979cddc904d4170aff1635ad695a8fe4)), closes [#461](https://github.com/swagger-api/apidom/issues/461)
* add support for errors and missing literals ([3dc5c3a](https://github.com/swagger-api/apidom/commit/3dc5c3abf191f8900d6f7b7e5a229d458412f2c8)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* add support for generic JSON -> ApiDOM transformation ([47998c9](https://github.com/swagger-api/apidom/commit/47998c9c25f3a100d0386be2b82ab46982c726bd))
* add support for generic YAML -> ApiDOM transformation ([0a1de40](https://github.com/swagger-api/apidom/commit/0a1de4015aa3f7a023d729b73fcb6eb6a1d545a3))
* add support for JSON comments ([87c745e](https://github.com/swagger-api/apidom/commit/87c745e48e30520c1db449d1db8e57da6b95b384)), closes [#4](https://github.com/swagger-api/apidom/issues/4)
* add support for parse errors ([b4392b2](https://github.com/swagger-api/apidom/commit/b4392b2594d523b252eaa1b745b544477aef6022)), closes [#4](https://github.com/swagger-api/apidom/issues/4)
* add support for parsing empty files ([653d78a](https://github.com/swagger-api/apidom/commit/653d78a5d10d9460785c4e70c34931f382bd4853))
* add support for servers field ([718d15b](https://github.com/swagger-api/apidom/commit/718d15b8e77c4f70eda9f586bf42d437193b5790)), closes [#2](https://github.com/swagger-api/apidom/issues/2)
* add support for worker environment ([b375f57](https://github.com/swagger-api/apidom/commit/b375f5755d0233120544e2709e5d6614d2554712)), closes [#287](https://github.com/swagger-api/apidom/issues/287)
* add YAML WASM support ([#107](https://github.com/swagger-api/apidom/issues/107)) ([a4ddf1a](https://github.com/swagger-api/apidom/commit/a4ddf1a6b592a26b43b06db944014b053b6f880e)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **apidom-ast:** introduce async version of visit function ([b627409](https://github.com/swagger-api/apidom/commit/b6274091798e382d674bf339495925eed37c4c9b))
* **apidom-ast:** introduce normalizing and merging visitors ([1aa2786](https://github.com/swagger-api/apidom/commit/1aa2786bc80d9cbf43291109a043e4d0acfa6cf4))
* **apidom-ls:** deref and definition service, various enhancements ([18876a2](https://github.com/swagger-api/apidom/commit/18876a26125c6f6940e57877cea75cf108e8fd4f))
* **apidom-ls:** initial deref service ([c490e45](https://github.com/swagger-api/apidom/commit/c490e453b82801c286ecec7a119114ef0f9e4b7c))
* **apidom-lsp:** first LSP server and VS Code Client extension ([20c1acf](https://github.com/swagger-api/apidom/commit/20c1acffc993e9f791975e7275ba32edc4441a8e))
* **apidom-lsp:** Standalone LSP Server, server ad e2e tests ([7898578](https://github.com/swagger-api/apidom/commit/789857833d447667e1152b64a50fd3a7b77c7b8f))
* **apidom-ls:** standard linter functions and clenup ([e1dda94](https://github.com/swagger-api/apidom/commit/e1dda94a299852aceb78e514bff4f4b0dcf88cb4))
* **apidom-ls:** updated language service library ([bcb2e81](https://github.com/swagger-api/apidom/commit/bcb2e81861cb9f1c4664503038ca696259823889))
* **apidom-monaco:** apidom monaco POC ([a8595b7](https://github.com/swagger-api/apidom/commit/a8595b788f49985be0b633c34be828916b4ed1ce))
* **apidom:** add mechanism to compute parent edges ([#391](https://github.com/swagger-api/apidom/issues/391)) ([4e526d4](https://github.com/swagger-api/apidom/commit/4e526d480526353efeab67889f6be8678ac5a1b7)), closes [#383](https://github.com/swagger-api/apidom/issues/383)
* **apidom:** add refractor for base types ([a4647a7](https://github.com/swagger-api/apidom/commit/a4647a78ff6f4b7fd2963089cb2b31273b0e13cd)), closes [#368](https://github.com/swagger-api/apidom/issues/368)
* **apidom:** add support for element identity via refractor plugins ([#565](https://github.com/swagger-api/apidom/issues/565)) ([94080db](https://github.com/swagger-api/apidom/commit/94080dba39359f89c40155dea6eb8ee86f3d7f5a)), closes [#528](https://github.com/swagger-api/apidom/issues/528)
* **apidom:** add support for transforming ApiDOM into S-expressions ([305e1c9](https://github.com/swagger-api/apidom/commit/305e1c9c2cd35e3b5e722953f1c25d7243a4d9f3)), closes [#429](https://github.com/swagger-api/apidom/issues/429)
* **apidom:** embed AST nodes into parsed structures ([f7e3f76](https://github.com/swagger-api/apidom/commit/f7e3f76259795cbf8d2fae55c4b4631ca32727de)), closes [#10](https://github.com/swagger-api/apidom/issues/10)
* apidomls initial language service ([735951e](https://github.com/swagger-api/apidom/commit/735951ec4e5359740326b5a1c0bc67d372b5cf5e))
* **AST:** add support for directives in YAML transformer ([ddd7d63](https://github.com/swagger-api/apidom/commit/ddd7d6330384e4435d29cf9b4c83d9b2fe53fffc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** add support for YAML AST errors ([a72f5a5](https://github.com/swagger-api/apidom/commit/a72f5a50cc3a4e89179339a43634171ab315800f)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** add YAML CST -> AST transformation for all common types ([e2e1e1b](https://github.com/swagger-api/apidom/commit/e2e1e1b59b5ac79857da22912d36adf902d2ed7b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **ast:** enhance core traversal mechanism to support cycles ([285e768](https://github.com/swagger-api/apidom/commit/285e768627513b2998ac6d4faea1b8b8c33fb94d))
* **AST:** incorporate missing nodes into AST ([65a75b8](https://github.com/swagger-api/apidom/commit/65a75b863a5176a568edd5476e40ae9d3df9c2b0)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **AST:** incorporate Presentation info model into YAML ([18b8960](https://github.com/swagger-api/apidom/commit/18b89605dd2466935088e47caaed06f7f231d2be)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AST:** introduce YAML AST models and predicates ([9ba4561](https://github.com/swagger-api/apidom/commit/9ba4561e6ff58957e24cae6351229805cde241b1)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **ast:** make cycle detection configurable ([7569b43](https://github.com/swagger-api/apidom/commit/7569b43e8cd30a64f43ac7a3e8022d52b9df5894))
* **ast:** make errors and missing nodes part of AST ([6142fab](https://github.com/swagger-api/apidom/commit/6142fabc9520321c1cf2e8fc8107ce992eb02806)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **asyncapi-2-0-0:** finish refractor implementation ([526fc4f](https://github.com/swagger-api/apidom/commit/526fc4f266fc2c8c402461cab63f2e8fd176cf5f))
* **asyncapi-2-0:** add support for Schema cycles ([d7d094d](https://github.com/swagger-api/apidom/commit/d7d094d515d84d47f8ae6a41f70d5d038c719797)), closes [#427](https://github.com/swagger-api/apidom/issues/427)
* **asyncapi-2-1:** add support for Channel Item dereferencing ([3300cb7](https://github.com/swagger-api/apidom/commit/3300cb7b790521ae9bd73222cd453ecb6b1fde8e)), closes [#558](https://github.com/swagger-api/apidom/issues/558)
* **asyncapi-2-1:** add support for Channel Item ext. resolution ([e0e8895](https://github.com/swagger-api/apidom/commit/e0e8895941d8d4d582e4e4254aa316e807cfc705)), closes [#559](https://github.com/swagger-api/apidom/issues/559)
* **asyncapi-ns:** add predicates ([9a25dd2](https://github.com/swagger-api/apidom/commit/9a25dd2ef05a294069cd22b3f2613f2a56b0f88b)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* **AsyncApi2.0.0-Yaml:** add AsyncApi 2.0.0 adapter ([3aa325a](https://github.com/swagger-api/apidom/commit/3aa325ac612da5c892ec332b393afd3c34cc6f2d)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **AsyncApi2.0:** add support for ChannelItem object ([2a06d98](https://github.com/swagger-api/apidom/commit/2a06d981777d4c64216456099c4e0de5e5428731)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Channels object ([a86241a](https://github.com/swagger-api/apidom/commit/a86241a6ca6676cc6282ce2513717ba274aed7df)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for MemberElement sourcemaps ([e419a57](https://github.com/swagger-api/apidom/commit/e419a57b028ef17ed9850109a6debbbcd4b288fe)), closes [#71](https://github.com/swagger-api/apidom/issues/71)
* **AsyncApi2.0:** add support for Parameters object ([d468a73](https://github.com/swagger-api/apidom/commit/d468a73dc186792c95da065c2e974a1f1d171281))
* **AsyncApi2.0:** add support for Server object ([4e507e9](https://github.com/swagger-api/apidom/commit/4e507e907416a6ff9061c7022a164f2bebf3cedb)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Server Variable Object ([7ea19fe](https://github.com/swagger-api/apidom/commit/7ea19fe91f5476ebebc8982874fa877c4935e560)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for Servers object ([bf37684](https://github.com/swagger-api/apidom/commit/bf376842dbaa54a29c0f9a9700c2e44b71613232)), closes [#67](https://github.com/swagger-api/apidom/issues/67)
* **AsyncApi2.0:** add support for unknown values and fields ([2c994af](https://github.com/swagger-api/apidom/commit/2c994af5e825ada8381774937eaa3c86bf26b09a)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **AsyncAPI:** add namespace for AsyncAPI specification ([9e6d37a](https://github.com/swagger-api/apidom/commit/9e6d37a53bb0b735b59bea268dcf51c794fc070c))
* **asyncapi:** add refractor generics ([be3c8d1](https://github.com/swagger-api/apidom/commit/be3c8d16ec7115e299d1084d6688229998b6c198))
* **asyncapi:** add traversal specific to asyncapi ([6ba0f44](https://github.com/swagger-api/apidom/commit/6ba0f44f478cf62065cdf8bf144e73cd35897acc))
* attempts of POC2 ([9af4924](https://github.com/swagger-api/apidom/commit/9af4924c22c05e5be45db956dbb707ec0767bfc1)), closes [#7](https://github.com/swagger-api/apidom/issues/7) [#6](https://github.com/swagger-api/apidom/issues/6) [#5](https://github.com/swagger-api/apidom/issues/5) [#3](https://github.com/swagger-api/apidom/issues/3)
* build proper JSON ast parser with visitor pattern support ([0f65112](https://github.com/swagger-api/apidom/commit/0f651123da588e169a07977520694b870319bdc6))
* demonstrate overlay mechanism in JavaScript ([d320e2f](https://github.com/swagger-api/apidom/commit/d320e2f183514f04a4cb3d078226fc92243c42c8))
* **dereference:** add initial work on external resolution ([816341c](https://github.com/swagger-api/apidom/commit/816341cf795d1e01f11ea5309c6621e0cf569a4b))
* **editor:** add a cancel button for importUrl modal ([405702d](https://github.com/swagger-api/apidom/commit/405702dde10b3c0c552525fd45b0a3770761c76c))
* **editor:** add a cancel button for importUrl modal ([cd8910c](https://github.com/swagger-api/apidom/commit/cd8910c4a96bc8697517f50e8a7bd2bcf246449d))
* **editor:** add apidom-ls babel alias ([76f863b](https://github.com/swagger-api/apidom/commit/76f863b4b1664fdba1a7b9cf8fa20307ee17c730))
* **editor:** add errorModal support to saveAsJson, saveAsYaml ([c8af156](https://github.com/swagger-api/apidom/commit/c8af156a4cfc185aad9f722d93ce16bc0c7d6395))
* **editor:** add errorModal support to saveAsJson, saveAsYaml ([049e9fb](https://github.com/swagger-api/apidom/commit/049e9fb8e9fe8643513c2bd83ccdb8ec4905508f))
* **editor:** add jest .spyOn for file/edit topbarActions ([9799d1b](https://github.com/swagger-api/apidom/commit/9799d1b3aa4fecedbe88b8fd75cdca2fb2eb1b13))
* **editor:** add jest .spyOn for file/edit topbarActions ([eeb7b12](https://github.com/swagger-api/apidom/commit/eeb7b129a29edb96f7b1695b3f7fe99b9e7721f7))
* **editor:** add public dispose method to workerManager ([81bea10](https://github.com/swagger-api/apidom/commit/81bea10f1db74ca0f2e5031d1a216ac6829d79bc))
* **editor:** additional converter return string cases ([a1f2100](https://github.com/swagger-api/apidom/commit/a1f210046ec0f70cfc966e1fa70d2def23e83f5b))
* **editor:** apply theming to minimap background ([928cc72](https://github.com/swagger-api/apidom/commit/928cc72e309fc0f89a7900a3ca30063a33a0ae51))
* **editor:** apply updated styles for error and warning modals ([5e2fc9b](https://github.com/swagger-api/apidom/commit/5e2fc9bb6b01b29b209e06f4d415cd68fd0f15f8))
* **editor:** clear editor when yaml or empty case ([e2e6925](https://github.com/swagger-api/apidom/commit/e2e69255201e794da80b8529bef691e4a70d5907))
* **editor:** clear editor with simple json case ([e677b3c](https://github.com/swagger-api/apidom/commit/e677b3cc2d76e052f0f9db18abcd8cc2d9ffd452))
* **editor:** clearEditor detects spec type for re-init ([baefef3](https://github.com/swagger-api/apidom/commit/baefef302607b4cff16bd61bb33271e946ad41fc))
* **editor:** clearEditor.actions ([ac9c79b](https://github.com/swagger-api/apidom/commit/ac9c79b71423ce47fc1ffaf70bc1e0cdd4db5f0b))
* **editor:** codeActions provider ([98a7cbd](https://github.com/swagger-api/apidom/commit/98a7cbd9ed79c9bcd6bbbc96a0a74311a532b0df))
* **editor:** completionItemsAdapter with apidom ([66e8778](https://github.com/swagger-api/apidom/commit/66e8778a7ce4141d2da47099031088d8392f9f19))
* **editor:** convertJsonToYaml.actions ([3daca5c](https://github.com/swagger-api/apidom/commit/3daca5c27533bfdd0f8baff4c9e4fb5ae132ce04))
* **editor:** convertOas2ToOas3.actions ([188ee24](https://github.com/swagger-api/apidom/commit/188ee24e9d6f5a6cfef1c5459b61e405f9769e52))
* **editor:** convertToOas3 now uses non-mock data ([c8aef1d](https://github.com/swagger-api/apidom/commit/c8aef1d7cea3165daba9ed2be2ef99a21723734b))
* **editor:** convertToOas3 now uses non-mock data ([c4c74c3](https://github.com/swagger-api/apidom/commit/c4c74c34cc971c503f7df65f4cb2177b934742e9))
* **editor:** custom monaco light/dark themes ([cb23902](https://github.com/swagger-api/apidom/commit/cb23902015b3cc5577460c7f4cd18250b9efbf91))
* **editor:** custom react hook for languageFormat ([3da03b5](https://github.com/swagger-api/apidom/commit/3da03b5f0bfaea982bd3d7fd5d45f4579c8d05c3))
* **editor:** default wordWrap and minimap settings ([b7b9729](https://github.com/swagger-api/apidom/commit/b7b9729bf6f34e9cde089bbbbbaf1c46e1e059d5))
* **editor:** demo of doValidate from jsonService ([46b9054](https://github.com/swagger-api/apidom/commit/46b9054034e9b78cfa4bd020c9c09ec58cc42ae8))
* **editor:** demo test apidom-ls is readable ([a364781](https://github.com/swagger-api/apidom/commit/a3647819eb11811d380813d11758c73ffc24b464))
* **editor:** dev buttons to toggle/detect language ([ad7c0d5](https://github.com/swagger-api/apidom/commit/ad7c0d5f1b1629ba502bcd2db09750fcc40d5f2f))
* **editor:** dev buttons to toggle/detect language ([eb2f9bd](https://github.com/swagger-api/apidom/commit/eb2f9bd17ee50f3875128ab121f1d577c47f2028))
* **editor:** documentSymbolsAdapter ([9f2cf3a](https://github.com/swagger-api/apidom/commit/9f2cf3a3bd648f336b27bdb34d2de5f163f76c6d))
* **editor:** downloadGeneratedFile now uses non-mock data ([655f7c2](https://github.com/swagger-api/apidom/commit/655f7c23547b0a757eb5d08d7a7d6d6227984ba5))
* **editor:** downloadGeneratedFile now uses non-mock data ([eb36194](https://github.com/swagger-api/apidom/commit/eb36194c5cc2ee5d5981848c9cf4ffdd1f7e96a6))
* **editor:** editor pane shrink/expand responsiveness ([0b699f9](https://github.com/swagger-api/apidom/commit/0b699f9ac3566368f61eb991dd5812afb8de1bd8))
* **editor:** editor value onChange renders in swagger-ui ([76db19b](https://github.com/swagger-api/apidom/commit/76db19b6c431062c90b93f3d1835cff02de7bf19))
* **editor:** editor value onChange renders in swagger-ui ([4791680](https://github.com/swagger-api/apidom/commit/4791680e002e246a4c03d52b3b716eacaa38bacb))
* **editor:** EditorComponent as parent to vendor editor container ([39f4344](https://github.com/swagger-api/apidom/commit/39f4344e275267c5d7514569a510b32389a169c0))
* **editor:** experimental: pass monaco instance ([c7aacff](https://github.com/swagger-api/apidom/commit/c7aacffb83b1db672811a07fc63ea401f55cc4a8))
* **editor:** extract setupMode from setup ([fcd6be4](https://github.com/swagger-api/apidom/commit/fcd6be4680a61e722dfc26d28a1d484579cfe5c5))
* **editor:** FileMenuDropdown language format detection ([6570033](https://github.com/swagger-api/apidom/commit/65700333d7673d7433ea41df7c2b124b9b1164e9))
* **editor:** fixtures.actions ([a2111a6](https://github.com/swagger-api/apidom/commit/a2111a6db92f6630ab46aef3128f15647c7ccedb))
* **editor:** for OAS generator lists, remove need for swagger-client ([d4dc655](https://github.com/swagger-api/apidom/commit/d4dc655a12d05c74d98992698f46057165551611))
* **editor:** generator download deprecate use of swagger-client ([4d15e5c](https://github.com/swagger-api/apidom/commit/4d15e5cb65b7ed8437183ad7f0235ddda705b77c))
* **editor:** generator.actions ([26aaf1b](https://github.com/swagger-api/apidom/commit/26aaf1beac39991bb3bd79d140fcb383d30e7901))
* **editor:** GeneratorMenuDropdown component ([92d5264](https://github.com/swagger-api/apidom/commit/92d5264f01f1135abcb7ec7ca438d02ca9ac32f7))
* **editor:** generators list now uses actual/default values ([dc4d10b](https://github.com/swagger-api/apidom/commit/dc4d10b869dc4a18f93a80cd551448b9f65ebdae))
* **editor:** generators list now uses actual/default values ([216c27b](https://github.com/swagger-api/apidom/commit/216c27b6c7a5bcfb69ecde11693dd7dc4aacf49c))
* **editor:** GenericEditorContainer ([b46a20d](https://github.com/swagger-api/apidom/commit/b46a20d172d48f773f5511e47fcaf2a1d4ec0193))
* **editor:** GenericEditorContainer ([cf0374d](https://github.com/swagger-api/apidom/commit/cf0374da22420c99b2720223d2ac06146c16b5fb))
* **editor:** getSpecVersion helper for isOAS3/isSwagger2 ([c86de43](https://github.com/swagger-api/apidom/commit/c86de43d6c4c12e404f80992cb09ba57ca9136bb))
* **editor:** getSpecVersion helper for isOAS3/isSwagger2 ([f0b6155](https://github.com/swagger-api/apidom/commit/f0b6155cb349783ac0019ef25c4489b0a85fbb2d))
* **editor:** hoverAdapter for json ([58f8921](https://github.com/swagger-api/apidom/commit/58f89218a30c81f8e780a6f95358c6ab3495afff))
* **editor:** ideLayoutPreset with editorAreaLayout ([#571](https://github.com/swagger-api/apidom/issues/571)) ([18df907](https://github.com/swagger-api/apidom/commit/18df90707c23732d0da10255aaf6f97e8c26f967))
* **editor:** Import URL styling updates ([4d9756b](https://github.com/swagger-api/apidom/commit/4d9756b7d752a4ad4d9fbfe4e43a2d398025831e))
* **editor:** importFile will update swagger state ([b287c06](https://github.com/swagger-api/apidom/commit/b287c0623bc5238f2a3fb944a0c8ea1559d30f08))
* **editor:** importFile will update swagger state ([6df626e](https://github.com/swagger-api/apidom/commit/6df626eaa2bf450e231f05845be9a3b03be4e00e))
* **editor:** importFromURL will update swagger state ([e7c90ac](https://github.com/swagger-api/apidom/commit/e7c90ac396cdb213be31de0fae997fad62e23480))
* **editor:** importFromURL will update swagger state ([d59ad54](https://github.com/swagger-api/apidom/commit/d59ad5429c709f446549b75fe5a707f06d5159f9))
* **editor:** importFromURL.actions ([11b1e8b](https://github.com/swagger-api/apidom/commit/11b1e8b05124c9072815d23d026004d3fa3f712a))
* **editor:** improve and fix apidom-ls integration ([c675c1d](https://github.com/swagger-api/apidom/commit/c675c1db329164ec2be39165c2c86e68a4abdce0))
* **editor:** initial apidom.worker ([fa3123d](https://github.com/swagger-api/apidom/commit/fa3123d55a70bea3167d3b06c6a08dd6ba46dea6))
* **editor:** initial diagnosticsAdapter ([2197a16](https://github.com/swagger-api/apidom/commit/2197a16952a0897608d87d5c2a3e08b3fb11270f))
* **editor:** initial migrated react components ([b2192bc](https://github.com/swagger-api/apidom/commit/b2192bced1436366383ee81eb859d80761859af9))
* **editor:** initial migrated react components ([c5f128c](https://github.com/swagger-api/apidom/commit/c5f128c48a785ec2f285654ba8409e89c57474ab))
* **editor:** initial providers for documentSymbols and Hover ([c5230a4](https://github.com/swagger-api/apidom/commit/c5230a472880f792069bb6a45d70798233b15692))
* **editor:** initializeParsers sample with apidom parser ([5223d24](https://github.com/swagger-api/apidom/commit/5223d241e553a1f5b0616d41da862fe621607c12))
* **editor:** jest test for FileMenuDropdown ([5b3b464](https://github.com/swagger-api/apidom/commit/5b3b4646a6e1ffc90a9da0c1abac0206665d6966))
* **editor:** jest test for FileMenuDropdown ([410eacf](https://github.com/swagger-api/apidom/commit/410eacf71c7e113d5b9b7f10a5404c15c66e9973))
* **editor:** jest tests for EditMenuDropdown ([f97e171](https://github.com/swagger-api/apidom/commit/f97e171bee8031ae6776dc14ad144a24923aac95))
* **editor:** jest tests for EditMenuDropdown ([ef72932](https://github.com/swagger-api/apidom/commit/ef72932c4a71ee331bfc3e45ec84ceefc2dfbd34))
* **editor:** jest tests for topbar generated server/client ([72d37a5](https://github.com/swagger-api/apidom/commit/72d37a59336abb38f4ea58400e1ff4ce01859f39))
* **editor:** jest tests for topbar generated server/client ([3528bfe](https://github.com/swagger-api/apidom/commit/3528bfe51a7643139a405087e2e10d97c194a836))
* **editor:** keydown support to load default definitions ([eddc283](https://github.com/swagger-api/apidom/commit/eddc283df008d8c59cc98b847d34696790f5bdea))
* **editor:** language utils-helper ([44effc8](https://github.com/swagger-api/apidom/commit/44effc84a6572ec9a85145a3e2252e612230e7e3))
* **editor:** languageKind ([b003706](https://github.com/swagger-api/apidom/commit/b003706bb66a1a23d7d35c54d755b7d9f5644036))
* **editor:** load default definitions for oas2/oas3/asyncapi2 ([e340324](https://github.com/swagger-api/apidom/commit/e3403244e21b65445f1e8bd8b0689dbe2927b7a5))
* **editor:** load default oas3.1 definition ([58e889c](https://github.com/swagger-api/apidom/commit/58e889cbdfa9adde619512edc408782f92de0767))
* **editor:** migrate StandaloneLayout to functional component ([fdfaf61](https://github.com/swagger-api/apidom/commit/fdfaf6137bb4d3e5f2f8a31d2f0e9b909a131411))
* **editor:** migrated swagger styling from less to sass ([2b913b9](https://github.com/swagger-api/apidom/commit/2b913b960b3eae4cb3f1cbed7ae4838d861e0eb7))
* **editor:** migrated swagger styling from less to sass ([e41ef99](https://github.com/swagger-api/apidom/commit/e41ef99aa17da73afaaaca5c5ce3bbda3cfe6c27))
* **editor:** modal close x button ([ac0d2ac](https://github.com/swagger-api/apidom/commit/ac0d2accca28bdd1e14c0311efcde7a760e35b63))
* **editor:** ModalConfirmWrapper and ModalErrorWrapper components ([ea956da](https://github.com/swagger-api/apidom/commit/ea956da758213cd5a9078f731b6b564feb56b51c))
* **editor:** ModalInputWrapper and ImportUrl components ([87937e9](https://github.com/swagger-api/apidom/commit/87937e9741c109b40899ec1e0eb64de576d8f9f1))
* **editor:** monaco theme selector widget ([2120b6e](https://github.com/swagger-api/apidom/commit/2120b6e85037a8ffa75c6368e1a8909d36607b73))
* **editor:** monaco workers imported via node_modules ([820b8a2](https://github.com/swagger-api/apidom/commit/820b8a221e0a2aec2714aa71d5966a3a2be28c15))
* **editor:** MonacoEditor load apidom.worker as web worker ([ecd83a2](https://github.com/swagger-api/apidom/commit/ecd83a266a37d04af53116cae5c5bae18453599e))
* **editor:** MonacoEditor load editor.worker.js from web worker ([3b22262](https://github.com/swagger-api/apidom/commit/3b22262bcb512640a01a41a056e086687dae251f))
* **editor:** move monaco setup to external export ([ef4d966](https://github.com/swagger-api/apidom/commit/ef4d96699ed73679d4f2f05f91864b3de0bdc56b))
* **editor:** move some FileMenu items to EditMenu Hooks ([9508041](https://github.com/swagger-api/apidom/commit/9508041f13c0265967edd49e73d5d07ae30d5637))
* **editor:** POC migrated with `swagger-ui-react` and `presets` ([3eec23f](https://github.com/swagger-api/apidom/commit/3eec23fa231c0b92b6570f21042f2a6f12c24c68))
* **editor:** POC migrated with `swagger-ui-react` and `presets` ([59a9ed2](https://github.com/swagger-api/apidom/commit/59a9ed260584413237f9f9ed2add0f75e65420ee))
* **editor:** propagate isOAS3_1 flag to clearEditor ([3843a89](https://github.com/swagger-api/apidom/commit/3843a89c1ffe34e5fff92d7232ed6b9acad3826a))
* **editor:** propagate isOAS3_1 flag to SaveAsJsonOrYaml ([eadf969](https://github.com/swagger-api/apidom/commit/eadf9694a5e0495ccec1f7dd9d0332e555cd3e96))
* **editor:** react hooks edit menu ([894244a](https://github.com/swagger-api/apidom/commit/894244aab031fae8a25eba8f39c01e3727e67e11))
* **editor:** react hooks File menu ([626abb2](https://github.com/swagger-api/apidom/commit/626abb25eab8bb4b2f6e37da74e1ad63bb2d63fd))
* **editor:** react hooks for Topbar component ([b187c3c](https://github.com/swagger-api/apidom/commit/b187c3cff9e3e88bd67ed46595ea175769425a68))
* **editor:** react-modal for importUrl ([8397209](https://github.com/swagger-api/apidom/commit/8397209fd2c417121d7995eac898a76c2dff5a8f))
* **editor:** react-modal for importUrl ([a7f50c3](https://github.com/swagger-api/apidom/commit/a7f50c330a7737045f9f9a98ba7de766828ec6da))
* **editor:** ReactModalPortal styles ([5e3f6f8](https://github.com/swagger-api/apidom/commit/5e3f6f8a247194babc8357dac887465494faa622))
* **editor:** remove unneeded `initializeParsers` ([64b1936](https://github.com/swagger-api/apidom/commit/64b1936e710213827a44531d6293cf07d7613bc6))
* **editor:** replace component `Link` with local `LinkHome` ([e5badc0](https://github.com/swagger-api/apidom/commit/e5badc036ec5cde91fb31ebe66323be6c8845e1e))
* **editor:** replace component `Link` with local `LinkHome` ([a81a929](https://github.com/swagger-api/apidom/commit/a81a92922176c2f258d41082d8501dc643d06cc0))
* **editor:** retrieve spec from swagger-ui ([74455e1](https://github.com/swagger-api/apidom/commit/74455e1ca8558f55f4dfda23e8b75b585ba167ff))
* **editor:** retrieve spec from swagger-ui ([1c614d5](https://github.com/swagger-api/apidom/commit/1c614d52a1226111624d5afecea41f12361915a8))
* **editor:** sample openapi syntax highlighter ([865a864](https://github.com/swagger-api/apidom/commit/865a86431ae72daf42274af1f978b1be5a1b0192))
* **editor:** SaveAsJsonOrYaml function component ([a6b53b3](https://github.com/swagger-api/apidom/commit/a6b53b3606a5033244c2cecb3fa82c1abe5a6870))
* **editor:** saveAsJsonOrYaml.actions ([a465b02](https://github.com/swagger-api/apidom/commit/a465b0283c8ddb5863ccf5eb2af4dcd8b82d9f47))
* **editor:** saveAsYaml confirmation modal ([7045ba3](https://github.com/swagger-api/apidom/commit/7045ba3464fda72c8562536844c81bfa3d58373e))
* **editor:** saveAsYaml confirmation modal ([b62db66](https://github.com/swagger-api/apidom/commit/b62db663445b5c2bc4588ad6e1c99bdb5b947404))
* **editor:** semanticTokensAdapter provider ([856a41b](https://github.com/swagger-api/apidom/commit/856a41bcd2e3d1c61b995fc1471225a89e332184))
* **editor:** set language to apidom; remove onChangeLanguageValue ([71ccc28](https://github.com/swagger-api/apidom/commit/71ccc2867a943139da5e25a739411359218f79fa))
* **editor:** showErrorModal with close ([a9627b3](https://github.com/swagger-api/apidom/commit/a9627b38510eb20ddfd6a8efe8e7e9b11fa4e449))
* **editor:** showErrorModal with close ([cae578c](https://github.com/swagger-api/apidom/commit/cae578c76194d81453109b54aa7bd9b828a18200))
* **editor:** spec detection for known http generators ([47db420](https://github.com/swagger-api/apidom/commit/47db4205b23643be71687027b7a22eb778ba9e04))
* **editor:** temp hello.worker ([627f83a](https://github.com/swagger-api/apidom/commit/627f83ac3dd4a11de6238a4e1b24590c542b5d0d))
* **editor:** textarea demo component ([b713b5a](https://github.com/swagger-api/apidom/commit/b713b5af29c2eb71b68c5901c14c5c194b0df1e1))
* **editor:** textarea demo component ([ce71efb](https://github.com/swagger-api/apidom/commit/ce71efbd16f86a75c8ec5cd947e0c37d2a50ec29))
* **editor:** ThemeSelectionIcon component ([95022be](https://github.com/swagger-api/apidom/commit/95022beb74b5aa0070688e5c971b9baf2ff4583e))
* **editor:** update ImportUrl modal style ([04975da](https://github.com/swagger-api/apidom/commit/04975da6e8a61e0471b015e9fe9b4ccadd3941ab))
* **editor:** update modal styles ([c3f822d](https://github.com/swagger-api/apidom/commit/c3f822da32bb48852bbf4bf1c3dada71fdbf5cf4))
* **editor:** use methods from apidom-ls for registered providers ([a412998](https://github.com/swagger-api/apidom/commit/a4129984be32cddcd464ae79103f2be5c3ec7c76))
* **editor:** use same generator baseUrl for oas3 and oas3_1 ([158e753](https://github.com/swagger-api/apidom/commit/158e7534186bf1efa45e4b7d4428470dbd7ac248))
* **editor:** use synchronous getLegend() for semanticTokensAdapter ([54da77e](https://github.com/swagger-api/apidom/commit/54da77e2d41306239cfc361ce849a96b52cf1a02))
* **editor:** utils for isValidJson and isValidYaml ([55d6a67](https://github.com/swagger-api/apidom/commit/55d6a6765c7856f8f51add1a68c7f5cefcbfe116))
* **editor:** utils-getSpecVersion ([36bba3e](https://github.com/swagger-api/apidom/commit/36bba3e1f10eb9427b89aeb8df629adadd611f12))
* **editor:** webpack outputs workers without chunk in filename ([f07a693](https://github.com/swagger-api/apidom/commit/f07a6935120dbe91f236fc6e3220d0d21cdb615d))
* **editor:** wip - light and dark themes ([0487ca5](https://github.com/swagger-api/apidom/commit/0487ca57ff5b472a7596d93bf92fe64e539f5193))
* **editor:** wip disabled hooks for FileMenuDropdown ([4b809ad](https://github.com/swagger-api/apidom/commit/4b809ad47d373eef301df6cc822b3f293c4d3ce8))
* **editor:** wip: setup with ApidomWorker and WorkerManager ([59fd2ce](https://github.com/swagger-api/apidom/commit/59fd2ceff6a6a255782a790e6b06a08bdc01c515))
* **editor:** wip: switch to apidom placeholders ([c3454b4](https://github.com/swagger-api/apidom/commit/c3454b4016d7af6b624ae6c12dec98c9c522b4fa))
* **editor:** worker-loader with commented hello.worker ([ecca99a](https://github.com/swagger-api/apidom/commit/ecca99a77616ad34215d7fe8f6578d6fc1e23422))
* **editor:** working setup with workerManager ([843e1c0](https://github.com/swagger-api/apidom/commit/843e1c0029b74f70f84550153c1f8b60f2f08650))
* embed metadata into resulting tree ([04d672d](https://github.com/swagger-api/apidom/commit/04d672d798992faa3b8ae037305ac8f1f31320fe))
* **extensions:** add extensions support for info/(license|contact) ([0dc34ab](https://github.com/swagger-api/apidom/commit/0dc34ab565203d254d15c0d91193222503c1f78b)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* **extensions:** add support for OpenApi extensions for Info ([1f56875](https://github.com/swagger-api/apidom/commit/1f568759515f4af61cb3ce7a75df96ef04456297)), closes [#16](https://github.com/swagger-api/apidom/issues/16)
* **generic-editor:** integrate react support ([71ad70d](https://github.com/swagger-api/apidom/commit/71ad70d131dde34b17462fc4412b60e35f6f0012))
* **generic-editor:** integrate with ApiDOM ([5a82cf2](https://github.com/swagger-api/apidom/commit/5a82cf2122085b7d1a01099b37f2d1ed13a97d5d))
* **generic-editor:** scaffold generic editor SwaggerUI plugin ([697f683](https://github.com/swagger-api/apidom/commit/697f683c32ded0ebf65652ef0d10cba0012f40d0))
* implement generic depth first traversal ([6078ed0](https://github.com/swagger-api/apidom/commit/6078ed0baa25b85f8ba1f4057f87071313027099))
* implement plugginable architecture ([499e3bd](https://github.com/swagger-api/apidom/commit/499e3bd032807e82c5da4024b20bf869adf4145a)), closes [#20](https://github.com/swagger-api/apidom/issues/20)
* implement recursive search algorithm ([#80](https://github.com/swagger-api/apidom/issues/80)) ([db3e146](https://github.com/swagger-api/apidom/commit/db3e1460872cdcca979ea73168bc15076deb580d)), closes [#77](https://github.com/swagger-api/apidom/issues/77)
* implement YAML CST to AST transformer ([8a84320](https://github.com/swagger-api/apidom/commit/8a84320ee068bec04889ac248c664435636dcaea)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* introduce namespace refractor ([c75dc8a](https://github.com/swagger-api/apidom/commit/c75dc8a09583658acc1b144b33fcb11c109e72d6))
* introduce our own AST layer ([c3c137e](https://github.com/swagger-api/apidom/commit/c3c137e0a8aaa2f9803022392579b8358cdfd7bf)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **metadata:** add conventions to append metadata to ApiDOM tree ([#78](https://github.com/swagger-api/apidom/issues/78)) ([91fd38f](https://github.com/swagger-api/apidom/commit/91fd38f53a6b0103da6066443de78f6bc28ddf19)), closes [#76](https://github.com/swagger-api/apidom/issues/76)
* **ns-asyncapi-2-0:** add accessors to Schema Element ([906b317](https://github.com/swagger-api/apidom/commit/906b317c572df1851a6ae7e88e11d2f573a0d9dc)), closes [#424](https://github.com/swagger-api/apidom/issues/424)
* **ns-asyncapi-2-0:** add components/parameters support ([f9a7545](https://github.com/swagger-api/apidom/commit/f9a7545f5d026e0b4a3b77868e37502c75f12913)), closes [#304](https://github.com/swagger-api/apidom/issues/304)
* **ns-asyncapi-2-0:** add elements for all Binding Objects ([7c97c89](https://github.com/swagger-api/apidom/commit/7c97c89609a6353cb58df27802766f0410f1dba4)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for AsyncApi2_0 Object ([d971cb9](https://github.com/swagger-api/apidom/commit/d971cb99f22065fb3f06e3c4c17152e43985b853)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for ChannelBindings Object ([fa48929](https://github.com/swagger-api/apidom/commit/fa48929c818e8f6be491b2038b9dc1d228f0f0b1)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Components Object ([6c7cd91](https://github.com/swagger-api/apidom/commit/6c7cd91bb05e0711000ad72bf628548959b1eb18)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Operation Object ([d1f1d72](https://github.com/swagger-api/apidom/commit/d1f1d7283b3b35e95709938241e065f76deda6b0)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add full support for Schema Object ([44c3da6](https://github.com/swagger-api/apidom/commit/44c3da6e8ac63f93ae8ac75eebb79607239dde82)), closes [#424](https://github.com/swagger-api/apidom/issues/424)
* **ns-asyncapi-2-0:** add full support for ServerBindings Object ([fc1a4d6](https://github.com/swagger-api/apidom/commit/fc1a4d60c1b264ad3eeb6f45352d3022f65fdbd3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add metadata to Server.url field ([a1ef9ff](https://github.com/swagger-api/apidom/commit/a1ef9ff2e96a96ff1d16d1ac153d45ef6f48840b))
* **ns-asyncapi-2-0:** add mqtt5 binding elements ([a445b37](https://github.com/swagger-api/apidom/commit/a445b37c3360043e712d322a5669964c8706e563)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for all remaining binding objects ([67b239c](https://github.com/swagger-api/apidom/commit/67b239c3ecc23ae406ed009d02b0a70fc2c22c39)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP 0.9.1 Server Binding Obj ([51ef9eb](https://github.com/swagger-api/apidom/commit/51ef9eb5792e42b261aef20964c827b9df7e5613)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP 1.0 bindings ([91f8dbd](https://github.com/swagger-api/apidom/commit/91f8dbda19ad60006696beaefab847261db74ffd)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Channel Binding Object ([8d38adc](https://github.com/swagger-api/apidom/commit/8d38adc45157625c0a12e08005edef1c9529f374)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Message Binding Object ([698c1e6](https://github.com/swagger-api/apidom/commit/698c1e6ddf212fe04236edd4a8604503aef181c8)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for AMQP Operation Binding Object ([6104684](https://github.com/swagger-api/apidom/commit/6104684cbb595736c3bfde54ebeccbcd65205db7)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for CorrelationID Object ([c3c5e3c](https://github.com/swagger-api/apidom/commit/c3c5e3cd20da309f79a027905a8e28d0fb530e5f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for DefaultContentType Object ([96856f9](https://github.com/swagger-api/apidom/commit/96856f9cd14be5cfb0dd4df97b8562130e156858)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for ExternalDocs Object ([5a01768](https://github.com/swagger-api/apidom/commit/5a01768bd69197d8dfed0f0d283723530f0ae45d)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Channel Bidning Obj ([f67dabd](https://github.com/swagger-api/apidom/commit/f67dabda6af60fa9264a865553911a1981a13fdd)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Message Binding Object ([b5a10e2](https://github.com/swagger-api/apidom/commit/b5a10e25984cddacc61bc6c05da6f928f6cc7a53)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Operation Binding Object ([1813f04](https://github.com/swagger-api/apidom/commit/1813f045ab92fe41f05519b78d1337a484506a73)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for HTTP Server Binding Obj ([57b9213](https://github.com/swagger-api/apidom/commit/57b92131ebe7b4788a17dff2bd477dab43eed773)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Channel Obj ([4006f15](https://github.com/swagger-api/apidom/commit/4006f15b2f138f438e7232fc98a11c0a3f82c544)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Message Binding Object ([51d79ae](https://github.com/swagger-api/apidom/commit/51d79ae00d3ddcb7eace662d2ab57450e984c17a)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Op. Binding Object ([4b82b14](https://github.com/swagger-api/apidom/commit/4b82b1431debe30ceccb5090b3cae06716973d18)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Kafka Server Binding ([a62e76c](https://github.com/swagger-api/apidom/commit/a62e76c14d95faf5428300dd73a52818f8a74b2f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Message Object ([3b33f1b](https://github.com/swagger-api/apidom/commit/3b33f1ba0cf1cfcfe5e368d571d401a20f32edf3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Message Trait Object ([500181e](https://github.com/swagger-api/apidom/commit/500181eb2b80aab5e4dde18baf0d6559e5cfd20f)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MessageBindings Object ([c8a5c63](https://github.com/swagger-api/apidom/commit/c8a5c632fd341ef78e64bfc5c21c5df584bd124c)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Channel Binding Obj ([fcf8300](https://github.com/swagger-api/apidom/commit/fcf83005b8482fe561217b6f354ea21e676275ac)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Message Binding Object ([62033ba](https://github.com/swagger-api/apidom/commit/62033ba72e04dc906078aca2c99965d507c3e087)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Operation Binding Object ([f11bc26](https://github.com/swagger-api/apidom/commit/f11bc26281d51bb25b7cea0c8bcd49c7fbeb1f96)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for MQTT Server Binding Object ([1a41383](https://github.com/swagger-api/apidom/commit/1a41383b8cd89dc58560d1b28ffe9d24c0638fa3)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OAuthFlow Object ([54949fa](https://github.com/swagger-api/apidom/commit/54949fab7451b4ac98e975753043ba59381745eb)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OAuthFlows Object ([f759bb5](https://github.com/swagger-api/apidom/commit/f759bb5ac915cac12ce55b4c324193e45ea93167)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OperationBindings Object ([e5500eb](https://github.com/swagger-api/apidom/commit/e5500ebea9e63bdc4619992560f182771d56626e)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for OperationTrait Object ([8e72347](https://github.com/swagger-api/apidom/commit/8e72347d798e7b45b9d507f4125cca8e8b1158fb)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Security Scheme Object ([b706269](https://github.com/swagger-api/apidom/commit/b706269fc9e7fee6b57399d5f20661e165ae48d9)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Tag Object ([d31f532](https://github.com/swagger-api/apidom/commit/d31f532d8a060b5ff3e5a74f6a17c490a1ac4e76)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for Tags Object ([e25d704](https://github.com/swagger-api/apidom/commit/e25d704ddb3a5d634a5ea1abfe47567a8e4cb937)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Message Binding Obj ([43f0cb7](https://github.com/swagger-api/apidom/commit/43f0cb7c81ba34f51c9b09008d825850cf85cb8a)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Operation Binding Obj ([c194516](https://github.com/swagger-api/apidom/commit/c1945161752e71cce42a43b169443fdd8abb4611)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Operation Binding Object ([e7bc510](https://github.com/swagger-api/apidom/commit/e7bc5106b773b60905af74dee639c7f797cb10c4)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** add support for WS Server Binding Obj ([148aaa5](https://github.com/swagger-api/apidom/commit/148aaa5ff8c59c57d1418135e41c7a85884927a5)), closes [#387](https://github.com/swagger-api/apidom/issues/387)
* **ns-asyncapi-2-0:** complete key mapping for namespace visiting ([364ad68](https://github.com/swagger-api/apidom/commit/364ad6887f223138534ab703a6a6100c1a941662))
* **ns-asyncapi-2-0:** introduce plugginable refracting ([#278](https://github.com/swagger-api/apidom/issues/278)) ([32cd470](https://github.com/swagger-api/apidom/commit/32cd47076e978c721980119934098051bad9032d))
* **ns-asyncapi-2:** add reference metadata ([808073f](https://github.com/swagger-api/apidom/commit/808073f0e8a971a77957708c8a98bece6aa24813))
* **ns-openapi-3-1:** add  Contents of String-Encoded Data vocabulary ([88cd7e1](https://github.com/swagger-api/apidom/commit/88cd7e1a33e441aec57d72ddd54fa71ef8634d89)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add additional metadata to outside context objs ([1bc0d14](https://github.com/swagger-api/apidom/commit/1bc0d1415a97a35e8fa10b7ae07261213b15af41)), closes [#450](https://github.com/swagger-api/apidom/issues/450)
* **ns-openapi-3-1:** add all possible keywords for Schema element ([c1237b1](https://github.com/swagger-api/apidom/commit/c1237b1ec321a232a731826e29a4e29c66762f25)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Applicator vocabulary to Schema Object ([78173c4](https://github.com/swagger-api/apidom/commit/78173c4c1eba60a6cf0e2088505ecf9132601178)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Basic Meta-Data vocabulary to Schema Object ([249c4f8](https://github.com/swagger-api/apidom/commit/249c4f87146f5cb6f736e726d75348925d88cb9b)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Core vocabulary to Schema Object ([fac8af3](https://github.com/swagger-api/apidom/commit/fac8af35db90e3eade3812b51aa8c84aef536afe)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Discriminator Object ([#342](https://github.com/swagger-api/apidom/issues/342)) ([987f755](https://github.com/swagger-api/apidom/commit/987f75514afbc6dc7613afe9aa726fcbe85c2b74)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Encoding Object ([56b3b79](https://github.com/swagger-api/apidom/commit/56b3b795a51aff8895595bd88cd67275526a2e6b)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** add Example Object ([382fccf](https://github.com/swagger-api/apidom/commit/382fccf72dd582cb47d8c37949395700530676cd)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** add meta about HeaderElement name ([f54712d](https://github.com/swagger-api/apidom/commit/f54712dde8d39a0b74a6b420d48dbcf3e2b8707a)), closes [#444](https://github.com/swagger-api/apidom/issues/444)
* **ns-openapi-3-1:** add meta about http status code to Response ([8d80c7e](https://github.com/swagger-api/apidom/commit/8d80c7ea9a1de6b4ec45a246d89af0555629eafd)), closes [#444](https://github.com/swagger-api/apidom/issues/444)
* **ns-openapi-3-1:** add metadata to Server.url field ([fe4e371](https://github.com/swagger-api/apidom/commit/fe4e371dbb530d668b19c1516c1c9c1538ea1867))
* **ns-openapi-3-1:** add OAS vocabulary to Schema Object ([1506602](https://github.com/swagger-api/apidom/commit/1506602fde40b146b5c91b8d301627d9496f836b)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add reference metadata ([5ab586e](https://github.com/swagger-api/apidom/commit/5ab586ef366b0bbd57674520baa6fa1dd8f3d3ea))
* **ns-openapi-3-1:** add Semantic Content vocabulary to Schema ([ed8535a](https://github.com/swagger-api/apidom/commit/ed8535a14e68d9aca71f1d5ce267cddc121a3c3e)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add support for Boolean JSON Schemas ([3fc340f](https://github.com/swagger-api/apidom/commit/3fc340f142b482245f2fea30d856091e104f7fc0))
* **ns-openapi-3-1:** add support for Header Object ([8cfef80](https://github.com/swagger-api/apidom/commit/8cfef8051992b0e6c1804630415beeb8509a43ac))
* **ns-openapi-3-1:** add support for JSON Schema Dialect ([15e3449](https://github.com/swagger-api/apidom/commit/15e3449e37d557a89eb1a12d44f7c3d8ee250365)), closes [#339](https://github.com/swagger-api/apidom/issues/339)
* **ns-openapi-3-1:** add support for Link Object ([1007315](https://github.com/swagger-api/apidom/commit/100731572c56b4835d8e0b1c1fdbb2712cec92f3))
* **ns-openapi-3-1:** add support for OAuth Flow Object ([b53fa53](https://github.com/swagger-api/apidom/commit/b53fa53c702c8374870bf013430d2c27b26db551))
* **ns-openapi-3-1:** add support for OAuth Flows Object ([8cd324c](https://github.com/swagger-api/apidom/commit/8cd324c42b583b5958b952182d3c47b8b0369139))
* **ns-openapi-3-1:** add support for Security Scheme Object ([5bb977e](https://github.com/swagger-api/apidom/commit/5bb977e0f21ff11f3e959f7e4ae462e4e1b840f8))
* **ns-openapi-3-1:** add support for Tag Object ([e9c1f11](https://github.com/swagger-api/apidom/commit/e9c1f11fa2d83266501b1f8b471c13b902861266))
* **ns-openapi-3-1:** add support for XML Object ([bbddb3e](https://github.com/swagger-api/apidom/commit/bbddb3e65f8c7213e44914704fdf1cf600e40fab)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add tests using dehydrated ApiDOM snapshots ([b60353a](https://github.com/swagger-api/apidom/commit/b60353abdddc0e64245986d20d2e794697e9de5f)), closes [#438](https://github.com/swagger-api/apidom/issues/438) [#360](https://github.com/swagger-api/apidom/issues/360)
* **ns-openapi-3-1:** add Unevaluated vocabulary to Schema Object ([4ba72e5](https://github.com/swagger-api/apidom/commit/4ba72e58ae91d4380f6475df7808f18a7017a772)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** add Validation vocabulary to Schema Object ([55a98ce](https://github.com/swagger-api/apidom/commit/55a98ce1c954abfcbb22cf566e9b5e74ff879e85)), closes [#337](https://github.com/swagger-api/apidom/issues/337)
* **ns-openapi-3-1:** complete key mapping for namespace visiting ([#274](https://github.com/swagger-api/apidom/issues/274)) ([0a2ef19](https://github.com/swagger-api/apidom/commit/0a2ef19d347a93ba669991f09bea13d55d7aa605))
* **ns-openapi-3-1:** finish Calback Object ([b11a5c8](https://github.com/swagger-api/apidom/commit/b11a5c8aaa2a6bfde6aab98f8ecfee774d8f8b51)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Components Object ([e840834](https://github.com/swagger-api/apidom/commit/e840834f4e66d09f94dd811627622a99a503435e)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Media TYpe Object ([57de422](https://github.com/swagger-api/apidom/commit/57de42265579762aafe5dd2b6090eb324511b3ed)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish OpenAPI Object ([adeacff](https://github.com/swagger-api/apidom/commit/adeacff4a9e95f464dd0c23f418a55ff5c0f2b8f)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** finish Request Body Object ([12a21fd](https://github.com/swagger-api/apidom/commit/12a21fdb3cf840b1f3380255880ef4cf0d764c98)), closes [#386](https://github.com/swagger-api/apidom/issues/386)
* **ns-openapi-3-1:** implement refractor plugin for  inheritance ([9171db9](https://github.com/swagger-api/apidom/commit/9171db92f4001c0cb1c3ee24a544fc4964d17728)), closes [#362](https://github.com/swagger-api/apidom/issues/362)
* **ns-openapi-3-1:** implement refractor plugin for $id inheritance ([e7bd45a](https://github.com/swagger-api/apidom/commit/e7bd45a53cb5f75bfbdd21cea7875e6835e88abe)), closes [#363](https://github.com/swagger-api/apidom/issues/363)
* **ns-openapi-3-1:** introduce plugginable refracting ([dc311e9](https://github.com/swagger-api/apidom/commit/dc311e9838d9bbc025591309dd86bb6b08c33434))
* **OAS ns:** add support for response->content->mediaType-schema ([7277139](https://github.com/swagger-api/apidom/commit/7277139983ed25f2064a62797019d172a241aee4))
* **openapi-3-1:** finish refractor implementation ([987ddc1](https://github.com/swagger-api/apidom/commit/987ddc1250414771d95aabebab90c7366a3004e5))
* **openapi-3.1-adapter:** add support for browser build fragments ([30782a0](https://github.com/swagger-api/apidom/commit/30782a03e947bfc995fbe94bfe8c997432171abd)), closes [#35](https://github.com/swagger-api/apidom/issues/35)
* **openapi-ns:** add predicates ([46a2161](https://github.com/swagger-api/apidom/commit/46a2161dbac60ee48d57dac70f9348035548f3a9)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* **OpenApi3.1-Json:** add support for Parameter and Reference Object ([a4c5525](https://github.com/swagger-api/apidom/commit/a4c55255b98c40429ccd245c7e1ea363fe01e5ab))
* **OpenApi3.1-Yaml:** add support for additional objects ([5479c92](https://github.com/swagger-api/apidom/commit/5479c92d0d411637d34622d1c47d3b29629a3b71)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Components and Schema ([ef44ceb](https://github.com/swagger-api/apidom/commit/ef44cebdcaa61fbf8b58f384a945d777fd62d72f)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for empty pair empty value ([eef46e8](https://github.com/swagger-api/apidom/commit/eef46e8c21fd1cd891a64293381bd0cce2b7abbc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for generic visitors ([7dce6f5](https://github.com/swagger-api/apidom/commit/7dce6f5b392f6f4b8b528ee378ae8df7fbda0026)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Info, License and Contact ([b4161b6](https://github.com/swagger-api/apidom/commit/b4161b68910351460f9358df3051bfb6360b377d)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for OpenApi.security field ([7065807](https://github.com/swagger-api/apidom/commit/7065807dcac0e93a202b99cc06f51f69a7c9992b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Parameter and Reference Object ([ee754f6](https://github.com/swagger-api/apidom/commit/ee754f614d47cb41488a3468633698a3c71f0321))
* **OpenApi3.1-Yaml:** add support for Responses and Response ([3a6667a](https://github.com/swagger-api/apidom/commit/3a6667a97fc85e02d7e9b93652a0aac015785e42)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for Server and ServerVariable ([51de6e4](https://github.com/swagger-api/apidom/commit/51de6e453f72441738f3cba23abdf9e8670aceaf)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for stream comments ([b34e0ae](https://github.com/swagger-api/apidom/commit/b34e0ae6a3811b979ca3358e7c55adab6ea7183b)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1-Yaml:** add support for streams ([#114](https://github.com/swagger-api/apidom/issues/114)) ([29260c5](https://github.com/swagger-api/apidom/commit/29260c513411d7fd66305b81d5c3a92a0b802fdc)), closes [#1](https://github.com/swagger-api/apidom/issues/1)
* **OpenApi3.1:** add additional metadata to Operation ([4f3684b](https://github.com/swagger-api/apidom/commit/4f3684b75155abd7ae2cd53ef0f791029bb1d45f)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add fixed and mixed fields generic visitors ([666ba12](https://github.com/swagger-api/apidom/commit/666ba126088921c29360abcb34424930ac1d675b)), closes [#91](https://github.com/swagger-api/apidom/issues/91)
* **OpenApi3.1:** add support for additional fields to Operation ([4b2452a](https://github.com/swagger-api/apidom/commit/4b2452a88919a904bc6f20ddbc43a650de44d107)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for additional fields to Operation ([#88](https://github.com/swagger-api/apidom/issues/88)) ([e69b47a](https://github.com/swagger-api/apidom/commit/e69b47a36700ccd5da9591c7632622451f80bb2a)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for MemberElement sourcemaps ([cd569e0](https://github.com/swagger-api/apidom/commit/cd569e00267a1f3ef104b3579017c2245de56ad7)), closes [#71](https://github.com/swagger-api/apidom/issues/71)
* **OpenApi3.1:** add support for Paths and PathItem objects ([#68](https://github.com/swagger-api/apidom/issues/68)) ([de2cf3e](https://github.com/swagger-api/apidom/commit/de2cf3e2ed07d9ac61144d61e4bcf4f388f3f3fc)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **OpenApi3.1:** add support for unknown object fields ([cc0400e](https://github.com/swagger-api/apidom/commit/cc0400e04c85c9690a3feb1da79dc105780aee18)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **OpenApi3.1:** add support for unknown values ([90dce03](https://github.com/swagger-api/apidom/commit/90dce036eed2de1421cce5067e6f42d6a0a97c42)), closes [#101](https://github.com/swagger-api/apidom/issues/101)
* **OpenApi3.1:** all support for all Operation fields ([21dcbcc](https://github.com/swagger-api/apidom/commit/21dcbccb1b39d9d9f792c79c35e614f21454c85c)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **parser:** add AsyncAPI 2.0 adapter ([#57](https://github.com/swagger-api/apidom/issues/57)) ([2535860](https://github.com/swagger-api/apidom/commit/2535860dbb9a6d1e8342fca0f7647dea611ef0d9))
* **parser:** add AsyncAPI 2.0.0 adapter implementation ([#58](https://github.com/swagger-api/apidom/issues/58)) ([c7cb963](https://github.com/swagger-api/apidom/commit/c7cb96379748cf07fab2201568405e16c164b133))
* **parser:** introduce API for finding namespace ([7650220](https://github.com/swagger-api/apidom/commit/765022082a316cf4b16b25245e757136f0a18f57)), closes [#234](https://github.com/swagger-api/apidom/issues/234)
* **PathItemObject:** implement all properties ([9f9407c](https://github.com/swagger-api/apidom/commit/9f9407cbcd68b7e1dc63fab49ed187484f8b70c0)), closes [#66](https://github.com/swagger-api/apidom/issues/66)
* **playground:** add multiple enhancements ([82b54d0](https://github.com/swagger-api/apidom/commit/82b54d056a24fdf66e9bd8923e054649905a04ca))
* **playground:** add non working resolve integration ([ad13897](https://github.com/swagger-api/apidom/commit/ad138972d789063049ca95805692f14f745ac59c))
* **playground:** add s-expression and value interpretations ([99a1f36](https://github.com/swagger-api/apidom/commit/99a1f360a166b438291344523bf7209af1461322)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** add support for AsyncAPI 2.1 ([3565989](https://github.com/swagger-api/apidom/commit/35659890fd6ace4a7bfc4333928843b6f11faa7c)), closes [#461](https://github.com/swagger-api/apidom/issues/461)
* **playground:** add support for injectable interpreter ([d79270c](https://github.com/swagger-api/apidom/commit/d79270c769fd57a0de8f107396558fe39ee0b8e2))
* **playground:** enhance dereferencing with interpreter options ([2c94c27](https://github.com/swagger-api/apidom/commit/2c94c277866d0f6263e12c4759d3e7084329f516)), closes [#476](https://github.com/swagger-api/apidom/issues/476)
* **playground:** integrate dereference ([9eb1167](https://github.com/swagger-api/apidom/commit/9eb11676451d91361c297c3eec49b7465204d1f8))
* **playground:** integrate resolver ([9c50482](https://github.com/swagger-api/apidom/commit/9c50482465bbc0234266115fefeaab1e341afbe7))
* **playground:** visual playgrand for ApiDOM features ([44d2b0c](https://github.com/swagger-api/apidom/commit/44d2b0c0af65a5718df8437e993a16cf4a9295fa))
* **predicates:** add predicates for higher order minim types ([7bb8c26](https://github.com/swagger-api/apidom/commit/7bb8c26279909ac8e14308d31d3ac0eb153d06f2)), closes [#60](https://github.com/swagger-api/apidom/issues/60)
* prepare codebase for schema support ([16054c8](https://github.com/swagger-api/apidom/commit/16054c8db3396eb62b330b32349f5ce2db6e1ec4)), closes [#9](https://github.com/swagger-api/apidom/issues/9)
* **referece:** add support for couting referece depth ([dfdb887](https://github.com/swagger-api/apidom/commit/dfdb887f3ac44c9e4e7ca6c3c96cf9d3f3f367d4))
* **referece:** add support for setting max depth of resolution ([0e71846](https://github.com/swagger-api/apidom/commit/0e7184618a14ff24bd276cd14638155160697b4b))
* **reference:** add additional metadata during dereference ([659323c](https://github.com/swagger-api/apidom/commit/659323c9a4bfc2e58eceeb74d5178c22b5308328)), closes [#384](https://github.com/swagger-api/apidom/issues/384)
* **reference:** add AsyncApi 2.0.0 dereference ([2f34e19](https://github.com/swagger-api/apidom/commit/2f34e19dfbb972fa8ce7f2d8b010a5fb7c097bf7)), closes [#304](https://github.com/swagger-api/apidom/issues/304)
* **reference:** add AsyncApi 2.0.0 external resolution ([#334](https://github.com/swagger-api/apidom/issues/334)) ([b3a3914](https://github.com/swagger-api/apidom/commit/b3a391481360004d3d4a56c1467cece557442ec8)), closes [#305](https://github.com/swagger-api/apidom/issues/305)
* **reference:** add AsyncApi 2.0.x JSON reference parser ([e3aa9af](https://github.com/swagger-api/apidom/commit/e3aa9af6876979e0fe1eab1d8eac5b5e98a4f271))
* **reference:** add AsyncApi 2.0.x YAML reference parser ([5eea3ba](https://github.com/swagger-api/apidom/commit/5eea3ba69d039ab753f09c4a547d74c509a7f6dd))
* **reference:** add binary parser plugin ([7c52686](https://github.com/swagger-api/apidom/commit/7c526869c1498618a0784b6010ca2a1e68833d33)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add file resolver implementation ([12a8663](https://github.com/swagger-api/apidom/commit/12a866325ec05d1c4662be0a4be7ad2f69fcf431))
* **reference:** add HTTP resolver implementation ([d00cd7f](https://github.com/swagger-api/apidom/commit/d00cd7f06de155d629fa89d55032f27bf8c143fe))
* **reference:** add infra code for running plugins ([1bb65e9](https://github.com/swagger-api/apidom/commit/1bb65e931f5d844a59d3631e5bca930d06bc0e0b))
* **reference:** add json reference parser ([a09311a](https://github.com/swagger-api/apidom/commit/a09311afbfa98dbef0b548c415840cac6d09bb08))
* **reference:** add naive support for  keyword ([15880a8](https://github.com/swagger-api/apidom/commit/15880a8426b566ea6615c58a9f1265b2fb16264b)), closes [#371](https://github.com/swagger-api/apidom/issues/371)
* **reference:** add OAS 3.1 Example.externalValue dereference ([751188f](https://github.com/swagger-api/apidom/commit/751188fc92ee883535fa58a57a9683414b3765a0)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add OAS 3.1 Example.externalValue ext. resolution ([fd93841](https://github.com/swagger-api/apidom/commit/fd93841a1725b0f8ea7aee0971c3784bdf7e7c20)), closes [#467](https://github.com/swagger-api/apidom/issues/467)
* **reference:** add OpenApi 3.1.x JSON reference parser ([dda56c8](https://github.com/swagger-api/apidom/commit/dda56c8245a91181b10f22f432e7ea809c2ce672))
* **reference:** add OpenApi 3.1.x YAML reference parser ([f7301fc](https://github.com/swagger-api/apidom/commit/f7301fca32f837ee68c6da46707d664ef1c895d4))
* **reference:** add parsing machinery ([c050ae0](https://github.com/swagger-api/apidom/commit/c050ae0feab59caef78066c723beac0cd530b386))
* **reference:** add POC implementation of JSON Schema deference ([f585e1f](https://github.com/swagger-api/apidom/commit/f585e1f7f3bfedfaa2065c37a7ab9369ddd2dc07)), closes [#366](https://github.com/swagger-api/apidom/issues/366)
* **reference:** add predicate for Reference like elements ([23f3a87](https://github.com/swagger-api/apidom/commit/23f3a871314181049ad11a15bbc8c37cfaad55c6))
* **reference:** add primitive dereference api ([8c0b2d8](https://github.com/swagger-api/apidom/commit/8c0b2d894dbd93265b545309454b70e3a730ead4))
* **reference:** add public library API ([243e832](https://github.com/swagger-api/apidom/commit/243e83233eddc60389012e40dcaad980a455fa5a))
* **reference:** add single point of entry to resolve machinery ([ec46f7d](https://github.com/swagger-api/apidom/commit/ec46f7dd8b79e46c30ed3943400669b2b1725a9e))
* **reference:** add support for $anchor  during dereference ([cf0f403](https://github.com/swagger-api/apidom/commit/cf0f403ce32dee1f4117cdb88c10dd3fecb9a8c8)), closes [#376](https://github.com/swagger-api/apidom/issues/376)
* **reference:** add support for OAS 3.1 Link deference ([18c4363](https://github.com/swagger-api/apidom/commit/18c43636fc806f7356d0de61ddb0e23fafea4e6c)), closes [#463](https://github.com/swagger-api/apidom/issues/463)
* **reference:** add support for OAS 3.1 Link ext. resolution ([b001ce8](https://github.com/swagger-api/apidom/commit/b001ce8e3e4ce04659686fd0c62f2ca83d3e509c)), closes [#465](https://github.com/swagger-api/apidom/issues/465)
* **reference:** add support for OAS 3.1 Path Item dereference ([02717c9](https://github.com/swagger-api/apidom/commit/02717c933e65e807a0358c7617b9a708835d9ceb)), closes [#458](https://github.com/swagger-api/apidom/issues/458)
* **reference:** add support for OAS 3.1 Path Item ext. resolution ([24189b8](https://github.com/swagger-api/apidom/commit/24189b86637f43828d29bd92829d08f1a50f67dc)), closes [#459](https://github.com/swagger-api/apidom/issues/459)
* **reference:** add support for resolving ApiDOM agains JSON Pointer ([3f179a0](https://github.com/swagger-api/apidom/commit/3f179a07c016216090e4fc86b9a6c35c59cebf69))
* **reference:** add support for Schema Object external resolution ([1376148](https://github.com/swagger-api/apidom/commit/1376148385236929d66df6b7a0b984bf46e4d485)), closes [#307](https://github.com/swagger-api/apidom/issues/307)
* **reference:** add support for switching external resolution on/off ([16d5696](https://github.com/swagger-api/apidom/commit/16d5696bdda8ccc7e21d3b496d897030dffd1259))
* **reference:** add support for tracking depth ([0fcecf0](https://github.com/swagger-api/apidom/commit/0fcecf0fca9410ab82c08e5809e0d47e0c43fe09)), closes [#320](https://github.com/swagger-api/apidom/issues/320)
* **reference:** add support for unkonwn URIs ([a03f7b7](https://github.com/swagger-api/apidom/commit/a03f7b7b1d857c4ca80ce3ac838f57cc3349d130)), closes [#473](https://github.com/swagger-api/apidom/issues/473)
* **reference:** add support utils for for resolve agorytm ([fb13bd0](https://github.com/swagger-api/apidom/commit/fb13bd0249317e7d0913e2f22a8c1b1b56c90d24))
* **reference:** add various helpers for external resolution ([0e8317d](https://github.com/swagger-api/apidom/commit/0e8317d591f5698c6a0b1f335cc655a0d3f40161))
* **reference:** add yaml reference parser ([19eac45](https://github.com/swagger-api/apidom/commit/19eac45d073eb9347466faf79790229d5bc44d4f))
* **Reference:** annotate Reference elements with classes ([29895a7](https://github.com/swagger-api/apidom/commit/29895a724e5d257f8c421d2a81fb73b64b68aa26))
* **reference:** expose JSON Pointer utils ([b7bd3f2](https://github.com/swagger-api/apidom/commit/b7bd3f23a5aef923d2b89758f12699103b441942))
* **reference:** finalize reference resolver algorithm ([61ab29b](https://github.com/swagger-api/apidom/commit/61ab29b17d9ffb0ae8fdc73e022c9b3711869abe))
* **reference:** ignore external references by configration ([b5e89f8](https://github.com/swagger-api/apidom/commit/b5e89f83dbf1df4a5975ef02c3e3f7e64c2f8eae)), closes [#324](https://github.com/swagger-api/apidom/issues/324)
* **reference:** implement POC of external dereference ([1f99a31](https://github.com/swagger-api/apidom/commit/1f99a3145b4f6da3fccf56f61d2cba983e387641))
* **reference:** implement semantic external resolution ([7d62f24](https://github.com/swagger-api/apidom/commit/7d62f243ce393a0709bb747dd7409fb6ae19fe74))
* **reference:** incorporate dereference into overall achitecture ([#285](https://github.com/swagger-api/apidom/issues/285)) ([f9c6c86](https://github.com/swagger-api/apidom/commit/f9c6c8667acc08c86c84c4d9584100d6884dad90))
* **reference:** introduce mutating transcluder ([481bffa](https://github.com/swagger-api/apidom/commit/481bffa81cc5e7543fd47f3608a2f2f779fe941d))
* **reference:** introduce POC of dereference algorithm ([2b3b69f](https://github.com/swagger-api/apidom/commit/2b3b69fc5f51bc1b3c05026ad7a31c9661d2fca1))
* **reference:** introduce ReferenceSet + abstract Reference ([d46296b](https://github.com/swagger-api/apidom/commit/d46296bf3ea18495f355783f0a26a6c516f17bd7))
* **reference:** introduce resolve strategies framework ([4aa9309](https://github.com/swagger-api/apidom/commit/4aa93092b1a76d989c91d8b9be728aff794f89c7))
* **reference:** prepare for introducing parsing [#1](https://github.com/swagger-api/apidom/issues/1) ([e18e0ad](https://github.com/swagger-api/apidom/commit/e18e0ade32333bdccbe193b58a8a90ee93f23e30))
* **reference:** provide pre-computed refSet for dereferencing ([d9b36a5](https://github.com/swagger-api/apidom/commit/d9b36a5f03f68f44355746c0aeacd70be764119f)), closes [#338](https://github.com/swagger-api/apidom/issues/338)
* **reference:** reduce Reference Objects into ReferenceMap ([bb01d74](https://github.com/swagger-api/apidom/commit/bb01d74ba66c532f29f003ef59b5dfdf03e697ba))
* **reference:** support OAS 3.1 Boolean JSON Schema dereference ([3c8820a](https://github.com/swagger-api/apidom/commit/3c8820a5e632652a7d21916cab4a601ed0271adf)), closes [#471](https://github.com/swagger-api/apidom/issues/471)
* **reference:** support relative URIs in Schema. keywords ([4c550c2](https://github.com/swagger-api/apidom/commit/4c550c2a0ad073457fe50caa5c6dd65870c6ab63)), closes [#371](https://github.com/swagger-api/apidom/issues/371)
* **reference:** use CWD as default baseURI ([85baeb0](https://github.com/swagger-api/apidom/commit/85baeb008ca3918fdd8da982fc94bbaaf66fcc83)), closes [#544](https://github.com/swagger-api/apidom/issues/544)
* setup generic editor repo ([78e6f17](https://github.com/swagger-api/apidom/commit/78e6f176a52bc98b977699b80257f4624afa95a0))
* standardize parse result API ([75fb7db](https://github.com/swagger-api/apidom/commit/75fb7dba665582c45a78fc6baf04d64885f6b989))
* **traversal:** add traverse function ([3d1c64d](https://github.com/swagger-api/apidom/commit/3d1c64dda1d52f761750a901bb0d1206171b4a47))
* type declarations for all packages ([4556b31](https://github.com/swagger-api/apidom/commit/4556b3170db4f2d27d288facb3263ba82cb17036))
* **yaml-ast:** add support for formatting string scalars ([c88b34f](https://github.com/swagger-api/apidom/commit/c88b34f7abc7dd29399949dcb2b83a9391c8a34f)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for explicit Failsafe schema ([27bf0d4](https://github.com/swagger-api/apidom/commit/27bf0d492c0aaf84716d265f1315259119ce3ea7)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for explicit JSON schema ([84025b1](https://github.com/swagger-api/apidom/commit/84025b186bb46ba0cb0194876e0e2f8aa5dc52cf)), closes [#115](https://github.com/swagger-api/apidom/issues/115)
* **yaml:** add support for YAML block folded scalars ([038d3af](https://github.com/swagger-api/apidom/commit/038d3afeed363518aee16d62ef33e0aa749c5374)), closes [#249](https://github.com/swagger-api/apidom/issues/249)
* **yaml:** add support for YAML block scalar literals ([e5e4c7a](https://github.com/swagger-api/apidom/commit/e5e4c7ab5361843e68255e9f9fbc292bb205cbf2)), closes [#249](https://github.com/swagger-api/apidom/issues/249)
* **yaml:** normalize scalars before formatting ([542f965](https://github.com/swagger-api/apidom/commit/542f965b3d774e33b491805da0cacf64cc840e5f)), closes [#250](https://github.com/swagger-api/apidom/issues/250)


### Performance Improvements

* **ns-asyncapi-2-0:** introduce visitor shortcut ([78a54dc](https://github.com/swagger-api/apidom/commit/78a54dc5e6f6c1116b30003510f7dedefbce015e)), closes [#398](https://github.com/swagger-api/apidom/issues/398)
* **ns-openapi-3-1:** fold refractor plugins into refracting phase ([7d23400](https://github.com/swagger-api/apidom/commit/7d23400361737f9663a27975fc75aaa80a513214)), closes [#400](https://github.com/swagger-api/apidom/issues/400)
* **ns-openapi-3-1:** introduce visitor shortcut ([91b96ad](https://github.com/swagger-api/apidom/commit/91b96ad4c0056d18b91f7f0bf150934ff88785e9)), closes [#396](https://github.com/swagger-api/apidom/issues/396)
* **parser-adapter-yaml-1-2:** analyze performance profile ([89c8959](https://github.com/swagger-api/apidom/commit/89c89598ed1611290baa1c9a5f9199abf8583ffc)), closes [#408](https://github.com/swagger-api/apidom/issues/408)
* **perser-adaper-json:** fold syntactic analysis phases ([c983b47](https://github.com/swagger-api/apidom/commit/c983b47294ca7e4b204608caa04f1b98d48b16d9)), closes [#406](https://github.com/swagger-api/apidom/issues/406)
* remove transcluder from all semantic parsers ([906bd04](https://github.com/swagger-api/apidom/commit/906bd048f889227b959a7dd61336d4be10fb15c4)), closes [#412](https://github.com/swagger-api/apidom/issues/412)