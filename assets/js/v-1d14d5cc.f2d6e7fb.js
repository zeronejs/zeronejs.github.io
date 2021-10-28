"use strict";(self.webpackChunk_zerone_vuepress_starter=self.webpackChunk_zerone_vuepress_starter||[]).push([[507],{494:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-1d14d5cc",path:"/guide/plugin.html",title:"Plugin",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Community Plugin",slug:"community-plugin",children:[]},{level:2,title:"Local Plugin",slug:"local-plugin",children:[]}],filePathRelative:"guide/plugin.md",git:{updatedTime:1635391738e3,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},4552:(n,e,s)=>{s.r(e),s.d(e,{default:()=>N});var a=s(6252);const t=(0,a._)("h1",{id:"plugin",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#"),(0,a.Uk)(" Plugin")],-1),o=(0,a.Uk)("With the help of "),p=(0,a.Uk)("Plugin API"),l=(0,a.Uk)(", VuePress plugin can provide different features for you."),u=(0,a._)("h2",{id:"community-plugin",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#community-plugin","aria-hidden":"true"},"#"),(0,a.Uk)(" Community Plugin")],-1),i=(0,a.Uk)("Community users have created lots of plugins and published them to "),r={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("NPM"),d=(0,a.Uk)(". VuePress team also maintains some official plugins under the "),g={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("@vuepress"),h=(0,a.Uk)(" scope. You should check the plugin's own documentation for detailed guide."),k=(0,a.Uk)("In general, you need to specify the name of the plugin to use in "),f=(0,a.Uk)("plugins"),b=(0,a.Uk)(" option:"),v=(0,a.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* options */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>You can use either plugin name or its shorthand:</p><table><thead><tr><th>Plugin Name</th><th>Shorthand</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>',3),_={class:"custom-container tip"},w=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),y=(0,a._)("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),U=(0,a.Uk)("However, some plugins can be used multiple times (e.g. "),P=(0,a.Uk)("@vuepress/plugin-container"),W=(0,a.Uk)("), and you should check the documentation of the plugin itself for detailed guide."),j=(0,a._)("h2",{id:"local-plugin",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#local-plugin","aria-hidden":"true"},"#"),(0,a.Uk)(" Local Plugin")],-1),x=(0,a._)("p",null,"If you want to use your own plugin but don't want to publish it, you can create a local plugin.",-1),I=(0,a.Uk)("It is recommended to use the "),C=(0,a.Uk)("Config File"),q=(0,a.Uk)(" directly as a plugin, because "),A=(0,a.Uk)("almost all of the Plugin APIs are available"),L=(0,a.Uk)(", which would be more convenient in most cases."),Y=(0,a.uE)('<p>But if you have too many things to do in your config file, it&#39;s better to extract them into separate plugins, and use them by setting the absolute path to them or requiring them:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/your-plugin.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./another-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),z=(0,a.Uk)("You can refer to "),E=(0,a.Uk)("Advanced > Writing a Plugin"),H=(0,a.Uk)(" for how to write your own plugin."),M={},N=(0,s(3744).Z)(M,[["render",function(n,e){const s=(0,a.up)("RouterLink"),M=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[o,(0,a.Wm)(s,{to:"/reference/plugin-api.html"},{default:(0,a.w5)((()=>[p])),_:1}),l]),u,(0,a._)("p",null,[i,(0,a._)("a",r,[c,(0,a.Wm)(M)]),d,(0,a._)("a",g,[m,(0,a.Wm)(M)]),h]),(0,a._)("p",null,[k,(0,a.Wm)(s,{to:"/reference/config.html#plugins"},{default:(0,a.w5)((()=>[f])),_:1}),b]),v,(0,a._)("div",_,[w,y,(0,a._)("p",null,[U,(0,a.Wm)(s,{to:"/reference/plugin/container.html"},{default:(0,a.w5)((()=>[P])),_:1}),W])]),j,x,(0,a._)("p",null,[I,(0,a.Wm)(s,{to:"/guide/configuration.html#config-file"},{default:(0,a.w5)((()=>[C])),_:1}),q,(0,a.Wm)(s,{to:"/reference/config.html#plugin-api"},{default:(0,a.w5)((()=>[A])),_:1}),L]),Y,(0,a._)("p",null,[z,(0,a.Wm)(s,{to:"/advanced/plugin.html"},{default:(0,a.w5)((()=>[E])),_:1}),H])],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}}}]);