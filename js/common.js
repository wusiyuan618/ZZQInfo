function initSelect(id, data, callback) {
	//普通示例
	var userPicker = new mui.PopPicker();
	data.push({
		"id": 0,
		"text": "全部"
	});
	userPicker.setData(data);
	var showUserPickerButton = document.getElementById(id);
	showUserPickerButton.addEventListener('tap', function(event) {
		userPicker.show(function(items) {
			callback(items);
		});
	}, false);
}

function createTBodyHtml(data) {
	var tbodyHtml = "";
	for(var i = 0; i < data.length; i++) {
		var color = ""
		switch(data[i].cost) {
			case 3:
				color = "#1E90FF";
				break;
			case 4:
				color = "#FF83FA";
				break;
			case 5:
				color = "#EE7600";
				break;
			default:
				color = "#1A1A1A";
				break;
		}
		var html = "";
		html += "<tr id='tableItemClick' data-url='"+data[i].descriptionUrl+"'>"
		html += "<td>" + data[i].id + "</td>"
		html += "<td style='color:" + color + "'>" + data[i].name + "</td>"
		html += "<td>" + data[i].race + "</td>"
		html += "<td>" + data[i].profession + "</td>"
		html += "<td>" + data[i].cost + "</td>"
		html += "</tr>"
		tbodyHtml += html;
	}
	return tbodyHtml;
}
/**
 *	获取url的参数
 */
function getURLRequestParam() {
	var url = decodeURI(location.search);
	var Request = new Object();
	if(url.indexOf("?") != -1) {　　
		var str = url.substr(1);
		var strs = str.split("&");　　
		for(var i = 0; i < strs.length; i++) {　　　
			Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);　　
		}
	}
	return Request;
}
/**
 * 绑定表格点击事件
 */
function eventBindTableClick() {
	mui('tbody').on('tap', '#tableItemClick', function() {
		url=$(this).attr("data-url");
		window.location.href = "detail.html?url=" +url;
	})
}