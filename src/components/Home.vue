<template>
	<div id="home">
		<header class="home_header">
			<div class="item topic">
				<h3 class="item_title">课题</h3>
				<div class="item_content">
					<div class="item_content_left">
						<img src="../assets/images/home/topic.png" alt="">
					</div>
					
					<div class="item_content_right">
						<div class="num">{{ test_header[0] }}</div>
						<div class="state">待审核</div>
					</div>
				</div>
			</div>
			<div class="item contract">
				<h3 class="item_title">合同</h3>
				<div class="item_content">
					<div class="item_content_left">
						<img src="../assets/images/home/contract.png" alt="">
					</div>
					<div class="item_content_right">
						<div class="num">{{ test_header[1] }}</div>
						<div class="state">待审核</div>
					</div>
				</div>
			</div>
			<div class="item check">
				<h3 class="item_title">验收</h3>
				<div class="item_content">
					<div class="item_content_left">
						<img src="../assets/images/home/check.png" alt="">
					</div>
					<div class="item_content_right">
						<div class="num">{{ test_header[2] }}</div>
						<div class="state">待审核</div>
					</div>
				</div>
			</div>
			<div class="item expert">
				<h3 class="item_title">专家</h3>
				<div class="item_content">
					<div class="item_content_left">
						<img src="../assets/images/home/expert.png" alt="">
					</div>
					<div class="item_content_right">
						<div class="num">{{ test_header[3] }}</div>
						<div class="state">待审核</div>
					</div>
				</div>
			</div>
		</header>
		<section class="home_content">
			<div class="home_content_left">
				<h3 class="home_content_title">通知公告<span>></span></h3>
				<div class="home_content_list">
					<ul>
						<li class="list_title_bar">
							<span class="bar_left">标题</span>
							<span class="bar_right">更新时间</span>
						</li>
						<li v-for="i in 12" class="item">
							<a class="item_left" href="">南京市鼓楼区绿化改建项目南京市鼓楼区绿化改建项目南京市鼓楼区绿化改建项目</a>
							<span class="item_right">2019-04-26</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="home_content_right">
				<h3 class="home_content_title">通知公告<span>></span></h3>
				<div class="home_content_list">
					<ul>
						<li class="list_title_bar">
							<span class="bar_left">标题</span>
							<span class="bar_right">更新时间</span>
						</li>
						<li v-for="i in 12" class="item">
							<a class="item_left" href="">南京市鼓楼区绿化改建项目南京市鼓楼区绿化改建项目南京市鼓楼区绿化改建项目</a>
							<span class="item_right">2019-04-26</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				test_header: [275,96,79,100]
			}
		},
		methods: {
		},
		mounted() {
		},
	}
</script>

<style lang="less">
	#home {
		.home_header {
			display: flex;
			justify-content: space-between;
			.item {
				width: 24.5%;
				height: 219px;
				background-image: url(../assets/images/home/topic_bg.png);
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				.item_title,.state,.num {
					color: #fff;
					font-size: 20px;
				}
				.item_title {
					font-weight: normal;
					padding: 15px;
				}
				.item_content {
					display: flex;
					margin-top: 10px;
					.item_content_left {
						width: 50%;
						text-align: center;
					}
					.item_content_right {
						width: 50%;
						text-align: center;
						padding-right: 12%;
						.num {
							font-size: 76px;
							line-height: 70px;
						}
					}
				}
			}
			.contract {
				background-image: url(../assets/images/home/contract_bg.png);
			}
			.check {
				background-image: url(../assets/images/home/check_bg.png);
			}
			.expert {
				background-image: url(../assets/images/home/expert_bg.png);
			}
		}
		.home_content {
			display: flex;
			justify-content: space-between;
			margin-top: 15px;
			.home_content_left,.home_content_right {
				width: 49.65%;
				background-color: #fff;
				color: #333;
				height: 618px;
				padding: 20px 20px 0 20px;
				.home_content_title {
					font-weight: normal;
					font-size: 18px;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #eeeeee;
					padding: 0 50px 10px 5px;
					span {
						cursor: pointer;
					}
				}
				.home_content_list ul {
					list-style-type: none;
					.list_title_bar {
						background-color: #f5f5f5;
						padding: 10px 0;
						margin-top: 6px;
						display: flex;
						span {
							font-size: 18px;
							display: inline-block;
						}
						.bar_left {
							width: 75%;
							padding-left: 20%;
						}
						.bar_right {
							width: 25%;
						}
					}
					.item {
						padding: 10px 0;
						display: flex;
						border-bottom: 1px dashed #ededed;
						span,a {
							display: inline-block;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.item_left {
							width: 73%;
							padding: 0 8%;
						}
						.item_right {
							width: 27%;
							letter-spacing: 1px;
						}
					}
				}
			}
		}
	}
</style>
