<h1 align="center">
  <img src="https://github.com/sankeyangshu/vscode-vue-snippets/blob/main/res/logo.png?raw=true" width="80"/>
</h1>

<p align="center">
<i>A Vue 2/3 Code Snippets Extension.</i>
</p>

# vscode-vue-snippets

## Installation

In order to install an extension you need to launch the Command Palette.

- [_Linux_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf): `Ctrl+P`
- [_macOS_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf): `⌘P`
- [_Windows_](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf): `Ctrl+P`

There you have either the option to show the already installed snippets or install new ones. Search for _Vue Collection Vscode Snippets_ and install it.

## Supported languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- Vue (.vue)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **⇥** means the `TAB` key.

### Vue

| Snippet     | Purpose                                        |
| ----------- | ---------------------------------------------- |
| `vbase`     | Base for Vue File Composition API with SCSS    |
| `vbase-css` | Base for Vue File Composition API with CSS     |
| `vbase-ts`  | Base for Vue File Composition API - Typescript |
| `vinit`     | Base for Vue File                              |
| `vinit-css` | Base for Vue File with CSS                     |

### Template

| Snippet           | Purpose                                 |
| ----------------- | --------------------------------------- |
| `vfor`            | vfor statement                          |
| `vstyle`          | vue inline style binding                |
| `vstyle-obj`      | vue inline style binding, objects       |
| `vclass`          | vue class binding                       |
| `vclass-obj`      | vue class binding                       |
| `vclass-obj-mult` | vue multiple conditional class bindings |
| `von`             | v-on click handler with arguments       |
| `vroutename`      | Named routing link                      |
| `vroutenameparam` | Named routing link w/ params            |
| `vroutepath`      | Path routing link                       |
| `vanim`           | transition component js hooks           |
| `vcomponent`      | component element                       |

### Script

| Snippet            | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| `vdata`            | Vue Component Data                                         |
| `vprops`           | Vue Props with Default                                     |
| `vmethod`          | vue method                                                 |
| `vcomputed`        | computed value                                             |
| `vwatcher`         | vue watcher                                                |
| `vwatcher-options` | vue watcher with options                                   |
| `vfilter`          | vue filter                                                 |
| `vcomponents`      | Import one component into another, within export statement |
| `vemit`            | vue emit                                                   |
| `vnexttick`        | vue nextTick                                               |
| `vset`             | vue set                                                    |
| `vdelete`          | vue delete                                                 |
| `vbeforecreate`    | beforeCreate lifecycle method                              |
| `vcreated`         | created lifecycle method                                   |
| `vbeforemount`     | beforeMount lifecycle method                               |
| `vmounted`         | mounted lifecycle method                                   |
| `vbeforeupdate`    | beforeUpdate lifecycle method                              |
| `vupdated`         | updated lifecycle method                                   |
| `vbeforedestroy`   | beforeDestroy lifecycle method                             |
| `vdestroyed`       | destroyed lifecycle method                                 |
| `vbeforeunmount`   | beforeUnmount lifecycle method                             |
| `vunmount`         | unmounted lifecycle method                                 |

### Vue Composition API

| Snippet             | Purpose                                          |
| ------------------- | ------------------------------------------------ |
| `v3ref`             | Vue Ref                                          |
| `v3reactive`        | Vue Composition API - reactive                   |
| `v3computed`        | Vue Composition API - computed                   |
| `v3watch`           | Vue Composition API - watcher single source      |
| `v3watch-array`     | Vue Composition API - watch as array             |
| `v3watcheffect`     | Vue Composition API - watchEffect                |
| `v3onmounted`       | Lifecycle hook - onMounted                       |
| `v3onbeforemount`   | Lifecycle hook - onBeforeMount                   |
| `v3onbeforeupdate`  | Lifecycle hook - onBeforeUpdate                  |
| `v3onupdated`       | Lifecycle hook - onUpdated                       |
| `v3onerrorcaptured` | Lifecycle hook - onErrorCaptured                 |
| `v3onunmounted`     | Lifecycle hook - (destroyed) onUnmounted         |
| `v3onbeforeunmount` | Lifecycle hook - (beforeDestroy) onBeforeUnmount |

### Vue Router

| Snippet              | Purpose                                        |
| -------------------- | ---------------------------------------------- |
| `vrouter`            | Base for Vue Router                            |
| `vscrollbehavior`    | Vue Router scrollBehavior                      |
| `vbeforeeach`        | Vue Router global guards beforeEach            |
| `vbeforeresolve`     | Vue Router global guards beforeResolve         |
| `vaftereach`         | Vue Router global guards afterEach             |
| `vbeforeenter`       | Vue Router per-route guard beforeEnter         |
| `vbeforerouteenter`  | Vue Router component guards beforeRouteEnter   |
| `vbeforerouteupdate` | Vue Router component guards beforeRouteUpdate  |
| `vbeforerouteleave`  | Vue Router component guards beforeRouteLeave   |
| `vroute-named`       | Vue Router route with per route code-splitting |
| `v3router`           | Vue Router hooks                               |
| `v3route`            | Vue Route hooks                                |

### Vue Vuex

| Snippet      | Purpose             |
| ------------ | ------------------- |
| `vxstore`    | Base for Vuex store |
| `vxgetter`   | vuex getter         |
| `vxmutation` | vuex mutation       |
| `vxaction`   | vuex action         |
| `vxmodule`   | vuex module         |

### Vue Pinia

| Snippet   | Purpose              |
| --------- | -------------------- |
| `vpinia`  | Base for Pinia store |
| `vgetter` | Vue Pinia getters    |
| `vaction` | Vue Pinia actions    |

## License

[MIT License](https://github.com/sankeyangshu/vscode-vue-snippets/blob/main/LICENSE)
