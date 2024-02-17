"use strict";(self.webpackChunkzerone_docs=self.webpackChunkzerone_docs||[]).push([[787],{5701:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-937e5742",path:"/zh/techniques/role.html",title:"角色授权",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本的 RBAC 实现",slug:"基本的-rbac-实现",children:[]}],filePathRelative:"zh/techniques/role.md",git:{updatedTime:1635918093e3,contributors:[{name:"zzh948498",email:"35091020+zzh948498@users.noreply.github.com",commits:2},{name:"“张智皓”",email:"zhang948498@163.com",commits:1}]}}},131:(s,n,a)=>{a.r(n),a.d(n,{default:()=>e});const l=(0,a(6252).uE)('<h1 id="角色授权" tabindex="-1"><a class="header-anchor" href="#角色授权" aria-hidden="true">#</a> 角色授权</h1><p>授权是指确定用户能够做什么的过程。</p><p>例如，允许管理用户创建、编辑和删除帖子。非管理员用户仅被授权阅读帖子。</p><h2 id="基本的-rbac-实现" tabindex="-1"><a class="header-anchor" href="#基本的-rbac-实现" aria-hidden="true">#</a> 基本的 RBAC 实现</h2><ul><li><strong>步骤1</strong>: 安装Zerone 提供的一个简单的权限验证包</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">yarn add @zeronejs/role-easy</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><strong>步骤2</strong>: 让我们创建一个Role代表系统中角色的枚举</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>它在 common/role/enums.ts</p></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">enum</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">Role</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">User</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;user&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#4FC1FF;">Admin</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;admin&#39;</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li><strong>步骤3</strong>: 将RolesModule导入根模块</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">RolesModule</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@zeronejs/role-easy&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Module</span><span style="color:#D4D4D4;">({</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">imports:</span><span style="color:#D4D4D4;"> [</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">RolesModule</span><span style="color:#D4D4D4;">,</span></span>\n<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">// ... 其他模块</span></span>\n<span class="line"><span style="color:#D4D4D4;">    ]</span></span>\n<span class="line"><span style="color:#D4D4D4;">})</span></span>\n<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">AppModule</span><span style="color:#D4D4D4;"> {}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li><strong>步骤4</strong>: 在需要权限验证的接口加入 Roles 装饰器</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Roles</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@zeronejs/role-easy&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">Role</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./common/role/enums&#39;</span><span style="color:#D4D4D4;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D4D4D4;">...</span></span>\n<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Get</span><span style="color:#D4D4D4;">()</span></span>\n<span class="line"><span style="color:#D4D4D4;">@</span><span style="color:#DCDCAA;">Roles</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">Role</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">Admin</span><span style="color:#D4D4D4;">)</span></span>\n<span class="line"><span style="color:#DCDCAA;">getHello</span><span style="color:#D4D4D4;">(): </span><span style="color:#9CDCFE;">string</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">this</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">appService</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">getHello</span><span style="color:#D4D4D4;">();</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"><span style="color:#D4D4D4;">...</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>在这个例子中，我们假设request.user包含用户实例和允许的角色（在roles属性下）</p><p>为确保此示例有效，您的User类必须如下所示：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">class</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">User</span><span style="color:#D4D4D4;"> {</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...other properties</span></span>\n<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">roles</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Role</span><span style="color:#D4D4D4;">[];</span></span>\n<span class="line"><span style="color:#D4D4D4;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div>',14),p={},e=(0,a(3744).Z)(p,[["render",function(s,n){return l}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);