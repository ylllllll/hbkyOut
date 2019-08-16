<template>
    <div id="guideSummaryShow">
        <h3 class="form_title">{{ paramsData.id }}{{ testData.name }}</h3>
        <el-form ref="form">
            <table class="form_inner_table">
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>指南建议名称</td>
                        <td>填报单位</td>
                        <td>单位类别</td>
                        <td>所属领域</td>
                        <td>填报类别</td>
                        <td>建议立项时间</td>
                        <td style="padding: 0 97px;">建议理由及依据</td>
                        <td style="padding: 0 65px;">主要研究内容和关键技术</td>
                        <td style="padding: 0 75px;">预期目标和成果</td>
                        <td>拟出标准、技术规范、法规名称</td>
                        <td>经费测算（万元）</td>
                        <td>研究期限</td>
                        <td>示范工程规模</td>
                        <td>示范工程点</td>
                        <td>省内从事该领域的主要研究机构</td>
                        <td>填报联系人</td>
                        <td>联系电话（手机）</td>
                        <td style="padding: 0 111px;">备注</td>
                        <td style="padding: 0 95px;">查重结果</td>
                        <td style="padding: 0 95px;">查重备注</td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="classify_title">
                        <td colspan="21">一、综合示范类（9项）</td>
                    </tr>
                    <tr v-for="index in 3" class="classify_content">
                        <td>{{ index }}</td>
                        <td>空气污染大规模监测网络及大数据驱动的污染演变与预测建模</td>
                        <td>河海大学常州校区</td>
                        <td>高校</td>
                        <td>大气污染防治领域</td>
                        <td>综合示范类</td>
                        <td>2018年</td>
                        <td>为了科学治理城市空气污染，必须建立城市空气污染时空图谱，为后续治理和控制污染的科学依据。现有的模式计算依赖于排放源的准确划分，这在实际中很难做到。而依靠城市有限的监测站，难以获得大范围的实测数据。在研究大气污染物扩散时，模型越复杂，其精度和效果不一定就越好。复杂的模型往往意味着涉及因素和输入参数的增加，也研究人员精确掌握模型。而且，其计算时间常将以几何级数的增加。对于短时或突发实时污染预测而言，即使采用超算平台计算，也是难以胜任计算负荷。而不当设置的复杂模型，其预测精度甚至不如简单模型。因此，如何充分利用分布式感知系统的分布式、具有自主行为和时空序列特征的大数据集，最大程度的简化扩散模型或对其修正，是研究空气污染时刻演化的关键所在。利用高精度的时空数据集，运用机器学习，或许可以提供较好空气污染预测方法。</td>
                        <td>研究内容：1、移动式、低成本、大规模、实时空气质量监测节点与网络；2、基于精细时空尺度数据的区域空气污染传播扩散时空特征；3、应用机器学习，构建大数据驱动的空气污染预测方法；4、数据可视化与信息化服务与决策系统。关键技术问题：1、面向区域空气污染大规模监测的新型廉价感知系统，海量感知数据融合和校准方法；2、基于大规模时空数据的空气污染模型系统建模方法；3、基于机器学习的区域或城市空气污染宏观预测方法，例如根据风向、风速对大气污染扩散方式和污染态势图分析方法等；4、数据驱动空气污染扩散、预测模型与综合治理方法在典型区域验证。</td>
                        <td>建设基于低成本传感器的全覆盖、大规模空气质量监测网络。该网络与现有固定监测站及其网络相融合，将构成全新的“互联网+”空气质量监测体系。构建高时空精度数据驱动的空气污染演变机制、构建大数据驱动的机器学习预测空气质量的方法及应用示范。</td>
                        <td>受体模型法环境空气VOCs源解析技术规范</td>
                        <td>150</td>
                        <td>1</td>
                        <td>50监测点，一套监测系统</td>
                        <td>江苏省环境大气VOCs组分观测网</td>
                        <td>高校、科研院所、江苏省环境监测中心以及部分城市环境监测中心站等</td>
                        <td>刘小峰</td>
                        <td>18796977759</td>
                        <td></td>
                        <td>
                            2014050苏州市地区颗粒物源解析研究
                            <br>
                            2014049汽车排放一次和二次气溶胶的成分谱及对大气颗粒物的源解析研究
                            <br>
                            2016001江苏省区域大气臭氧污染特征及成因分析-江苏省臭氧污染特征及典型城市臭氧前体物现状调查等
                        </td>
                        <td></td>
                    </tr>
                    <tr class="classify_title">
                        <td colspan="21">二、重大技术公关类（21项）</td>
                    </tr>
                    <tr v-for="index in 1" class="classify_content">
                        <td>{{ index }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class="classify_title">
                        <td colspan="21">三、技术研发类（110项目）</td>
                    </tr>
                    <tr v-for="index in 1" class="classify_content">
                        <td>{{ index }}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </el-form>
        <div class="btn_group">
            <el-button class="btn_back" @click="handleBack">返回</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'guideSummaryShow',
        data() {
            return {
                testData: {
                    name: '课题申报指南建议汇总表',
                    table: {
                        item1: {
                            
                        },
                        item2: {

                        },
                        item3: {

                        }
                    }
                },
                paramsData: {
                    id: this.$route.params.id
                }
            }
        },
        methods: {
            handleBack() {
                this.$router.push("/index/guideSummary/guideSummaryList");
            }
        }
    }
</script>

<style lang="less">
    #guideSummaryShow {
        min-height: 100%;
        background-color: #fff;
        overflow-y: hidden;
        padding: 0 20px;
        .el-form {
            height: 100%;
            overflow-x: auto;
        }
        .btn_group {
            margin: 20px 0;
        }
    }
</style>
