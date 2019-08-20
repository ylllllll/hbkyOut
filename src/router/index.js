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
import ProgressReport from '@/components/daliyManage/progressReport'
import ProgressReportList from '@/components/daliyManage/progressReportList'
import MattersReport from '@/components/daliyManage/mattersReport'
import MattersReportList from '@/components/daliyManage/mattersReportList'

import SubjectApply from '@/components/subjectAccept/subjectApply'
import SubjectApplyList from '@/components/subjectAccept/subjectApplyList'
import SubjectApplyShow from '@/components/subjectAccept/subjectApplyShow'
import SubjectNotAudited from '@/components/subjectAccept/subjectNotAudited'
import SubjectNotAuditedList from '@/components/subjectAccept/subjectNotAuditedList'
import SubjectAudited from '@/components/subjectAccept/subjectAudited'
import SubjectAuditedList from '@/components/subjectAccept/subjectAuditedList'
import SubjectApplyEnd from '@/components/subjectAccept/subjectApplyEnd'
import SubjectApplyEndList from '@/components/subjectAccept/subjectApplyEndList'
import SubjectApplyEndShow from '@/components/subjectAccept/subjectApplyEndShow'

import ResultsAdd from '@/components/resultsManage/resultsAdd'
import ResultsAddList from '@/components/resultsManage/resultsAddList'
import ResultsAddShow from '@/components/resultsManage/resultsAddShow'
import ResultsLibrary from '@/components/resultsManage/resultsLibrary'
import ResultsLibraryList from '@/components/resultsManage/resultsLibraryList'
import ResultsLibraryShow from '@/components/resultsManage/resultsLibraryShow'

import ExpertAdd from '@/components/expertManage/expertAdd'
import ExpertAddList from '@/components/expertManage/expertAddList'
import ExpertLibrary from '@/components/expertManage/expertLibrary'
import ExpertLibraryList from '@/components/expertManage/expertLibraryList'
import ExpertLibraryShow from '@/components/expertManage/expertLibraryShow'

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
			},
			{	// 中期检查
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
					component: MidTermAdd
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
				}],
				redirect: '/index/progressReport/ProgressReportList'
			},{ // 重大事项报告
				path: '/index/mattersReport',
				name: 'MattersReport',
				component: MattersReport,
				children: [{
					path: '/index/mattersReport/mattersReportList',
					name: 'MattersReportList',
					component: MattersReportList
				}],
				redirect: '/index/mattersReport/MattersReportList'
			},{
				path:'/index/subjectApply',
				name:'SubjectApply',
				component:SubjectApply,
				children:[{
					path:'/index/subjectApply/subjectApplyList',
					name:'SubjectApplyList',
					component:SubjectApplyList,
				},{
					path:'/index/subjectApply/subjectApplyShow',
					name:'SubjectApplyShow',
					component:SubjectApplyShow
				}],
				redirect:'/index/subjectApply/subjectApplyList'
			},
			{
				path:'/index/subjectNotAudited',
				name:'SubjectNotAudited',
				component:SubjectNotAudited,
				children:[{
					path:'/index/subjectNotAudited/subjectNotAuditedList',
					name:'SubjectNotAuditedList',
					component:SubjectNotAuditedList,
				}],
				redirect:'/index/subjectNotAudited/subjectNotAuditedList'
			},
			{
				path:'/index/subjectAudited',
				name:'SubjectAudited',
				component:SubjectAudited,
				children:[{
					path:'/index/subjectAudited/subjectAuditedList',
					name:'SubjectAuditedList',
					component:SubjectAuditedList,
				}],
				redirect:'/index/subjectAudited/subjectAuditedList'
			},
			{
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
			{
				path:'/index/resultsAdd',
				name:'ResultsAdd',
				component:ResultsAdd,
				children:[{
					path:'/index/resultsAdd/resultsAddList',
					name:'ResultsAddList',
					component:ResultsAddList
				},{
					path:'/index/resultsAdd/resultsAddShow',
					name:'ResultsAddShow',
					component:ResultsAddShow
				}],
				redirect:'/index/resultsAdd/resultsAddList'
			},
			{
				path:'/index/resultsLibrary',
				name:'ResultsLibrary',
				component:ResultsLibrary,
				children:[{
					path:'/index/resultsLibrary/resultsLibraryList',
					name:'ResultsLibraryList',
					component:ResultsLibraryList
				},{
					path:'/index/resultsLibrary/resultsLibraryShow',
					name:'ResultsLibraryShow',
					component:ResultsLibraryShow
				}],
				redirect:'/index/resultsLibrary/resultsLibraryList'
			},
			{
				path:'/index/expertAdd',
				name:'ExpertAdd',
				component:ExpertAdd,
				children:[{
					path:'/index/expertAdd/expertAddList',
					name:'ExpertAddList',
					component:ExpertAddList
				}],
				redirect:'/index/expertAdd/expertAddList'
			},
			{
				path:'/index/expertLibrary',
				name:'ExpertLibrary',
				component:ExpertLibrary,
				children:[{
					path:'/index/expertLibrary/expertLibraryList',
					name:'ExpertLibraryList',
					component:ExpertLibraryList
				},{
					path:'/index/expertLibrary/expertLibraryShow',
					name:'ExpertLibraryShow',
					component:ExpertLibraryShow
				}],
				redirect:'/index/expertLibrary/expertLibraryList'
			},
			{
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
