<template>
	<div id="index">
		<el-container>
			<el-aside width="210px">
				<div class="aside_banner" @click="handleSpecialHome">
					<el-menu :default-active="menuValue" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#fff" unique-opened router>
						<el-menu-item index="/index/home" @click="handleAddTab" class="special_home" icon_index="-1">
							<img src="../assets/images/index_icon/home.png" alt="" :class="{'icon_active':iconIndex == '-1'}" />
							<img src="../assets/images/index_icon/home_active.png" alt="" :class="{'icon_active':iconIndex != '-1'}" />
							<span slot="title">首页</span>
						</el-menu-item>
						<el-submenu v-for="(item,index) in testNav" :key="item.id" :index="item.id" :icon_index="item.id">
							<template slot="title">
								<img :src="asideNavIconPath[index].url" alt="" :class="{'icon_active':iconIndex == item.id}" />
								<img :src="asideNavIconActivePath[index].url" alt="" :class="{'icon_active':iconIndex != item.id}" />
								<span>{{ item.name }}</span>
							</template>
							<el-menu-item-group>
								<el-menu-item v-for="(_item,_index) in item.children" :key="_item.id" :index="testPath[index][_index]" @click="handleAddTab(_item.name,testPath[index][_index])">{{ _item.name }}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</div>
			</el-aside>
			<el-container>
				<el-header height="120px">
					<div class="header_top">
						<div class="header_top_left">
							<img src="../assets/images/index_title.png" alt="" />
						</div>
						<div class="header_top_right">
							<a class="user_solid"></a>
							<span class="welcome">欢迎{{ test.username }}登录！</span>
							<a class="tools"></a>
							<a class="question"></a>
							<a class="switch" @click="handleLogOut"></a>
						</div>
					</div>
					<div class="header_tabs" @click="handleRefresh">
						<el-tabs v-model="tabsValue" type="card" @tab-remove="handleRemoveTab" @tab-click="handleTabClick">
							<el-tab-pane label="首页" name="/index/home"></el-tab-pane>
							<el-tab-pane v-for="(item,index) in tabs" :key="item.name" :label="item.title" :name="item.name" @tab-click="handleTabClick(item.name)" closable></el-tab-pane>
						</el-tabs>
					</div>
				</el-header>
				<el-main>
					<div class="box">
						<router-view v-if="refreshFlag" />
					</div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				test: {
					username: '评估中心'
				},
				testNav: [{
					id: '10',
					name: '指南管理',
					children: [{
						id: '101',
						name: '指南征集申报'
					},{
						id: '102',
						name: '指南征集查询'
					}]
				},{
					id: '11',
					name: '课题立项',
					children: [{
						id: '111',
						name: '招标备案'
					},{
						id: '112',
						name: '未审批'
					},{
						id: '113',
						name: '已审批'
					}]
				},{
					id: '12',
					name: '合同管理',
					children: [{
						id: '121',
						name: '合同中心'
					},{
						id: '122',
						name: '待审核'
					},{
						id: '123',
						name: '已审核'
					}]
				},{
					id: '13',
					name: '日常管理',
					children: [{
						id: '131',
						name: '中期检查'
					},{
						id: '132',
						name: '进展情况报告'
					},{
						id: '133',
						name: '重大事项报告'
					}]
				},{
					id: '14',
					name: '课题验收',
					children: [{
						id: '141',
						name: '验收申请'
					},{
						id: '142',
						name: '待审核'
					},{
						id: '143',
						name: '已审核'
					},{
						id: '144',
						name: '验收结束'
					}]
				},{
					id: '15',
					name: '成果管理',
					children: [{
						id: '151',
						name: '成果新增'
					},{
						id: '152',
						name: '成果库'
					}]
				},{
					id: '16',
					name: '专家管理',
					children: [{
						id: '161',
						name: '专家新增'
					},{
						id: '162',
						name: '专家库'
					}]
				},{
					id: '17',
					name: '通知公告',
					children: [{
						id:'171',
						name:'通知公告'
					}]
				},{
					id: '18',
					name: '后台管理',
					children: [{
						id: '181',
						name: '个人信息管理'
					},{
						id: '182',
						name: '管理员管理'
					}]
				}],
				testPath: [[
						'/index/guideCollectAdd',
						'/index/guideCollect'
					],[
						'/index/biddingRecord',
						'/index/projectNotAudited',
						'/index/projectAudited'
					],[
						'/index/contractCenter',
						'/index/contractNotAudited',
						'/index/contractAudited'
					],[
						'/index/midTerm',
						'/index/progressReport',
						'/index/mattersReport'
					],[
						'/index/subjectApply',
						'/index/subjectNotAudited',
						'/index/subjectAudited',
						'/index/subjectApplyEnd'
					],[
						'/index/resultsAdd',
						'/index/resultsLibrary',
					],[
						'/index/expertAdd',
						'/index/expertLibrary',
					],[
						'/index/notice'
					],[
						'/index/personalManage',
						'/index/adminManage'
					]
				],
				asideNavIconPath: [
					{ url: require('../assets/images/index_icon/zngl.png') },
					{ url: require('../assets/images/index_icon/ktlx.png') },
					{ url: require('../assets/images/index_icon/htgl.png') },
					{ url: require('../assets/images/index_icon/rcgl.png') },
					{ url: require('../assets/images/index_icon/ktys.png') },
					{ url: require('../assets/images/index_icon/cggl.png') },
					{ url: require('../assets/images/index_icon/zjgl.png') },
					// { url: require('../assets/images/index_icon/xygl.png') },
					// { url: require('../assets/images/index_icon/tjfx.png') },
					{ url: require('../assets/images/index_icon/tzgg.png') },
					{ url: require('../assets/images/index_icon/houtgl.png') }
				],
				asideNavIconActivePath: [
					{ url: require('../assets/images/index_icon/zngl_active.png') },
					{ url: require('../assets/images/index_icon/ktlx_active.png') },
					{ url: require('../assets/images/index_icon/htgl_active.png') },
					{ url: require('../assets/images/index_icon/rcgl_active.png') },
					{ url: require('../assets/images/index_icon/ktys_active.png') },
					{ url: require('../assets/images/index_icon/cggl_active.png') },
					{ url: require('../assets/images/index_icon/zjgl_active.png') },
					// { url: require('../assets/images/index_icon/xygl_active.png') },
					// { url: require('../assets/images/index_icon/tjfx_active.png') },
					{ url: require('../assets/images/index_icon/tzgg_active.png') },
					{ url: require('../assets/images/index_icon/houtgl_active.png') }
				],
				refreshFlag: true,
				iconIndex: '-1',
				menuValue: this.$route.path,
				tabsValue: '/index/home',
        		tabs: []
			}
		},
		methods: {
			handleAddTab(tabName,path) {
				if(path) {
					let flag = true;
					for(let i = 0;i < this.tabs.length;i ++) {
						if(this.tabs[i].name == path) {
							flag = false;
						}
					}
					if(flag) {
						// 合同管理和课题验收中，待审核、已审核重复的问题
						if(path == "/index/contractNotAudited") { tabName = "待审核(合同)" }
						if(path == "/index/contractAudited") { tabName = "已审核(合同)" }
						if(path == "/index/subjectNotAudited") { tabName = "待审核(课题)" }
						if(path == "/index/subjectAudited") { tabName = "已审核(课题)" }
						this.tabs.push({
							title: tabName,
							name: path
						});
					}
					this.tabsValue = path;
					this.menuValue = path;
				}else {
					this.tabsValue = "/index/home";
					if(document.querySelector(".is-opened div")) {
						document.querySelector(".is-opened div").click();
					}
				}
				setTimeout(() => {
					// tabs的刷新按钮
					let allTabs =  document.querySelectorAll("[id*=tab]");
					let allCloseIcon = document.querySelectorAll("[id*=tab] span");
					let index = allCloseIcon.length;
					if(!document.querySelectorAll(".el-icon-refresh-right")[index]) {
						let freshIcon = document.createElement("i");
						freshIcon.classList.add("el-icon-refresh-right");
						allTabs[index].insertBefore(freshIcon,allCloseIcon[index - 1]);
					}
				}, 0);
			},
			handleRemoveTab(targetName) {
				let tabs = this.tabs;
				let activeName = this.tabsValue;
				let _index = 0;
				if (activeName === targetName) {
					tabs.forEach((tab,index) => {
						if (tab.name === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
							}
						_index = index;
						}
					});
					this.tabsValue = activeName;
					this.tabs = tabs.filter(tab => tab.name !== targetName);
					if(tabs.length == _index + 1) {
						_index --;
					}
					if(tabs.length > 1) {
						let path = this.tabs[_index].name;
						this.$router.push(path);
						this.menuValue = path;
					}else {
						this.tabsValue = "/index/home";
						this.$router.push("/index/home");
						this.menuValue = "/index/home";
						if(document.querySelector(".is-opened div")) {
							document.querySelector(".is-opened div").click();
						}
					}
				}else {
					this.tabsValue = activeName;
					this.tabs = tabs.filter(tab => tab.name !== targetName);
				}
				setTimeout(() => {
					this.iconActive();
				},0);
			},
			handleTabClick(event) {
				let path = event.name,
					openedDiv = document.querySelector(".is-opened div");
				this.menuValue = path;
				this.$router.push(path);
				if(path == "/index/home" && openedDiv) {
					openedDiv.click();
				}
				setTimeout(() => {
					this.iconActive();
				},0);
			},
			handleSpecialHome() {
				// home模块没有二级菜单，很特殊
				if(document.querySelector(".el-menu-vertical-demo>.is-active") && document.querySelector(".is-opened")) {
					document.querySelector(".is-active").classList.remove("is-active");
				}
				this.iconActive();
			},
			handleRefresh(event) {
				let className = event.target.classList[0] || event.srcElement.classList[0];
				if(className == "el-icon-refresh-right") {
					this.refreshFlag = false;
					setTimeout(() => {
						this.refreshFlag = true;
					},0);
				}
			},
			// 处理icon_active的方法
			iconActive() {
				let opened = document.querySelector(".is-opened");
				if(opened) {
					let iconIndex = opened.getAttribute("icon_index");
					if(iconIndex != "-1") {
						this.iconIndex = iconIndex;
					}
				}else {
					this.iconIndex = "-2";
				}
				if(!opened && this.$route.path == "/index/home") {
					document.querySelector(".special_home").classList.add("is-active");
					this.iconIndex = "-1";
				}
			},
			handleLogOut() {
				this.$confirm('是否退出', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$router.push("/");
				}).catch(() => {});
			}
		},
		mounted() {
			// 解决刷新页面路由不刷新的问题
			this.$nextTick(function () {
				this.$router.push("/index");
				this.menuValue = "/index/home";
				if(document.querySelector(".is-opened div")) {
					document.querySelector(".is-opened div").click();
				}
				this.iconIndex = "-1";
				// tabs的刷新按钮
				let freshIcon = `<i class="el-icon-refresh-right"></i>`;
				document.querySelector("[id*=tab]").innerHTML += freshIcon;
				// el-main的高度控制
				let mainHeight = parseInt(window.getComputedStyle(document.querySelector(".el-main")).height) - 35 + "px";
				document.querySelector(".el-main .box").style.height = mainHeight;
			})
		},
		watch: {
			$route() {
				let fullScreen = document.querySelector(".is-fullscreen");
				if(fullScreen) {
					fullScreen.style.display = "none";
				}
			}
		}
	}
