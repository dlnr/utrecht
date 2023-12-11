"use strict";(self.webpackChunk_utrecht_storybook=self.webpackChunk_utrecht_storybook||[]).push([[932],{"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./stories/nl-design-system/contributing-a11y.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>contributing_a11y_stories});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.4.6_@types+react-dom@18.2.17_@types+react@18.2.42_react-dom@18.2.0_react@18.2.0/node_modules/@storybook/blocks/dist/index.mjs");const contributing_a11yraw_namespaceObject="\x3c!-- @license CC0-1.0 --\x3e\n\n# Contribution Guidelines for accessibility\n\n## Consider accessibility in every step of the process\n\nBefore the work begins:\n\n- Allocate time and budget to deliver and test for accessibility.\n- Include accessibility requirements in your Definition of Done.\n\nDuring design phase:\n\n- Consider minimum font size when defining a font size scale for typography.\n- Do not use font sizes that fall outside of the font size scale.\n- Provide a color pallete where every background color is accompanied by a contrasting foreround color for text and icons.\n- Provide designs for the various states of components, ensure the states can be distinguished from each other with varying levels of eyesight and color perception.\n- Use vision simulation tools inside your design app, such as [Stark](https://www.getstark.co).\n\nDuring refinement and planning of development work:\n\n- Consider the guidelines from the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#aria_ex), and see if documentation regarding ARIA-attributes and keyboard shortcuts exist for your type of widget. Add those to your development checklist. Warning: not every example widget implementation works great with screen readers, so test this yourself before deciding to use it as reference.\n- When estimating Story Points for a component, make sure you have a clear understanding of the accessibility requirements. This helps you to avoid overcommitting to work in a sprint and feel forced to rush the accessibility aspects.\n\nDuring development:\n\n- Be mindful of accessibility warnings in Storybook.\n- Stay in communication with designers to evolve the design when needed, do not let the initial design stand in the way of making an accessible product.\n- Install browser plugins to test accessibility when integrating components in your project.\n\nDuring testing:\n\n- Test using just a keyboard, and no mouse or touch.\n- Test in Windows with [High Contrast Mode](https://support.microsoft.com/en-us/windows/turn-high-contrast-mode-on-or-off-in-windows-909e9d89-a0f9-a3a9-b993-7a6dcee85025). The algorithm to display your website in highly contrasting colors isn't without flaws: sometimes important details such as icons and the focus outline are no longer perceivable.\n- Test using a screen reader, consider using captions instead of the voice synthesizer.\n- Test using visual perception simulation tools for blurry vision and color blindness.\n\nWhen your project is in beta:\n\n- Consider testing your product with users with diverse abilities.\n\nFor release candidates:\n\n- Request an accessibility audit.\n- Report back any issues related to design system components and patterns to the backlog.\n- Fix reported bugs before going to production.\n\nFor production:\n\n- Offer a way to report accessibility issues.\n";var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"NL Design System/Contributing/Accessibility"}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:contributing_a11yraw_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"NL Design System/Contributing/Accessibility",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const contributing_a11y_stories=componentMeta}}]);