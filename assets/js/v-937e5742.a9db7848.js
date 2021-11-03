"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[787],{5701:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-937e5742",path:"/zh/techniques/role.html",title:"角色授权",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本的 RBAC 实现",slug:"基本的-rbac-实现",children:[]}],filePathRelative:"zh/techniques/role.md",git:{updatedTime:163590376e4,contributors:[{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},1501:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="角色授权" tabindex="-1"><a class="header-anchor" href="#角色授权" aria-hidden="true">#</a> 角色授权</h1><p>授权是指确定用户能够做什么的过程。</p><p>例如，允许管理用户创建、编辑和删除帖子。非管理员用户仅被授权阅读帖子。</p><h2 id="基本的-rbac-实现" tabindex="-1"><a class="header-anchor" href="#基本的-rbac-实现" aria-hidden="true">#</a> 基本的 RBAC 实现</h2><ul><li><strong>步骤1</strong>: 安装Zerone 提供的一个简单的权限验证包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @zeronejs/role-easy\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>步骤2</strong>: 让我们创建一个Role代表系统中角色的枚举</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>它在 common/role/enums.ts</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> Role <span class="token punctuation">{</span>\n  User <span class="token operator">=</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>\n  Admin <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><strong>步骤3</strong>: 将RolesModule导入根模块</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RolesModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/role-easy&#39;</span><span class="token punctuation">;</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n        RolesModule<span class="token punctuation">,</span>\n        <span class="token comment">// ... 其他模块</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><strong>步骤4</strong>: 在需要权限验证的接口加入 Roles 装饰器</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Roles <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zeronejs/role-easy&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Role <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./common/role/enums&#39;</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Roles</span></span><span class="token punctuation">(</span>Role<span class="token punctuation">.</span>Admin<span class="token punctuation">)</span>\n<span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appService<span class="token punctuation">.</span><span class="token function">getHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token operator">...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在这个例子中，我们假设request.user包含用户实例和允许的角色（在roles属性下）</p><p>为确保此示例有效，您的User类必须如下所示：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...other properties</span>\n  roles<span class="token operator">:</span> Role<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>',14),p={},t=(0,a(3744).Z)(p,[["render",function(n,s){return e}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,e]of s)n[a]=e;return n}}}]);