"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[434],{4121:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-e114075e",path:"/techniques/redis.html",title:"The cache",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Redis",slug:"redis",children:[]}],filePathRelative:"techniques/redis.md",git:{updatedTime:1635904225e3,contributors:[{name:"zeronejs",email:"92850445+zeronejs@users.noreply.github.com",commits:1}]}}},524:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var e=a(6252);const p=(0,e._)("h1",{id:"the-cache",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#the-cache","aria-hidden":"true"},"#"),(0,e.Uk)(" The cache")],-1),t={href:"https://redis.io",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Redis"),c=(0,e.Uk)(" is a high-performance key-value database"),l=(0,e._)("p",null,"Redis largely compensates for memcached key/value storage, and in some cases complements relational databases.",-1),r={class:"custom-container tip"},i=(0,e._)("p",{class:"custom-container-title"},"TIP",-1),u=(0,e.Uk)("You need to install "),k={href:"https://redis.io/download",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("redis"),b=(0,e.Uk)(" ， or have a valid redis address"),m=(0,e.uE)('<h2 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h2><ul><li><strong>Step 1</strong>: Install the Redis module package provided by Zerone</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @zeronejs/redis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>Step 2</strong>: Import RedisModule into the root module</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RedisModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/redis&#39;</span><span class="token punctuation">;</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n        RedisModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// uses defaults unless given configuration object</span>\n        <span class="token comment">// ... Other modules</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><strong>Step 3</strong>: Dependency injection where Redis is needed</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">REDIS_CLIENT</span><span class="token punctuation">,</span> Redis <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/redis&#39;</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppController</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>\n        <span class="token decorator"><span class="token at operator">@</span><span class="token function">Inject</span></span><span class="token punctuation">(</span><span class="token constant">REDIS_CLIENT</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token keyword">readonly</span> redisClient<span class="token operator">:</span> Redis\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>redisClient<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token operator">...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',7),h={},g=(0,a(3744).Z)(h,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[o,(0,e.Wm)(a)]),c]),l,(0,e._)("div",r,[i,(0,e._)("p",null,[u,(0,e._)("a",k,[d,(0,e.Wm)(a)]),b])]),m],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);