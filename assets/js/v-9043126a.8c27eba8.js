"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[396],{1366:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-9043126a",path:"/zh/guide/plugin.html",title:"插件",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"社区插件",slug:"社区插件",children:[]},{level:2,title:"本地插件",slug:"本地插件",children:[]}],filePathRelative:"zh/guide/plugin.md",git:{updatedTime:1635391738e3,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},5123:(n,s,a)=>{a.r(s),a.d(s,{default:()=>R});var e=a(6252);const t=(0,e._)("h1",{id:"插件",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,e.Uk)(" 插件")],-1),p=(0,e.Uk)("借助于 "),o=(0,e.Uk)("插件 API"),l=(0,e.Uk)(" ， VuePress 插件可以为你提供各种不同的功能。"),r=(0,e._)("h2",{id:"社区插件",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#社区插件","aria-hidden":"true"},"#"),(0,e.Uk)(" 社区插件")],-1),u=(0,e.Uk)("社区用户创建了很多插件，并将它们发布到了 "),c={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("NPM"),d=(0,e.Uk)(" 上。 VuePress 团队也在 "),k={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("@vuepress"),m=(0,e.Uk)(" Scope 下维护了一些官方插件。查看插件本身的文档可以获取更详细的指引。"),b=(0,e.Uk)("一般而言，你需要在 "),g=(0,e.Uk)("plugins"),f=(0,e.Uk)(" 配置项中设置你要使用的插件名称："),_=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">/* 配置项 */</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>你可以使用插件名称或者它的简称：</p><table><thead><tr><th>插件名称</th><th>简称</th></tr></thead><tbody><tr><td><code>vuepress-plugin-foo</code></td><td><code>foo</code></td></tr><tr><td><code>@org/vuepress-plugin-bar</code></td><td><code>@org/bar</code></td></tr><tr><td><code>@vuepress/plugin-foobar</code></td><td><code>@vuepress/foobar</code></td></tr></tbody></table>',3),v={class:"custom-container tip"},U=(0,e._)("p",{class:"custom-container-title"},"提示",-1),w=(0,e._)("p",null,"大部分插件只能使用一次，如果同一个插件被多次使用，那么只有最后一次会生效。",-1),z=(0,e.Uk)("然而，部分插件是可以被多次使用的（例如 "),j=(0,e.Uk)("@vuepress/plugin-container"),E=(0,e.Uk)("），你应该查看插件本身的文档来获取详细指引。"),x=(0,e._)("h2",{id:"本地插件",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#本地插件","aria-hidden":"true"},"#"),(0,e.Uk)(" 本地插件")],-1),W=(0,e._)("p",null,"如果你想要使用自己的插件，但是又不想发布它，你可以创建一个本地插件。",-1),B=(0,e.Uk)("推荐你直接将 "),y=(0,e.Uk)("配置文件"),P=(0,e.Uk)(" 作为插件使用，因为 "),q=(0,e.Uk)("几乎所有的插件 API 都可以在配置文件中使用"),A=(0,e.Uk)("，这在绝大多数场景下都更为方便。"),C=(0,e.uE)('<p>但是如果你在配置文件中要做的事情太多了，最好还是将它们提取到单独的插件中，然后通过设置绝对路径或者通过 require 来使用它们：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./path/to/your-plugin.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./another-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),D=(0,e.Uk)("前往 "),I=(0,e.Uk)("深入 > 开发插件"),L=(0,e.Uk)(" 学习如何开发你自己的插件。"),N={},R=(0,a(3744).Z)(N,[["render",function(n,s){const a=(0,e.up)("RouterLink"),N=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e.Wm)(a,{to:"/zh/reference/plugin-api.html"},{default:(0,e.w5)((()=>[o])),_:1}),l]),r,(0,e._)("p",null,[u,(0,e._)("a",c,[i,(0,e.Wm)(N)]),d,(0,e._)("a",k,[h,(0,e.Wm)(N)]),m]),(0,e._)("p",null,[b,(0,e.Wm)(a,{to:"/zh/reference/config.html#plugins"},{default:(0,e.w5)((()=>[g])),_:1}),f]),_,(0,e._)("div",v,[U,w,(0,e._)("p",null,[z,(0,e.Wm)(a,{to:"/zh/reference/plugin/container.html"},{default:(0,e.w5)((()=>[j])),_:1}),E])]),x,W,(0,e._)("p",null,[B,(0,e.Wm)(a,{to:"/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:(0,e.w5)((()=>[y])),_:1}),P,(0,e.Wm)(a,{to:"/zh/reference/config.html#%E6%8F%92%E4%BB%B6-api"},{default:(0,e.w5)((()=>[q])),_:1}),A]),C,(0,e._)("p",null,[D,(0,e.Wm)(a,{to:"/zh/advanced/plugin.html"},{default:(0,e.w5)((()=>[I])),_:1}),L])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);