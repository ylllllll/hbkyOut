<template>
	<div id="home">
		<header class="home_header">
			<div class="item topic">
				<img src="../assets/images/home/topic.png" alt="">
				<div class="count">{{ topicCount }}</div>
			</div>
			<div class="item contract">
				<img src="../assets/images/home/contract.png" alt="">
				<div class="count">{{ contractCount }}</div>
			</div>
			<div class="item check">
				<img src="../assets/images/home/check.png" alt="">
				<div class="count">{{ checkCount }}</div>
			</div>
			<div class="item expert">
				<img src="../assets/images/home/expert.png" alt="">
				<div class="count">{{ expertCount }}</div>
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
						<li v-for="(item,index) in leftList" :key="'l'+index" class="item">
							<a class="item_left" href="">{{ item.title }}</a>
							<span class="item_right">{{ item.startTime }}</span>
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
						<li v-for="i in 10" :key="i" class="item">
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
				topicCount: 0,
				contractCount: 0,
				checkCount: 0,
				expertCount: 0,
				leftList: []
			}
		},
		methods: {
		},
		mounted() {	
			// 请求验收待审核
			this.axios({
				url: 'http://192.168.0.80:8087/extranet/subjectTotal',
				method: 'post'
			}).then((res) => {
				if(res.data.resultFlag == 0) {
					this.$nextTick(() => {
						this.checkCount = res.data.data;
					})
				}else {
					this.$alert(res.data.data,'提示',{
						confirmButtonText: '确定',
						type: 'warning',
						callback: action => {}
					});
				}
				
			})
			// 请求通知公告列表数据
			this.axios({
				url: 'http://192.168.0.80:8087/notification/ExtranetQuery',
				method: 'post'
			}).then((res) => {
				let data = res.data.data,
					length = 0;
				if(data.length >= 10) {
					length = 10;
				}else {
					length = data.length;
				}
				for(let i = 0;i < length;i ++) {
					this.leftList.push(data[i]);
				}
			})
		},
	}
</script>

<style lang="less">
	#home {
		// overflow-y: hidden;
		.home_header {
			display: flex;
			justify-content: space-between;
			.item {
				position: relative;
				width: 24.5%;
				img {
					width: 100%;
				}
				.count {
					position: absolute;
					font-size: 3.8vw;
					font-weight: bold;
					color: #fff;
					top: 35%;
					left: 10%;
				}
			}
		}
		.home_content {
			display: flex;
			justify-content: space-between;
			margin-top: 15px;
			.home_content_left,.home_content_right {
				width: 49.65%;
				min-height: 478px;
				background-color: #fff;
				color: #333;
				padding: 20px;
				.home_content_title {
					font-weight: normal;
					font-size: 18px;
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #eeeeee;
					padding: 0 10px 10px 5px;
					span {
						cursor: pointer;
					}
				}
				.home_content_list ul {
					list-style-type: none;
					.list_title_bar {
						padding: 10px 0;
						margin-top: 6px;
						display: flex;
						font-weight: bold;
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
							text-align: right;
							padding-right: 9.8%;
						}
					}
					.item {
						padding: 10px 0;
						display: flex;
						span,a {
							display: inline-block;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						.item_left {
							width: 73%;
							padding: 0 8% 0 4%;
						}
						.item_right {
							width: 27%;
							letter-spacing: 1px;
							text-align: right;
							padding-right: 8%;
						}
						&:nth-child(odd) {
							background-color: #fbfbfb;
						}
					}
				}
			}
		}
	}
</style>
