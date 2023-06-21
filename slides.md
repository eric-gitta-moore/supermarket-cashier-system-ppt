---
layout: intro
themeConfig:
  logoHeader: /logo.png
  github: cashier-system
  githubUrl: https://github.com/james-curtis/supermarket-cashier-system
  leftLogo: /logo.png
  leftLogoUrl: https://github.com/james-curtis/supermarket-cashier-system
routerMode: hash
fonts:
  sans: PingFang SC
  serif: PingFang SC
  mono: Fira Code
title: 基于JavaWeb的超市收银系统
theme: penguin
---

# 基于JavaWeb的超市收银系统

🛠️ 可拓展性、⚡快速开发、🚀 减少开发成本


---
layout: two-cols
---

<CornerCurves absolute bottom-0 left-0 z--1 />


# **课题背景**

在现代快节奏的生活中，超市成为人们购物的首选。为了提高超市的效率和顾客的购物体验，需要一个高效的收银系统。基于JavaWeb技术的开发背景下，我们可以开发一个功能强大的超市收银系统。它可以实现商品管理、库存管理、会员管理、购物车管理等功能。通过该系统，超市员工可以快速扫描商品条码、计算价格，并支持多种支付方式。同时，系统还可以生成销售报表和统计数据，为超市经营提供决策依据。这个基于JavaWeb的超市收银系统将提高超市的运营效率，简化工作流程，并为顾客提供便捷、高效的购物体验。

::right::

<img src='/超市收银.png' h-110 m-auto w-100 object-cover />


---
layout: two-cols
---

<CornerCurves absolute bottom-0 left-0 z--1 />

# **系统需求分析**

由收银员输入顾客的会员卡卡号（若有卡），所购买的货号。从数据库中取出有关价格信息，在把这些信息返回给收银台，同时把收银台的销售总量和有关种类商品的剩余量以及该持卡顾客的消费情况交数据库存储以供查询。另外，对没有卡的消费不记录该顾客的消费情况扥个人信息，如果一个未持卡顾客一次购买满200元，可围棋发放一张会员卡，以后在该商场购物可享受9折优惠。

- 会员信息的管理
- 商品信息（库存）的管理。支持导入商品信息
- 顾客购物
- 顾客订单的管理
- 超市销售情况汇总，支持导出销售情况。

::right::

<img src='/超市收银会员卡.png' h-110 m-auto w-100 object-cover />



---
layout: two-cols
---

<CornerCurves absolute bottom-0 right-0 transform scale-x--100 />

<img src='/阿里架构.png' my-15  />

::right::

<style>
.slidev-layout h1{
    @apply mb-4;
}
</style>

# **系统架构**

在软件体系架构中，分层式结构必不可少，本系统采用三层架构模式，可以降低层与层之间的依赖性、相互之间高聚能、低耦合，有利于相同业务功能的复用。通常将其划分为MVC架构。数据访问层实现数据持久注入数据库中，实现对数据的增删改，用户访问数据只能通过数据访问层，减少入口，提高其安全性；业务逻辑层接收前台所传递参数数据并接收数据访问层操作后的数据，最后将其返回给表示层进行展示；表示层和用户直接交互，直观、动态展示信息，其与业务逻辑层对接。

据业务架构实践，结合业界分层规范与流行技术框架分析，推荐分层结构如图所示，默认上层依赖于下层，箭头关系表示可直接依赖，如：开放API层可以依赖于Web层（Controller层），也可以直接依赖于Service层


---

# **系统层次图**

<style>
.slidev-layout h1{
    @apply mb-4;
}
</style>

<img src='/系统层次图.drawio.svg' m-auto />

---

# **ER图**

<img src='/er.png' />

---

# **ER图 注释**

<style>
.slidev-layout h1{
    @apply mb-1;
}
</style>

<img src='/er2.png' h-110 m-auto />

---

# **数据字典 - good - 商品表**

<img src='/good-dict.png' m-auto />

---

# **数据字典 - orderlog - 销售记录**

<img src='/orderlog.png' m-auto h-100 />

---

# **数据字典 - user - 用户表**

<style>
.slidev-layout h1{
    @apply mb-1;
}
</style>

<img src='/user.png' m-auto h-105 />

---

# **总览类图**

<style>
.slidev-layout h1{
    @apply mb-1;
}
</style>

<img src='/概览类图.png' h-110 m-auto />

---

# **详细类图和设计**

<style>
.slidev-layout h1{
    @apply mb-1;
}
</style>

<img src='/详细类图和设计.png' h-110 m-auto />

---

# **系统测试**

<style>
.slidev-layout h1{
    @apply mb-1;
}
</style>

为保障该系统质量，系统的测试环节必不可少，除了要实现规定的功能以外，还要满足安全、兼容、负载性能下也能正常运行。本文具体做出以下测试：

1）功能测试：针对功能测试，选择对订单查询与修改操作进行测试。登录系统后，在订单管理界面选择订单记录，返回一条对应订单，在数据库中查询得到数据一致；选择第一条001订单号进行信息修改，删除名称为“护发素”的商品，保存之后返回界面查看订单与修改一致。

2）安全测试：针对安全测试，首先直接访问主页界面，系统弹出并未登录的信息对其做出有效拦截；对于订单、商品、用户数据修改和删除时，模拟中途网络出现故障，这时查看MySQL数据库，数据并未发生改变。

3）兼容测试：对于系统编写完成后，分别将其部署在本地系统上与云服务器上Linux操作系统上。测试之后，本端可通过本机网络分配IP地址进行访问，远端服务器可通过其分配的IP地址进行访问。

4）负载测试：本次测试中，10个用户访问系统进行一系列操作。在整个的测试过程中，系统并未出现闪退、未响应、页面加载错误等问题，在Windows操作系统下的系统出现延迟高，在远程服务器上良好。

对于整个系统测试，虽然在超高负载下出现延迟高等问题，后续需做出调整，但也达到了中小型超市的日常使用要求。

---
layout: center
---
# **Demo time!**


---
layout: center
class: text-center
---

# **Thank You!**

Slides can be found on [github.com/JamesCurtis](https://github.com/JamesCurtis)
