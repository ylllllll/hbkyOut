import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Home from '@/components/home'

// 注册
import Register from '@/components/register/register'
import EnterpriseRegister from '@/components/register/enterpriseRegister'
import ExpertRegister from '@/components/register/expertRegister'

// 指南管理
import GuideCollect from '@/components/guideManage/guideCollect'
import GuideCollectAdd from '@/components/guideManage/guideCollectAdd'
import GuideCollectList from '@/components/guideManage/GuideCollectList'
import GuideCollectShow from '@/components/guideManage/GuideCollectShow'

// 课题立项
import ProjectAdd from '@/components/projectEstablish/projectAdd'
import ProjectQuery from '@/components/projectEstablish/projectQuery'
import ProjectQueryList from '@/components/projectEstablish/projectQueryList'
import ProjectQueryShow from '@/components/projectEstablish/projectQueryShow'

// 合同管理
import ContractAdd from '@/components/contractManage/contractAdd'
import ContractQuery from '@/components/contractManage/contractQuery'
import ContractQueryList from '@/components/contractManage/contractQueryList'
import ContractQueryShow from '@/components/contractManage/contractQueryShow'

// 日常管理
import MidTerm from '@/components/daliyManage/midTerm'
import MidTermList from '@/components/daliyManage/midTermList'
import MidTermAdd from '@/components/daliyManage/midTermAdd'
import MidTermAddForm1 from '@/components/daliyManage/midTermAddForm1'
import MidTermAddForm2 from '@/components/daliyManage/midTermAddForm2'


import ProgressReport from '@/components/daliyManage/progressReport'
import ProgressReportList from '@/components/daliyManage/progressReportList'
import ProgressReportShow from '@/components/daliyManage/progressReportShow'
import ProgressReportAdd from '@/components/daliyManage/progressReportAdd'
import MattersReport from '@/components/daliyManage/mattersReport'
import MattersReportList from '@/components/daliyManage/mattersReportList'
import MattersReportShow from '@/components/daliyManage/mattersReportShow'
import MattersReportAdd from '@/components/daliyManage/mattersReportAdd'

// 课题验收
import SubjectApply from '@/components/subjectAccept/subjectApply'
// import SubjectApplyList from '@/components/subjectAccept/subjectApplyList'
import SubjectApplyAdd from '@/components/subjectAccept/subjectApplyAdd'
import SubjectNotAudited from '@/components/subjectAccept/subjectNotAudited'
import SubjectNotAuditedList from '@/components/subjectAccept/subjectNotAuditedList'
import SubjectApplyShow from '@/components/subjectAccept/subjectApplyShow'
import SubjectUploadFirst from '@/components/subjectAccept/subjectUploadFirst'
import SubjectUploadSecond from '@/components/subjectAccept/subjectUploadSecond'
// 审核验收--管理员
import SubjectApplyEnd from '@/components/subjectAccept/subjectApplyEnd'
import SubjectApplyEndList from '@/components/subjectAccept/subjectApplyEndList'
import SubjectApplyEndShow from '@/components/subjectAccept/subjectApplyEndShow'

// import SubjectAudited from '@/components/subjectAccept/subjectAudited'
// import SubjectAuditedList from '@/components/subjectAccept/subjectAuditedList'
// 验收查询--管理员
// import SubjectApplyEndManage from '@/components/subjectAccept/subjectApplyEndManage'
// import SubjectApplyEndManageList from '@/components/subjectAccept/subjectApplyEndManageList'

// 成果管理
// import ResultsAdd from '@/components/resultsManage/resultsAdd'
// import ResultsAddList from '@/components/resultsManage/resultsAddList'
// import ResultsAddShow from '@/components/resultsManage/resultsAddShow'
// import ResultsLibrary from '@/components/resultsManage/resultsLibrary'
// import ResultsLibraryList from '@/components/resultsManage/resultsLibraryList'
// import ResultsLibraryShow from '@/components/resultsManage/resultsLibraryShow'

