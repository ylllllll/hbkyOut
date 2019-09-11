// 验证手机号
let validatePhone = (val) => {
    let reg = /^1[3456789]\d{9}$/;
    if(!reg.test(val)) {
        return "请输入正确的手机号";
    }
    return false;
};

// 弱口令验证（密码）
let validatePwd = (val,username) => {
    let pattFlag1 = 0,
        pattFlag2 = 0,
        pattFlag3 = 0,
        pattFlag4 = 0,
        pwdFlag = 0;
    // 至少一个数字
    let pattern1 = /(.*?)\d+(.*?)/;
    if(pattern1.test(val) == true) {
        pattFlag1 = 1;
    }else{
        pattFlag1 = 0;
    }
    // 至少一个小写字母
    let pattern2 = /(.*?)[a-z]+(.*?)/;
    if(pattern2.test(val) == true) {
        pattFlag2 = 1;
    }else{
        pattFlag2 = 0;
    }
    // 至少一个大写字母
    let pattern3 = /(.*?)[A-Z]+(.*?)/;
    if(pattern3.test(val) == true) {
        pattFlag3 = 1;
    }else{
        pattFlag3 = 0;
    }
    // 至少一个特殊符号
    for(let i = 0;i < val.length;i++) {
        let charCode = val[i].charCodeAt();
        if(( charCode >= 33 && charCode <= 47 ) || ( charCode >= 58 && charCode <= 64 ) || ( charCode >= 91 && charCode <= 96 ) || ( charCode >= 123 && charCode <= 126 )) {
            pattFlag4 = 1;
            break;
        }else {
            pattFlag4 = 0;
        }
    }
    // 值为几则符合几种
    pwdFlag = pattFlag1 + pattFlag2 + pattFlag3 + pattFlag4;

    if(val.length < 8 || val.length > 18) {
        return "密码长度请设置为8-18位";
    }else if(pwdFlag < 3) {
        return "密码请包含大小写字母、数字及特殊字符中的至少三种";
    }else if((val.indexOf(username) != -1) && (username != "")) {
        return "密码不能包含用户名";
    }
    // 3位以上递增、递减、相同的数字
    for(let i in val) {
        let index = parseInt(i),
            code = val.charCodeAt(index),
            code2 = val.charCodeAt(index + 1),
            code3 = val.charCodeAt(index + 2);
        if((code >= 48) && (code <= 57)) {
            console.log(code,code2,code3)
            if((code2 == code) && (code3 == code)) {
                return "密码不能包含连续的三位以上的相同的数字";
            }
            if((code2 == code + 1) && (code3 == code + 2)) {
                return "密码不能包含连续的三位以上的递增的数字";
            }
            if((code2 == code - 1) && (code3 == code - 2)) {
                return "密码不能包含连续的三位以上的递减的数字";
            }
        }
    }
    // 常用单词检测
    let words = ['the','be','of','and','to','in','he','have','it','that','for','they','with','as','not','on','she','at','by','this','we','you','do','but','from','or','which','one','would','all','will','there','say','who','make','when','can','more','if','no','man','other','so','what','time','up','go','about','than','into','could','state','only','new','year','some','take','come','these','know','see','use','get','like','then','first','any','work','now','may','such','give','over','think','most','even','find','day','also','after','way','many','must','look','before','great','back','through','long','where','much','should','well','people','down','own','just','because','good','each','those','feel','seem','how','high','too','place','little','world','very','still','nation','hand','life','tell','write','become','here','show','house','both','between','need','mean','call','develop','under','last','right','move','thing','general','school','never','same','another','begin','while','number','part','turn','real','leave','might','want','point','form','off','child','few','small','since','against','ask','late','home','interest','large','person','end','open','public','follow','during','present',
                'without','again','hold','govern','around','possible','head','consider','word','program','problem','however','lead','system','set','order','eye','plan','run','keep','face','fact','group','play','stand','increase','early','course','change','help','line','city','put','close','case','force','meet','once','water','upon','war','build','hear','light','unite','live','every','country','bring','center','let','side','try','provide','continue','name','certain','power','pay','result','question','study','woman','member','until','far','night','always','service','away','report','something','company','week','church','toward','start','social','room','figure','nature','though','young','less','enough','almost','read','include','president','nothing','yet','better','big','boy','cost','business','value','second','why','clear','expect','family','complete','act','sense','mind','experience','art','next','near','direct','car','law','industry','important','girl','god','several','matter','usual','rather','per','often','kind','among','white','reason','action','return','foot','care','simple','within','love','human','along','appear','doctor','believe','speak','active','student','month',
                'drive','concern','best','door','hope','example','inform','body','ever','least','probable','understand','reach','effect','different','idea','whole','control','condition','field','pass','fall','note','special','talk','particular','today','measure','walk','teach','low','hour','type','carry','rate','remain','full','street','easy','although','record','sit','determine','level','local','sure','receive','thus','moment','spirit','train','college','religion','perhaps','music','grow','free','cause','serve','age','book','board','recent','sound','office','cut','step','class','true','history','position','above','strong','friend','necessary','add','court','deal','tax','support','party','whether','either','land','material','happen','education','death','agree','arm','mother','across','quite','anything','town','past','view','society','manage','answer','break','organize','half','fire','lose','money','stop','actual','already','effort','wait','department','able','political','learn','voice','air','together','shall','cover','common','subject','draw','short','wife','treat','limit','road','letter','color','behind','produce','send','term','total','university','rise','century',
                'success','minute','remember','purpose','test','fight','watch','situation','south','ago','difference','stage','her','table','rest','bear','entire','market','prepare','explain','offer','plant','charge','ground','west','picture','hard','front','lie','modern','dark','surface','rule','regard','dance','peace','observe','future','wall','farm','claim','firm','operation','further','pressure','property','morning','amount','top','outside','piece','sometimes','beauty','trade','fear','demand','wonder','list','accept','judge','paint','mile','soon','responsible','allow','secretary','heart','union','slow','island','enter','drink','story','experiment','stay','paper','space','apply','decide','share','desire','spend','sign','therefore','various','visit','supply','officer','doubt','private','immediate','wish','contain','feed','raise','describe','ready','horse','son','exist','north','suggest','station','effective','food','deep','wide','alone','character','English','happy','critic','unit','product','respect','drop','nor','fill','cold','represent','sudden','basic','kill','fine','trouble','mark','single','press','heavy','attempt','origin','standard','everything','committee',
                'moral','black','red','bad','earth','accord','else','mere','die','remark','basis','except','equal','east','event','employ','defense','smile','river','improve','game','detail','account','cent','sort','reduce','club','buy','attention','ship','decision','wear','inside','win','suppose','ride','operate','realize','sale','choose','park','square','vote','price','district','dead','foreign','window','beyond','direction','strike','instead','trial','practice','catch','opportunity','likely','recognize','permit','serious','attack','floor','ociation','spring','lot','stock','lack','hair','science','relation','profession','pattern','quick','medical','influence','occasion','machine','compare','husband','blue','international','fair','especially','indeed','imagine','surprise','average','official','temperature','difficult','sing','hit','tree','race','police','touch','relative','throw','quality','former','pull','chance','prove','argue','settle','growth','date','heat','save','performance','count','production','listen','main','pick','admin','size','cool','army','patient','combine','summer','hall','slight','command','enjoy','length','proper','express','health','chief','evening',
                'store','language','degree','lay','current','gun','dog','hotel','strange','separate','boat','fail','clean','dress','anyone','gain','pain','object','knowledge','depend','relate','below','dollar','advance','shape','arrange','population','yes','sell','mention','dry','check','poet','sleep','join','hot','bed','electric','dream','due','season','manner','fit','left','progress','neither','strength','notice','finish','opinion','bill','western','truth','wrong','travel','suit','bank','exact','honor','brother','quiet','marry','corner','handle','danger','hospital','pool','promise','blood','shoot','scene','literature','arrive','film','base','freedom','bar','maybe','hang','suffer','manufacture','frequent','rock','loss','burn','audience','essential','glass','prevent','poem','poor','inch','song','skill','post','popular','radio','animal','conscious','worth','eat','election','faith','wave','murder','model','forget','extend','edge','distance','memory','recommend','division','staff','leg','discussion','address','fly','dependent','ball','shake','frame','extreme','engineer','thick','comfort','latter','camp','oil','discover','examine','difficulty','tooth','middle','choice','refer',
                'enemy','practical','marriage','bridge','declare','lady','cross','daily','afternoon','attend','director','balance','wash','capital','speed','block','citizen','mouth','hill','green','please','motor','agency','encourage','governor','worry','affair','shoulder','bright','mass','sample','pretty','repeat','roll','push','trip','council','clothe','parent','forward','sharp','straight','gas','weight','discuss','fix','load','master','whatever','round','rapid','laugh','finger','spot','propose','shop','broad','replace','reply','extent','lock','employee','ahead','sight','spread','wind','approve','destroy','none','pound','fame','importance','reflect','advantage','match','regular','wage','refuse','existence','hardly','perform','title','tend','exercise','thin','coat','bit','mountain','youth','behavior','newspaper','secret','ability','sea','soft','justice','reasonable','circle','solid','page','weapon','fast','representative','search','pure','escape','crowd','stick','telephone','avoid','garden','favor','news','unless','dinner','someone','signal','yard','ideal','warm','miss','shelter','soldier','article','cry','captain','familiar','seat','guest','weak','excite','king','everyone',
                'wine','hole','duty','beat','perfect','bottom','compose','battle','expense','cattle','flow','kitchen','dust','bottle','admit','tear','tire','expression','exception','application','belong','rich','failure','struggle','instrument','variety','narrow','theater','collection','rain','review','preserve','leadership','clay','daughter','fellow','swing','thank','library','reserve','tour','nice','warn','ring','bitter','chair','yesterday','scientific','flower','wheel','solution','aim','gather','invite','moreover','fresh','forest','winter','box','belief','ordinary','impossible','print','gray','taste','lip','speech','reference','stain','connection','otherwise','stretch','knife','village','blow','mistake','sweet','shout','divide','guard','worse','exchange','rare','commercial','request','appoint','agent','dependence','bird','wild','motion','guess','neighbor','seed','fashion','loan','correct','plain','mail','retire','opposite','prefer','safe','evil','double','wood','empty','baby','advise','content','sport','lift','literary','curious','tie','flat','message','neck','hate','dirt','delight','trust','nobody','valley','tool','presence','cook','railroad','minister','coffee','brush',
                'beside','collect','guide','luck','profit','lord','everybody','prison','cloud','slave','chairman','soil','distinguish','introduce','urge','blind','arise','upper','curve','membership','key','entertain','soul','neighborhood','friendly','pair','stone','lean','protect','advertise','mystery','welcome','knee','jump','snake','stream','avenue','brown','disease','hat','excellent','formal','snow','sheet','somehow','unity','sky','rough','smooth','weather','steady','threaten','depth','oppose','deliver','ancient','pray','adopt','birth','appearance','universe','busy','hurry','coast','forth','smell','furnish','female','hide','wire','proposal','ought','victory','quarter','engine','customer','waste','fool','intend','intention','desk','politics','passage','lawyer','root','climb','metal','gradual','hunt','protection','satisfy','roof','branch','pleasure','witness','loose','nose','mine','band','aside','risk','tomorrow','remind','ear','fish','shore','operator','civilize','being','silent','screen','bind','earn','pack','colony','besides','slip','cousin','scale','relief','explore','stem','brain','musician','defend','bend','somebody','shadow','mix','smoke','description','fruit','guilt',
                'yield','sensitive','salt','pale','sweep','completion','throat','agriculture','admire','gentle','dozen','particle','pleasant','bay','cup','competition','moon','terrible','strip','mechanic','shock','conversation','angle','tall','plenty','star','yellow','sick','thorough','absolute','succeed','surround','proud','dear','card','lake','breath','afraid','silence','onto','shoe','somewhere','chain','slide','copy','machinery','wake','severe','pocket','bone','honest','freeze','dictionary','calm','swim','ice','male','skin','crack','rush','wet','meat','commerce','joint','gift','host','suspect','path','uncle','afford','instant','satisfactory','height','track','confidence','grass','suggestion','favorite','breakfast','apart','chest','entrance','march','sink','northern','iron','alive','ill','bag','disturb','native','bedroom','violent','beneath','pause','tough','substance','threat','charm','absence','factory','spite','meal','universal','accident','highway','sentence','liberty','wise','noise','discovery','tube','flash','twist','fence','childhood','joy','sister','sad','efficiency','disappear','defeat','extensive','rent','comparison','possess','grace','flesh','liquid','scientist',
                'ease','heaven','milk','sympathy','rank','restaurant','frequency','angry','shade','accuse','necessity','knock','loud','permanent','row','lovely','confuse','gold','frighten','solve','grave','salary','photograph','advice','abroad','wound','virtue','dare','queen','extra','attract','numerous','pink','gate','expensive','shut','chicken','forgive','holy','wooden','prompt','crime','sorry','republic','anger','visitor','pile','violence','steel','wing','stair','partner','delay','gentleman','pour','confusion','damage','kick','safety','burst','network','resistance','screw','pride','till','hire','verb','preach','clerk','everywhere','anyway','fan','connect','egg','efficient','grain','calculate','drag','opposition','worship','arrest','discipline','string','harbor','camera','mechanism','cow','grand','funny','insurance','reduction','strict','lesson','tight','sand','plate','qualify','elsewhere','mad','interference','pupil','fold','royal','valuable','whisper','anybody','hurt','excess','quantity','fun','mud','extension','recognition','kiss','crop','sail','attractive','habit','relieve','wisdom','persuade','certainty','cloth','eager','deserve','sympathetic','cure','trap','puzzle',
                'powder','raw','mankind','glad','blame','whenever','anxiety','bus','tremble','sacred','fortunate','glory','golden','neat','weekend','treasury','overcome','cat','sacrifice','complain','elect','roar','sake','temple','self','compete','nurse','stuff','stomach','peculiar','repair','storm','ton','desert','allowance','servant','hunger','conscience','bread','crash','tip','strengthen','proof','generous','sir','tonight','whip','tongue','mill','merchant','coal','ruin','introduction','courage','actor','belt','stir','package','punish','reflection','breathe','anywhere','amuse','dull','net','fellowship','fault','furniture','beam','pencil','border','disappoint','flame','joke','bless','corn','shell','tempt','supper','destruction','dive','anxious','shine','cheap','dish','distant','greet','flood','excuse','insect','ocean','ceremony','decrease','prize','harm','insure','verse','pot','sincere','cotton','leaf','rub','medicine','stroke','bite','lung','lonely','admission','stupid','scratch','composition','broadcast','drum','resist','neglect','absent','passenger','adventure','beg','pipe','beard','bold','meanwhile','devil','cheer','nut','split','melt','swear','sugar','bury','wipe',
                'faint','creature','tail','wealth','earnest','translate','suspicion','noble','inquiry','journey','hesitate','extraordinary','borrow','owe','funeral','ambition','mixture','slope','criminal','seldom','map','spin','praise','spare','plow','telegraph','barrel','straighten','scarce','lunch','slavery','creep','sweat','stiff','brave','seize','convenient','horizon','moderate','complicate','dig','curse','weigh','priest','excessive','quarrel','widow','modest','dine','politician','custom','educate','salesman','nail','tap','eastern','possession','satisfaction','behave','mercy','scatter','objection','silver','tent','saddle','wrap','nest','grind','spell','plaster','arch','swell','friendship','bath','bundle','grateful','crown','boundary','nowhere','asleep','clock','boil','altogether','lend','holiday','precious','wander','ugly','reputation','ticket','pretend','dismiss','delicate','despair','awake','tea','false','fortune','cap','thread','haste','bare','shirt','bargain','leather','rail','butter','dot','inquire','warmth','decisive','vessel','pity','steam','pin','bound','companion','toe','reward','forbid','wherever','tower','bathe','lodge','swallow','multiply','bow','kingdom',
                'garage','permission','pump','prevention','urgent','aunt','zero','idle','fever','Christmas','regret','jaw','soap','pronounce','empire','bowl','outline','organ','imitation','caution','mineral','disagree','blade','trick','treasure','immense','convenience','disapprove','destructive','fork','noon','ownership','tune','polish','poison','shame','loyalty','cottage','astonish','shave','feather','sauce','lid','debt','fade','confess','classification','descend','cape','mild','clever','envelope','invention','sheep','splendid','stamp','float','brick','rice','businessman','backward','qualification','artificial','attraction','lamp','curl','shower','elder','bunch','bell','steer','flavor','spit','rob','cream','interrupt','pen','weave','orange','rescue','crush','humble','fancy','decay','polite','tribe','bleed','coin','fond','autumn','classify','omit','loyal','needle','lessen','complaint','pad','steep','skirt','curtain','calculation','laughter','solemn','grease','interfere','explode','fasten','flag','resign','postpone','patience','boast','rope','envy','airplane','rid','shield','veil','kneel','tray','explosive','brass','taxi','wax','duck','button','invent','remedy','bush',
                'thunder','weaken','poverty','scrape','arrow','tender','cruel','soften','mouse','hay','anyhow','alike','circular','juice','shelf','bake','hatred','cautious','basket','wreck','width','confident','log','heap','suck','ladder','gap','obey','hut','axe','translation','collar','delivery','reproduce','confession','pan','prejudice','voyage','tobacco','simplicity','paste','cake','elephant','ribbon','harvest','ashamed','cave','customary','thief','damp','sew','rust','separation','waiter','pet','straw','upset','towel','refresh','essence','fur','ambitious','defendant','daylight','dip','suspicious','imaginary','ash','carriage','educator','saw','stove','rubber','rug','misery','awkward','rival','roast','deed','preference','explosion','theatrical','cultivate','collector','miserable','wrist','rabbit','accustom','tide','insult','thumb','lump','annoy','toy','heal','shallow','repetition','soup','whistle','scenery'];
    for(let i in words) {
        if(val.indexOf(words[i]) == 0) {
            return "密码不能包含单词“" + words[i] + "”";
        }
    }
    return false;
}

