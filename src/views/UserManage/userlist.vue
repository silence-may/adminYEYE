<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-row>
					<el-form-item>
						<el-button>所有用户</el-button>
						<el-button>所有用户</el-button>
						<el-button>所有用户</el-button>
						<el-button>所有用户</el-button>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item>
						<el-input v-model="filters.name" placeholder="姓名"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary">查询</el-button>
					</el-form-item>
				</el-row>
				<el-row>
					<el-form-item>
							<el-input v-model="filters.name" placeholder="姓名"></el-input>
						</el-form-item>
					<el-form-item>
						<el-button type="primary">新增</el-button>
					</el-form-item>
				</el-row>
			</el-form>
		</el-col>
		<!--列表-->
		<el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="name" label="ID" width="120" >
			</el-table-column>
			<el-table-column prop="sex" label="注册时间" width="120">
			</el-table-column>
			<el-table-column prop="age" label="手机号" width="120" >
			</el-table-column>
			<el-table-column prop="birth" label="昵称" width="100" >
			</el-table-column>
			<el-table-column prop="addr" label="性别" min-width="100" >
			</el-table-column>
			<el-table-column prop="addr" label="简介" min-width="180" >
			</el-table-column>
		</el-table>
	</section>
</template>
<script>
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				users: [],
				listLoading: false,
			}
		},
		mounted(){
			// this.$axios({
			// 	url: '/api/common/AdminToken',
			// 	method: 'post',
			// 	headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			// 	params: {'name': 'small','password':'123456'}
			// })
			// .then((res)=>{
			// 	console.log(res);
			// })
			// .catch((err)=>{
			// 	console.log(err);
			// });
			this.$axios.post('/api/common/AdminToken',{'name': 'small','password':'123456'})
			.then((res)=>{
				console.log(res);
			})
			.catch((err)=>{
				console.log(err);
			});
		}
	}
</script>

<style scoped>

</style>