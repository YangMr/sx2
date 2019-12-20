//引入loadsh
import _ from "lodash" 
//获取localstroage
const localStroage = window.localStorage;

//封装获取本地存储的数据
function getLocalStroageData(item){
	return _.isEmpty(JSON.parse(localStorage.getItem(item))) ? null : JSON.parse(localStorage.getItem(item));
}
//封装设置本地存储的数据
function setLocalStroageData(item, obj) {
    localStroage.setItem(item, JSON.stringify(obj))
}
//封装删除本地存储的数据
function removeLocalStroageData(item){
	localStorage.removeItem(item);
}
//封装清空本地存储的所有数据
function clearLocalStroageData(){
	localStorage.clear();
}

//导出封装的本地存储方法
export default {
	getLocalStroageData,
	setLocalStroageData,
	removeLocalStroageData,
	clearLocalStroageData
}