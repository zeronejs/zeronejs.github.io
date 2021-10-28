"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[99],{7225:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-4d76029c",path:"/guide/theme.html",title:"Theme",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Community Theme",slug:"community-theme",children:[]},{level:2,title:"Local Theme",slug:"local-theme",children:[]}],filePathRelative:"guide/theme.md",git:{updatedTime:1635391738e3,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},9317:(e,t,n)=>{n.r(t),n.d(t,{default:()=>U});var a=n(6252);const s=(0,a._)("h1",{id:"theme",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),(0,a.Uk)(" Theme")],-1),o=(0,a._)("p",null,"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.",-1),r=(0,a.Uk)("VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing. The default theme provides basic but useful features for documentation site, you can check out "),l=(0,a.Uk)("Default Theme Config Reference"),c=(0,a.Uk)(" for a full list of config."),u=(0,a._)("p",null,[(0,a.Uk)("However, you might think it is not good enough. Or, you want to build a different type of site, for example, a blog, instead of a documentation. Then, you can try to "),(0,a._)("a",{href:"#community-theme"},"use a community theme"),(0,a.Uk)(" or "),(0,a._)("a",{href:"#local-theme"},"create a local theme"),(0,a.Uk)(".")],-1),i=(0,a._)("h2",{id:"community-theme",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#community-theme","aria-hidden":"true"},"#"),(0,a.Uk)(" Community Theme")],-1),p=(0,a.Uk)("Community users have created lots of theme and published them to "),d={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("NPM"),m=(0,a.Uk)(". You should check the theme's own documentation for detailed guide."),f=(0,a.Uk)("In general, you need to specify the name of the theme to use in "),b=(0,a.Uk)("theme"),k=(0,a.Uk)(" option:"),g=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>You can use either theme name or its shorthand:</p><table><thead><tr><th>Theme Name</th><th>Shorthand</th></tr></thead><tbody><tr><td><code>vuepress-theme-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-theme-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/theme-default</code></td><td><code>@vuepress/default</code></td></tr></tbody></table><h2 id="local-theme" tabindex="-1"><a class="header-anchor" href="#local-theme" aria-hidden="true">#</a> Local Theme</h2><p>If you want to use your own custom theme but don&#39;t want to publish it, you can create a local theme.</p><p>First, create the local theme directory, typically <code>.vuepress/theme</code> :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>└─ docs\n   ├─ .vuepress\n   │  ├─ theme\n   │  │  └─ index.js\n   │  └─ config.js\n   └─ README.md\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Then, set the absolute path of the theme directory to use it:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  theme<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/docs/.vuepress/theme&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',9),v=(0,a.Uk)("Next, refer to "),y=(0,a.Uk)("Advanced > Writing a Theme"),w=(0,a.Uk)(" for how to write your own theme."),_={},U=(0,n(3744).Z)(_,[["render",function(e,t){const n=(0,a.up)("RouterLink"),_=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,o,(0,a._)("p",null,[r,(0,a.Wm)(n,{to:"/reference/default-theme/config.html"},{default:(0,a.w5)((()=>[l])),_:1}),c]),u,i,(0,a._)("p",null,[p,(0,a._)("a",d,[h,(0,a.Wm)(_)]),m]),(0,a._)("p",null,[f,(0,a.Wm)(n,{to:"/reference/config.html#theme"},{default:(0,a.w5)((()=>[b])),_:1}),k]),g,(0,a._)("p",null,[v,(0,a.Wm)(n,{to:"/advanced/theme.html"},{default:(0,a.w5)((()=>[y])),_:1}),w])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{for(const[n,a]of t)e[n]=a;return e}}}]);