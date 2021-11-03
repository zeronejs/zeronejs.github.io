"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[794],{384:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-0d663326",path:"/zh/techniques/auth.html",title:"身份验证",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"示例",slug:"示例",children:[]}],filePathRelative:"zh/techniques/auth.md",git:{updatedTime:163590376e4,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},1067:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="身份验证" tabindex="-1"><a class="header-anchor" href="#身份验证" aria-hidden="true">#</a> 身份验证</h1><p>身份验证是大多数应用程序的重要组成部分。有许多不同的方法和策略来处理身份验证。任何项目采用的方法取决于其特定的应用要求。本章介绍了几种可适应各种不同要求的身份验证方法。</p><ul><li><strong>步骤1</strong>: 安装Zerone 提供的一个auth 身份验证包，其中包括jwt策略和local策略</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @zeronejs/auth\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>步骤2</strong>: 将AuthModule导入根模块</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AuthModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/auth&#39;</span><span class="token punctuation">;</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n        AuthModule<span class="token punctuation">,</span>\n        <span class="token comment">// ... 其他模块</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>默认情况下 jwt策略会全局开启，如果接口需要跳过jwt验证，请使用装饰器 <code>@SkipJwtAuth</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/register&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> UserCreateDto<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>通常情况下，您可以使用此模块实现 登录 注册</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UseGuards <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SkipJwtAuth<span class="token punctuation">,</span> AuthService<span class="token punctuation">,</span> LocalAuthGuard<span class="token punctuation">,</span> Request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/auth&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> encryptedUserPassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/utils&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>\n        <span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">,</span>\n        <span class="token keyword">private</span> authService<span class="token operator">:</span> AuthService\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    \n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/register&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> UserCreateDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token operator">...</span>createUserDto<span class="token punctuation">,</span>\n            password<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">encryptedUserPassword</span><span class="token punctuation">(</span>createUserDto<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">UseGuards</span></span><span class="token punctuation">(</span>LocalAuthGuard<span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/login&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Req</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',10),t={},e=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);