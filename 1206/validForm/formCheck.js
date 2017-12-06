/*
    阃氱敤琛ㄥ崟楠岃愈鏂规硶
    Validform version 5.3.2
	By sean during April 7, 2010 - March 26, 2013
	For more information, please visit http://validform.rjboy.cn
	Validform is available under the terms of the MIT license.
	
	Demo:
	$(".demoform").Validform({//$(".demoform")鎸囨槑鏄摢涓€琛ㄥ崟暗€瑕侀獙璇 ,钖岖О暗€锷犲湪form琛ㄥ崟涓 ;
		btnSubmit:"#btn_sub", //#btn_sub鏄琛ㄥ崟涓嬭缁戝畾镣瑰向鎻愪氦琛ㄥ崟浜嬩欢镄勬寜阍 ;濡傛灉form鍐呭惈链塻ubmit鎸夐挳璇ュ弬鏁板彲鐪佺暐;
		btnReset:".btn_reset",//鍙€夐」 .btn_reset鏄琛ㄥ崟涓嬭缁戝畾镣瑰向阅岖疆琛ㄥ崟浜嬩欢镄勬寜阍 ;
		tiptype:1, //鍙€夐」 1=>pop box,2=>side tip(parent.next.find; with default pop),3=>side tip(siblings; with default pop),4=> side tip(siblings; none pop)锛岄粯璁や负1锛屼篃鍙互浼犲叆涓€涓猣unction鍑芥暟锛岃嚜瀹氢箟鎻愮ず淇℃伅镄勬樉绀烘楠寮忥纸鍙互瀹炵幇浣犳兂瑕佺殑浠讳綍鏁堟灉锛屽叿浣揿弬瑙乨emo椤碉级;
		ignoreHidden:false,//鍙€夐」 true | false 榛樿涓篺alse锛屽綋涓篓rue镞跺:hidden镄勮〃鍗曞崖绱犲皢涓嶅仛楠岃愈;
		dragonfly:false,//鍙€夐」 true | false 榛樿false锛屽綋涓篓rue镞讹纴链间负绌烘椂涓嶅仛楠岃愈锛 
		tipSweep:true,//鍙€夐」 true | false 榛樿涓篺alse锛屽彧鍦ㄨ〃鍗曟彁浜ゆ椂瑙﹀彂妫€娴嬶纴blur浜嬩欢灏嗕笉浼氲Е鍙戞娴嬶纸瀹炴椂楠岃愈浼氩湪钖庡彴杩涜锛屼笉浼氭樉绀烘娴嬬粨鏋滐级;
		label:".label",//鍙€夐」 阃夋嫨绗︼纴鍦ㄦ病链夌粦瀹歯ullmsg镞舵煡镓捐鏄剧ず镄勬彁绀烘枃瀛楋纴榛樿镆ユ垒".Validform_label"涓嬬殑鏂囧瓧;
		showAllError:false,//鍙€夐」 true | false锛宼rue锛氭彁浜よ〃鍗曟椂镓€链夐敊璇彁绀轰俊鎭兘浼氭樉绀猴纴false锛氢竴纰板埌楠岃愈涓嶉€氲绷镄勫氨锅沧妫€娴嫔悗闱㈢殑鍏幂礌锛屽彧鏄剧ず璇ュ崖绱犵殑阌栾淇℃伅;
		postonce:true, //鍙€夐」 琛ㄥ崟鏄惁鍙兘鎻愪氦涓€娆★纴true寮€钖纴涓嶅～鍒欓粯璁ゅ叧闂 ;
		ajaxPost:true, //浣跨敤ajax鏂瑰纺鎻愪氦琛ㄥ崟鏁版嵁锛岄粯璁alse锛屾彁浜ゅ湴鍧€灏辨槸action鎸囧畾鍦板潃;
		datatype:{//浼犲叆镊畾涔塪atatype绫诲瀷锛屽彲浠ユ槸姝ｅ垯锛屼篃鍙互鏄嚱鏁帮纸鍑芥暟鍐呬细浼犲叆涓€涓弬鏁帮级;
			"*6-20": /^[^\s]{6,20}$/,
			"z2-4" : /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
			"username":function(gets,obj,curform,regxp){
				//鍙傛暟gets鏄幏鍙栧埌镄勮〃鍗曞崖绱犲€硷纴obj涓哄綋鍓嶈〃鍗曞崖绱狅纴curform涓哄綋鍓嶉獙璇佺殑琛ㄥ崟锛宺egxp涓哄唴缃殑涓€浜涙鍒栾〃杈惧纺镄勫紩鐢 ;
				var reg1=/^[\w\.]{4,16}$/,
					reg2=/^[\u4E00-\u9FA5\uf900-\ufa2d]{2,8}$/;
				
				if(reg1.test(gets)){return true;}
				if(reg2.test(gets)){return true;}
				return false;
				
				//娉ㄦ剰return鍙互杩斿洖true 鎴  false 鎴  瀛楃涓叉枃瀛楋纴true琛ㄧず楠岃愈阃氲绷锛岃繑锲炲瓧绗︿覆琛ㄧず楠岃愈澶辫触锛屽瓧绗︿覆浣滀负阌栾鎻愮ず鏄剧ず锛岃繑锲瀎alse鍒欑敤errmsg鎴栭粯璁ょ殑阌栾鎻愮ず;
			},
			"phone":function(){
				// 5.0 鐗堟湰涔嫔悗锛岃瀹炵幇浜岄€変竴镄勯獙璇佹晥鏋滐纴datatype 镄勫悕绉  涓  暗€瑕佷互"option_" 寮€澶 ;	
			}
		},
		usePlugin:{
			swfupload:{},
			datepicker:{},
			passwordstrength:{},
			jqtransform:{
				selector:"select,input"
			}
		},
		beforeCheck:function(curform){
			//鍦ㄨ〃鍗曟彁浜ゆ墽琛岄獙璇佷箣鍓嶆墽琛岀殑鍑芥暟锛宑urform鍙傛暟鏄綋鍓嶈〃鍗曞璞°€ 
			//杩欓噷鏄庣'return false镄勮瘽灏嗕笉浼氱户缁墽琛岄獙璇佹搷浣 ;	
		},
		beforeSubmit:function(curform){
			//鍦ㄩ獙璇佹垚锷熷悗锛岃〃鍗曟彁浜ゅ墠镓ц镄勫嚱鏁帮纴curform鍙傛暟鏄綋鍓嶈〃鍗曞璞°€ 
			//杩欓噷鏄庣'return false镄勮瘽琛ㄥ崟灏嗕笉浼氭彁浜 ;	
		},
		callback:function(data){
			//杩斿洖鏁版嵁data鏄痡son镙煎纺锛寋"info":"demo info","status":"y"}
			//info: 杈揿嚭鎻愮ず淇℃伅;
			//status: 杩斿洖鎻愪氦鏁版嵁镄勭姸镐 ,鏄惁鎻愪氦鎴愬姛銆效鍙互鐢 "y"琛ㄧず鎻愪氦鎴愬姛锛  "n"琛ㄧず鎻愪氦澶辫触锛屽湪ajax_post.php鏂囦欢杩斿洖鏁版嵁阅岃嚜瀹氩瓧绗︼纴涓昏鐢ㄥ湪callback鍑芥暟阅屾牴鎹链兼墽琛岀浉搴旗殑锲炶皟鎿崭綔;
			//浣犱篃鍙互鍦╝jax_post.php鏂囦欢杩斿洖旋村淇℃伅鍦ㄨ伞阅岃幏鍙栵纴杩涜鐩稿簲鎿崭綔锛 
			//ajax阆囧埌链嶅姟绔敊璇椂涔熶细镓ц锲炶皟锛岃伞镞剁殑data鏄痖status:**, statusText:**, readyState:**, responseText: ** }锛 
			
			//杩欓噷镓ц锲炶皟鎿崭綔;
			//娉ㄦ剰锛氩鏋滀笉鏄痑jax鏂瑰纺鎻愪氦琛ㄥ崟锛屼紶鍏allback锛岃伞镞秃ata鍙傛暟鏄綋鍓嶈〃鍗曞璞★纴锲炶皟鍑芥暟浼氩湪琛ㄥ崟楠岃愈鍏ㄩ儴阃氲绷钖庢墽琛岋纴鐒跺悗鍒ゆ柇鏄惁鎻愪氦琛ㄥ崟锛屽鏋渃allback阅屾槑纭畆eturn false锛屽垯琛ㄥ崟涓崭细鎻愪氦锛屽鏋渞eturn true鎴栨病链塺eturn锛屽垯浼氭彁浜よ〃鍗曘€ 
		}
	});
	
	Validform瀵硅薄镄勬楠娉曞拰灞炴€э细
	tipmsg锛氲嚜瀹氢箟鎻愮ず淇℃伅锛岄€氲绷淇敼Validform瀵硅薄镄勮伞涓睘镐у€兼潵璁╁悓涓€涓〉闱㈢殑涓嶅悓琛ㄥ崟浣跨敤涓嶅悓镄勬彁绀烘枃瀛楋绂
	dataType锛氲幏鍙栧唴缃殑涓€浜涙鍒欙绂
	eq(n)锛氲幏鍙胧alidform瀵硅薄镄勭n涓崖绱 ;
	ajaxPost(flag,sync,url)锛氢互ajax鏂瑰纺鎻愪氦琛ㄥ崟銆俧lag涓篓rue镞讹纴璺宠绷楠岃愈鐩存帴鎻愪氦锛宻ync涓篓rue镞跺皢浠ュ悓姝ョ殑鏂瑰纺杩涜ajax鎻愪氦锛屼紶鍏ヤ简url鍦板潃镞讹纴琛ㄥ崟浼氭彁浜ゅ埌杩欎釜鍦板潃锛 
	abort()锛氱粓姝jax镄勬彁浜わ绂
	submitForm(flag,url)锛氢互鍙傛暟阅岃缃殑鏂瑰纺鎻愪氦琛ㄥ崟锛宖lag涓篓rue镞讹纴璺宠绷楠岃愈鐩存帴鎻愪氦锛屼紶鍏ヤ简url鍦板潃镞讹纴琛ㄥ崟浼氭彁浜ゅ埌杩欎釜鍦板潃锛 
	resetForm()锛氶吨缃〃鍗曪绂
	resetStatus()锛氶吨缃〃鍗旷殑鎻愪氦钟舵€并€备紶鍏ヤ简postonce鍙傛暟镄勮瘽锛岃〃鍗曟垚锷熸彁浜ゅ悗钟舵€佷细璁剧疆涓 "posted"锛岄吨缃彁浜ょ姸镐佸彲浠ヨ琛ㄥ崟缁х画鍙互鎻愪氦锛 
	getStatus()锛氲幏鍙栬〃鍗旷殑鎻愪氦钟舵€侊纴normal锛氭湭鎻愪氦锛宲osting锛氭鍦ㄦ彁浜わ纴posted锛氩凡鎴愬姛鎻愪氦杩囷绂
	setStatus(status)锛氲缃〃鍗旷殑鎻愪氦钟舵€侊纴鍙互璁剧疆normal锛宲osting锛宲osted涓夌钟舵€侊纴涓崭紶鍙效垯璁剧疆钟舵€佷负posting锛岃伞涓姸镐佽〃鍗曞彲浠ラ獙璇侊纴浣嗕笉鑳芥彁浜わ绂
	ignore(selector)锛氩拷鐣ュ镓€阃夋嫨瀵硅薄镄勯獙璇侊绂
	unignore(selector)锛氩皢ignore鏂规硶镓€蹇界暐楠岃愈镄勫璞￠吨鏂拌幏鍙栭獙璇佹晥鏋滐绂
	addRule(rule)锛氩彲浠ラ€氲绷Validform瀵硅薄镄勮伞涓楠娉曟潵缁栾〃鍗曞崖绱犵粦瀹氶獙璇佽鍒欙绂
	check(bool,selector):瀵规寚瀹氩璞¤繘琛岄獙璇 (榛樿楠岃愈褰揿墠鏁翠釜琛ㄥ崟)锛岄€氲绷杩斿洖true锛屽惁鍒栾繑锲瀎alse锛堢粦瀹氩疄镞堕獙璇佺殑瀵硅薄锛屾牸寮忕钖堣姹傛椂杩斿洖true锛岃€屼笉浼氱瓑ajax镄勮繑锲炵粨鏋滐级锛宐ool涓篓rue镞跺垯鍙獙璇佷笉鏄剧ず鎻愮ず淇℃伅锛 
	config(setup):鍙互阃氲绷杩欎釜鏂规硶鏉ヤ慨鏀瑰垵濮嫔寲鍙傛暟锛屾寚瀹氲〃鍗旷殑鎻愪氦鍦板潃锛岀粰琛ㄥ崟ajax鍜屽疄镞堕獙璇佺殑ajax阅岃缃弬鏁帮绂
*/

