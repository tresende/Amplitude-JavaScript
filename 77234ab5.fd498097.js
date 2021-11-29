(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{61:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),b=(a(0),a(71)),l={},i={unversionedId:"Options",id:"Options",isDocsHomePage:!1,title:"Options",description:"Options",source:"@site/docs/Options.md",permalink:"/Amplitude-JavaScript/Options",editUrl:"https://github.com/amplitude/Amplitude-JavaScript/website/docs/Options.md",sidebar:"sidebar",previous:{title:"Revenue",permalink:"/Amplitude-JavaScript/Revenue"}},c=[{value:"<code>Options</code>",id:"options",children:[]}],d={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"options"},Object(b.b)("inlineCode",{parentName:"h2"},"Options")),Object(b.b)("p",null,"Options used when initializing Amplitude"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apiEndpoint"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"api.amplitude.com")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Endpoint to send amplitude event requests to.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"batchEvents"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then events are batched together and uploaded only when the number of unsent events is greater than or equal to eventUploadThreshold or after eventUploadPeriodMillis milliseconds have passed since the first unsent event was logged.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cookieExpiration"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"365")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of days after which the Amplitude cookie will expire. 12 months is for GDPR compliance.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cookieName"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"amplitude_id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"DEPRECATED"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sameSiteCookie"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'None'"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the SameSite flag on the amplitude cookie. Decides cookie privacy policy.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cookieForceUpgrade"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Forces pre-v6.0.0 instances to adopt post-v6.0.0 compat cookie formats.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deferInitialization"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"null")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", disables the core functionality of the sdk, including saving a cookie and all logging, until explicitly enabled. To enable tracking, please call ",Object(b.b)("inlineCode",{parentName:"td"},"amplitude.getInstance().enableTracking()")," ",Object(b.b)("em",{parentName:"td"},"Note: This will not affect users who already have an amplitude cookie. The decision to track events is determined by whether or not a user has an amplitude analytics cookie. If the ",Object(b.b)("inlineCode",{parentName:"em"},"cookieExpiration</code> is manually defined to be a short lifespan, you may need to run "),"amplitude.getInstance().enableTracking()` upon the cookie expiring or upon logging in."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"disableCookies"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Disable Ampllitude cookies altogether.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deviceId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A randomly generated UUID."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The custom Device ID to set. ",Object(b.b)("em",{parentName:"td"},"Note: This is not recommended unless you know what you are doing (e.g. you have your own system for tracking user devices)."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"deviceIdFromUrlParam"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then the SDK will parse Device ID values from the URL parameter amp_device_id if available. Device IDs defined in the configuration options during init will take priority over Device IDs from URL parameters.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"domain"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The top domain of the current page's URL. ('",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://amplitude.com'"}),"https://amplitude.com'"),")"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set a custom domain for the Amplitude cookie. To include subdomains, add a preceding period, eg: ",Object(b.b)("inlineCode",{parentName:"td"},".amplitude.com"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventUploadPeriodMillis"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"30000")," (30 sec)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Amount of time in milliseconds that the SDK waits before uploading events if batchEvents is true.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"eventUploadThreshold"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"30")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Minimum number of events to batch together per request if batchEvents is true.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"forceHttps"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the events will always be uploaded to HTTPS endpoint. Otherwise, it will use the embedding site's protocol.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"includeFbclid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", captures the fbclid URL parameter as well as the user's initial_fbclid via a setOnce operation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"includeGclid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", captures the gclid URL parameter as well as the user's initial_gclid via a setOnce operation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"includeReferrer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", captures the referrer and referring_domain for each session, as well as the user's initial_referrer and initial_referring_domain via a setOnce operation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"includeUtm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", finds UTM parameters in the query string or the ","_","utmz cookie, parses, and includes them as user properties on all events uploaded. This also captures initial UTM parameters for each session via a setOnce operation.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"language"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The language determined by the browser"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Custom language to set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"library"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{ name: 'amplitude-js', version: packageJsonVersion }")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Values for the library version")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logLevel"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"WARN")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Level of logs to be printed in the developer console. Valid values are 'DISABLE', 'ERROR', 'WARN', 'INFO'. To learn more about the different options, see below.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logAttributionCapturedEvent"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the SDK will log an Amplitude event anytime new attribution values are captured from the user. ",Object(b.b)("strong",{parentName:"td"},"Note: These events count towards your event volume.")," Event name being logged: ","[Amplitude]"," Attribution Captured. Event Properties that can be logged: ",Object(b.b)("inlineCode",{parentName:"td"},"utm_source"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_medium"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_campaign"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_term"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_content"),", ",Object(b.b)("inlineCode",{parentName:"td"},"referrer"),", ",Object(b.b)("inlineCode",{parentName:"td"},"referring_domain"),", ",Object(b.b)("inlineCode",{parentName:"td"},"gclid"),", ",Object(b.b)("inlineCode",{parentName:"td"},"fbclid"),". For UTM properties to be logged, ",Object(b.b)("inlineCode",{parentName:"td"},"includeUtm")," must be set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),". For the ",Object(b.b)("inlineCode",{parentName:"td"},"referrer")," and ",Object(b.b)("inlineCode",{parentName:"td"},"referring_domain")," properties to be logged, ",Object(b.b)("inlineCode",{parentName:"td"},"includeReferrer")," must be set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),". For the ",Object(b.b)("inlineCode",{parentName:"td"},"gclid")," property to be logged, ",Object(b.b)("inlineCode",{parentName:"td"},"includeGclid")," must be set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),". For the ",Object(b.b)("inlineCode",{parentName:"td"},"fbclid")," property to be logged, ",Object(b.b)("inlineCode",{parentName:"td"},"includeFbclid")," must be set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"optOut"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether or not to disable tracking for the current user.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onError"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"() => {}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function to call on error.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"onExitPage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"() => {}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function called when the user exits the browser. Useful logging on page exit.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plan"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tracking plan properties")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plan.branch"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The tracking plan branch name e.g. "main"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plan.source"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The tracking plan source e.g. "web"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"plan.version"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The tracking plan version e.g. "1", "15"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"platform"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Web")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Platform device is running on. Defaults to ",Object(b.b)("inlineCode",{parentName:"td"},"Web")," (browser, including mobile browsers).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"savedMaxCount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1000")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of events to save in localStorage. If more events are logged while offline, then old events are removed.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"saveEvents"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", saves events to localStorage and removes them upon successful upload. ",Object(b.b)("em",{parentName:"td"},"Note: Without saving events, events may be lost if the user navigates to another page before the events are uploaded."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"saveParamsReferrerOncePerSession"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", then includeGclid, includeFbclid, includeReferrer, and includeUtm will only track their respective properties once per session. New values that come in during the middle of the user's session will be ignored. Set to false to always capture new values.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"secureCookie"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the amplitude cookie will be set with the Secure flag.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sessionTimeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"30*60*1000")," (30 min)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The time between logged events before a new session starts in milliseconds.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"storage"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"''")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets storage strategy. Options are 'cookies', 'localStorage', 'sessionStorage', or ",Object(b.b)("inlineCode",{parentName:"td"},"none"),". Will override ",Object(b.b)("inlineCode",{parentName:"td"},"disableCookies")," option")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"trackingOptions"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{ city: true, country: true, carrier: true, device_manufacturer: true, device_model: true, dma: true, ip_address: true, language: true, os_name: true, os_version: true, platform: true, region: true, version_name: true}")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of data associated with a user.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"transport"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"http")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Network transport mechanism used to send events. Options are 'http' and 'beacon'.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unsetParamsReferrerOnNewSession"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If ",Object(b.b)("inlineCode",{parentName:"td"},"false"),", the existing ",Object(b.b)("inlineCode",{parentName:"td"},"referrer")," and ",Object(b.b)("inlineCode",{parentName:"td"},"utm_parameter")," values will be carried through each new session. If set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", the ",Object(b.b)("inlineCode",{parentName:"td"},"referrer")," and ",Object(b.b)("inlineCode",{parentName:"td"},"utm_parameter")," user properties, which include ",Object(b.b)("inlineCode",{parentName:"td"},"referrer"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_source"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_medium"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_campaign"),", ",Object(b.b)("inlineCode",{parentName:"td"},"utm_term"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"utm_content"),", will be set to ",Object(b.b)("inlineCode",{parentName:"td"},"null")," upon instantiating a new session. Note: This only works if ",Object(b.b)("inlineCode",{parentName:"td"},"includeReferrer")," or ",Object(b.b)("inlineCode",{parentName:"td"},"includeUtm")," is set to ",Object(b.b)("inlineCode",{parentName:"td"},"true"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unsentKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"amplitude_unsent")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"localStorage key that stores unsent events.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unsentIdentifyKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"amplitude_unsent_identify")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"localStorage key that stores unsent identifies.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"uploadBatchSize"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"100")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of events to send to the server per request.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"headers"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"{ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Headers attached to an event(s) upload network request. Custom header properties are merged with this object.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"serverZone"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For server zone related configuration, used for server api endpoint and dynamic configuration.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"useDynamicConfig"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable dynamic configuration to find best server url for user.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"serverZoneBasedApi"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To update api endpoint with serverZone change or not. For data residency, recommend to enable it unless using own proxy server.")))))}o.isMDXComponent=!0}}]);