exports.install = function(Vue, options) {
	
  Vue.prototype.config = {
  	//===========登录==========
    usebase: "http://ouc.ishowchina.com/ouc",
    statisBase:"http://ouc.ishowchina.com/statistic",

   
  }
  // const ouc = {
  //   user: null,
  //   //	oauth2User: "http://user.ishowchina.com",
  //   oauth2User: "http://user.ishowchina.com/ouc",
  //   //	clientId: "c1ebe466-1cdc-4bd3-ab69-77c3561b9dee",
  //   //	clientSecret: "d8346ea2-6017-43ed-ad68-19c0f971738b",
  //   clientId: "0e7d1a0f-591b-4037-ac75-0d491a66f898",
  //   clientSecret: "c6e8b4b2-9fda-448e-beb4-1d3dbf908807",
  //   tokenKey: "utoken",
  //   tokenExpiresKey: "utoken_expires",
  //   tokenName: "utoken_name",
  // };
  Vue.prototype.checkedUserStatus = function() {
    this.axios.get(this.config.usebase + "/userInfo?isAjax=true").then((res) => {
      if (res.data.status == 400 || res.data == "null" || res.data.status == 401) {
       		 window.location.href = this.config.usebase+"/login"
      } else {
        var str = JSON.parse(res.data);   
        for (var key in str) {
          if (key == "nickname") {
            Vue.prototype.username = str[key]
          }
        }

      }

    })
  };
};




