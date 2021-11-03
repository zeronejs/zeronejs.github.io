"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[451],{9534:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-2d30e494",path:"/zh/guide/cli.html",title:"命令行接口",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"info",slug:"info",children:[]},{level:2,title:"new",slug:"new",children:[]},{level:2,title:"generate",slug:"generate",children:[]},{level:2,title:"build",slug:"build",children:[]}],filePathRelative:"zh/guide/cli.md",git:{updatedTime:1635903539e3,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},2229:(n,e,s)=>{s.r(e),s.d(e,{default:()=>u});var a=s(6252);const p=(0,a._)("h1",{id:"命令行接口",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#命令行接口","aria-hidden":"true"},"#"),(0,a.Uk)(" 命令行接口")],-1),l=(0,a.Uk)("Zerone 命令行接口是由 "),r={href:"https://www.npmjs.com/package/@zeronejs/cli",target:"_blank",rel:"noopener noreferrer"},i=(0,a.Uk)("@zeronejs/cli"),t=(0,a.Uk)(" 包提供的。"),o=(0,a.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i -g @zeronejs/cli\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>执行 <code>zerone --help</code> 来获取下列帮助信息：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: zerone <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n\nOptions:\n  -v, --version   Output the current version.\n  -h, --help      Output usage information.\n\nCommands:\n  new<span class="token operator">|</span>n <span class="token punctuation">[</span>name<span class="token punctuation">]</span>    Generate New Zerone application.\n  build           ts代码打包为js\n  info<span class="token operator">|</span>i          Display Zerone project details.\n  generate<span class="token operator">|</span>g      Generate a Zerone CRUD element\n  <span class="token builtin class-name">help</span> <span class="token punctuation">[</span>command<span class="token punctuation">]</span>  display <span class="token builtin class-name">help</span> <span class="token keyword">for</span> <span class="token builtin class-name">command</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zerone info\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="new" tabindex="-1"><a class="header-anchor" href="#new" aria-hidden="true">#</a> new</h2><p>新建一个Zerone项目。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: zerone new<span class="token operator">|</span>n <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span>\n\nGenerate New Zerone application.\n\nOptions:\n  -h, --help  Output usage information.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="generate" tabindex="-1"><a class="header-anchor" href="#generate" aria-hidden="true">#</a> generate</h2><p>通常，在开发过程中，我们每创建一个表都需要创建与之相关的 CRUD 接口或服务， 其中充斥着大量的 C / V 操作、创建多个 文件，这其中还有重命名等多个操作，既浪费时间，也不会有技术提升。</p><p>并且初级开发者在执行上述操作时，经常因复制或重命名等低级失误导致项目进度卡住。</p><p><code>generate</code>旨在帮助开发者降低重复工作量，帮您在一盏茶的功夫完成工作。并且程序生成的代码命名就是正确的，不会出现低级失误。</p><p><code>generate</code>会读取当前命令行目录下所有*.entity.ts文件，并生成与之相关的 CRUD，您仅需写一个表结构。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>生成的 Module类 需要导入到根模块。</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: zerone generate<span class="token operator">|</span>g <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n\nGenerate a Zerone CRUD element\n\nOptions:\n  -h, --help  Output usage information.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2><p>会编译打包项目中的ts文件，它与<code>tsc</code>的区别在于 可以复制其他文件 如：package.json等</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果您是库开发者，这将很有帮助。</p><p>但在实际开发过程中，您可能不需要它，请使用<code>npm run build</code>。</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Usage: zerone build <span class="token punctuation">[</span>options<span class="token punctuation">]</span>\n\nts代码打包为js\n\nOptions:\n  -h, --help  Output usage information.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',21),c={},u=(0,s(3744).Z)(c,[["render",function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[p,(0,a._)("p",null,[l,(0,a._)("a",r,[i,(0,a.Wm)(s)]),t]),o],64)}]])},3744:(n,e)=>{e.Z=(n,e)=>{for(const[s,a]of e)n[s]=a;return n}}}]);