</script>

<style lang="less">
	#index {
		[type="text"], 
		.el-container {
			.el-aside {
				height: 100vh;
				overflow-x: hidden;
				overflow-y: auto;
				.aside_banner {
					height: 100%;
					padding-top: 180px;
					background-color: #545c64;
					.el-menu-vertical-demo {
						height: 100%;
						border: none;
						.el-submenu {
							.el-menu-item {
								padding-left: 70px !important;
								&:hover {
									background-color: #0abd90 !important;
								}
							}
							.el-submenu__icon-arrow {
								color: #fff;
								margin-top: -5px;
							}
						}
						img {
							margin: 0 10px;
						}
						.icon_active {
							display: none;
						}
						.is-opened {
							div,li {
								background-color: #edf1f4 !important;
								color: rgba(0,0,0,0.8) !important;
							}
							div {
								color: #0abd90 !important;
							}
							li {
								font-size: 14px;
							}
							.is-active {
								background-color: #0abd90 !important;
								color: #fff !important;
							}
							.el-submenu__icon-arrow {
								color: #0abd90;
							}
						}
						>.is-active {
							background-color: #edf1f4 !important;
							color: #0abd90 !important;
						}
					}
				}
			}
			.el-container {
				height: 100vh;
				.el-header {
					position: relative;
					z-index: 100;
					background-color: #fff;
					.header_top {
						height: 80px;
						border-bottom: 1px solid #ddd;
						display: flex;
						justify-content: space-between;
						.header_top_left,
						.header_top_right {
							height: 80px;
						}
						.header_top_left {
							display: flex;
							align-items: center;
							padding-left: 30px;
						}
						.header_top_right {
							display: flex;
							align-items: center;
							padding-right: 20px;
							a {
								display: inline-block;
								width: 21px;
								height: 21px;
								background-repeat: no-repeat;
								background-position: center;
								cursor: pointer;
								font-size: 20px;
								margin-right: 26px;
							}
							span {
								line-height: 16px;
								opacity: 0.6;
								letter-spacing: 3px;
								margin: 0 20px 0 -20px;
							}
							.user_solid {
								background-image: url(../assets/images/index_icon/header_1.png);
							}
							.tools {
								background-image: url(../assets/images/index_icon/header_2.png);
							}
							.question {
								background-image: url(../assets/images/index_icon/header_3.png);
							}
							.switch {
								background-image: url(../assets/images/index_icon/header_4.png);
							}
						}
					}
					.header_tabs {
						* {
							border: none;
						}
						.el-tabs__nav {
							div {
								padding: 0 12px 0 20px;
								color: rgba(0,0,0,0.8) !important;
								.el-icon-refresh-right {
									border-radius: 50%;
									margin-left: 3px !important;
									border: 1px solid #fff;
									font-size: 12px;
									display: none;
									&:hover {
										transition: all 0.2s;
										background-color: #c0c4cc;
										color: #fff;
										border-color: #c0c4cc;
									}
								}
								.el-icon-close {
									font-size: 14px;
								}
							}
							.is-closable {
								padding: 0 12px;
								&::before {
									content: "";
									display: inline-block;
									width: 1px;
									height: 24px;
									background-image: linear-gradient(to top,#fff 0,#0abd90 50%,#fff 100%);
									position: relative;
									top: 7px;
									left: -11px;
								}
							}
							.is-active {
								color: #0abd90 !important;
								.el-icon-refresh-right {
									display: inline-block;
								}
							}
						}
					}
				}
				.el-main {
					overflow-y: auto;
					background-color: #edf1f4;
					padding:10px 15px 25px 14px;
				}
			}
		}

		//yl--add
		.queryForm{
            // height: 134px;
            position: relative;
            background-color: #fff;
            .el-form{
               	padding: 10px 14.2% 10px 0;
                .el-form-item{
                    display: inline-block;
                    margin: 10px 20px;
                    .el-form-item__label{
						width: 120px;
						line-height: 30px;
                    }
                    .el-form-item__content{
						display: inline-block;
						line-height: 30px;
                        .el-input{
							line-height: 30px;
                            .el-input__inner{
                                height: 30px;
                                line-height: 30px;
							}
							.el-input__icon{
								line-height: 30px;
							}
                        }
                    }
                }
            }
            .el-button{
                position: absolute;
                bottom: 20px;
                right: 69px;
				margin: 0;
            }
		}
		.showForm{
			position: relative;
			min-height: 800px;
			background-color: #fff;
			text-align: center;
			table.form_table{
				width: 59.4%;
				margin: auto;
				border-collapse: collapse;
				thead{
					th{
						font-size: 18px;
						font-weight: normal;
						height: 70px;
						line-height: 70px;
					}
				}
				tbody{
					tr{
						border-top: 1px solid #e0e0e0;
						&:last-child{
							border-bottom: 1px solid #e0e0e0;
						}
						td{
							border-right: 1px solid #e0e0e0;
							&:first-child{
								width: 25.8%;
								text-align: right;
								border-left: 1px solid #e0e0e0;
								background-color: #e5f3ff;
							}
							&:nth-child(3){
								width: 22.7%;
								text-align: right;
								background-color: #e5f3ff;
							}
						}
					}
				}
			}
			table.form_table1{
				width: 59.4%;
				margin: auto;
				border-collapse: collapse;
				thead{
					th{
						font-size: 18px;
						font-weight: normal;
						height: 70px;
						line-height: 70px;
					}
				}
				tbody{
					tr{
						border-top: 1px solid #e0e0e0;
						&:first-child{
							td{
								background-color: #e5f3ff;
							}
						}
						&:last-child{
							border-bottom: 1px solid #e0e0e0;
						}
						td{
							border-right: 1px solid #e0e0e0;
							text-align: center;
							height: 50px;
							line-height: 50px;
							span{
								display: inline-block;
								line-height: 1.2;
								vertical-align: middle;
							}
							.el-input__inner{
								text-align: center;
							}
							&:first-child{
								border-left: 1px solid #e0e0e0;
							}
						}
					}
				}
			}
			table.form_table2{
				width: 59.4%;
				margin: auto;
				border-collapse: collapse;
				thead{
					th{
						font-size: 18px;
						font-weight: normal;
						height: 70px;
						line-height: 70px;
					}
				}
				tbody{
					tr{
						border-bottom: 1px solid #e0e0e0;
						td{
							border-right: 1px solid #e0e0e0;
							text-align: center;
							height: 50px;
							line-height: 50px;
							span{
								display: inline-block;
								line-height: 1.2;
								vertical-align: middle;
							}
							.el-input__inner{
								text-align: center;
							}
							&:first-child{
								border-left: 1px solid #e0e0e0;
								text-align: left;
								padding-left: 20px;
								background-color:#e5f3ff; 
							}
						}
						&:first-child{
							td{
								border: 0;
								line-height: 2.2;
								padding: 0;
								height: auto;
								&:first-child{
									text-align: left;
								}
								&:last-child{
									text-align: right;
								}
							}
						}
						&:last-child{
							border-bottom: 1px solid #e0e0e0;
						}
					}
					tr.tbody_color{
						td{
							background-color:#e5f3ff;
						}
					}
				}
			}
			.el-input__inner{
				border: 0px;
				height: 50px;
				line-height: 50px;
			}
			input:disabled,textarea:disabled{
				color: #000;
				background-color: #fff;
			}
			textarea{
				border: 0px;
			}
		}
		.showList{
            position: relative;
            min-height: 680px;
            background-color: #fff;
            padding: 10px;
            .el-table{
                min-height: 630px;
                padding-bottom: 10px;
                table{
                    width: auto !important;
                }
                .el-table--scrollable-x,.el-table__body-wrapper{
                    overflow-x: hidden;
                }
                &::before{
                    background-color: #fff;
                    height: 0;
                }
                td,th{
                    padding: 12px 0;
                }
                td,th{
                    border-left: 1px solid #EBEEF5;
                    &:first-child{
                        border-right: 0;
                    }
                }
            }
        }
	}
</style>
