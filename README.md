<h1 align="center">
  <img src="https://github.com/sankeyangshu/vscode-vue-snippets/blob/main/res/logo.png" width="80"/>
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

| Snippet   | Purpose                                               |
| --------- | ----------------------------------------------------- |
| `vue2`    | Single file component base with SCSS                  |
| `vue3`    | Single File component Composition API with SCSS       |
| `v3-ts`   | Single File component setup Composition API with SCSS |
| `v2-css`  | Single file component base with CSS                   |
| `v2-styl` | Single file component base with Stylus                |
| `v2-less` | Single file component base with Less                  |

### Template

| Snippet           | Purpose                             |
| ----------------- | ----------------------------------- |
| `vfor`            | v-for directive                     |
| `vstyle`          | Inline style binding                |
| `vstyle-obj`      | Inline style binding with objects   |
| `vclass`          | Class binding                       |
| `vclass-obj`      | Class binding with objects          |
| `vclass-obj-mult` | Multiple conditional class bindings |
| `vroutename`      | router-link Named Routing           |
| `vroutenameparam` | router-link Named with Parameters   |
| `vroutepath`      | router-link Path Routing Link       |
| `vanim`           | Transition component with JS hooks  |

### Script

| Snippet          | Purpose                                                       |
| ---------------- | ------------------------------------------------------------- |
| `vdata`          | Component data as a function                                  |
| `vmethod`        | Vue method                                                    |
| `vcomputed`      | Vue computed property                                         |
| `vwatcher`       | Vue watcher with new and old value args                       |
| `vprops`         | Props with type and default                                   |
| `vcomponents`    | Import one component into another within the export statement |
| `vfilter`        | Vue filter                                                    |
| `vnexttick`      | Vue nexttick                                                  |
| `vmixin`         | Create a Vue Mixin                                            |
| `vmixin-use`     | Bring a mixin into a component to use                         |
| `vbeforecreate`  | beforeCreate lifecycle method                                 |
| `vcreated`       | created lifecycle method                                      |
| `vbeforemount`   | beforeMount lifecycle method                                  |
| `vmounted`       | vmounted lifecycle method                                     |
| `vbeforeupdate`  | beforeUpdate lifecycle method                                 |
| `vupdated`       | updated lifecycle method                                      |
| `vbeforedestroy` | beforeDestroy lifecycle method                                |
| `vdestroyed`     | destroyed lifecycle method                                    |
| `vc-direct`      | Vue create a custom directive                                 |
| `vanimhook-js`   | Using the Transition component JS hooks in methods            |
| `vcommit`        | Commit to Vuex store in methods for mutation                  |
| `vdispatch`      | Dispatch to Vuex store in methods for action                  |

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

## License

[MIT License](https://github.com/sankeyangshu/vscode-vue-snippets/blob/main/LICENSE)