// 专家管理
// import ExpertAdd from '@/components/expertManage/expertAdd'
// import ExpertAddList from '@/components/expertManage/expertAddList'
// import ExpertLibrary from '@/components/expertManage/expertLibrary'
// import ExpertLibraryList from '@/components/expertManage/expertLibraryList'
// import ExpertLibraryShow from '@/components/expertManage/expertLibraryShow'

// 通知公告
import Notice from '@/components/notice/notice'
import NoticeShow from '@/components/notice/noticeShow'

import PersonalManage from '@/components/backstageManage/personalManage'
import PersonalManageEdit from '@/components/backstageManage/personalManageEdit'
import AdminManage from '@/components/backstageManage/adminManage'
import AdminManageList from '@/components/backstageManage/adminManageList'

Vue.use(Router)

export default new Router({
  	routes: [{
		    path: '/',
	    	name: 'Login',
		    component: Login
	    },{
		    path: '/register',
	    	name: 'Register',
			component: Register,
			children: [{
				path: '/register/enterpriseRegister',
				name: 'EnterpriseRegister',
				component: EnterpriseRegister
			},{
				path: '/register/expertRegister',
				name: 'ExpertRegister',
				component: ExpertRegister
			}]
	    },{
	    	path: '/index',
	    	name: 'Index',
	    	component: Index,
	    	children: [{
				path: '/index/home',
				name: 'Home',
				component: Home
			},{	// 指南征集申报
				path: '/index/guideCollectAdd',
				name: 'GuideCollectAdd',
				component: GuideCollectAdd
			},{	// 指南征集查询
				path: '/index/guideCollect',
				name: 'GuideCollect',
				component: GuideCollect,
				children:[{
					path: '/index/guideCollect/guideCollectList',
					name: 'GuideCollectList',
					component: GuideCollectList
				},{
					path: '/index/guideCollect/guideCollectShow',
					name: 'GuideCollectShow',
					component: GuideCollectShow
				}],
				redirect: '/index/guideCollect/guideCollectList'
			},{	// 课题申报
				path: '/index/projectAdd',
				name: 'ProjectAdd',
				component: ProjectAdd
			},{	// 课题查询
				path: '/index/projectQuery',
				name:'ProjectQuery',
				component: ProjectQuery,
				children: [{
					path: '/index/projectQuery/projectQueryList',
					name: 'ProjectQueryList',
					component: ProjectQueryList
				},{
					path: '/index/projectQuery/projectQueryShow',
					name: 'ProjectQueryShow',
					component: ProjectQueryShow
				}],
				redirect: '/index/projectQuery/projectQueryList'
			},{	// 合同提交
				path: '/index/contractAdd',
				name: 'ContractAdd',
				component: ContractAdd
			},{	// 合同查询
				path: '/index/contractQuery',
				name: 'ContractQuery',
				component: ContractQuery,
				children: [{
					path: '/index/contractQuery/contractQueryList',
					name: 'ContractQueryList',
					component: ContractQueryList
				},{
					path: '/index/contractQuery/contractQueryShow',
					name: 'ContractQueryShow',
					component: ContractQueryShow
				}],
				redirect: '/index/contractQuery/contractQueryList'
			},{	// 中期检查
				path: '/index/midTerm',
				name: 'MidTerm',
				component: MidTerm,
				children: [{
					path: '/index/midTerm/midTermList',
					name: 'MidTermList',
					component: MidTermList
				},{
					path: '/index/midTerm/midTermAdd',
					name: 'MidTermAdd',
					component: MidTermAdd,
					children: [{
						path: '/index/midTerm/midTermAdd/midTermAddForm1',
						name: 'MidTermAddForm1',
						component: MidTermAddForm1
					},{
						path: '/index/midTerm/midTermAdd/midTermAddForm2',
						name: 'MidTermAddForm2',
						component: MidTermAddForm2
					}],
					redirect: '/index/midTerm/midTermAdd/midTermAddForm1'
				}],
				redirect: '/index/midTerm/midTermList'
			},{ // 进展情况报告
				path: '/index/progressReport',
				name: 'ProgressReport',
				component: ProgressReport,
				children: [{
					path: '/index/progressReport/progressReportList',
					name: 'ProgressReportList',
					component: ProgressReportList
				},{
					path: '/index/progressReport/progressReportShow',
					name: 'ProgressReportShow',
					component: ProgressReportShow
				},{
					path: '/index/progressReport/progressReportAdd',
					name: 'ProgressReportAdd',
					component: ProgressReportAdd
				}],
				redirect: '/index/progressReport/progressReportList'
			},{ // 重大事项报告
				path: '/index/mattersReport',
				name: 'MattersReport',
				component: MattersReport,
				children: [{
					path: '/index/mattersReport/mattersReportList',
					name: 'MattersReportList',
					component: MattersReportList
				},{
					path: '/index/mattersReport/mattersReportShow',
					name: 'MattersReportShow',
					component: MattersReportShow
				},{
					path: '/index/mattersReport/mattersReportAdd',
					name: 'MattersReportAdd',
					component: MattersReportAdd
				}],
				redirect: '/index/mattersReport/mattersReportList'
			},{//验收申请--员工
				path:'/index/subjectApply',
				name:'SubjectApply',
				component:SubjectApply,
				children:[{
					path:'/index/subjectApply/subjectApplyAdd',
					name:'SubjectApplyAdd',
					component:SubjectApplyAdd
				}],
				redirect:'/index/subjectApply/subjectApplyAdd'
			},
			{//审核验收--管理员
				path:'/index/subjectNotAudited',
				name:'SubjectNotAudited',
				component:SubjectNotAudited,
				children:[{
					path:'/index/subjectNotAudited/subjectNotAuditedList',
					name:'SubjectNotAuditedList',
					component:SubjectNotAuditedList,
				},{
					path:'/index/subjectNotAudited/subjectApplyShow',
					name:'SubjectApplyShow',
					component:SubjectApplyShow
				},{
					path:'/index/subjectNotAudited/subjectUploadFirst',
					name:'SubjectUploadFirst',
					component:SubjectUploadFirst
				},{
					path:'/index/subjectNotAudited/subjectUploadSecond',
					name:'SubjectUploadSecond',
					component:SubjectUploadSecond
				}],
				redirect:'/index/subjectNotAudited/subjectNotAuditedList'
			},
			{//验收查询--管理员
				path:'/index/subjectApplyEnd',
				name:'SubjectApplyEnd',
				component:SubjectApplyEnd,
				children:[{
					path:'/index/subjectApplyEnd/subjectApplyEndList',
					name:'SubjectApplyEndList',
					component:SubjectApplyEndList,
				},{
					path:'/index/subjectApplyEnd/subjectApplyEndShow',
					name:'SubjectApplyEndShow',
					component:SubjectApplyEndShow
				}],
				redirect:'/index/subjectApplyEnd/subjectApplyEndList'
			},
			{//通知公告
				path:'/index/notice',
				name:'Notice',
				component:Notice,
				children:[{
					path:'/index/notice/noticeShow',
					name:'NoticeShow',
					component:NoticeShow,
				}],
				redirect:'/index/notice/noticeShow'
			},{
				// 个人信息管理
				path: '/index/personalManage',
				name: 'PersonalManage',
				component: PersonalManage,
				children: [{
					path: '/index/personalManage/personalManageEdit',
					name: 'PersonalManageEdit',
					component: PersonalManageEdit,
				}],
				redirect: '/index/personalManage/personalManageEdit'
			},{
				// 管理员管理
				path: '/index/adminManage',
				name: 'AdminManage',
				component: AdminManage,
				children: [{
					path: '/index/adminManage/adminManageList',
					name:'AdminManageList',
					component:AdminManageList,
				}],
				redirect:'/index/adminManage/AdminManageList'
			}],
			redirect: '/index/home'
		}],
	    	

})
