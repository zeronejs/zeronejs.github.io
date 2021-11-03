"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[170],{3866:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a={key:"v-fb0f0066",path:"/guide/getting-started.html",title:"Getting Started",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Prerequisites",slug:"prerequisites",children:[]},{level:2,title:"Manual Installation",slug:"manual-installation",children:[]},{level:2,title:"Generate CURD by one key",slug:"generate-curd-by-one-key",children:[]}],filePathRelative:"guide/getting-started.md",git:{updatedTime:1635904225e3,contributors:[{name:"zeronejs",email:"92850445+zeronejs@users.noreply.github.com",commits:1}]}}},777:(e,n,s)=>{s.r(n),s.d(n,{default:()=>_});var a=s(6252);const t=(0,a._)("h1",{id:"getting-started",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),(0,a.Uk)(" Getting Started")],-1),l=(0,a._)("h2",{id:"prerequisites",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),(0,a.Uk)(" Prerequisites")],-1),r={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("Node.js v12+"),i=(0,a.uE)('<h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a> Manual Installation</h2><p>This chapter will help you build a simple Zerone base service from scratch.</p><ul><li><strong>Step 1</strong>: Install Zerone CLI tool and create a new project</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g @zeronejs/cli\nzerone new project-name\n<span class="token builtin class-name">cd</span> project-name\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><strong>Step 2</strong>: Install the dependencies and run them</li></ul>',5),p=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"yarn"),(0,a.Uk)(" start\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])],-1),c=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,[(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a._)("span",{class:"token function"},"install"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token function"},"npm"),(0,a.Uk)(" run start\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br")])],-1),u=(0,a.Uk)("Zerone launches a development server at"),d={href:"http://localhost:5000",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("http://localhost:5000"),h=(0,a.Uk)(". "),b={href:"http://localhost:5000/api",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("http://localhost:5000/api"),g=(0,a.Uk)(" started a Swagger open API."),v=(0,a.uE)('<p>You should now have a simple working Zerone server.</p><h2 id="generate-curd-by-one-key" tabindex="-1"><a class="header-anchor" href="#generate-curd-by-one-key" aria-hidden="true">#</a> Generate CURD by one key</h2><p>After the project is created, it carries a user entity, and this section will help you generate the interface with one click.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The generate command reads all *.entity.ts files in the current directory</p><p>You need to enter this folder</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/api/user/entities/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zerone generate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Then import the UserModule into the app module, and a simple CRUD is generated.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@api/user/user.module&#39;</span><span class="token punctuation">;</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n        UserModule<span class="token punctuation">,</span>\n        <span class="token comment">// ... Other modules</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>When you use a custom type(like Gender in this example), <code>generate</code> only knows the name of the type, not the location where it was defined, so bring it in in the <code>dto</code> folder</p><p><code>user-create.dto.ts</code> <code>user-list.dto.ts</code> <code>user-update.dto.ts</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Gender <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../entities/user.entity&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></div>',8),f={},_=(0,s(3744).Z)(f,[["render",function(e,n){const s=(0,a.up)("OutboundLink"),f=(0,a.up)("CodeGroupItem"),_=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,l,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",r,[o,(0,a.Wm)(s)])])]),i,(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f,{title:"YARN",active:""},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(f,{title:"NPM"},{default:(0,a.w5)((()=>[c])),_:1})])),_:1}),(0,a._)("p",null,[u,(0,a._)("a",d,[m,(0,a.Wm)(s)]),h,(0,a._)("a",b,[k,(0,a.Wm)(s)]),g]),v],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[s,a]of n)e[s]=a;return e}}}]);