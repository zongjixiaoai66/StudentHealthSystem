const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表","打印","导出"],"menu":"信息采集","menuJump":"列表","tableName":"xinxicaiji"}],"menu":"信息采集管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"问卷分类","menuJump":"列表","tableName":"wenjuanfenlei"}],"menu":"问卷分类管理"},{"child":[{"buttons":["查看","新增","修改","删除","打印","导出"],"menu":"疫情问卷","menuJump":"列表","tableName":"yiqingwenjuan"}],"menu":"疫情问卷管理"},{"child":[{"buttons":["查看","报表","导出","打印"],"menu":"问卷调查","menuJump":"列表","tableName":"wenjuandiaocha"}],"menu":"问卷调查管理"},{"child":[{"buttons":["查看","报表","导出","打印"],"menu":"返校信息","menuJump":"列表","tableName":"fanxiaoxinxi"}],"menu":"返校信息管理"},{"child":[{"buttons":["查看","修改","删除","报表","打印","导出"],"menu":"数据采集","menuJump":"列表","tableName":"shujucaiji"}],"menu":"数据采集管理"},{"child":[{"buttons":["查看","修改","删除","报表","打印","导出"],"menu":"返校情况","menuJump":"列表","tableName":"fanxiaoqingkuang"}],"menu":"返校情况管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"信息采集","menuJump":"列表","tableName":"xinxicaiji"}],"menu":"信息采集管理"},{"child":[{"buttons":["查看","回答"],"menu":"疫情问卷","menuJump":"列表","tableName":"yiqingwenjuan"}],"menu":"疫情问卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"返校信息","menuJump":"列表","tableName":"fanxiaoxinxi"}],"menu":"返校信息管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","回答"],"menu":"疫情问卷","menuJump":"列表","tableName":"yiqingwenjuan"}],"menu":"疫情问卷管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"数据采集","menuJump":"列表","tableName":"shujucaiji"}],"menu":"数据采集管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"返校情况","menuJump":"列表","tableName":"fanxiaoqingkuang"}],"menu":"返校情况管理"}],"frontMenu":[],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}]
    }
}
export default menu;
