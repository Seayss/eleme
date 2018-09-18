"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var querystring = require("querystring");
var Request = /** @class */ (function () {
    /**
     * 每一个小号需要实例化一次
     * @param {string} cookie 授权登录饿了么的QQ或者WX号Cookie
     * @param {AxiosProxyConfig} proxy 代理配置
     */
    function Request(cookie, proxy) {
        this.cookie = cookie;
        this.axios = axios_1.default.create({
            proxy: proxy,
            baseURL: "https://h5.ele.me",
            method: "POST",
            headers: {
                referer: "https://h5.ele.me/hongbao/",
                origin: "https://h5.ele.me",
                "x-shard": Request.createXShared(),
                "user-agent": "Mozilla/5.0 (Linux; Android 7.0; MIX Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044004 Mobile Safari/537.36 V1_AND_SQ_7.5.0_794_YYB_D QQ/7.5.0.3430 NetType/WIFI WebP/0.3.0 Pixel/1080"
            }
        });
    }
    Request.createXShared = function (sn) {
        if (sn === void 0) { sn = "29e47b57971c1c9d"; }
        return "eosid=" + parseInt(sn, 16);
    };
    /**
     * 底层请求，可以做一些统一的请求前后处理
     * @param {string} method 请求方式
     * @param {string} url 请求地址
     * @param {*} data 请求数据
     * @param {AxiosRequestConfig} config 其它配置
     * @returns {Promise<AxiosResponse>}
     * @private
     */
    Request.prototype.request = function (method, url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.axios[method](url, querystring.stringify(data), config)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        return [2 /*return*/, e_1.response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取绑定好的cookie数据
     * @returns {Cookie}
     */
    Request.prototype.getCookie = function () {
        return __assign({}, this.cookie);
    };
    /**
     * 领取红包
     * @param {string} sn 红包链接标识
     * @param {string} headimgurl 领取的头像URL
     * @param {string} nickname 领取的昵称
     * @returns {Promise<object>}
     */
    Request.prototype.getHongbao = function (sn, headimgurl, nickname) {
        if (headimgurl === void 0) { headimgurl = ""; }
        if (nickname === void 0) { nickname = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("post", "/restapi/marketing/promotion/weixin/" + this.cookie.openid, {
                            device_id: "",
                            group_sn: sn,
                            hardware_id: "",
                            method: "phone",
                            phone: "",
                            platform: 4,
                            sign: this.cookie.sign,
                            track_id: "",
                            unionid: "fuck",
                            weixin_avatar: headimgurl,
                            weixin_username: nickname
                        }, {
                            headers: {
                                "x-shard": Request.createXShared(sn),
                                cookie: "SID=" + this.cookie.sid
                            }
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 根据 sn 获取拼手气大包是第几个
     * @param {string} sn 红包链接标识
     * @returns {Promise<number>}
     */
    Request.prototype.getLuckyNumber = function (sn) {
        return __awaiter(this, void 0, void 0, function () {
            var lucky_number;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("get", "/restapi/marketing/themes/0/group_sns/" + sn)];
                    case 1:
                        lucky_number = (_a.sent()).data.lucky_number;
                        return [2 /*return*/, lucky_number];
                }
            });
        });
    };
    /**
     * 绑定 sendMobileCode 传入的手机号码，需要先调用 loginByMobile
     * @returns {Promise<object>}
     */
    Request.prototype.changeMobile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("post", "/restapi/marketing/hongbao/weixin/" + this.cookie.openid + "/change", {
                            phone: this.mobile,
                            sign: this.cookie.sign
                        }, {
                            headers: {
                                cookie: "SID=" + this.cookie.sid
                            }
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * 使用短信验证码登录，需要先调用 sendMobileCode
     * @param {string} validateCode 短信验证码
     * @returns {Promise<string>}
     */
    Request.prototype.loginByMobile = function (validateCode) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, user_id, headers, sid;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.request("post", "/restapi/eus/login/login_by_mobile", {
                            mobile: this.mobile,
                            validate_code: validateCode,
                            validate_token: this.validateToken
                        })];
                    case 1:
                        _a = _b.sent(), user_id = _a.data.user_id, headers = _a.headers;
                        sid = headers["set-cookie"].find(function (c) { return c.split("; ")[0].indexOf("SID") === 0; });
                        if (sid) {
                            this.cookie.sid = sid.split("; ")[0].split("=")[1];
                        }
                        return [2 /*return*/, user_id];
                }
            });
        });
    };
    /**
     * 发送短信验证码
     * @param {string} mobile 手机号码
     * @param {string} captcha_hash 图形验证码标识
     * @param {string} captcha_value 图形验证码内容
     * @returns {Promise<string>}
     */
    Request.prototype.sendMobileCode = function (mobile, captcha_hash, captcha_value) {
        if (captcha_hash === void 0) { captcha_hash = ""; }
        if (captcha_value === void 0) { captcha_value = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var validate_token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request("post", "/restapi/eus/login/mobile_send_code", {
                            mobile: mobile,
                            captcha_hash: captcha_hash,
                            captcha_value: captcha_value
                        })];
                    case 1:
                        validate_token = (_a.sent()).data.validate_token;
                        this.mobile = mobile;
                        this.validateToken = validate_token;
                        return [2 /*return*/, validate_token];
                }
            });
        });
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=request.js.map