// 验证身份证号
let validateCard = (val) => {
    let area = { 
        11: "北京", 
        12: "天津", 
        13: "河北", 
        14: "山西", 
        15: "内蒙古", 
        21: "辽宁", 
        22: "吉林", 
        23: "黑龙江", 
        31: "上海", 
        32: "江苏", 
        33: "浙江", 
        34: "安徽", 
        35: "福建", 
        36: "江西", 
        37: "山东", 
        41: "河南", 
        42: "湖北", 
        43: "湖南", 
        44: "广东", 
        45: "广西", 
        46: "海南", 
        50: "重庆", 
        51: "四川", 
        52: "贵州", 
        53: "云南", 
        54: "西藏", 
        61: "陕西", 
        62: "甘肃", 
        63: "青海", 
        64: "宁夏", 
        65: "新疆", 
        71: "台湾", 
        81: "香港", 
        82: "澳门", 
        91: "国外"
    } 
    let retflag = false; 
    let Y, JYM; 
    let S, M; 
    let idcard_array = new Array(); 
    idcard_array = val.split(""); 
    let ereg;
    //地区检验 
    if(area[parseInt(val.substr(0, 2))] == null) 
        return "请输入正确的身份证号"; 
    //身份号码位数及格式检验 
    switch(val.length) { 
        case 15: 
            if((parseInt(val.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(val.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(val.substr(6, 2)) + 1900) % 4 == 0)) { 
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/; //测试出生日期的合法性 
            }else { 
                ereg = /^[1-9][0-9]{5}19[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/; //测试出生日期的合法性 
            } 
            if(ereg.test(val)) { 
                return false; 
            }else { 
                return "请输入正确的身份证号";
            }
            break; 
        case 18: 
            if(parseInt(val.substr(6, 4)) % 4 == 0 || (parseInt(val.substr(6, 4)) % 100 == 0 && parseInt(val.substr(6, 4)) % 4 == 0)) { 
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式 
            }else { 
                ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式 
            } 
            //测试出生日期的合法性 
            if (ereg.test(val)) { 
            //计算校验位 
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 + parseInt(idcard_array[7]) * 1 + parseInt(idcard_array[8]) * 6 + parseInt(idcard_array[9]) * 3; 
                Y = S % 11; 
                M = "F"; 
                JYM = "10X98765432"; 
                //判断校验位 
                M = JYM.substr(Y, 1); 
                //检测ID的校验位 
                if (M == idcard_array[17]) 
                    return false; 
                else 
                    return "请输入正确的身份证号"; 
            }else 
                return "请输入正确的身份证号"; 
            break; 
        default: 
            return "请输入正确的身份证号"; 
            break; 
    } 
}

// 验证邮箱
let validateEmail = (val) => {
    let reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; //正则表达式
    if(!reg.test(val)){ //正则验证不通过，格式不对
        return "请输入正确的电子邮件";
    }else {
        return false;
    }
}

// 数字验证
let validateNum = (val) => {
    let reg = /(.*?)\d+(.*?)/;
    if(!reg.test(val)) {
        return "金额请输入数字";
    }else {
        return false;
    }
}

export default {
    validatePhone,
    validatePwd,
    validateCard,
    validateEmail,
    validateNum
}