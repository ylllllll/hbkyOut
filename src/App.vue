<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="less">
  	html,body{
		width: 100%;
		height: 100%;
	}
	.is-fullscreen {
		top: 120px;
		left: 210px;
		.el-loading-spinner {
			* {
				color: #0abd90 !important;
			}
		}
	}
	.v-modal {
		background-color: transparent;
	}
	.el-message-box__wrapper {
		.el-message-box {
			margin-left: 210px;
			.el-button {
				background-color: #0abd90;
				border-color: #0abd90;
				color: #fff;
			}
		}
	}
  	#app {
		width: 100%;
		height: 100%;
		min-width: 1200px;
		overflow-y: hidden;
		* {
			margin: 0;
			padding: 0;
			font-size: 16px;
			box-sizing: border-box;
			font-family: "微软雅黑";
			[type="text"],[type="password"] {
				padding: 0 10px;
			}
			.el-input__inner:focus{
				border-color: #0abd90;
			}
			.el-checkbox {
				.is-checked,
				.is-indeterminate {
					.el-checkbox__inner {
						background-color: #0abd90;
						border-color: #0abd90;
						color: #0abd90;
					}
				}
				.is-focus {
					.el-checkbox__inner {
						border-color: #0abd90;
					}
				}
				.el-checkbox__inner:hover {
						border-color: #0abd90;
				}
				.el-checkbox__label {
					display: none;
				}
			}
			.form_title,
			.form_title label {
				text-align: center;
				font-size: 20px;
				font-weight: normal;
				line-height: 70px;
			}
			a {
				text-decoration: none;
				color: #464dd1;
			}
			.el-main .box>div {
				height: 100% !important;
			}
			.selected {
				color: #0abd90;
			}
			.form_inner_table {
				tr {
					td {
						height: 50px;;
					}
				}
			}
			.btn_group {
                display: flex;
                justify-content: center;
                .el-button {
                    margin: 0 5px;
                }
			}
			// 指南汇总表单
			.form_inner_table {
                border-collapse: collapse;
                border: 1px solid #e0e0e0;
                td {
                    border: 1px solid #e0e0e0;
                }
                thead {
                    tr {
                        td {
                            white-space: nowrap;
                            padding: 0 30px;
                            background-color: #e5f3fe;
                        }
					}
				}
                tbody {
                    .classify_title {
                        td {
                            padding: 0 10px;
                        }
                    }
                    .classify_content {
                        td {
							text-align: center;
							.el-input,.el-textarea {
								.el-input__inner,.el-textarea__inner {
									border: none;
									color: #000;
									background-color: #fff;

								}
							}
							.el-textarea {
								padding: 0 10px;
								.el-textarea__inner {
									resize: none;
								}
							}
                        }
                    }
                }
			}
			// 覆盖层
			.cover_box {
				width: 100vw;
				height: 100vh;
				background-color: rgba(0,0,0,0.3);
				position: fixed;
				top: 0;
				left: 0;
				z-index: 999;
				.message_box {
					width: 1000px;
					height: 600px;
					background-color: #fff;
					position: absolute;
					top: 0;
					bottom: 0;
					left: 210px;
					right: 0;
					margin: auto;
					.btn_close {
						display: inline-block;
						width: 22px;
						height: 22px;
						background-image: url(./assets/images/over_box/btn_close.png);
						position: absolute;
						top: 16px;
						right: 16px;
						cursor: pointer;
					}
					.message_box_header {
						border-bottom: 1px solid #d9d9d9;
						.title {
							font-size: 20px;
							text-align: center;
							line-height: 55px;
						}
					}
					.message_box_content {
						height: 485px;
						position: relative;
						z-index: 20;
					}
				}
				.btn_group {
					span {
						font-size: 14px;
					}
				}
			}
		}
		.el-button{
            padding: 7px 20px;
            background-color: #0abd90;
            border: #0abd90;
			margin: 10px auto;
			color: #fff;
		}
		.el-input.is-active .el-input__inner, 
		.el-input__inner:focus{
			border: 1px solid #0abd90;
		}
		.el-checkbox__input.is-checked .el-checkbox__inner, 
		.el-checkbox__input.is-indeterminate .el-checkbox__inner{
			background-color: #0abd90;
			border-color: #0abd90;
		}
		.el-checkbox__inner:hover,
		.el-checkbox__input .el-checkbox__inner,
		.el-checkbox__input.is_focus .el-checkbox__inner,
		.el-textarea__inner:focus {
			border-color: #0abd90;
		}
		a{
			text-decoration: none;
			color: #474dd0;
			&:active{
				color: #000;
			}
		}
		.el-table__header{
			thead{
				tr,th{
					background-color: #eeeeee;
				}
			}
		}
		// .transform(@transform:translate(-50%,-50%))
		// 	{transform:@transform;
        //     -webkit-transform:@transform;
        //     -moz-transform:@transform;
        //     -ms-transform:@transform;
		//     -o-transform:@transform;}
		.transform{
			transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            -o-transform: translate(-50%,-50%);
		}
		// 禁用的表单控件样式
		.showForm{
            .is-disabled {
                .el-input__inner {
                    cursor: auto;
                }
                .el-textarea__inner {
                    cursor: auto;
                }
            }
		}
		.el-input.is-disabled .el-input__inner,
		.el-textarea.is-disabled .el-textarea__inner{
			cursor: auto;
			background-color: #fff;
			color: #000;
		}
		// yl
		.el-dialog__wrapper{
        	background-color: rgba(0,0,0,0.3);
			.el-dialog{
				color: #000;
				position: absolute;
				top: 50%;
				left: 50%;
				margin-top:0;
				min-width: 1000px;
				transform: translate(-50%,-50%);
				-webkit-transform: translate(-50%,-50%);
				-moz-transform: translate(-50%,-50%);
				-ms-transform: translate(-50%,-50%);
				-o-transform: translate(-50%,-50%);
				.el-dialog__header{
					text-align: center;
					font-size: 0;
					position: relative;
					padding: 20px 0;
					border-bottom: 1px solid #d9d9d9;
					span{
						font-size: 21px;
					}
					.el-icon-close:before{
						font-size: 23px;
						font-weight: 600;
					}
				}
				.el-dialog__body{
					padding: 2px 34px 10px 20px;
					.el-form{
						.form-item{
							width: 100%;
							font-size: 0;
							display: inline-block;
							padding-bottom: 10px;
							span{
								width: 10%;
								text-align: right;
							}
							.el-input,.el-textarea{
								width: 90%;
								textarea{
									min-height: 356px !important;
									padding: 0 10px;
								}
							}
							.form-item-date{
								width: 50%;
								font-size: 0;
								display: inline-block;
								.el-date-editor{
									width: 77.7%;
									.el-input__inner{
										padding-left: 30px;
									}
									span{
										width: auto;
									}
								}
							}
						}
						.form-item-content span{
							vertical-align: top;
						}
					}
					.el-button{
						display: block;
					}
				}
			}
    	}
		// 日期选择
		.el-date-editor{
			.el-input__inner {
				padding-left: 30px;
			}
		}
		// 单选框radio
		.el-radio__inner:hover {
			border-color: #0abd90;
		}
		.el-radio__inner {
			border-color: #0abd90;
		}
		.el-radio__label {
			margin-left: 5px;
		}
		.is-checked {
			.el-radio__inner {
				border-color: #0abd90;
				background-color: #0abd90;
			}
			.el-radio__label {
				color: #0abd90;
			}
		}
		// 附件上传
		.file_tr {
			height: 50px;
			.file_td {
				padding-left: 10px;
				text-align: left !important;
				position: relative;
				overflow: hidden;
				.file_show {
					position: absolute;
					width: 100%;
					height: 50px;
					top: 0;
					left: 0;
					margin-left: 92px;
					background-color: #fff;
					line-height: 50px;
					padding-left: 3px;
				}
				a {
					cursor: pointer;
				}
			}
		}
		.btn_group {
            padding: 20px 0;
		}
		.el-table__row {
			cursor: pointer;
		}
		.required {
			color: #f00;
		}
  	}
</style>
