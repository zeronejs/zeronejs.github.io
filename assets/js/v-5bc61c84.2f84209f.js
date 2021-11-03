"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[236],{1640:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-5bc61c84",path:"/techniques/auth.html",title:"Authentication",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Authentication requirements",slug:"authentication-requirements",children:[]},{level:2,title:"The sample",slug:"the-sample",children:[]}],filePathRelative:"techniques/auth.md",git:{updatedTime:1635905658e3,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},6023:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h1><p>Authentication is an essential part of most applications. There are many different approaches and strategies to handle authentication. The approach taken for any project depends on its particular application requirements. This chapter presents several approaches to authentication that can be adapted to a variety of different requirements.</p><h2 id="authentication-requirements" tabindex="-1"><a class="header-anchor" href="#authentication-requirements" aria-hidden="true">#</a> Authentication requirements</h2><ul><li><strong>Step 1</strong>: Install an Auth authentication package provided by <code>Zerone</code>, including JWT Strategy and Local Strategy</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @zeronejs/auth\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>Step 2</strong>: Import the AuthModule into the root module</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AuthModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/auth&#39;</span><span class="token punctuation">;</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n        AuthModule<span class="token punctuation">,</span>\n        <span class="token comment">// ... Other modules</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The JWT Strategy is enabled globally by default. If the interface needs to skip JWT validation, use the decorator <code>@SkipJwtAuth</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/register&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> UserCreateDto<span class="token punctuation">)</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="the-sample" tabindex="-1"><a class="header-anchor" href="#the-sample" aria-hidden="true">#</a> The sample</h2><p>Typically, you can use this module to implement login registration</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> UseGuards <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> SkipJwtAuth<span class="token punctuation">,</span> AuthService<span class="token punctuation">,</span> LocalAuthGuard<span class="token punctuation">,</span> Request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/auth&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> encryptedUserPassword <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/utils&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>\n        <span class="token keyword">private</span> <span class="token keyword">readonly</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">,</span>\n        <span class="token keyword">private</span> authService<span class="token operator">:</span> AuthService\n    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    \n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/register&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Body</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> createUserDto<span class="token operator">:</span> UserCreateDto<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token operator">...</span>createUserDto<span class="token punctuation">,</span>\n            password<span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">encryptedUserPassword</span><span class="token punctuation">(</span>createUserDto<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">SkipJwtAuth</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">UseGuards</span></span><span class="token punctuation">(</span>LocalAuthGuard<span class="token punctuation">)</span>\n    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Post</span></span><span class="token punctuation">(</span><span class="token string">&#39;auth/login&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">Req</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> req<span class="token operator">:</span> Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>authService<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',11),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}}}]);