(function($,win,undef){
	var errorobj=null,//鎸囩ず褰揿墠楠岃愈澶辫触镄勮〃鍗曞崖绱 ;
		msgobj=null,//pop box object 
		msghidden=true;//msgbox hidden?

	var tipmsg={//榛樿鎻愮ず鏂囧瓧;
		tit:"鎻愮ず淇℃伅",
		w:{
			"*":"涓嶈兘涓虹┖锛 ",
			"*6-16":"璇峰～鍐 6鍒 16浣崭换镒忓瓧绗︼紒",
			"n":"璇峰～鍐欐暟瀛楋紒",
			"n6-16":"璇峰～鍐 6鍒 16浣嶆暟瀛楋紒",
			"s":"涓嶈兘杈揿叆鐗规畩瀛楃锛 ",
			"s6-18":"璇峰～鍐 6鍒 18浣嶅瓧绗︼紒",
			"p":"璇峰～鍐欓偖鏀跨紪镰侊紒",
			"m":"璇峰～鍐欐坠链哄佛镰侊紒",
			"e":"闾鍦板潃镙煎纺涓嶅锛 ",
			"url":"璇峰～鍐欑绣鍧€锛 "
		},
		def:"璇峰～鍐欐纭俊鎭紒",
		undef:"datatype链畾涔夛紒",
		reck:"涓ゆ杈揿叆镄勫唴瀹逛笉涓€镊达紒",
		r:"阃氲绷淇℃伅楠岃愈锛 ",
		c:"姝ｅ湪妫€娴嬩俊鎭€ ",
		s:"璇穥濉启|阃夋嫨}{0|淇℃伅}锛 ",
		v:"镓€濉俊鎭病链夌粡杩回獙璇侊纴璇风◢钖庘€ ",
		p:"姝ｅ湪鎻愪氦鏁版嵁鈥 "
	}
	$.Tipmsg=tipmsg;
	
	var Validform=function(forms,settings,inited){
		var settings=$.extend({},Validform.defaults,settings);
		settings.datatype && $.extend(Validform.util.dataType,settings.datatype);
		
		var brothers=this;
		brothers.tipmsg={w:{}};
		brothers.forms=forms;
		brothers.objects=[];
		
		//鍒涘缓瀛愬璞℃椂涓嶅啀缁戝畾浜嬩欢;
		if(inited===true){
			return false;
		}
		
		forms.each(function(){
			//宸茬粡缁戝畾浜嬩欢镞惰烦杩囷纴阆垮历浜嬩欢阅嶅缁戝畾;
			if(this.validform_inited=="inited"){return true;}
			this.validform_inited="inited";
			
			var curform=this;
			curform.settings=$.extend({},settings);
			
			var $this=$(curform);
			
			//阒叉琛ㄥ崟鎸夐挳鍙屽向鎻愪氦涓ゆ;
			curform.validform_status="normal"; //normal | posting | posted;
			
			//璁╂疮涓猇alidform瀵硅薄閮借兘镊畾涔砖ipmsg;	
			$this.data("tipmsg",brothers.tipmsg);

			//bind the blur event;
			$this.delegate("[datatype]","blur",function(){
				//鍒ゆ柇鏄惁鏄湪鎻愪氦琛ㄥ崟鎿崭綔镞惰Е鍙戠殑楠岃愈璇锋眰锛 
				var subpost=arguments[1];
				Validform.util.check.call(this,$this,subpost);
			});
			
			$this.delegate(":text","keypress",function(event){
				if(event.keyCode==13 && $this.find(":submit").length==0){
					$this.submit();
				}
			});
			
			//镣瑰向琛ㄥ崟鍏幂礌锛岄粯璁ゆ枃瀛楁秷澶辨晥鏋 ;
			//琛ㄥ崟鍏幂礌链兼瘮杈冩椂镄勪俊鎭彁绀哄寮 ;
			//radio銆乧heckbox鎻愮ず淇℃伅澧炲己;
			//澶栬皟鎻掍欢鍒濆鍖 ;
			Validform.util.enhance.call($this,curform.settings.tiptype,curform.settings.usePlugin,curform.settings.tipSweep);
			
			curform.settings.btnSubmit && $this.find(curform.settings.btnSubmit).bind("click",function(){
				$this.trigger("submit");
				return false;
			});
						
			$this.submit(function(){
				var subflag=Validform.util.submitForm.call($this,curform.settings);
				subflag === undef && (subflag=true);
				return subflag;
			});
			
			$this.find("[type='reset']").add($this.find(curform.settings.btnReset)).bind("click",function(){
				Validform.util.resetForm.call($this);
			});
			
		});
		
		//棰勫垱寤簆op box;
		if( settings.tiptype==1 || (settings.tiptype==2 || settings.tiptype==3) && settings.ajaxPost ){		
			creatMsgbox();
		}
	}
	
	Validform.defaults={
		tiptype:1,
		tipSweep:false,
		showAllError:false,
		postonce:false,
		ajaxPost:false
	}
	
	Validform.util={
		dataType:{
			"*":/[\w\W]+/,
			"*6-16":/^[\w\W]{6,16}$/,
			"n":/^\d+$/,
			"n6-16":/^\d{6,16}$/,
			"s":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
			"s6-18":/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]{6,18}$/,
			"p":/^[0-9]{6}$/,
			"m":/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
			"e":/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
			"url":/^(\w+:\/\/)?\w+(\.\w+)+.*$/
		},
		
		toString:Object.prototype.toString,
		
		isEmpty:function(val){
			return val==="" || val===$.trim(this.attr("tip"));
		},
		
		getValue:function(obj){
			var inputval,
				curform=this;
				
			if(obj.is(":radio")){
				inputval=curform.find(":radio[name='"+obj.attr("name")+"']:checked").val();
				inputval= inputval===undef ? "" : inputval;
			}else if(obj.is(":checkbox")){
				inputval="";
				curform.find(":checkbox[name='"+obj.attr("name")+"']:checked").each(function(){ 
					inputval +=$(this).val()+','; 
				})
				inputval= inputval===undef ? "" : inputval;
			}else{
				inputval=obj.val();
			}
			inputval=$.trim(inputval);
			
			return Validform.util.isEmpty.call(obj,inputval) ? "" : inputval;
		},
		
		enhance:function(tiptype,usePlugin,tipSweep,addRule){
			var curform=this;
			
			//椤甸溃涓娄笉瀛桦湪鎻愮ず淇℃伅镄勬爣绛炬椂锛岃嚜锷ㄥ垱寤 ;
			curform.find("[datatype]").each(function(){
				if(tiptype==2){
					if($(this).parent().next().find(".Validform_checktip").length==0){
						$(this).parent().next().append("<span class='Validform_checktip' />");
						$(this).siblings(".Validform_checktip").remove();
					}
				}else if(tiptype==3 || tiptype==4){
					if($(this).siblings(".Validform_checktip").length==0){
						$(this).parent().append("<span class='Validform_checktip' />");
						$(this).parent().next().find(".Validform_checktip").remove();
					}
				}
			})
			
			//琛ㄥ崟鍏幂礌链兼瘮杈冩椂镄勪俊鎭彁绀哄寮 ;
			curform.find("input[recheck]").each(function(){
				//宸茬粡缁戝畾浜嬩欢镞惰烦杩 ;
				if(this.validform_inited=="inited"){return true;}
				this.validform_inited="inited";
				
				var _this=$(this);
				var recheckinput=curform.find("input[name='"+$(this).attr("recheck")+"']");
				recheckinput.bind("keyup",function(){
					if(recheckinput.val()==_this.val() && recheckinput.val() != ""){
						if(recheckinput.attr("tip")){
							if(recheckinput.attr("tip") == recheckinput.val()){return false;}
						}
						_this.trigger("blur");
					}
				}).bind("blur",function(){
					if(recheckinput.val()!=_this.val() && _this.val()!=""){
						if(_this.attr("tip")){
							if(_this.attr("tip") == _this.val()){return false;}	
						}
						_this.trigger("blur");
					}
				});
			});
			
			//hasDefaultText;
			curform.find("[tip]").each(function(){//tip鏄〃鍗曞崖绱犵殑榛樿鎻愮ず淇℃伅,杩欐槸镣瑰向娓呯┖鏁堟灉;
				//宸茬粡缁戝畾浜嬩欢镞惰烦杩 ;
				if(this.validform_inited=="inited"){return true;}
				this.validform_inited="inited";
				
				var defaultvalue=$(this).attr("tip");
				var altercss=$(this).attr("altercss");
				$(this).focus(function(){
					if($(this).val()==defaultvalue){
						$(this).val('');
						if(altercss){$(this).removeClass(altercss);}
					}
				}).blur(function(){
					if($.trim($(this).val())===''){
						$(this).val(defaultvalue);
						if(altercss){$(this).addClass(altercss);}
					}
				});
			});
			
			//enhance info feedback for checkbox & radio;
			curform.find(":checkbox[datatype],:radio[datatype]").each(function(){
				//宸茬粡缁戝畾浜嬩欢镞惰烦杩 ;
				if(this.validform_inited=="inited"){return true;}
				this.validform_inited="inited";
				
				var _this=$(this);
				var name=_this.attr("name");
				curform.find("[name='"+name+"']").filter(":checkbox,:radio").bind("click",function(){
					//阆垮历澶氢釜浜嬩欢缁戝畾镞剁殑鍙栧€兼粸钖庨棶棰 ;
					setTimeout(function(){
						_this.trigger("blur");
					},0);
				});
				
			});
			
			//select multiple;
			curform.find("select[datatype][multiple]").bind("click",function(){
				var _this=$(this);
				setTimeout(function(){
					_this.trigger("blur");
				},0);
			});
			
			//plugins here to start;
			Validform.util.usePlugin.call(curform,usePlugin,tiptype,tipSweep,addRule);
		},
		
		usePlugin:function(plugin,tiptype,tipSweep,addRule){
			/*
				plugin:settings.usePlugin;
				tiptype:settings.tiptype;
				tipSweep:settings.tipSweep;
				addRule:鏄惁鍦╝ddRule镞惰Е鍙 ;
			*/

			var curform=this,
				plugin=plugin || {};
			//swfupload;
			if(curform.find("input[plugin='swfupload']").length && typeof(swfuploadhandler) != "undefined"){
				
				var custom={
						custom_settings:{
							form:curform,
							showmsg:function(msg,type,obj){
								Validform.util.showmsg.call(curform,msg,tiptype,{obj:curform.find("input[plugin='swfupload']"),type:type,sweep:tipSweep});	
							}	
						}	
					};

				custom=$.extend(true,{},plugin.swfupload,custom);
				
				curform.find("input[plugin='swfupload']").each(function(n){
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					$(this).val("");
					swfuploadhandler.init(custom,n);
				});
				
			}
			
			//datepicker;
			if(curform.find("input[plugin='datepicker']").length && $.fn.datePicker){
				plugin.datepicker=plugin.datepicker || {};
				
				if(plugin.datepicker.format){
					Date.format=plugin.datepicker.format; 
					delete plugin.datepicker.format;
				}
				if(plugin.datepicker.firstDayOfWeek){
					Date.firstDayOfWeek=plugin.datepicker.firstDayOfWeek; 
					delete plugin.datepicker.firstDayOfWeek;
				}

				curform.find("input[plugin='datepicker']").each(function(n){
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					plugin.datepicker.callback && $(this).bind("dateSelected",function(){
						var d=new Date( $.event._dpCache[this._dpId].getSelected()[0] ).asString(Date.format);
						plugin.datepicker.callback(d,this);
					});
					$(this).datePicker(plugin.datepicker);
				});
			}
			
			//passwordstrength;
			if(curform.find("input[plugin*='passwordStrength']").length && $.fn.passwordStrength){
				plugin.passwordstrength=plugin.passwordstrength || {};
				plugin.passwordstrength.showmsg=function(obj,msg,type){
					Validform.util.showmsg.call(curform,msg,tiptype,{obj:obj,type:type,sweep:tipSweep});
				};
				
				curform.find("input[plugin='passwordStrength']").each(function(n){
					if(this.validform_inited=="inited"){return true;}
					this.validform_inited="inited";
					
					$(this).passwordStrength(plugin.passwordstrength);
				});
			}
			
			//jqtransform;
			if(addRule!="addRule" && plugin.jqtransform && $.fn.jqTransSelect){
				if(curform[0].jqTransSelected=="true"){return;};
				curform[0].jqTransSelected="true";
				
				var jqTransformHideSelect = function(oTarget){
					var ulVisible = $('.jqTransformSelectWrapper ul:visible');
					ulVisible.each(function(){
						var oSelect = $(this).parents(".jqTransformSelectWrapper:first").find("select").get(0);
						//do not hide if click on the label object associated to the select
						if( !(oTarget && oSelect.oLabel && oSelect.oLabel.get(0) == oTarget.get(0)) ){$(this).hide();}
					});
				};
				
				/* Check for an external click */
				var jqTransformCheckExternalClick = function(event) {
					if ($(event.target).parents('.jqTransformSelectWrapper').length === 0) { jqTransformHideSelect($(event.target)); }
				};
				
				var jqTransformAddDocumentListener = function (){
					$(document).mousedown(jqTransformCheckExternalClick);
				};
				
				if(plugin.jqtransform.selector){
					curform.find(plugin.jqtransform.selector).filter('input:submit, input:reset, input[type="button"]').jqTransInputButton();
					curform.find(plugin.jqtransform.selector).filter('input:text, input:password').jqTransInputText();			
					curform.find(plugin.jqtransform.selector).filter('input:checkbox').jqTransCheckBox();
					curform.find(plugin.jqtransform.selector).filter('input:radio').jqTransRadio();
					curform.find(plugin.jqtransform.selector).filter('textarea').jqTransTextarea();
					if(curform.find(plugin.jqtransform.selector).filter("select").length > 0 ){
						 curform.find(plugin.jqtransform.selector).filter("select").jqTransSelect();
						 jqTransformAddDocumentListener();
					}
					
				}else{
					curform.jqTransform();
				}
				
				curform.find(".jqTransformSelectWrapper").find("li a").click(function(){
					$(this).parents(".jqTransformSelectWrapper").find("select").trigger("blur");	
				});
			}

		},
		
		getNullmsg:function(curform){
			var obj=this;
			var reg=/[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z\s]+/g;
			var nullmsg;
			
			var label=curform[0].settings.label || ".Validform_label";
			label=obj.siblings(label).eq(0).text() || obj.siblings().find(label).eq(0).text() || obj.parent().siblings(label) .eq(0).text() || obj.parent().siblings().find(label).eq(0).text();
			label=label.replace(/\s(?![a-zA-Z])/g,"").match(reg);
			label=label? label.join("") : [""];

			reg=/\{(.+)\|(.+)\}/;
			nullmsg=curform.data("tipmsg").s || tipmsg.s;
			
			if(label != ""){
				nullmsg=nullmsg.replace(/\{0\|(.+)\}/,label);
				if(obj.attr("recheck")){
					nullmsg=nullmsg.replace(/\{(.+)\}/,"");
					obj.attr("nullmsg",nullmsg);
					return nullmsg;
				}
			}else{
				nullmsg=obj.is(":checkbox,:radio,select") ? nullmsg.replace(/\{0\|(.+)\}/,"") : nullmsg.replace(/\{0\|( .+)\}/,"$1");
			}
			nullmsg=obj.is(":checkbox,:radio,select") ? nullmsg.replace(reg,"$2") : nullmsg.replace(reg,"$1");
			
			obj.attr("nullmsg",nullmsg);
			return nullmsg;
		},
		
		getErrormsg:function(curform,datatype,recheck){
			var regxp=/^(.+?)((\d+)-(\d+))?$/,
				regxp2=/^(.+?)(\d+)-(\d+)$/,
				regxp3=/(.*?)\d+(.+?)\d+(.*)/,
				mac=datatype.match(regxp),
				temp,str;
			
			//濡傛灉鏄€间笉涓€镙疯€屾姤阌 ;
			if(recheck=="recheck"){
				str=curform.data("tipmsg").reck || tipmsg.reck;
				return str;
			}
			
			var tipmsg_w_ex=$.extend({},tipmsg.w,curform.data("tipmsg").w);
			
			//濡傛灉铡熸潵灏辨湁锛岀洿鎺ユ樉绀鸿椤圭殑鎻愮ず淇℃伅;
			if(mac[0] in tipmsg_w_ex){
				return curform.data("tipmsg").w[mac[0]] || tipmsg.w[mac[0]];
			}
			
			//娌℃湁镄勮瘽鍦ㄦ彁绀哄璞￠噷镆ユ垒鐩镐技;
			for(var name in tipmsg_w_ex){
				if(name.indexOf(mac[1])!=-1 && regxp2.test(name)){
					str=(curform.data("tipmsg").w[name] || tipmsg.w[name]).replace(regxp3,"$1"+mac[3]+"$2"+mac[4]+"$3 ");
					curform.data("tipmsg").w[mac[0]]=str;
					
					return str;
				}
				
			}
			
			return curform.data("tipmsg").def || tipmsg.def;
		},

		_regcheck:function(datatype,gets,obj,curform){
			var curform=curform,
				info=null,
				passed=false,
				reg=/\/.+\//g,
				regex=/^(.+?)(\d+)-(\d+)$/,
				type=3;//default set to wrong type, 2,3,4;
				
			//datatype链変笁绉嶆儏鍐碉细姝ｅ垯锛屽嚱鏁板拰鐩存帴缁戝畾镄勬鍒 ;
			
			//鐩存帴鏄鍒 ;
			if(reg.test(datatype)){
				var regstr=datatype.match(reg)[0].slice(1,-1);
				var param=datatype.replace(reg,"");
				var rexp=RegExp(regstr,param);

				passed=rexp.test(gets);

			//function;
			}else if(Validform.util.toString.call(Validform.util.dataType[datatype])=="[object Function]"){
				passed=Validform.util.dataType[datatype](gets,obj,curform,Validform.util.dataType);
				if(passed === true || passed===undef){
					passed = true;
				}else{
					info= passed;
					passed=false;
				}
			
			//镊畾涔夋鍒 ;	
			}else{
				//镊姩镓╁睍datatype;
				if(!(datatype in Validform.util.dataType)){
					var mac=datatype.match(regex),
						temp;
						
					if(!mac){
						passed=false;
						info=curform.data("tipmsg").undef||tipmsg.undef;
					}else{
						for(var name in Validform.util.dataType){
							temp=name.match(regex);
							if(!temp){continue;}
							if(mac[1]===temp[1]){
								var str=Validform.util.dataType[name].toString(),
									param=str.match(/\/[mgi]*/g)[1].replace("\/",""),
									regxp=new RegExp("\\{"+temp[2]+","+temp[3]+"\\}","g");
								str=str.replace(/\/[mgi]*/g,"\/").replace(regxp,"{"+mac[2]+","+mac[3]+"}").replace (/^\//,"").replace(/\/$/,"");
								Validform.util.dataType[datatype]=new RegExp(str,param);
								break;
							}	
						}
					}
				}
				
				if(Validform.util.toString.call(Validform.util.dataType[datatype])=="[object RegExp]"){
					passed=Validform.util.dataType[datatype].test(gets);
				}
					
			}
			
			
			if(passed){
				type=2;
				info=obj.attr("sucmsg") || curform.data("tipmsg").r||tipmsg.r;
				
				//瑙勫垯楠岃愈阃氲绷钖庯纴杩橀渶瑕佸缁戝畾recheck镄勫璞¤繘琛屽€兼瘮杈 ;
				if(obj.attr("recheck")){
					var theother=curform.find("input[name='"+obj.attr("recheck")+"']:first");
					if(gets!=theother.val()){
						passed=false;
						type=3;
						info=obj.attr("errormsg") || Validform.util.getErrormsg.call(obj,curform,datatype,"recheck");
					}
				}
			}else{
				info=info || obj.attr("errormsg") || Validform.util.getErrormsg.call(obj,curform,datatype);
				
				//楠岃愈涓嶉€氲绷涓斾负绌烘椂;
				if(Validform.util.isEmpty.call(obj,gets)){
					info=obj.attr("nullmsg") || Validform.util.getNullmsg.call(obj,curform);
				}
			}
			
			return{
					passed:passed,
					type:type,
					info:info
			};
			
		},
		
		regcheck:function(datatype,gets,obj){
			/*
				datatype:datatype;
				gets:inputvalue;
				obj:input object;
			*/
			var curform=this,
				info=null,
				passed=false,
				type=3;//default set to wrong type, 2,3,4;
				
			//ignore;
			if(obj.attr("ignore")==="ignore" && Validform.util.isEmpty.call(obj,gets)){				
				if(obj.data("cked")){
					info="";	
				}
				
				return {
					passed:true,
					type:4,
					info:info
				};
			}

			obj.data("cked","cked");//do nothing if is the first time validation triggered;
			
			var dtype=Validform.util.parseDatatype(datatype);
			var res;
			for(var eithor=0; eithor<dtype.length; eithor++){
				for(var dtp=0; dtp<dtype[eithor].length; dtp++){
					res=Validform.util._regcheck(dtype[eithor][dtp],gets,obj,curform);
					if(!res.passed){
						break;
					}
				}
				if(res.passed){
					break;
				}
			}
			return res;
			
		},
		
		parseDatatype:function(datatype){
			/*
				瀛楃涓查噷闱㈠彧鑳借惈链変竴涓鍒栾〃杈惧纺;
				Datatype钖岖О蹇呴』鏄瓧姣嶏纴鏁板瓧銆佷笅鍒掔嚎鎴 *鍙风粍鎴 ;
				datatype="/regexp/|phone|tel,s,e|f,e";
				==>[["/regexp/"],["phone"],["tel","s","e"],["f","e"]];
			*/

			var reg=/\/.+?\/[mgi]*(?=(,|$|\||\s))|[\w\*-]+/g,
				dtype=datatype.match(reg),
				sepor=datatype.replace(reg,"").replace(/\s*/g,"").split(""),
				arr=[],
				m=0;
				
			arr[0]=[];
			arr[0].push(dtype[0]);
			for(var n=0;n<sepor.length;n++){
				if(sepor[n]=="|"){
					m++;
					arr[m]=[];
				}
				arr[m].push(dtype[n+1]);
			}
			
			return arr;
		},

		showmsg:function(msg,type,o,triggered){
			/*
				msg:鎻愮ず鏂囧瓧;
				type:鎻愮ず淇℃伅鏄剧ず鏂瑰纺;
				o:{obj:褰揿墠瀵硅薄, type:1=>姝ｅ湪妫€娴  | 2=>阃氲绷, sweep:true | false}, 
				triggered:鍦╞lur鎴栨彁浜よ〃鍗曡Е鍙戠殑楠岃愈涓纴链変簺鎯呭喌涓嶉渶瑕佹樉绀烘彁绀烘枃瀛楋纴濡傝嚜瀹氢箟寮瑰嚭鎻愮ず妗嗙殑鏄剧ず鏂瑰纺锛屼笉暗€瑕佹疮娆lur镞跺氨椹笂寮瑰嚭鎻愮ず;
				
				tiptype:1\2\3镞堕兘链夊沩鑳戒细寮瑰嚭镊畾涔夋彁绀烘
				tiptype:1镞跺湪triggered bycheck镞朵笉寮规
				tiptype:2\3镞跺湪ajax镞跺脊妗 
				tipSweep涓篓rue镞跺湪triggered bycheck镞朵笉瑙﹀彂showmsg锛屼絾ajax鍑洪敊镄勬儏鍐典笅瑕佹彁绀 
			*/
			
			//濡傛灉msg涓簎ndefined锛岄偅涔埚氨娌″繀瑕佹墽琛屽悗闱㈢殑鎿崭綔锛宨gnore链夊彲鑳戒细鍑虹幇杩欐儏鍐 ;
			if(msg==undef){return;}
			
			//tipSweep涓篓rue锛屼笖褰揿墠涓嶆槸澶勪簬阌栾钟舵€佹椂锛宐lur浜嬩欢涓嶈Е鍙戜俊鎭樉绀 ;
			if(triggered=="bycheck" && o.sweep && (o.obj && !o.obj.is(".Validform_error") || typeof type == "function")){return;}

			$.extend(o,{curform:this});
				
			if(typeof type == "function"){
				type(msg,o,Validform.util.cssctl);
				return;
			}
			
			if(type==1 || triggered=="byajax" && type!=4){
				msgobj.find(".Validform_info").html(msg);
			}
			
			//tiptypt=1镞讹纴blur瑙﹀彂showmsg锛岄獙璇佹槸钖﹂€氲绷閮戒笉寮规锛屾彁浜よ〃鍗曡Е鍙戠殑璇濓纴鍙楠岃愈鍑洪敊锛屽氨寮规;
			if(type==1 && triggered!="bycheck" && o.type!=2 || triggered=="byajax" && type!=4){
				msghidden=false;
				msgobj.find(".iframe").css("height",msgobj.outerHeight());
				msgobj.show();
				setCenter(msgobj,100);
			}

			if(type==2 && o.obj){
				o.obj.parent().next().find(".Validform_checktip").html(msg);
				Validform.util.cssctl(o.obj.parent().next().find(".Validform_checktip"),o.type);
			}
			
			if((type==3 || type==4) && o.obj){
				o.obj.siblings(".Validform_checktip").html(msg);
				Validform.util.cssctl(o.obj.siblings(".Validform_checktip"),o.type);
			}

		},

		cssctl:function(obj,status){
			switch(status){
				case 1:
					obj.removeClass("Validform_right Validform_wrong").addClass("Validform_checktip Validform_loading");//checking;
					break;
				case 2:
					obj.removeClass("Validform_wrong Validform_loading").addClass("Validform_checktip Validform_right");//passed;
					break;
				case 4:
					obj.removeClass("Validform_right Validform_wrong Validform_loading").addClass("Validform_checktip");//for ignore;
					break;
				default:
					obj.removeClass("Validform_right Validform_loading").addClass("Validform_checktip Validform_wrong");//wrong;
			}
		},
		
		check:function(curform,subpost,bool){
			/*
				妫€娴嫔崟涓〃鍗曞崖绱 ;
				楠岃愈阃氲绷杩斿洖true锛屽惁鍒栾繑锲瀎alse銆佸疄镞堕獙璇佽繑锲炲€间负ajax;
				bool锛屼紶鍏rue鍒椤彧妫€娴嬩笉鏄剧ず鎻愮ず淇℃伅;
			*/
			var settings=curform[0].settings;
			var subpost=subpost || "";
			var inputval=Validform.util.getValue.call(curform,$(this));
			
			//闅愯棌鎴栫粦瀹歞ataIgnore镄勮〃鍗曞璞′笉锅氶獙璇 ;
			if(settings.ignoreHidden && $(this).is(":hidden") || $(this).data("dataIgnore")==="dataIgnore"){
				return true;
			}
			
			//dragonfly=true镞讹纴娌℃湁缁戝畾ignore锛屽€间负绌轰笉锅氶獙璇侊纴浣嗛獙璇佷笉阃氲绷;
			if(settings.dragonfly && !$(this).data("cked") && Validform.util.isEmpty.call($(this),inputval) && $(this).attr("ignore")!="ignore "){
				return false;
			}
			
			var flag=Validform.util.regcheck.call(curform,$(this).attr("datatype"),inputval,$(this));
			
			//链兼病鍙桦寲涓嶅仛妫€娴嬶纴杩欐椂瑕佽€冭槛recheck鎯呭喌;
			//涓嶆槸鍦ㄦ彁浜よ〃鍗曟椂瑙﹀彂镄刟jax楠岃愈;
			if(inputval==this.validform_lastval && !$(this).attr("recheck") && subpost==""){
				return flag.passed ? true : false;
			}

			this.validform_lastval=inputval;//瀛桦偍褰揿墠链 ;
			
			var _this;
			errorobj=_this=$(this);
			
			if(!flag.passed){
				//鍙栨秷姝ｅ湪杩涜镄刟jax楠岃愈;
				Validform.util.abort.call(_this[0]);
				
				if(!bool){
					//浼犲叆"bycheck"锛屾寚绀哄綋鍓嶆槸check鏂规硶阅岃皟鐢ㄧ殑锛屽綋tiptype=1镞讹纴blur浜嬩欢涓嶈瑙﹀彂阌栾淇℃伅鏄剧ず;
					Validform.util.showmsg.call(curform,flag.info,settings.tiptype,{obj:$(this),type:flag.type,sweep:settings.tipSweep},"bycheck");
					
					!settings.tipSweep && _this.addClass("Validform_error");
				}
				return false;
			}
			
			//楠岃愈阃氲绷镄勮瘽锛屽鏋灭粦瀹氭湁ajaxurl锛岃镓цajax妫€娴 ;
			//褰搃gnore="ignore"镞讹纴涓虹┖链煎彲浠ラ€氲绷楠岃愈锛岃伞镞朵笉暗€瑕乤jax妫€娴 ;
			var ajaxurl=$(this).attr("ajaxurl");
			if(ajaxurl && !Validform.util.isEmpty.call($(this),inputval) && !bool){
				var inputobj=$(this);

				//褰撴彁浜よ〃鍗曟椂锛岃〃鍗曚腑镄勬辉椤瑰凡缁忓湪镓цajax妫€娴嬶纴杩欐椂暗€瑕佽璇ラ」ajax缁撴潫钖庣户缁彁浜よ〃鍗 ;
				if(subpost=="postform"){
					inputobj[0].validform_subpost="postform";
				}else{
					inputobj[0].validform_subpost="";
				}
				
				if(inputobj[0].validform_valid==="posting" && inputval==inputobj[0].validform_ckvalue){return "ajax";}
				
				inputobj[0].validform_valid="posting";
				inputobj[0].validform_ckvalue=inputval;
				Validform.util.showmsg.call(curform,curform.data("tipmsg").c||tipmsg.c,settings.tiptype,{obj:inputobj,type:1,sweep:settings.tipSweep},"bycheck") ;
				
				Validform.util.abort.call(_this[0]);
				
				var ajaxsetup=$.extend(true,{},settings.ajaxurl || {});
								
				var localconfig={
					type: "POST",
					cache:false,
					url: ajaxurl,
					data: "param="+encodeURIComponent(inputval)+"&name="+encodeURIComponent($(this).attr("name")),
					success: function(data){
						if($.trim(data.status)==="y"){
							inputobj[0].validform_valid="true";
							data.info && inputobj.attr("sucmsg",data.info);
							Validform.util.showmsg.call(curform,inputobj.attr("sucmsg") || curform.data("tipmsg").r||tipmsg.r,settings.tiptype,{obj:inputobj,type:2,sweep :settings.tipSweep},"bycheck");
							_this.removeClass("Validform_error");
							errorobj=null;
							if(inputobj[0].validform_subpost=="postform"){
								curform.trigger("submit");
							}
						}else{
							inputobj[0].validform_valid=data.info;
							Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:inputobj,type:3,sweep:settings.tipSweep});
							_this.addClass("Validform_error");
						}
						_this[0].validform_ajax=null;
					},
					error: function(data){
						if(data.status=="200"){
							if(data.responseText=="y"){
								ajaxsetup.success({"status":"y"});
							}else{
								ajaxsetup.success({"status":"n","info":data.responseText});	
							}
							return false;
						}
						
						//姝ｅ湪妫€娴嬫椂锛岃妫€娴嬬殑鏁版嵁鍙戠敓鏀瑰彉锛岃伞镞惰缁堟褰揿墠镄刟jax銆备笉鏄伞绉嶆儏鍐靛紩璧风殑ajax阌栾锛岄偅涔堟樉绀虹浉鍏抽敊璇俊鎭 ;
						if(data.statusText!=="abort"){
							var msg="status: "+data.status+"; statusText: "+data.statusText;
						
							Validform.util.showmsg.call(curform,msg,settings.tiptype,{obj:inputobj,type:3,sweep:settings.tipSweep});
							_this.addClass("Validform_error");
						}
						
						inputobj[0].validform_valid=data.statusText;
						_this[0].validform_ajax=null;
						
						//localconfig.error杩斿洖true琛ㄧず杩橀渶瑕佹墽琛宼emp_err;
						return true;
					}
				}
				
				if(ajaxsetup.success){
					var temp_suc=ajaxsetup.success;
					ajaxsetup.success=function(data){
						localconfig.success(data);
						temp_suc(data,inputobj);
					}
				}
				
				if(ajaxsetup.error){
					var temp_err=ajaxsetup.error;
					ajaxsetup.error=function(data){
						//localconfig.error杩斿洖false琛ㄧず涓嶉渶瑕佹墽琛宼emp_err;
						localconfig.error(data) && temp_err(data,inputobj);
					}	
				}

				ajaxsetup=$.extend({},localconfig,ajaxsetup,{dataType:"json"});
				_this[0].validform_ajax=$.ajax(ajaxsetup);
				
				return "ajax";
			}else if(ajaxurl && Validform.util.isEmpty.call($(this),inputval)){
				Validform.util.abort.call(_this[0]);
				_this[0].validform_valid="true";
			}
			
			if(!bool){
				Validform.util.showmsg.call(curform,flag.info,settings.tiptype,{obj:$(this),type:flag.type,sweep:settings.tipSweep},"bycheck");
				_this.removeClass("Validform_error");
			}
			errorobj=null;
			
			return true;
		
		},
		
		submitForm:function(settings,flg,url,ajaxPost,sync){
			/*
				flg===true镞惰烦杩回獙璇佺洿鎺ユ彁浜 ;
				ajaxPost==="ajaxPost"鎸囩ず褰揿墠琛ㄥ崟浠jax鏂瑰纺鎻愪氦;
			*/
			var curform=this;
			
			//琛ㄥ崟姝ｅ湪鎻愪氦镞剁偣鍑绘彁浜ゆ寜阍笉锅氩弽搴 ;
			if(curform[0].validform_status==="posting"){return false;}
			
			//瑕佹眰鍙兘鎻愪氦涓€娆℃椂;
			if(settings.postonce && curform[0].validform_status==="posted"){return false;}
			
			var beforeCheck=settings.beforeCheck && settings.beforeCheck(curform);
			if(beforeCheck===false){return false;}
			
			var flag=true,
				inflag;
				
			curform.find("[datatype]").each(function(){
				//璺宠绷楠岃愈;
				if(flg){
					return false;
				}
				
				//闅愯棌鎴栫粦瀹歞ataIgnore镄勮〃鍗曞璞′笉锅氶獙璇 ;
				if(settings.ignoreHidden && $(this).is(":hidden") || $(this).data("dataIgnore")==="dataIgnore"){
					return true;
				}
				
				var inputval=Validform.util.getValue.call(curform,$(this)),
					_this;
				errorobj=_this=$(this);
				
				inflag=Validform.util.regcheck.call(curform,$(this).attr("datatype"),inputval,$(this));
				
				if(!inflag.passed){
					Validform.util.showmsg.call(curform,inflag.info,settings.tiptype,{obj:$(this),type:inflag.type,sweep:settings.tipSweep});
					_this.addClass("Validform_error");
					
					if(!settings.showAllError){
						_this.focus();
						flag=false;
						return false;
					}
					
					flag && (flag=false);
					return true;
				}
				
				//褰搃gnore="ignore"镞讹纴涓虹┖链煎彲浠ラ€氲绷楠岃愈锛岃伞镞朵笉暗€瑕乤jax妫€娴 ;
				if($(this).attr("ajaxurl") && !Validform.util.isEmpty.call($(this),inputval)){
					if(this.validform_valid!=="true"){
						var thisobj=$(this);
						Validform.util.showmsg.call(curform,curform.data("tipmsg").v||tipmsg.v,settings.tiptype,{obj:thisobj,type:3,sweep:settings.tipSweep});
						_this.addClass("Validform_error");
						
						thisobj.trigger("blur",["postform"]);//continue the form post;
						
						if(!settings.showAllError){
							flag=false;
							return false;
						}
						
						flag && (flag=false);
						return true;
					}
				}else if($(this).attr("ajaxurl") && Validform.util.isEmpty.call($(this),inputval)){
					Validform.util.abort.call(this);
					this.validform_valid="true";
				}

				Validform.util.showmsg.call(curform,inflag.info,settings.tiptype,{obj:$(this),type:inflag.type,sweep:settings.tipSweep});
				_this.removeClass("Validform_error");
				errorobj=null;
			});
			
			if(settings.showAllError){
				curform.find(".Validform_error:first").focus();
			}

			if(flag){
				var beforeSubmit=settings.beforeSubmit && settings.beforeSubmit(curform);
				if(beforeSubmit===false){return false;}
				
				curform[0].validform_status="posting";
							
				if(settings.ajaxPost || ajaxPost==="ajaxPost"){
					//銮峰彇閰岖疆鍙傛暟;
					var ajaxsetup=$.extend(true,{},settings.ajaxpost || {});
					//链夊彲鑳介渶瑕佸姩镐佺殑鏀瑰彉鎻愪氦鍦板潃锛屾墍浠ユ妸action镓€鎸囧畾​​镄剈rl灞傜骇璁句负链€浣 ;
					ajaxsetup.url=url || ajaxsetup.url || settings.url || curform.attr("action");
					
					//byajax锛敛jax镞讹纴tiptye涓 1銆 2鎴 3暗€瑕佸脊鍑烘彁绀烘;
					Validform.util.showmsg.call(curform,curform.data("tipmsg").p||tipmsg.p,settings.tiptype,{obj:curform,type:1,sweep:settings.tipSweep},"byajax") ;

					//鏂规硶阅岀殑浼桦厛绾ц楂 ;
					//链塽ndefined鎯呭喌;
					if(sync){
						ajaxsetup.async=false;
					}else if(sync===false){
						ajaxsetup.async=true;
					}
					
					if(ajaxsetup.success){
						var temp_suc=ajaxsetup.success;
						ajaxsetup.success=function(data){
							settings.callback && settings.callback(data);
							curform[0].validform_ajax=null;
							if($.trim(data.status)==="y"){
								curform[0].validform_status="posted";
							}else{
								curform[0].validform_status="normal";
							}
							
							temp_suc(data,curform);
						}
					}
					
					if(ajaxsetup.error){
						var temp_err=ajaxsetup.error;
						ajaxsetup.error=function(data){
							settings.callback && settings.callback(data);
							curform[0].validform_status="normal";
							curform[0].validform_ajax=null;
							
							temp_err(data,curform);
						}	
					}
					
					var localconfig={
						type: "POST",
						async:true,
						data: curform.serializeArray(),
						success: function(data){
							if($.trim(data.status)==="y"){
								//鎴愬姛鎻愪氦;
								curform[0].validform_status="posted";
								Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:curform,type:2,sweep:settings.tipSweep},"byajax");
							}else{
								//鎻愪氦鍑洪敊;
								curform[0].validform_status="normal";
								Validform.util.showmsg.call(curform,data.info,settings.tiptype,{obj:curform,type:3,sweep:settings.tipSweep},"byajax");
							}
							
							settings.callback && settings.callback(data);
							curform[0].validform_ajax=null;
						},
						error: function(data){
							var msg="status: "+data.status+"; statusText: "+data.statusText;
									
							Validform.util.showmsg.call(curform,msg,settings.tiptype,{obj:curform,type:3,sweep:settings.tipSweep},"byajax");
							
							settings.callback && settings.callback(data);
							curform[0].validform_status="normal";
							curform[0].validform_ajax=null;
						}
					}
					
					ajaxsetup=$.extend({},localconfig,ajaxsetup,{dataType:"json"});
					
					curform[0].validform_ajax=$.ajax(ajaxsetup);

				}else{
					if(!settings.postonce){
						curform[0].validform_status="normal";
					}
					
					var url=url || settings.url;
					if(url){
						curform.attr("action",url);
					}
					
					return settings.callback && settings.callback(curform);
				}
			}
			
			return false;
			
		},
		
		resetForm:function(){
			var brothers=this;
			brothers.each(function(){
				this.reset && this.reset();
				this.validform_status="normal";
			});
			
			brothers.find(".Validform_right").text("");
			brothers.find(".passwordStrength").children().removeClass("bgStrength");
			brothers.find(".Validform_checktip").removeClass("Validform_wrong Validform_right Validform_loading");
			brothers.find(".Validform_error").removeClass("Validform_error");
			brothers.find("[datatype]").removeData("cked").removeData("dataIgnore").each(function(){
				this.validform_lastval=null;
			});
			brothers.eq(0).find("input:first").focus();
		},
		
		abort:function(){
			if(this.validform_ajax){
				this.validform_ajax.abort();	
			}
		}
		
	}
	
	$.Datatype=Validform.util.dataType;
	
	Validform.prototype={
		dataType:Validform.util.dataType,
		
		eq:function(n){
			var obj=this;
			
			if(n>=obj.forms.length){
				return null;	
			}
			
			if(!(n in obj.objects)){
				obj.objects[n]=new Validform($(obj.forms[n]).get(),{},true);
			}
			
			return obj.objects[n];

		},
		
		resetStatus:function(){
			var obj=this;
			$(obj.forms).each(function(){
				this.validform_status="normal";	
			});
			
			return this;
		},
		
		setStatus:function(status){
			var obj=this;
			$(obj.forms).each(function(){
				this.validform_status=status || "posting";	
			});
			
			return this;
		},
		
		getStatus:function(){
			var obj=this;
			var status=$(obj.forms)[0].validform_status;
			
			return status;
		},
		
		ignore:function(selector){
			var obj=this;
			var selector=selector || "[datatype]"
			
			$(obj.forms).find(selector).each(function(){
				$(this).data("dataIgnore","dataIgnore").removeClass("Validform_error");
			});
			
			return this;
		},
		
		unignore:function(selector){
			var obj=this;
			var selector=selector || "[datatype]"
			
			$(obj.forms).find(selector).each(function(){
				$(this).removeData("dataIgnore");
			});
			
			return this;
		},
		
		addRule:function(rule){
			/*
				rule => [{
					ele:"#id",
					datatype:"*",
					errormsg:"鍑洪敊鎻愮ず鏂囧瓧锛 ",
					nullmsg:"涓虹┖镞剁殑鎻愮ず鏂囧瓧锛 ",
					tip:"榛樿鏄剧ず镄勬彁绀烘枃瀛 ",
					altercss:"gray",
					ignore:"ignore",
					ajaxurl:"valid.php",
					recheck:"password",
					plugin:"passwordStrength"
				},{},{},...]
			*/
			var obj=this;
			var rule=rule || [];
			
			for(var index=0; index<rule.length; index++){
				var o=$(obj.forms).find(rule[index].ele);
				for(var attr in rule[index]){
					attr !=="ele" && o.attr(attr,rule[index][attr]);
				}
			}
			
			$(obj.forms).each(function(){
				var $this=$(this);
				Validform.util.enhance.call($this,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep,"addRule");
			});
			
			return this;
		},
		
		ajaxPost:function(flag,sync,url){
			var obj=this;
			
			$(obj.forms).each(function(){
				//鍒涘缓pop box;
				if( this.settings.tiptype==1 || this.settings.tiptype==2 || this.settings.tiptype==3 ){
					creatMsgbox();
				}
				
				Validform.util.submitForm.call($(obj.forms[0]),this.settings,flag,url,"ajaxPost",sync);
			});
			
			return this;
		},
		
		submitForm:function(flag,url){
			/*flag===true镞朵笉锅氶獙璇佺洿鎺ユ彁浜 */
			

			var obj=this;
			
			$(obj.forms).each(function(){
				var subflag=Validform.util.submitForm.call($(this),this.settings,flag,url);
				subflag === undef && (subflag=true);
				if(subflag===true){
					this.submit();
				}
			});
			
			return this;
		},
		
		resetForm:function(){
			var obj=this;
			Validform.util.resetForm.call($(obj.forms));
			
			return this;
		},
		
		abort:function(){
			var obj=this;
			$(obj.forms).each(function(){
				Validform.util.abort.call(this);
			});
			
			return this;
		},
		
		check:function(bool,selector){
			/*
				bool锛氢紶鍏rue锛屽彧妫€娴嬩笉鏄剧ず鎻愮ず淇℃伅;
			*/
			
			var selector=selector || "[datatype]",
				obj=this,
				curform=$(obj.forms),
				flag=true;
			
			curform.find(selector).each(function(){
				Validform.util.check.call(this,curform,"",bool) || (flag=false);
			});
			
			return flag;
		},
		
		config:function(setup){
		/*
			config={
				url:"ajaxpost.php",//鎸囧畾浜唘rl钖庯纴鏁版嵁浼氭彁浜ゅ埌杩欎釜鍦板潃;
				ajaxurl:{
					timeout:1000,
					...
				},
				ajaxpost:{
					timeout:1000,
					...
				}
			}
		*/
			var obj=this;
			setup=setup || {};
			$(obj.forms).each(function(){
				var $this=$(this);
				this.settings=$.extend(true,this.settings,setup);
				Validform.util.enhance.call($this,this.settings.tiptype,this.settings.usePlugin,this.settings.tipSweep);
			});
			
			return this;
		}
	}

	$.fn.Validform=function(settings){
		return new Validform(this,settings);
	};
	
	function setCenter(obj,time){
		var left=($(window).width()-obj.outerWidth())/2,
			top=($(window).height()-obj.outerHeight())/2,
			
		top=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+(top>0?top:0);

		obj.css({
			left:left
		}).animate({
			top : top
		},{ duration:time , queue:false });
	}
	
	function creatMsgbox(){
		if($("#Validform_msg").length!==0){return false;}
		msgobj=$('<div id="Validform_msg"><div class="Validform_title">'+tipmsg.tit+'<a class="Validform_close" href="javascript:void(0);">χ</ a></div><div class="Validform_info"></div><div class="iframe"><iframe frameborder="0" scrolling="no" height="100%" width="100%" ></iframe></div></div>').appendTo("body");//鎻愮ず淇℃伅妗 ;
		msgobj.find("a.Validform_close").click(function(){
			msgobj.hide();
			msghidden=true;
			if(errorobj){
				errorobj.focus().addClass("Validform_error");
			}
			return false;
		}).focus(function(){this.blur();});

		$(window).bind("scroll resize",function(){
			!msghidden && setCenter(msgobj,400);
		});
	};
	
	//鍏敤鏂规硶鏄剧ず&鍏抽棴淇℃伅鎻愮ず妗 ;
	$.Showmsg=function(msg){
		creatMsgbox();
		Validform.util.showmsg.call(win,msg,1,{});
	};
	
	$.Hidemsg=function(){
		msgobj.hide();
		msghidden=true;
	};
	
})(jQuery,window);