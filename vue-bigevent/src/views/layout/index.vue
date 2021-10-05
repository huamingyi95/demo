<template>
	<div class="layout-container">
		<div class="img"></div>
		<header class="header-nav">
			<el-menu class="el-menu-demo" mode="horizontal"> </el-menu>
			<div class="line"></div>
			<el-menu
				class="el-menu-demo"
				mode="horizontal"
				background-color="#23262e"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<el-menu-item>
					<i class="el-icon-switch-button"></i>
					<template>
						<el-popconfirm
							confirm-button-text="确定"
							cancel-button-text="取消"
							icon="el-icon-info"
							icon-color="red"
							title="确定退出吗？"
              @confirm="$router.push('/login')"
						>
							<el-button  type="text" slot="reference">退出</el-button>
						</el-popconfirm>
					</template>
				</el-menu-item>

				<el-menu-item>
					<el-dropdown>
						<span class="el-dropdown-link">
							个人中心<i
								class="el-icon-arrow-down el-icon--right"
							></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item icon="el-icon-menu"
								>基本资料</el-dropdown-item
							>
							<el-dropdown-item icon="el-icon-menu"
								>更换头像</el-dropdown-item
							>
							<el-dropdown-item icon="el-icon-menu"
								>重置密码</el-dropdown-item
							>
						</el-dropdown-menu>
					</el-dropdown>
				</el-menu-item>
			</el-menu>
		</header>

		<el-row class="tac">
			<el-col>
				<el-menu
					default-active="1"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<el-menu-item index="1">
						<i class="el-icon-s-home"></i>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-document"></i>
							<span>文章管理</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1"
								><i class="el-icon-menu"></i
								>文章类别</el-menu-item
							>
							<el-menu-item index="1-2"
								><i class="el-icon-menu"></i
								>文章列表</el-menu-item
							>
							<el-menu-item index="1-3"
								><i class="el-icon-menu"></i
								>发表文章</el-menu-item
							>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-user-solid"></i>
							<span>个人中心</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1"
								><i class="el-icon-menu"></i
								>基本资料</el-menu-item
							>
							<el-menu-item index="1-2"
								><i class="el-icon-menu"></i
								>更换头像</el-menu-item
							>
							<el-menu-item index="1-3"
								><i class="el-icon-menu"></i
								>重置密码</el-menu-item
							>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
			<div class="main">
				<router-view />
			</div>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'layoutIndex',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="less" scoped>
.layout-container {
	.img {
		position: fixed;
		background: url('../../assets/logo.png') no-repeat;
		height: 60px;
		width: 200px;
		z-index: 999;
	}
	.header-nav {
		position: fixed;
		width: 100%;
		z-index: 666;
		.el-menu-item {
			float: right;
			padding-left: 0;
		}
 	}
	.el-col {
		position: fixed;
		top: 60px;
		width: 200px;
		height: 830px;
		background-color: #545c64;
	}
	.el-dropdown-link {
		cursor: pointer;
		color: #409eff;
	}
	.el-icon-arrow-down {
		font-size: 12px;
	}
	.demonstration {
		display: block;
		color: #8492a6;
		font-size: 14px;
		margin-bottom: 20px;
	}
	.el-dropdown-link {
		color: #fff;
	}
}
</style>
