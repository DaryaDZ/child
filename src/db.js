import { v4 as uuidv4 } from "uuid";
import education from "./Images/Education.png";
import bitavajohi from "./Images/images.png";

//image for organization
import amozesh from "./Images/amozesh.png";
import behzisti from "./Images/behzisti.png";
import name from "./Images/name.png";
import logo from "./Images/104.png";
import pezeshki from "./Images/pezeshki.png";
import niro from "./Images/niro.png";
import behdasht from "./Images/behdasht.png";
// conditions image
import Behavioral from "./Images/conditions/Behavioral.jpg";
import carelessness from "./Images/conditions/carelessness.jpg";
import Continuous from "./Images/conditions/Continuous.jpg";
import corruption from "./Images/conditions/corruption.jpg";
import abuse from "./Images/conditions/abuse.jpg";
import addiction from "./Images/conditions/addiction.jpg";
import criminal from "./Images/conditions/criminal.jpg";
import Diseases from "./Images/conditions/Diseases.jpg";
import Exclusion from "./Images/conditions/Exclusion.jpg";
import Failure from "./Images/conditions/Failure.jpg";
import Frequent from "./Images/conditions/Frequent.jpg";
import Harmful from "./Images/conditions/Harmful.jpg";
import Imprisonment from "./Images/conditions/Imprisonment.jpg";
import school from "./Images/conditions/school.jpg";
import zendan from "./Images/zendan.jpg";
import NGO from './Images/NGO.jpg';
import clinic from './Images/clinic.jpg'
// icons
import child from './Images/icon/child.png'
import bribe from './Images/icon/bribe.png'
import smoking from './Images/icon/drug.png';
import criminal2 from './Images/icon/mugshot.png';
import alms from './Images/icon/aalm.png';
import almsBW from './Images/icon/aalmBW.png'
import refuse from './Images/icon/refuse.png';  
import headache from './Images/icon/headache.png';
import running from './Images/icon/relay.png'
import thief from './Images/icon/thief.png'
import noeducation from './Images/icon/noeducation.png';
import bully from './Images/icon/bully.png'
import bullyBW from './Images/icon/bullyBW.png'
import baby from './Images/icon/baby.png';
import babyBW from './Images/icon/babyBW.png'
import stopbullying from './Images/icon/stopbullying.png';
import stopbullyingBW from './Images/icon/stopbullyingBWpng.png'
import detention from './Images/icon/detention.png';
import calling from './Images/icon/calling.png';
import fight from './Images/fight.mp4';
import Violence from './Images/Violence.mp4';
import prisoner from './Images/prisoner.mp4';
import study from './Images/study2.mp4';
import addiction2 from './Images/addiction2.mp4';
import kids from './Images/kids.mp4';
import teen from './Images/teens.mp4';
import behevior from './Images/behevior.mp4';
import transaction2 from './Images/transaction2.mp4';
import error from './Images/403.mp4';
import danger from './Images/danger.mp4';
import study2 from './Images/study.mp4';
import bribeBW from './Images/icon/bribeBWpng.png';
import childBW from './Images/icon/childBW.png';
import callingBW from './Images/icon/callingBW.png';
import detentionBW from './Images/icon/detentionBW.png';
import drugBw from './Images/icon/drugBw.png';
import headacheBW from './Images/icon/headacheBW.png'
import mugshotBW from './Images/icon/mugshotBW.png';
import refuseBW from './Images/icon/refuseBW.png';
import relayBw from './Images/icon/relayBw.png'
import noeducationBW from './Images/icon/noeducationBW.png';
import thiefBW from './Images/icon/thiefBW.png';
const list = [
  {
    id: uuidv4(),
    name: "بی سرپرستی",
    Processes: [],
    image: carelessness,
    icon: stopbullying,
    Tooltip:
      "بی‌سرپرستی کودک و نوجوان توسط شخصی که مسئولیت قانونی نسبت به آن‌ها دارد",
    video: "",
    icon2:stopbullyingBW
  },
  {
    id: uuidv4(),
    name: "بی توجهی و سهل انگاری والدین",
    Processes: [
      {
        id: uuidv4(),
        processName: "شناسایی",
        // Action:"ابتدا، وضعیت مخاطره‌آمیز طفل یا نوجوان که ناشی از بی‌توجهی و سهل‌انگاری والدین یا قیم قانونی است، شناسایی می‌شود. این می‌تواند از طریق گزارش‌ها، اخبار، مشاهدات و تحلیل‌های مدرسه، مددکاران اجتماعی، پلیس، یا سایر نهادها و افراد مرتبط صورت بگیرد",
        specific: [
          {
            organNam: " آموزش و پرورش",
            organAction: " مشاهدات و تحلیل های مدرسه ",
          },
          {
            organNam: "سازمان بهزیستی",
            organAction: " مددکاران",
          },
          {
            organNam: "نیروی انتظامی",
            organAction: "  گزارشات و اخبار ",
          },
          {
            organNam: "مراکز درمانی",
            organAction: "مراجعه طفل یا نوجوان در مراکز درمانی ",
          },
          {
            organNam: "سایر نهاد ها و افراد مرتبط ",
            organAction: "",
          },
        ],
        general: [
          {
            title: "وظیفه همه دستگاه ها",
          },
          {
            title: "وظیفه همه شهروندان",
          },
        ],
        actions: [],
      },
      {
        id: uuidv4(),
        processName: "تحلیل و بررسی ",
        specific: [],
        actions: [
          {
            title: "منجر به آسیب",
              organNam: "بهزیستی (مددکاران اجتماعی)",
              activity: [
                {decription: "بررسی علل و دلایل بی توجهی " },
                {decription: "بررسی تاثیر بی توجهی بر رشد و توسعه طفل و نوجوان",},
                {decription: "بررسی تاثیر سهل انگاری بر سلامت جسمی و روانی طفل و نوجوان",},
                { decription: "مصاحبه با طفل ، خانواد و افراد مرتبط" },
                { decription: "ارزیابی توامندی ها و نیاز های طفل و نوجوان" },
              ],
            
          },
          {
            title: "منجر به جرم",
            organNam: "دادستانی و مراجع قضائی",
            activity: [
              { decription: "در صورت آسیب جدی به طفل و نوجوان" },
              {
                decription:
                  "همکاری لازم مددکاران اجتماعی و سایر نهاد های مرتبط",
              },
              { decription: "ارائه اطلاعات به نهاد های قضائی " },

              { decription: "مداخله نهاد های قضائی " },
             
              
            ],
            
          },
          // {
          //   // title: "بقیه سازمان ها که دارای ساختار مددکاری می باشند در صورتی که قادر به تحلیل و بررسی باشند باید این کار را انجام داده و نتیجه را به سطوح بالاتر گزارش دهند ",
          //   organNam: "",
          //   activity: [],
          // }
        ],
      },
      { 
        id: uuidv4(),
        processName: " طراحی برنامه مداخله",
        specific: [],
        actions: [
          {
            organNam: "",
            activity: [
              { decription: "بررسی آسیب ها" },
              { decription: "جمع آوری اطلاعات" },
              { decription: "ارائه راه حل " },
              { decription: "برنامه ریزی و تعیین اقدامات مشخص و اهداف قابل دستیابی " },
              { decription: "ارتقای رشد و توسعه طفل و نوجوان" },
              { decription: "بهبود وضعیت طفل و نوجوان" },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "اجرای برنامه مداخله",
        specific: [],
        actions: [
          {
            title: "مداخله قضائی",
            organNam: "مداخله قضائی سخت || مداخله قضائی ترمیمی ",
            Description:"مجازات والدین یا سرپرستان قانونی در صورت آسیب جدی به طفل و نوجوان با در نظر گرفتن عدم نقض نظارت های آتی والدین||استفاده از تکنیک های عدالت ترمیمی برای بازسازی وضعیت اتفاق افتاده ",
            activity: []
 
          
          },
        
          {
            title: "مداخله نرم ",
             organNam: "مراکز تحت نظارت سازمان بهزیستی",
            activity: [
              { decription: "مشاوره روانی " },
              { decription: "مراقبت پژشکی" },
              { decription: "تربیت و آموزش" },
              { decription: "شناسایی خانواده و انجام مشاوره " },
              { decription: "ارائه خدمات حمایتی و توانبخشی" }
            ],
          },
        
       
        ],
      },
    
      {
        id: uuidv4(),
        processName: "ارزیابی و پیگیری",
        specific: [],
        actions: [
          {
            title:"ارزیابی موردی",
            organNam: "آموزش و پرورش || نیروی انتظامی || مراکز درمانی ",
            activity: [
              { decription: "ملاقات های مکرر" },
              { decription: "ارزیابی پیشرفت طفل و نوجوان" },
              { decription: "ارائه خدمات پشتیبانی" },
              { decription: " ارتباط با خانواده و محیط اجتماعی طفل و نوجوان " },
              
            ],
          }
          , {
            title:"ارزیابی کلی",
            organNam: "سازمان بهزیستی  ",
            activity: [
              { decription: "ارزیابی نتایج برنامه ها" },
              { decription: "بررسی پیشرفت طفل" },
              { decription: "تغییر و بهبود در برنامه در صورت نیاز " },
              { decription: "ارزیابی و نظارت بر عملکرد تیم های مربوطه " },
              { decription: "ارزیابی اثر بخشی برنامه ها" },
              {
                decription:
                  "اطمینان از بهبود مستمر و اثر بخشی تدابیر و مداخلات ",
              },


            ],
          },
          
        ],
      },
      // {
      //   id: uuidv4(),
      //   processName: "همکاری با قوانین و نهاد های قضائی",
      //   specific: [],
      //   actions: [
      //     {
      //       organNam: "",
      //       activity: [
      //         { decription: "در صورت آسیب جدی به طفل و نوجوان" },
      //         { decription: "مداخله نهاد های قضائی " },
      //         {
      //           decription:
      //             "همکاری لازم مددکاران اجتماعی و سایر نهاد های مرتبط",
      //         },
      //         { decription: "ارائه اطلاعات به نهاد های قضائی " },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: uuidv4(),
      //   processName: "پیگیری و نظارت",
      //   specific: [],
      //   actions: [
         
      //     {
      //       organNam: "",
      //       activity: [
      //         { decription: "ارزیابی اثر بخشی برنامه ها" },
            
      //       ],
      //     },
      //   ],
      //   // },
      //   // {
      //   //   id: uuidv4(),
      //   //   processName: "همکاری با سایر نهاد ها و موسسات ",
      //   //   specific: [],
      //   //   actions: [
      //   //     {
      //   //       organNam: "",
      //   //       activity: [
      //   //         { decription: "سازمان های حقوقی " },
      //   //         { decription: "مراکز بهزیستی" },
      //   //         { decription: "مراکز بهداشت و درمان " },
      //   //         { decription: "مدارس وآموزشگاه ها " },
      //   //         { decription: "ادارات و خدمات اجتماعی " },
      //   //         {
      //   //           decription:
      //   //             " سایر سازمان ها و نهاد های مرتبط با حفاظت از کودکان ",
      //   //         },
      //   //       ],
      //   //     },
      //   //   ],
      //   // },
      //   // {
      //   //   id: uuidv4(),
      //   //   processName: "مشارکت خانواده",
      //   //   specific: [],
      //   //   actions: [
      //   //     {
      //   //       organNam: "تیم های مربوطه",
      //   //       activity: [
      //   //         { decription: "اطلاع رسانی به خانواده ها" },
      //   //         { decription: "آموزش و راهنمایی آنان" },
      //   //         { decription: " ایجاد هماهنگی و تعامل موثر با خانواده" },
      //   //       ],
      //   //     },
      //   //   ],
      //   // },
      // }
    ],
    legalIssues: [
      {
        id: uuidv4(),
        description:
          "ماده ۹ـ هرگاه در اثر بی‌توجهی و سهل‌انگاری اشخاص غیر از والدین نسبت به اطفال و نوجوانان نتایج زیر واقع شود، مقصر علاوه بر پرداخت دیه به‌شرح زیر مجازات می‌شود:",
        subDescription: [
          {
            Subtitle:
              "الف) فوت طفل یا نوجوان حسب مورد به مجازات حبس درجه پنج قانون مجازات اسلامی؛",
          },
          {
            Subtitle:
              "ب) فقدان یکی از حواس یا منافع، قطع، نقص یا ازکارافتادگی عضو، زوال عقل یا بروز بیماری صعب‌العلاج یا دائمی جسمی یا روانی و یا ایراد جراحت از نوع جائفه یا بالاتر حسب مورد به مجازات حبس درجه شش قانون مجازات اسلامی؛",
          },
          {
            Subtitle:
              "پ) نقصان یکی از حواس یا منافع، شکستگی استخوان یا دیگر اعضاء و یا بروز بیماری روانی به مجازات حبس درجه هفت قانون مجازات اسلامی؛",
          },

          {
            Subtitle:
              "ت) جراحت سر و صورت و یا گردن در‌صورت عدم شمول هر یک از بندهای (ب) و (پ) به مجازات حبس درجه هشت قانون مجازات اسلامی؛",
          },

          {
            Subtitle:
              "ث) آزار جنسی ناشی از بی‌توجهی و سهل‌انگاری شدید و مستمر حسب مورد به‌یکی از مجازات‌های درجه هشت قانون مجازات اسلامی.",
          },
        ],
        proviso:
          "تبصره ـ هرگاه بی‌توجهی و سهل‌‌انگاری والدین منجر به نتایج موضوع این ماده شود؛ حسب مورد به مجازات تا حداقل مندرج در بندهای فوق محکوم می‌شوند، در خصوص بند «ت» این ماده در‌صورتی والدین مشمول حکم این تبصره می‌شوند که اقدامات لازم برای جلوگیری از صدمه را انجام نداده باشند و صدمه مستند به آن‌ها باشد.",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۱۳ـ در هر یک از موارد زیر طفل و نوجوان در معرض خطر یا بزه‌دیده، حسب دستور قضائی و زیر نظر مددکار اجتماعی مسئول در مراکز تحت‌نظر سازمان بهزیستی نگهداری می‌شود:",
        subDescription: [
          {
            Subtitle: "1ـ	بی‌سرپرستی یا بدسرپرستی طفل و نوجوان."
          },
          {
            Subtitle:
              "2ـ	عدم دسترسی به والدین، اولیا یا سرپرست قانونی طفل و نوجوان.",
          },
          {
            Subtitle: "3ـ	زندانی بودن والدین، اولیا یا سرپرست قانونی."
          },
          {
            Subtitle:
              "4ـ	ناتوانی والدین، اولیا یا سرپرست قانونی در نگهداری طفل و نوجوان با تشخیص گروه تخصصی به دلایلی مانند معلولیت، کم‌توانی جسمی، ذهنی یا ابتلای طفل و نوجوان یا والدین، اولیا یا سرپرست قانونی وی به اعتیادهای زیان‏آور، بیماری یا اختلال‌های رفتاری، روانی یا شخصیتی و همچنین بیماری‏های جسمی واگیر یا صعب‏العلاج.",
          },
          {
            Subtitle:
              "5ـ	وضعیت مخاطره‌آمیز طفل در خانواده مانند سوءاستفاده از طفل و نوجوان در ارتکاب جرائم یا ارتکاب جرم علیه طفل و نوجوان توسط اعضای خانواده، خشونت مستمر اعضای خانواده نسبت به یکدیگر، اشتهار اعضای خانواده به فساد اخلاقی.",
          },
          {
            Subtitle:
              "6ـ	بی‌توجهی و سهل‌انگاری نسبت به طفل و نوجوان یا طرد وی توسط خانواده به تشخیص گروه تخصصی و درنظرگرفتن مصلحت طفل و نوجوان.",
          },
        ],
        proviso:
          "تبصره ـ در موارد ضروری‌که اخذ دستور مقام قضائی امکان‌پذیر نباشد، مددکار اجتماعی طفل یا نوجوان را از محیط خطر دور و به مراکز نگهداری تحت نظارت سازمان بهزیستی، منتقل می‌کند و شرح موضوع و ضرورت مداخله را ظرف دوازده ساعت به اطلاع دادستان می‌رساند.",
      },
      // {id: uuidv4(),
      //   description:""},
    ],
    image: bitavajohi,
    description: "",
    icon: child,
    OrganizationsColleague: [
      {
        id: uuidv4(),
        Nameorgan: "آموزش و پرورش",
        img: amozesh,
        duties: [
          {description:"شناسایی و معرفی اطفال و نوجوان در وضعیت مخاطره آمیز بی توجهی و سهل انگاری والدین به سازمان بهزیستی"},
        ]
      },
      {
        id: uuidv4(),
        Nameorgan: "وزارت بهداشت",
        img: behdasht,
        duties: [
          {description:"ارائه خدمات درمانی و پزشکی در صورت آسیب جدی به طفل و نوجوان "},
        ]
    },
    {
      id: uuidv4(),
      Nameorgan: "نیروی انتظامی",
      img: niro,
      duties: [
        {description:"شناسایی و معرفی اطفال و نوجوان در وضعیت مخاطره آمیز بی توجهی و سهل انگاری والدین به سازمان بهزیستی"},
      ]
  }
    ],
    OrganizationsResponsible: [
      { id: uuidv4(),
        Nameorgan: "سازمان بهزیستی",
        img: behzisti,
        duties: [
          { description:"شناسایی وضعیت مخاطره آمیز طفل و نوجوان ناشی از بی توجهی والدین یا سرپرستان قانونی" },
          { description:"بررسی دلایل بی توجهی و تاثیر آن بر روند رشد و توسعه طفل و نوجوان " },
          { description:"انتقال اطفال و نوجوانان  از محیط های مخاطره آمیز به مراکز تحت نظر سازمان در صورت لزوم" },
          { description:"ارائه خدمات درمانی مانند مشاوره روانی ، مشاوره خانواده و... " },
          { description:"همکاری با نهاد های قضائی در صورت آسیب جدی به طفل " },
          { description:"پیگیری و نظارت مستمر بر وضعیت طفل و نوجوان " },
          { description:"همکاری با سایر نهاد ها " },
        
          
        ]
      },
    ],
    video: study2,
    icon2:childBW
  },
  {
    id: uuidv4(),
    name: "اختلالات رفتاری والدین",
    Processes: [],
    image: Behavioral,
    Tooltip:
      "	ابتلا به بیماری‌ها، اختلالات رفتاری والدین، روانی، شخصیتی و یا بیماری‌های جسمی واگیر صعب العلاج برای والدین، اولیاء یا سرپرستان قانونی",
    icon: bully,
    video: "",
      icon2:bullyBW
  },
  {
    id: uuidv4(),
    name: "زندانی شدن والدین",
    Processes : [
      {
        id: uuidv4(),
        processName: "شناسایی اطفال و نوجوانان",
        specific: [
          // {
          //   organNam: "سازمان زندان ها ",
          //   organAction:
          //     "شناسایی والدین زندانی دارای فرزند زیر 18 سال  ",
          // },
          // {
          //   organNam: "سازمان بهزیستی ",
          //   organAction: "بررسی و تهیه گزارش از وضعیت طفل",
          // },
          // {
          //   organNam: "وزارت آموزش و پرورش",
          //   organAction: "بررسی وضعیت طفل ",
          // },
          
        ],
        actions: [
          {
            organNam: "سازمان زندان ها",
            activity: [
              { decription: "شناسایی والدین زندانی دارای فرزند زیر 18 سال " },
              { decription: "ثبت اطلاعات مربوط به سن و جنسیت کودکان " },
              { decription: "ثبت اطلاعات مربوط به مدت زمان حبس والدین " },
              { decription: "تهیه لیستی بر اساس اطلاعات فوق " },
              
            ]
          },
          {
            organNam: "سازمان بهزیستی || دفتر حمایت از اطفال دادگستری",
            activity: [
              {decription:"در صورت کامل نبودن مشخصات و اطلاعات زندانیان "}
            ]
          },
          {
            organNam: "سازمان ثبت احوال",
            activity: [
              {decription:"ارائه اطلاعات و مشخصات کامل زندانیان دارای فرزند زیر 18 سال  بر اساس لیست ارسالی سازمان  زندان ها "}
            ]
          
          },
          {
            organNam: "سازمان بهزیستی || دفتر حمایت از اطفال دادگستری",
            activity: [
              {decription:"مراجعه به آدرس طفل و بررسی و تهیه گزارش از وضعیت طفل و نوجوان "}
            ]
          },


        ],
      },
      {
        id: uuidv4(),
        processName: "ارزیابی وضعیت",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی",
            activity: [
              // {
              //   decription: "شناسایی نیاز های طفل و نوجوان",

              // },
            ],
          },
          
   {
    organNam: "آیا طفل سرپرست دارد ؟",
    flag: true,
    activity: [
      {
        decription: "بله || خیر ",
        category: [
          {
            title: "خیر",
            organNam: "سازمان بهزیستی",
            CategoryActivity: [
            {CatDec:"انجام تدابیر حمایتی"}
            ],
          },
          {
            title: "بله",
            organNam: "سازمان بهزیستی",
            CategoryActivity: [
              { CatDec: "نظارت بر  استمرار وجود سرپرست و ثبت اطلاعات آن " },
              // { CatDec: "ثبت اطلاعات سرپرست" },
              // {CatDec:"مطالبه گری از سرپرست"},
          ]
          },
          
      ]
      
      }
  ]
          },
   
          {
            organNam: "آیا طفل مشغول به تحصیل است؟",
            flag: true,
            activity: [
              {
                decription: "بله || خیر ",
                category: [
                  
                  {
                    title: "خیر",
                    organNam: "سازمان بهزیستی  ",
                    CategoryActivity: [
                      { CatDec: "ارجاع طفل به سازمان آموزش و پرورش" }
                    ],
                  },
                  
                  {
                    title: "بله",
                    organNam: "سازمان بهزیستی ",
                    CategoryActivity: [
                     {CatDec:"بررسی وضعیت طفل "}
                    ]
                    
                  },
                  // {
                  //   title: "خیر",
                  //   organNam: "سازمان آموزش و پرورش",
                  //   CategoryActivity: [
                  //     { CatDec: "بررسی وضعیت طفل " },
                  //   {CatDec:"ثبت نام طفل به صورت رایگان"},
                  //   {CatDec:"جبران عقب ماندگی طفل "},

                  //   ],
                  // },
              ]
              
              }
          ]
          },
          {
            flag: true,
            organNam: "آیا طفل نیاز به مراقب های پزشکی دارد ؟",
            activity: [
              {
                decription: "بله || خیر ",
              
                category: [
                  {
                    title: "خیر",
                    organNam: "",
                    CategoryActivity: [
                      // { CatDec: "ارجاع طفل به سازمان آموزش و پرورش" }
                    ],
                  },
                  {
                    title: "بله",
                    organNam: "سازمان بهزیستی ",
                    CategoryActivity: [
                     {CatDec:"ارجاع طفل به مراکز درمانی "}
                    ]
                    
                  },
                     
                
                  // {
                  //   title: "بله",
                  //   organNam: "مراکز درمانی  ",
                  //   CategoryActivity: [
                  //     { CatDec: "ارائه خدمات پژشکی " },
                  //     { CatDec: "ارائه خدمات روانشناختی" },
                  //     {CatDec:"ارائه خدمات اجتماعی "}
                  //   ]
                    
                  // },
               
               
                
                  ]
              
              }
            ]
          
          
          }
         
        ],
      },
      {
        id: uuidv4(),
        processName: "تدابیر حمایتی",
        specific: [],
        actions: [
          {
            title:"در صورت نداشتن سرپرست",
            organNam: "بهزیستی",
            Description:"سازماندهی کودکان در مراکز نگهداری اطفال بهزیستی || ارجاع کودکان به NGO های تحت نظر بهزیستی || سازماندهی اطفال در خانواده های جایگزین ",
            activity: [
          // {decription:"درصورت امکان سازماندهی اطفال در خانواده های جایگزین || ارجاع طفل به NGO  ها جهت نگهداری آنان || سازماندهی کودکان در مراکز نگهداری اطفال تحت نظر بهزیستی "},
              // { decription: "ارائه مشاوره" },
              // { decription: "پشتیبانی روانی" },
              // { decription: "ارزیابی آموزشی و مالی" },
            ],
          },
          {
            title:"در صورت عدم ثبت نام در مدرسه ",
            organNam: "آموزش و پرورش",
            activity: [
              { decription: "بررسی ضعیت طفل" },
              {decription:"ثبت نام طفل به صورت رایگان"},
              
              {decription:"جبران عقب ماندگی طفل "},
              { decription: "ارائه برنامه های آموزشی خاص" },

            ],
          },
          {
            title:"در صورت نیاز به مراقب های پزشکی",
            organNam: "مراکز درمانی ",
            activity: [
              { decription:"ارائه خدمات پژشکی" },
              {decription: "ارائه خدمات روانشناختی"},
              
              {decription:"ارائه خدمات اجتماعی "},

            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "ترتیبات قانونی",
        specific: [
          // {
          //   organNam: "سازمان زندان ها",
          //   organAction:
          //     "اگر وضعیت زندانی والدین باعث نگرانی برای امنیت و رفاه طفل است ",
          // },
          // {
          //   organNam: "بهزیستی",
          //   organAction: "",
          // },
          // {
          //   organNam: "آموزش وپرورش",
          //   organAction: "",
          // },
          // {
          //   organNam: "دفتر حمایت از اطفال  قوه قضائیه ",
          //   organAction: "تحمل حبس تحت نظارت الکترونیکی برای والدین",
          // },
        ],
        actions: [
          {
            organNam:"سازمان زندان ها ",
            activity: []
          },
          {
            
            organNam:" آموزش و پرورش || سازمان بهزستی || دفتر حمایت از اطفال دادگستری",
            Description: "تامین حضور معلمان در زندان ها ، یا ترتیبات دیگر برای تامین تحصیل||تامین خدمات بهزستی خدمات مشاوره ، پشتیبانی و حمایت های روانشناختی|| استفاده از مجازات های جایگزین مانند تحمل حبس تحت نظارت الکترونیکی برای والدین",
            activity: [
          // {decription:"تامین خدمات بهزیستی شامل خدمات مشاوره ، حمایت های روانشناختی ، مراقبت های اجتماعی و ... || تامین حضور معلمان در زندان ها یا ترتیبات دیگر در برای تامین تحصیل کودکان"}
            ]

            
          },
          // {
          //   title:"آموزش و پرورش",
          //   organNam: "آموزش و پرورش",
          //   activity: [
          //     {decription:"تامین حضور معلمان در زندان ها یا ترتیبات دیگر در برای تامین تحصیل کودکان "}
          //   ]
          // }
        ],
      },
      {
        id: uuidv4(),
        processName: "نظارت مستمر",
        specific: [
        //   {
        //     organNam: "بهزیستی",
        //     organAction: "",
        //   },
        //   {
        //     organNam: "آموزش پرورش",
        //     organAction: "",
        //   },
        //   {
        //     organNam: "",
        //     organAction: "نظارت مستمر وضعیت طفل پس از اجرای اقدامات",
        //   },
        //   {
        //     organNam: "",
        //     organAction: "تغییرات و تعدیلات لازم در صورت نیاز",
        //   },
        ],
        actions: [
          {
            organNam: "سازمان بهزیستی || آموزش و پرورش || دفتر حمایت از اطفال دادگستری",
            activity: [
              { decription: "نظارت مستمر وضعیت طفل پس از اجرای اقدامات" },
            {decription:"تغییرات و تعدیلات لازم در صورت نیاز"},
            ]
          }
        ],
      },
    ],
    legalIssues: [
      {
        id: uuidv4(),
        description:
          "ماده ۶ـ دستگاه‌ها و نهادهای زیر، در راستای تحقق اهداف این قانون عهده‏دار وظایف زیر می‏باشند:",
        subDescription: [
          {
            Subtitle:
              "اطفال و نوجوانانی را که پدر یا مادر یا سرپرست قانونی آنان در زندان به‌سر می‏‌برند، به سازمان بهزیستی کشور معرفی کرده تا برابر مقررات، طفل یا نوجوان نیازمند را حمایت کند.",
          },
        ],
        proviso: "",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۳۲ـ سازمان زندان‌ها و اقدامات تأمینی و تربیتی کشور مکلف است:",
        subDescription: [
          {
            Subtitle:
              "1ـ	نسبت به شناسایی و معرفی اطفال و نوجوانانی‌که پدر، مادر یا سرپرست قانونی آنان در زندان به‌سر می‌برند به سازمان بهزیستی و وزارت آموزش‌وپرورش اقدام کند.",
          },
          {
            Subtitle:
              "2ـ	ترتیبی اتخاذ نماید که زنان زندانی دارای فرزند کمتر از (۱۸) سال سن، در برخورداری از ارفاقات قانونی نظیر تحمل حبس تحت نظارت الکترونیکی در اولویت قرارگیرند.",
          },
        ],
        proviso: "",
      },
    ],
    OrganizationsColleague: [
      {
        id: uuidv4(),
        Nameorgan: "سازمان زندان ها",
        img: zendan,
        duties: [
          { description:"شناسایی والدین زندانی دارای فرزند زیر 18 سال و معرفی آنان به سازمان بهزیستی و دفتر حمایت از اطفال دادگستری" },
         
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "آموزش و پرورش ",
        img: amozesh,
        duties: [
          { description: "تضمین تحصیل اطفال و نوجوانان دارای والدین زندانی در صورت نیاز" },
          {description:"نظارت بر وضعیت طفل و نوجوان "},  
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "دفتر حمایت از اطفال دادگستری ",
        img: logo,
        duties: [
          { description: "شناسایی و بررسی وضعیت طفل و نوجوان دارای والدین زندانی و معرفی آن به سازمان بهزیستی " },
          { description: "تصمیم گیری در مورد استفاده والدین از مجازات های جایگزین برای تحمل حبس " },
          { description: "نظارت بر وضعیت طفل و نوجوان " },  
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "سازمان بهداشت و درمان",
        img: behdasht,
        duties: [
        {description:"ارائه خدمات پزشکی ، روانشناختی و ... در صورت نیاز اطفال و نوجوانان دارای والدین زندانی "}
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "سازمان ثبت احوال ",
        img: name,
        duties: [
        {description:"ارائه مشخصات کامل از زندانیان دارای فرزند زیر 18 سال به سازمان بهزیستی و دفتر حمایت از اطفال دادگستری در صورت کامل نبودن لیست ارسالی سازمان زندان ها"}
        ],
      },
    ],
    OrganizationsResponsible: [
      {
        id: uuidv4(),
        Nameorgan: "بهزیستی",
        img: behzisti,
        duties: [
          { description: "شناسایی و بررسی وضعیت سرپرستی طفل  و نوجوان دارای والدین زندانی" },
          {description:"بررسی وضعیت تحصیلی طفل و نوجوان دارای والدین زندانی"},
          
          {description:"بررسی وضعیت سلامتی طفل و نوجوان دارای ولدین زندانی"},

          {description:"سازماندهی کودکان و نوجوانان بی سرپرست "},

          {description:"تامین خدمات مشاوره و حمایت های روانشناختی"},

          {description:"نظارت مستمر بر وضعیت طفل و نوجوان تا زمان آزاد شدن والدین "},


        ],
      },
    
    ],

    image: Imprisonment,
    Tooltip: "زندانی شدن والدین، اولیاء یا سرپرستان قانونی",
    icon: criminal2,
    video: prisoner,
    icon2:mugshotBW
  },
  {
    id: uuidv4(),
    name: "اعتیاد هر یک از والدین",
    Processes: [
      {
        id: uuidv4(),
        processName: "شناسایی طفل و نوجوانان ",
        actions: [],
        specific: [
         
        ],
        general: [
          { title: "وظیفه همه دستگاه ها" },
          {title:"وظیفه همه شهروندان"}
        ],
      },
      {
        id: uuidv4(),
        processName: "ارزیابی وضعیت طفل و نوجوانان",
        actions: [
        
          {
            title: "ارزیابی موردی",
            organNam:"آموزش و پرورش || سازمان بهزیستی ",
            Description: "بررسی و ارزیابی وضعیت طفل || ارزیابی روانشناختی ، پزشکی ، اجتماعی و ...  ",
            activity: [
              {
            }
            ]
          },
          {
            title:  "ارزیابی کلی",
            organNam: "سازمان هایی که در مرحله شناسایی ، طفل و نوجوان با اعتیاد والدین را شناسایی کرده اند ارزیابی مقدماتی را انجام داده ",
            Description: "در صورت توانایی در حل مسئله ،به دستگاه های مسئول ارجاع داده نمی شود || در صورت مواجه با موارد حاد ارجاع به سازمان بهزیستی ",
            activity:[]
          },
        ],
        specific: [],
      },
 {
        id: uuidv4(),
        processName: "نظارت و تدابیر حمایتی",
   actions: [
     {
       title: "مداخله نرم ",
       organNam: "سازمان بهزیستی",
       activity: [
         { decription: "تحت نظر قرار دادن طفل یا نوجوان " },
         { decription: "ارائه مشاوره" },
         { decription: "ارائه سبک زندگی" },
         { decription: "ارائه خدمات درمانی " },   
         { decription: "ارائه خدمات اجتماعی" },
       
     ]
     },
     {
      title:"مداخله جدی",
      organNam:"در صورت آسیب جدی به طفل و نوجوان ",
      activity: [
        { decription: "جداسازی کودک از خانواده  " },
        { decription: "سازماندهی اطفال در خانواده های جایگزین" },
        { decription: "ارجاع کودکان به انجمن  های تحت نظر بهزیستی" },
        { decription: "سازماندهی کودکان در مراکز نگهداری اطفال بهزیستی" },   
    ]
    }
        ],
        specific: [],
      },
// {
//         id: uuidv4(),
//         processName: "ارائه خدمات درمانی",
//   actions: [
//     {
//       organNam: "با تشخیص مددکار بهزیستی || سازمان های مردم نهاد مثل انواع NGO ها || مراکز ترک اعتیاد ",
//       activity: [
//         { decription: "درمان مواد مخدر" },
//         { decription: "ارائه مشاوره های روان شناختی " },
//         {decription:"کمک‌های روان‌درمانی "}
//     ]
    
//     }
//         ],
//         specific: [],
//       },
//  {
//         id: uuidv4(),
//         processName: "ارائه حمایت‌های اجتماعی",
//    actions: [
//      {
//        organNam: "مددکار بهزیستی  || سازمان های مردم نهاد مثل انواع NGO ها  ",
//        activity: [
//          {decription:"تشکیل کارگاه ها و گروه های حمایتی برای کودکان و نوجوان که نیاز به حمایت اجتماعی و حمایت از خانواده دارند "},
//        ]
//           }
//         ],
//         specific: [],
//       },
//  {
//         id: uuidv4(),
//         processName: "آموزش بهداشت روانی و روان‌شناسی به خانواده‌ها",
//    actions: [
//     {
//       organNam: "مددکار بهزیستی  || سازمان های مردم نهاد مثل انواع NGO ها  ",
//       activity: [
//         {
//           decription:"آموزش و آگاهی به خانواده ها در مورد بهداشت روانی و روان شناسی کودکان و نوجوانان "
//         },
//       ]
//          }
//         ],
//         specific: [],
//       },
{
        id: uuidv4(),
        processName: "نظارت و پیگیری",
  actions: [
    {
      organNam: "آموزش و پرورش || سازمان بهزیستی",
      activity: [
        { decription: "نظارت مداوم از کودکان و نوجوانان و خانواده هایشان پس از ارائه خدمات" },
        {decription:"اطمینان از سلامت و بهبود آنان"}
    ]
    
    }
        ],
        specific: [],
      },

    ],
    legalIssues: [],
    OrganizationsColleague: [
      { id: uuidv4(),
        Nameorgan: "سازمان‌های اجتماعی غیرانتفاعی مانند NGO ها",
        img: NGO,
        duties: [
          { description: "ارائه خدمات حمایتی اجتماعی به خانواده‌ها و کودکان دارند که با مشکلات اعتیادی روبرو هستند" },
        
          
        ]
      },
      {
        id: uuidv4(),
        Nameorgan: "وزارت بهداشت و سازمان های درمانی",
        img: behdasht,
        duties: [
          { description: "کمک به بهبود وضعیت اطفال  و نوجوانان با ارائه خدمات درمانی اعتیاد   ، روان درمانی و پزشکی " },
         { description: "ارائه خدمات تخصصی به اطفال و نوجوانان مبتلا به اعتیاد مختلف مانند مواد مخدر و روان گردان " },

      ]
      
      },
      {
        id: uuidv4(),
        Nameorgan: "آموزش و پرورش",
        img: amozesh,
        duties: [
        {description:"انجام اقدامات ارتقاء آگاهی درباره اعتیادها و رفتارهای سلامتی برای کودکان و نوجوانان "},
      ]
      
      },
      {
        id: uuidv4(),
        Nameorgan: "نیروی انتظامی ",
        img: niro,
        duties: [
        // {description:"انجام اقدامات ارتقاء آگاهی درباره اعتیادها و رفتارهای سلامتی برای کودکان و نوجوانان "},
      ]
      
      },
      // {
      //   id: uuidv4(),
      //   Nameorgan: "مراکز ترک اعتیاد",
      //   img: clinic,
      //   duties: [
      //     { description: "ارائه خدمات تخصصی به اطفال و نوجوانان مبتلا به اعتیاد مختلف مانند مواد مخدر و روان گردان " },
          
      // ]
      
      // },
     
    ],
    OrganizationsResponsible: [
      { id: uuidv4(),
        Nameorgan: "سازمان بهزیستی",
        img: behzisti,
        duties: [
          { description: "مسئول ارائه خدمات حمایتی، اجتماعی و روان‌شناختی به کودکان و نوجوانان در معرض بزه‌دیدگی به اعتیادهای زیان‌آور است" },
          { description: "نجات کودکان از شرایط بد بینی با ارائه خدمات متناسب" },
          {description:"هدایت آن ها به مسیر سلامتی "}
          
        ]
      },
     
     
      

      
    ],
    image: addiction,
    Tooltip:
      "	اعتیاد والدین، اولیاء یا سرپرستان قانونی به مواد مخدر و روان‌گردان یا قمار",
    icon: smoking,
    video: addiction2,
    icon2:drugBw
      
  },
  {
    id: uuidv4(),
    name: "اداره مراکز فساد و فحشا توسط والدین",
    Processes: [],
    image: corruption,
    Tooltip:
      "قوادی، اداره مراکز فساد و فحشا توسط والدین، اولیاء یا سرپرستان قانونی و یا اشتهار آن‌ها به فساد اخلاق و فحشا",
    icon: bribe,
    video: "",
    icon2:bribeBW
      
  },
  {
    id: uuidv4(),
    name: "خشونت والدین",
    Processes: [],
    image: Continuous,
    Tooltip:
      "	خشونت مستمر والدین، اولیاء، سرپرستان قانونی و یا سایر اعضای خانواده نسبت به یکدیگر",
    icon: refuse,
    video: "",
    icon2:refuseBW
      
  },
  {
    id: uuidv4(),
    name: "بازمانده از تحصیل",
    Processes: [
      {
        id: uuidv4(),
        processName: "شناسایی و ثبت",
        Actions:
          "وزارت آموزش و پرورش مسئول است که وضعیت حضور و غیاب دانش‌آموزان را در تمامی مدارس، از جمله دولتی و غیردولتی، نظارت کند. در این مرحله، مدارس و دستگاه‌های ذی‌ربط وظیفه دارند حضور و غیاب دانش‌آموزان را پایش کنند و در صورت شناسایی موارد مشکوک به ترک تحصیل، اقدامات لازم را به عمل آورند. ",
        specific: [
          {
            organNam: "سازمان ثبت احوال",
            organAction:
              "ارسال مشخصات و کد پستی و آدرس افراد واجد شرایط به آموزش و پرورش",
          },
          {
            organNam: "آموزش و پرورش",
            organAction:
              "تهیه لیست افراد ثبت نام نشده در یک سال تحصیلی و نظارت بر حضور و غیاب دانش آموزان",
          },
          {
            organNam: "سازمان بهزیستی",
            organAction:
              "بررسی لیست افراد ثبت نام نشده و مراجعه به آدرس آنان و مددکاری",
          },
          {
            organNam: "شهرداری ها",
            organAction: "",
          },
          {
            organNam: "دهیاری ها",
            organAction: "",
          },
          {
            organNam: "نیروی انتظامی",
            organAction: "",
          },
        ],
        general: [
          {
            title: "وظیفه همه دستگاه ها",
          },
          {
            title: "وظیفه همه شهروندان",
          },
        ],
        actions: [],
      },
      {
        id: uuidv4(),
        processName: "بررسی و تحلیل",
        Actions:
          "پس از شناسایی موارد مشکوک به ترک تحصیل، علت و علل این رفتار بررسی و تحلیل می‌شوند. وزارت آموزش و پرورش مسئول است که به همراه دستگاه‌های ذی‌ربط(بهزیستی،نیروی انتظامی) این بررسی را انجام دهند. این بررسی ممکن است شامل مصاحبه با دانش‌آموز، خانواده، و مراجعه به مدارس قبلی یا دیگر منابع اطلاعاتی مرتبط باشد.",
        specific: [
          {
            organNam: "آموزش و پرورش",
            organAction:
              "بررسی علت  از طریق مصاحبه با دانش آموز و خانواده و... ",
          },
          {
            organNam: "سازمان بهزیستی",
            organAction: "پذیرش ، ثبت ، تشکیل پرونده ، بررسی علت",
          },
        ],
        actions: [],
      },
      {
        id: uuidv4(),
        processName: "فراهم کردن محیط حمایتی",
        Actions:
          "در صورت تشخیص مشکلات و مسائل مرتبط با تحصیل و زندگی دانش‌آموز، وزارت آموزش و پرورش در همکاری با سازمان بهزیستی کشور و دفتر حمایت از اطفال و نوجوانان دادگستری، اقدامات حمایتی لازم را فراهم می‌کند. این اقدامات می‌تواند توسط سازمان بهزیستی شامل مشاوره تحصیلی، راهنمایی و روانشناسی باشد. (خدمات حمایتی مالی)",
        specific: [
          // {
          //   organNam: "آموزش و پرورش ",
          //   organAction:
          //     "شناسایی و راهنمایی و معرفی اطفال و نوجوانان  به نهاد های حمایتی و قضائی جهت انجام اقدامات لازم ",
          // },
          // {
          //   organNam: "سازمان بهزیستی",
          //   organAction:
          //     "ارائه مشاوره تحصیلی ، راهنمایی ، روانشناسی و خدمات حمایت مالی ",
          // },
          // {
          //   organNam: "دفتر حمایت از اطفال و نوجوانان دادگستری",
          //   organAction:
          //     "ارائه مشاوره و معاضدت های حقوقی و یا ایجاد شرایط مناسب در خانواده و برای اطفال و نوجوانان در معرض خطر ",
          // },
        ],
        actions: [
          {
            organNam: "آموزش و پرورش",
            activity: [
              { decription: "پذیرش طفل یا نوجوان " },
              { decription: "ثبت نام طفل یا نوجوان" },
              { decription: "جبران عقب ماندگی تحصیلی" },
              { decription: "ارتباط با خانواده" },
            ],
          },
          {
            organNam: "بهزیستی",
            activity: [
              { decription: "ارائه مشاوره به نوجوان یا طفل" },
              { decription: "ارائه مشاوره به خانواده" },
              { decription: "راهنمایی سازمان مربوطه " },
            ],
          },
          {
            organNam: "دفتر حمایت از اطفال و نوجوانان دادگستری",
            activity: [
              { decription: "ارائه مشاوره و معاضدت های حقوقی" },
              { decription: "ایجاد شرایط مناسب در خانواده" },
              { decription: "نظارت بر وضعیت طفل یا نوجوان " },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "مداخله قضایی",
        Actions:
          "در صورت وجود موارد بزه‌دیدگی یا وضعیت مخاطره‌آمیز برای طفل یا نوجوان، مدیر مدرسه موظف است به همکاری با آموزش و پرورش منطقه یا ناحیه، فوراً موضوع را به سازمان بهزیستی کشور یا دفتر حمایت از اطفال و نوجوانان دادگستری اعلام کند. در این مرحله، دستگاه‌های ذی‌ربط نیز مکلف به همکاری با وزارت آموزش و پرورش در ارائه اطلاعات و همکاری برای رفع وضعیت مخاطره‌آمیز هستند. در صورت موانع به این بخش وارد می سود. نوع مداخله دادستان برای الزام به بازگرداندن طفل با اهرم قانونی و زور",
        specific: [
          // {
          //   organNam: "آموزش و پرورش:",
          //   organAction: "اعلام موارد بزه دیدگی اطفال و نوجوانان بازمانده از تحصیل ",
          // },
          // {
          //   organNam: "بهزیستی:",
          //   organAction:
          //     "دستگاه های اجرایی مکلفند در چاچوب وظایف قانونی خود با سازمان مذکور همکاری کنند",
          // },
          // {
          //   organNam: "دفتر حمایت از اطفال و نوجوانان دادگستری:",
          //   organAction:
          //     "مداخله قضائی به منظور پیشگیری از بزه دیدگی اطفال و نوجوانان در معرض خطر یا جلوگیری از آسیب بیشتر ",
          // },
        ],
        actions: [
          {
            organNam: "آموزش و پرورش",
            activity: [
              {
                decription:
                  "اعلام موارد بزه دیدگی اطفال و نوجوانان بازمانده از تحصیل به نیروی انتظامی  ",
              },
            ],
          },
          {
            organNam: "نیروی انتظامی",
            activity: [
              {
                decription:
                  "معرفی اطفال یا نوجوانان به مراکز بهزیستی در صورت نیاز",
              },
              { decription: "اعلام به مرجع ذی صلاح قضائی" },
            ],
          },
          {
            organNam: "بهزیستی",
            activity: [
              { decription: "شناسایی نوع آسیب و منشا آن " },
              {
                decription:
                  "معرفی اطفال و نوجوانان به پزشکی قانونی در صورت نیاز ",
              },
            ],
          },
          {
            organNam: "پزشکی قانونی",
            activity: [
              {
                decription: "انجام معاینات لازم به صورت رایگان و خارج از نوبت",
              },
            ],
          },
          {
            organNam: "دفتر حمایت از اطفال و نوجوانان دادگستری",
            activity: [
              {
                decription:
                  "مداخله قضائی به منظور پیشگیری از بزه دیدگی اطفال و نوجوانان ",
              },
              { decription: "جلوگیری از آسیب بیشتر اطفال و نوجوانان " },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "اقدامات قانونی",
        Actions:
          "در صورت تهدید، ترغیب یا تشویق به ترک تحصیل و یا فرار دانش‌آموزان، هر فرد متخلف در صورت فرار یا ترک تحصیل می‌تواند مورد مجازات قانونی قرار بگیرد. براساس قانون مجازات اسلامی، مجازات‌های درجه شش برای این تخلفات قرار داده شده است. در صورت تکرار این رفتارها، مجازات فوق‌الذکر اعمال می‌شود.",
        specific: [
          {
            organNam: "",
            organAction:
              "ماده ۷ـ هر یک از والدین، اولیاء یا سرپرستان قانونی طفل و نوجوان و تمام اشخاصی‌که مسئولیت نگهداری، مراقبت و تربیت طفل را برعهده ‌دارند، چنانچه برخلاف مقررات قانون تأمین وسایل و امکانات تحصیل اطفال و جوانان ایرانی مصوب 30/4/1353 از ثبت‌نام و فراهم‌کردن موجبات تحصیل طفل و نوجوان واجد شرایط تحصیل تا پایان دوره متوسطه امتناع کنند یا به‌هر‌نحوی از تحصیل او جلوگیری کنند، به انجام تکلیف یادشده و جزای نقدی درجه هفت قانون مجازات اسلامی محکوم می‌شوند.",
          },
        ],
        actions: [],
      },
      {
        id: uuidv4(),
        processName: "نظارت و پایش ",
        Actions:
          "آموزش و پرورش اگر مانع جدید و یا کودک آزاری و ..... به وضعیت مداخله دیگر",
        specific: [
          {
            organNam: "آموزش و پرورش",
            organAction:
              "اعلام عدم حضور طفل یا نوجوان به خانواده و یا مددکاران اجتماعی ",
          },
          {
            organNam: "بهزیستی",
            organAction:
              "نظارت های مکرر جهت اطمینان از عدم ترک تحصیل طفل و یا نوجوان",
          },
        ],
        actions: [],
      },
    ],
    legalIssues: [
      {
        id: uuidv4(),
        description:
          "ماده ۳ـ موارد زیر در‌صورتی‌که طفل یا نوجوان را در معرض بزه‌دیدگی یا ورود آسیب به سلامت جسمی، روانی، اجتماعی، اخلاقی، امنیت و یا وضعیت آموزشی وی قرار ‌دهد، وضعیت مخاطره‌آمیز محسوب شده و موجب مداخله و حمایت قانونی از طفل و نوجوان می‌شود :فرار مکرر از خانه یا مدرسه و ترک تحصیل از سوی طفل یا نوجوان؛ وزارت آموزش‌وپرورش مکلف است اقدامات زیر را انجام دهد اعلام موارد عدم ثبت‌نام و موارد مشکوک به ترک تحصیل اطفال و نوجوانان تا پایان دوره متوسطه به سازمان بهزیستی کشور و یا دفتر حمایت از اطفال و نوجوانان قوه قضائیه حسب مورد جهت انجام اقدامات لازم؛",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۸ ـ هرکس با تهدید، ترغیب یا تشویق موجب فرار طفل یا نوجوان از خانه یا مدرسه و یا ترک تحصیل وی شود یا اطفال یا نوجوانان را بدین منظور فریب دهد و یا موجبات آن را تسهیل یا فراهم کند، در‌صورت فرار یا ترک تحصیل، حسب مورد به یک یا چند مورد از مجازات‌های درجه شش قانون مجازات اسلامی محکوم می‌شود و در‌صورت عدم تحقق فرار یا ترک تحصیل، برای بار اول با اخطار پلیس ویژه اطفال و نوجوانان مواجه و در‌صورت تکرار به مجازات فوق محکوم می‌شود. حسب گزارش‌های دریافتی از سازمان ثبت احوال کشور، اطفال و نوجوانان بازمانده از تحصیل را شناسایی و چنانچه برای رفع علت ترک تحصیل نیاز به اقدام حمایتی یا قضائی باشد، حسب مورد موضوع را به سازمان بهزیستی کشور یا دفتر حمایت از اطفال و نوجوانان دادگستری اعلام کند.",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۴۳ـ وزارت آموزش‌وپرورش در تمامی مدارس دولتی و غیردولتی نسبت به پایش مستمر وضعیت حضور دانش‌آموزان در طول سال تحصیلی اقدام می‌کند. در‌صورت شناسایی موارد مشکوک به ترک تحصیل ضمن بررسی موضوع و علت‌سنجی، با همکاری دستگاه‌‌های ذی‌ربط زمینه حضور مجدد و ادامه تحصیل دانش‌آموز را فراهم می‌کند. در‌صورت ضرورت انجام اقدامات حمایتی یا مداخله قضائی به جهت بزه‌دیدگی یا وضعیت مخاطره‌آمیز طفل و نوجوان، مدیر مدرسه ضمن اعلام مراتب به آموزش‌وپرورش منطقه یا ناحیه موضوع را فوراً به سازمان بهزیستی یا دفتر حمایت از اطفال و نوجوانان دادگستری اعلام کند. دستگاه‌‌های ذی‌ربط مکلف به همکاری با وزارت آموزش‌وپرورش در این زمینه هستند.",
      },
    ],
    image: school,
    OrganizationsResponsible: [
      {
        id: uuidv4(),
        Nameorgan: "ثبت احوال",
        img: name,
        duties: [
          {
            description:
              " ارسال لیستی از مشخصات  ،کدملی و آدرس افراد واجد شرایط به آموزش و پرورش  قبل از شروع سال تحصیلی",
          },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "آموزش و پرورش",
        img: amozesh,
        duties: [
          {
            description:
              "نظارت بر حضور و غیاب دانش آموزان و تهیه  شناسایی موارد مشکوک ",
          },
          {
            description:
              "بررسی علل  موارد مشکوک  از طریق مصاحبه با دانش آموز و خانواده و....",
          },
          { description: "انجام اقدامات حمایتی لازم" },
          {
            description:
              "اعلام موارد بزه دیدگی اطفال و نوجوانان بازمانده از تحصیل",
          },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "بهزیستی",
        img: behzisti,
        duties: [
          {
            description:
              "بررسی لیست افراد ثبت نام نشده در یکک سال تحصیلی و مراجعه به آدرس آنان و مددکاری",
          },
          {
            description:
              "استفاده از مددکاران اجتماعی د قالب فوریت های خدمات اجتماعی با همکاری نیروی انتظامی و آموزش و پرورش نسبت به بررسی علل موارد مشکوک  بازمانده از تحصیل",
          },
          {
            description:
              "ارائه مشاوره تحصیلی ، راهنمایی ، روانشناسی و خدمات حمایت مالی",
          },
          { description: "همکاری با سازمان های اجرایی" },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "دفتر حمایت از اطفال و نوجوانان دادگستری",
        img: logo,
        duties: [
          {
            description:
              "ارائه مشاوره و معاضدت های حقوقی و ایجاد شرایط مناسب در خانواده برای اطفال و نوجوانان در معرض خطر",
          },
          {
            description:
              "مداخله قضائی به منظور پیشگیری از بزه دیدگی اطفال و نوجوانان در معرض خطر یا جلوگیری از آسیب های بیشتر",
          },
        ],
      },
    ],
    OrganizationsColleague: [
      {
        id: uuidv4(),
        Nameorgan: "نیروی انتظامی",
        img: niro,
        duties: [
          {
            description:
              "نسبت به شناسایی اطفال و نوجوانان در وضعیت مخاطره‏آمیز در موارد مراجعه یا معرفی آنان به نیروی انتظامی یا مواجه‌شدن با آنان در حین اجرای وظیفه و یا شکایت از آنان، حسب مورد برای معرفی به سازمان بهزیستی کشور یا مراجع قضائی و انجام حمایت‏های مورد نیاز براساس این قانون یا سایر قوانین مرتبط اقدام کند",
          },
          {
            description:
              "در مأموریت‏های مددکاران اجتماعی و انجام وظایف محوله در اجرای این قانون، حسب تقاضا جهت تأمین امنیت آنان و نیز اطفال و نوجوانان موضوع مأموریت، اقدام قانونی لازم را به‌عمل آورد.",
          },

          {
            description:
              "وضعیت‌های مخاطره‌آمیز و جرائم علیه اطفال و نوجوانان بزه‌دیده را حسب مورد به مراجع ذی‌صلاح قضائی و سازمان بهزیستی کشور گزارش نماید.",
          },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "پزشکی قانونی",
        img: pezeshki,
        duties: [{ description: "سازمان پزشکی قانونی کشور مکلف است آزمایش‌ها، معاینات پزشکی و بالینی مورد نیاز طفل و نوجوانان معرفی‌شده از سوی مراکز بهزیستی را به صورت رایگان، خارج از نوبت و با رعایت الزامات دوستدار کودک انجام دهد." }],
      },
    ],
    Tooltip: "	بازماندن کودک و نوجوان از تحصیل، بازمانده از تحصیل ",
    icon: noeducation,
    video: study,
    icon2:noeducationBW
  },
  {
    id: uuidv4(),
    name: "طرد شدن طفل و نوجوان",
    Processes: [
      {
        id: uuidv4(),
        processName: "تشخصی و شناسایی وضعیت",
        specific: [],
        general: [
          { title: "توسط همه دستگاه ها " },
          { title: "توسط همه شهروندان" },
        ],
        actions: [],
      },
      {
        id: uuidv4(),
        processName: "گزارش و اعلام موضوع ",
        specific: [],
        actions: [
          {
            organNam: "اعلام افراد و سازمان ها پس از تشخیص وضعیت به مراجع مربوطه ",
            activity: [
              { decription: "آموزش و پرورش(مدرسه و دبیرستان)" },
              { decription: "سازمان بهزیستی" },
              { decription: "اداره کار" },
              { decription: "نهاد های اجتماعی" },
              { decription: "نیروی انتظامی" },
              { decription: "نهاد های حقوقی" },


            ],
          },
       
        ],
      },
      {
        id: uuidv4(),
        processName: "ارزیابی و تحلیل وضعیت",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی",
            activity: [
              { decription: "بررسی شرایط زندگی" },
              { decription: "محیط خانواده" },
              { decription: "دلایل طرد شدن" },
              { decription: "مشکلات احتمالی کودک" },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "ارتباط با خانواده وپرسش و پاسخ",
        specific: [],
        actions: [
          {
            organNam:
              "سازمان بهزیستی (مددکار اجتماعی) || آموزش و پرورش (معلمان)",
            activity: [
              { decription: "تماس با خانواده کودک" },
              { decription: "پی بردن به مشکلات و دلایل طرد شدن طفل " },

              { decription: "ارائه توضیحات و آگاهی های لازم " },
              // {description:""},
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "ارائه حمایت و کمک",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی و نهاد های مشابه ",
            activity: [
              { decription: "خدمات مرتبط با حمایت اجتماعی " },
              { decription: "روان شاناختی" },
              { description: "ارائه خدمات بهداشتی" },
              { decription: "ارائه خدمات اقتصادی" },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "تحقیق و پیگیری وضعیت",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی || آموزش و پرورش",
            activity: [{ decription: "پیگیری  در وضعیت تغییر و تحولات طفل " }],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "تصمیم‌گیری درباره آینده",
        specific: [
    
        ],
        actions: [
          {
            organNam: "سازمان بهزیستی",
            activity: [
              {
                decription: "ارائه گزارش از ارزیابی ها و نتایج پیگیری ها ",
              },
            ],
          },
          {
            organNam: "مقام قضائی",
            activity: [
              { decription: "بازگشت به خانواده" },
              { decription: "انتقال به بهزیستی" },
              { decription: "ارائه خدمات درمانی " },
              { decription: "ارائه خدمات آموزشی خاص" },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "پیگیری برای حفاظت از کودک",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی || کانون حمایت از کودکان قوه قضائیه",
            activity: [
              { decription: "انجام پیگیری‌های لازم برای حفاظت از کودک یا نوجوان " },
              { decription: "اطمینان از ایمنی و رفاه او" }
            ]
          }
        ],
      },
    ],
    legalIssues: [],
    OrganizationsColleague: [
      {
        id: uuidv4(),
        Nameorgan: "دفتر حمایت از اطفال و نوجوان دادگستری",
        img:logo,
        duties: [
          {description:"پیگیری‌های لازم برای حفاظت از کودک یا نوجوان  جهت اطمینان از ایمنی و رفاه آنان"},
          // { description: "" },
          // {description:""},
        ]
      },
      {
        id: uuidv4(),
        Nameorgan: "مقام قضائی",
        img:logo,
        duties: [
          { description: "تصمیم‌گیری‌های لازم درباره آینده کودک یا نوجوان  بر اساس گزارش های دریافتی از بهزیستی" },
          // { description: "" },
          // {description:""},
        ]
      },
      {
        id: uuidv4(),
        Nameorgan: "آموزش و پرورش",
        img: amozesh,
        duties: [
          { description: "تماس با خانواده کودک " },
          { description: "بررسی پیش‌فرض‌ها، مشکلات و دلایل طردشدن طفل یا نوجوان " },
          {description:"ارائه توضیحات و آگاهی لازم  در صورت نیاز"},
        ]
      },
    ],
    OrganizationsResponsible: [
     
      {
        id: uuidv4(),
        Nameorgan: "سازمان بهزیستی",
        img: behzisti,
        duties: [
          {description:"بررسی شرایط زندگی کودک، محیط خانواده، دلایل طردشدن و مشکلات احتمالی کودک"},
          { description: "ارائه خدماتمرتبط با حمایت اجتماعی، روان‌شناختی، بهداشتی و حتی اقتصادی " },
          { description: "ارائه گزارش بر اساس ارزیابی ها و پیگیری ها " },
          {description:"پیگیری‌های لازم برای حفاظت از کودک یا نوجوان  جهت اطمینان از ایمنی و رفاه آنان"},
        ]
      },
    ],
    image: Exclusion,
    Tooltip: "طرد کودک و نوجوان از سوی خانواده",
    icon: detention,
    video: study2,
    icon2:detentionBW
  },
  {
    id: uuidv4(),
    name: "ابتلا به بیماری های خاص کودکان",
    Processes: [],
    image: Diseases,
    Tooltip:
      "کم‌توانی جسمی یا ذهنی کودک و نوجوان، ابتلا به بیماری‌های خاص یا اختلال هویت جنسی، ابتلا به بیماری های خاص کودکان",
    icon: headache,
    video: "",
      icon2:headacheBW
  },
  {
    id: uuidv4(),
    name: "نقض قوانین جزائی توسط طفل ",
    Processes: [],
    image: criminal,
    Tooltip:
      "	نقض قوانین جزایی توسط کودک یا ارتکاب جرم توسط نوجوان و یا استفاده از آن‌ها در فعالیت‌های مجرمانه، واردشدن یا واردکردن کودک و نوجوان در فعالیت‌هایی نظیر تکدی‌گری و قاچاق و همچنین اعتیاد آن‌ها به مواد‌مخدر، روان‌گردان یا مشروبات الکلی",
    icon: thief,
    video: "",
      icon2:thiefBW
  },
  // {
  //   id: uuidv4(),
  //   name: "استفاده از طفل و نوجوان در فعالیت های مجرمانه",
  //   Processes: [],
  // },
  // {
  //   id: uuidv4(),
  //   name: "وارد شدن و یا وارد کردن طفل و نوجوان در فعالیت هایی نظیر تکدی گری و قاچاق",
  //   Processes: [],
  // },
  // {
  //   id: uuidv4(),
  //   name: "اعتیاد طفل و نوجوان به مواد مخدر، روان گردان یا مشروبات الکلی",
  //   Processes: [],
  // },
  {
    id: uuidv4(),
    name: "وضعیت زیان بار ناشی از فقر شدید",
    Processes: [],
    image: Harmful,
    Tooltip:
      "	وضعیت زیان‌بار ناشی از فقر شدید کودکان، آوارگی، پناهندگی، مهاجرت یا بی‌تابعیتی",
    icon: alms,
    video: "",
      icon2:almsBW
  },
  // {
  //   id: uuidv4(),
  //   name: "وضعیت زیان بار ناشی از آوارگی، پناهندگی مهاجرت یا بی تابعیتی",
  //   Processes: [],
  // },
  {
    id: uuidv4(),
    name: "فرار مکرر طفل",
    Processes: [],
    image: Frequent,
    Tooltip: "	فرار مکرر کودک و نوجوان از خانه یا مدرسه و ترک تحصیل",
    icon: running,
    video: "",
    icon2:relayBw
  },
  {
    id: uuidv4(),
    name: "سوء رفتار نسبت به طفل و نوجوان",
    Processes: [
      {
        id: uuidv4(),
        processName: "شناسایی و گزارش",
        specific: [],
        general: [
          {
            title: "وظیفه همه دستگاه ها",
          },
          {
            title: "وظیفه همه شهروندان",
          },
        ],
        actions: [
          {
            organNam: "بخش های درمانی",
            activity: [
              { decription: "پذیرش و درمان فوری اطفال و نوجوانان" },
              { decription: "ثبت تمام آثار و شواهد" },
              { decription: "تماس با اورژانس اجتماعی و خط ارتباطی 123" },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "گزارش به دادگستری",
        specific: [
          {
            organNam: "هر شهروند یا سازمان",
            organAction:
              "اعلام هر مورد که دلایل و قرائن بر بزه دیدگی طفل یا نوجوان دلالت نماید",
          },
          {
            organNam: "دفتر حمایت از اطفال و نوجوانان دادگستری",
            organAction:
              "دریافت گزارشات و بررسی و ارسال اطلاعات به سازمان بهزیستی ",
          },

          {
            organNam: "سازمان بهزیستی",
            organAction: "حمیت از اطفال و نوجوانان در صورت نیاز",
          },
        ],
        actions: [
          {
            organNam: "",
            activity: [{ decription: "" }],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "شناسایی و معرفی به بهزیستی",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی (مددکاران اجتماعی)",
            activity: [
              { decription: "بهبود و تجزیه و تحلیل مشکلات رفتاری یا روانی" },
              {
                decription:
                  "شناسایی وضعیت مخاطره آمیز در صورت مواجه  شدن با آن ",
              },
              { decription: "معرفی به ادارات بهزیستی یا سایر نهاد ها " },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "تشکیل ساختاری حمایتی",
        specific: [],
        actions: [
          {
            organNam:
              "ایجاد تشکیلات مناسب در حوزه های قضائی شهرستان و همکاری با سایر نهاد ها به تشخصی رئیس قوه قضائیه ",
            activity: [
              {
                decription:
                  "مداخله فوری قضائی به‌منظور پیشگیری از بزه‌دیدگی اطفال و نوجوانان ",
              },
              { decription: "ارائه مشاوره روانشناسی و حقوقی" },

              { decription: "ارائه گزارش از وضعیت طفل و نوجوان " },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "پیگیری و نظارت",
        specific: [],
        actions: [
          {
            organNam: "	مددکاران اجتماعی و دیگر نهادهای حمایتی  ",
            activity: [
              {
                decription:
                  "نظارت بر حسن اجرای آراء و تصمیمات مرتبط با طفل و نوجوان ",
              },
              { decription: "ارزیابی وضعیت طفل یا نوجوان پس از اجرای رای" },

              {
                decription:
                  "تهیه و ارائه تحقیقات آماری و اطلاعاتی مرتبط با طفل  و نوجوان ",
              },
            ],
          },
        ],
      },
      {
        id: uuidv4(),
        processName: "پیگیری قضایی",
        specific: [],
        actions: [
          {
            organNam: "سازمان بهزیستی (مددکاران اجتماعی )",
            activity: [
              {
                decription:
                  "اعلام به مرجع انتظامی یا قضائی در صورت وجود قرائن دال بر وقوع جرم علیه طفل ونوجوان ",
              },
            ],
          },
        ],
      },
    ],
    legalIssues: [
      {
        id: uuidv4(),
        description:
            "ماده ۵ـ با تشخیص رئیس قوه قضائیه، در حوزه‏های قضائی شهرستان و تحت‌نظر دادستان ساختار و تشکیلات مناسب جهت ایجاد زمینه‏های همکاری با سایر نهادها و اجرای وظایف زیر تشکیل می‏شود:",
        subDescription: [
          {
            Subtitle:
              "الف) مداخله فوری قضائی به‌منظور پیشگیری از بزه‏دیدگی اطفال و نوجوانان در معرض خطر شدید و قریب‏الوقوع و یا جلوگیری از ورود آسیب بیشتر به آنان؛",
          },
          {
            Subtitle:
              "ب) ارائه مشاوره و معاضدت‏های حقوقی و تشکیل پرونده شخصیت برای اطفال و نوجوانان در معرض خطر یا بزه‏دیده؛",
          },
          {
            Subtitle:
              "پ) ایجاد شرایط مناسب در خانواده برای اطفال و نوجوانان در معرض خطر یا بزه‏دیده و یا معرفی آنان به بهزیستی و یا سایر نهادهای مربوط؛",
          },
          {
            Subtitle:
              "ت) تهیه و ارائه گزارش از وضعیت طفل و نوجوان موضوع این قانون و درخواست اتخاذ اقدامات حمایتی ـ قضائی از مراجع قضائیc صالح؛",
          },
          {
            Subtitle:
              "ث) نظارت بر حسن اجرای آراء و تصمیمات مرتبط با طفل و نوجوان و همچنین اجرای آراء و تصمیمات ارجاعی توسط مقام قضائی و پیگیری و پایش وضعیت وی پس از اجرای رأی یا تصمیم و ارزشیابی اقدامات به‌عمل‌آمده؛",
          },
          {
            Subtitle:
              "ج) تهیه گزارش‌های موردی یا ادواری و انجام مطالعات و تحقیقات آماری و اطلاعاتی مرتبط با طفل و نوجوان.",
          },
        ],
        proviso:
          "تبصره ـ در هر حوزه قضائی شهرستان مادام که تشکیلات موضوع این ماده ایجاد نشده است، وظایف مقرر، تحت نظارت دادستان و توسط دادیار آموزش‏دیده در حوزه اطفال و نوجوانان و در حوزه قضائی بخش‌ها با نظارت رئیس حوزه قضائی انجام می‏شود.",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۱۱ـ مددکاران اجتماعی پس از پذیرش، باتوجه به نوع آسیب و منشأ آن، اقدامات لازم را جهت پیشگیری و کاهش آسیب و رفع وضعیت مخاطره‌آمیز انجام می‌دهند و در‌صورتی‌که نیاز به معاینه پزشک قانونی یا نگهداری طفل و نوجوان در مراکز تحت‌نظر سازمان بهزیستی باشد، حسب مورد طفل و نوجوان را به پزشکی قانونی معرفی و یا مجوز قضائی را جهت نگهداری وی اخذ می‌کنند.",
        subDescription: [
          {
            Subtitle: "",
          },
        ],
        proviso: "",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۱۲ـ مددکاران اجتماعی در‌صورت وجود قراین دال بر وقوع جرم علیه طفل و نوجوان، علاوه بر انجام اقدامات حمایتی، موضوع را حسب مورد به مرجع انتظامی یا قضائی اعلام می‌نمایند.",
        subDescription: [
          {
            Subtitle: "",
          },
        ],
        proviso: "",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۱۴ـ هرکس به‌هر‌نحو موجبات ارتکاب به خودکشی طفل یا نوجوان را فراهم آورد یا تسهیل کند و مشمول مقررات حد یا قصاص نشود، علاوه‌بر پرداخت دیه طبق مقررات، حسب مورد به ترتیب زیر مجازات می‌شود:",
        subDescription: [
          {
            Subtitle:
              "الف) هرگاه رفتار مرتکب، موجب خودکشی منجر به فوت طفل و نوجوان شود، به مجازات حبس درجه پنج قانون مجازات اسلامی؛",
          },
          {
            Subtitle:
              "ب) هرگاه اقدامات مرتکب موجب فوت طفل و نوجوان نشود، ولی منجر به ورود آسیب جسمی یا روانی به طفل و نوجوان شود به مجازات حبس درجه شش قانون مجازات اسلامی؛",
          },
        ],
        proviso: "",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۳۳ـ هرگاه خطر شدید و قریب‌الوقوعی طفل یا نوجوان را تهدید کند یا به‌سبب وضعیت مخاطره‌آمیز موضوع ماده (۳) این قانون وقوع جرم، محتمل باشد، مددکاران اجتماعی بهزیستی یا واحد حمایت دادگستری و ضابطان دادگستری مکلفند فوری و در حدود وظایف و اختیارات قانونی، تدابیر و اقدامات لازم را در‌صورت امکان با مشارکت و همکاری والدین، اولیاء و یا سرپرستان قانونی طفل و نوجوان جهت رفع خطر، کاهش آسیب و پیشگیری از وقوع جرم انجام داده و در موارد ضروری وی را از محیط خطر دور کرده و با تشخیص و زیر نظر مددکار اجتماعی به مراکز بهزیستی یا سایر",
        subDescription: [
          {
            Subtitle: "",
          },
        ],
        proviso: "",
      },
      {
        id: uuidv4(),
        description:
          "ماده ۴۱ـ وزارت بهداشت، درمان و آموزش پزشکی مکلف است از طریق بیمارستان‌ها، درمانگاه‌‌ها، مطب‌ها، سازمان اورژانس کشور و سایر مؤسسات درمانی اعم از دولتی، عمومی، غیردولتی، خصوصی و خیریه:",
        subDescription: [
          {
            Subtitle:
              "1ـ	نسبت به پذیرش و درمان فوری اطفال و نوجوانان آسیب‌دیده و ثبت و نگهداری کلیه آثار و شواهد موارد مشکوک به سوءرفتار اقدام و در موارد درخواست والدین، اولیا یا سرپرست قانونی جهت ترخیص یا تحویل طفل و نوجوان پیش از پایان دوره درمان، موضوع را به بهزیستی محل کتباً یا از طریق تماس با اورژانس اجتماعی و خط ارتباطی (۱۲۳) اعلام کند.",
          },
          {
            Subtitle:
              "2ـ	در هر مورد که دلایل و قراین بر بزه‌دیدگی طفل و نوجوان دلالت نماید، موضوع را فوراً به دفتر حمایت از اطفال و نوجوانان دادگستری و در‌صورت نیاز به حمایت، به ادارات بهزیستی گزارش نماید.",
          },
          {
            Subtitle:
              "3ـ	نسبت به شناسایی طفل و نوجوانی‌که به جهت بیماری یا اختلال رفتاری، روانی یا شخصیتی و یا بیماری‌های جسمی واگیردار یا صعب‌العلاج وی یا والدین، اولیا یا سرپرست قانونی در وضعیت مخاطره‌آمیز قرار گرفته است و معرفی وی به ادارات بهزیستی اقدام کند.",
          },
          {
            Subtitle:
              "4ـ	(الحاقی 17/07/1401)  نسبت به پذیرش اطفال و نوجوانان در معرض خطر و بزه‌دیده به‌ویژه افراد دارای اعتیاد یا سوء مصرف مواد مخدر و روان‌گردان معرفی‌شده از سوی سازمان بهزیستی جهت ارائه خدمات درمانی و کاهش آسیب، اقدام کند. ",
          },
        ],
        proviso: "",
      },
    ],
    OrganizationsResponsible: [
      {
        id: uuidv4(),
        Nameorgan: "وزارت بهداشت و درمان",
        img: behdasht,
        duties: [
          {
            description: "پذیرش و درمان فوری اطفال و نوجوانان",
          },
          {
            description: "ثبت تمام آثار و شواهد",
          },
          {
            description: "تماس با اورژانس اجتماعی و خط ارتباطی 123",
          },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "بهزیستی",
        img: behzisti,
        duties: [
          {
            description: "شناسایی وضعیت مخاطره آمیز در صورت مواجه  شدن با آن ",
          },
          {
            description: "معرفی به ادارات بهزیستی یا سایر نهاد ها ",
          },
          {
            description:
              "نظارت بر حسن اجرای آراء و تصمیمات مرتبط با طفل و نوجوان ",
          },
          {
            description: "ارزیابی وضعیت طفل یا نوجوان پس از اجرای رای",
          },
          {
            description:
              "تهیه و ارائه تحقیقات آماری و اطلاعاتی مرتبط با طفل  و نوجوان ",
          },
          {
            description:
              "اعلام به مرجع انتظامی یا قضائی در صورت وجود قرائن دال بر وقوع جرم علیه طفل ونوجوان ",
          },
        ],
      },
      {
        id: uuidv4(),
        Nameorgan: "دفتر حمایت از اطفال و نوجوانان دادگستری",
        img: logo,
        duties: [
          {
            description:
              "دریافت گزارشات و بررسی و ارسال اطلاعات به سازمان بهزیستی ",
          },
        ],
      },
    ],
    OrganizationsColleague: [
      {
        id: uuidv4(),
        Nameorgan: "نیروی انتظامی ",
        img: niro,
        duties: [
          {
            description: "نسبت به شناسایی اطفال و نوجوانان در وضعیت مخاطره‏آمیز در موارد مراجعه یا معرفی آنان به نیروی انتظامی یا مواجه‌شدن با آنان در حین اجرای وظیفه و یا شکایت از آنان، حسب مورد برای معرفی به سازمان بهزیستی کشور یا مراجع قضائی و انجام حمایت‏های مورد نیاز براساس این قانون یا سایر قوانین مرتبط اقدام کند.",
          },
          {
            description: "در مأموریت‏های مددکاران اجتماعی و انجام وظایف محوله در اجرای این قانون، حسب تقاضا جهت تأمین امنیت آنان و نیز اطفال و نوجوانان موضوع مأموریت، اقدام قانونی لازم را به‌عمل آورد.",
          },
          {
            description: "وضعیت‌های مخاطره‌آمیز و جرائم علیه اطفال و نوجوانان بزه‌دیده را حسب مورد به مراجع ذی‌صلاح قضائی و سازمان بهزیستی کشور گزارش نماید.",
          },
        ],
      },
    ],
    image: abuse,
    Tooltip: "	سوءرفتار نسبت به کودک و نوجوان و یا بهره‌کشی از آن‌ها.",
    icon: calling,
    video: fight,
    icon2:callingBW
  },
  {
    id: uuidv4(),
    name: "	عدم ثبت واقعه ولادت توسط والدین ",
    Processes: [],
    image: Failure,
    Tooltip:
      "عدم ثبت واقعه ولادت توسط والدین یا عدم اخذ اسناد سجلی یا هویتی برای کودک و نوجوان بدون عذر موجه",
    icon: baby,
    video: "",
      icon2:babyBW
  },
  // {
  //   id: uuidv4(),
  //   name: "بهره کشی از طفل و نوجوان",
  //   Processes: [],
  // },
];
export default list;

export const definitions = [
  {
    id: uuidv4(),
    name: "اصطلاحات به‌کار رفته در این قانون",
    Idioms: [
      {
        id: uuidv4(),
        idiomsName: "طفل",
        idiomsDescription: "هر فرد که به سن بلوغ شرعی نرسیده است.",
        img:kids
      },
      {
        id: uuidv4(),
        idiomsName: "نوجوان",
        idiomsDescription:
          "هر فرد زیر هجده‌‌سال کامل شمسی‌که به سن بلوغ شرعی رسیده‌است.",
        img: teen
      },
      {
        id: uuidv4(),
        idiomsName: "بی‌توجهی و سهل‌انگاری",
        idiomsDescription:
          "کوتاهی در انجام تکالیفی از قبیل تأمین نیازهای اساسی و ضروری طفل و نوجوان یا وظایف مربوط به حضانت، ولایت، قیمومت، وصایت، سرپرستی، تربیت، نظارت یا مراقبت از آنان توسط والدین، اولیاء یا سرپرست قانونی یا هر شخصی‌که مکلف به آن است.",
        img:error
        
      },
      {
        id: uuidv4(),
        idiomsName: "سوء‌رفتار",
        idiomsDescription:
          "هرگونه فعل یا ترک فعل عمدی‌که سلامت جسمی، روانی، اخلاقی یا اجتماعی طفل و نوجوان را در معرض خطر و آسیب قراردهد؛ از قبیل ضرب و جرح، محبوس‌کردن، سوء‌استفاده جنسی، توهین یا تهدید نسبت به طفل یا نوجوان در‌صورتی‌که جنبه تأدیبی نداشته باشد یا قراردادن او در شرایط سخت و غیرمتعارف و یا خودداری از کمک به وی.",
        img: behevior,
      },
      {
        id: uuidv4(),
        idiomsName: "بهره‌کشی اقتصادی ",
        idiomsDescription:
          "به‌کارگیری غیرقانونی طفل و نوجوان و یا وادارکردن یا گماردن او به‌کار یا خدمتی‌که از لحاظ جسمی، روانی، اخلاقی یا اجتماعی با نظر به وضعیت طفل و نوجوان برای وی مضر یا خطرناک باشد.",
        img:error
      },
      {
        id: uuidv4(),
        idiomsName: "معامله",
        idiomsDescription:
          "خریدوفروش یا هرگونه اقدام غیرقانونی‌که به‌موجب آن طفل یا نوجوان در ازای پرداخت وجه یا امتیاز و سایر موارد در اختیار دیگری قرار می‏گیرد.",
        img:transaction2
      },
      {
        id: uuidv4(),
        idiomsName: "فحشاء",
        idiomsDescription:
          "هرگونه به‌کارگیری و یا وادارکردن طفل و نوجوان در فعالیت‏های جنسی برای خود یا دیگری.",
        img:error
      },
      {
        id: uuidv4(),
        idiomsName: "مبتذل",
        idiomsDescription:
          "هرگونه محتوا یا تصویری‌که دارای صحنه یا صور قبیحه باشد.",
        img:error
      },
      {
        id: uuidv4(),
        idiomsName: "مستهجن",
        idiomsDescription:
          "هرگونه محتوا اعم از صوتی یا تصویری‌که به‌صورت واقعی یا غیرواقعی بیانگر برهنگی کامل زن یا مرد ـ آمیزش ـ عمل جنسی یا اندام جنسی انسان است.",
        img:error
      },
      {
        id: uuidv4(),
        idiomsName: "هرزه‌نگاری",
        idiomsDescription:
          "تهیه و تولید هر اثری‌که محتوای آن بیانگر جذابیت جنسی طفل یا نوجوان مانند برهنگی، آمیزش، عمل جنسی یا اندام جنسی باشد.",
        img:error
      },
      {
        id: uuidv4(),
        idiomsName: "خطر شدید و قریب‏الوقوع",
        idiomsDescription:
          "وضعیتی‌که حیات یا سلامت جسمی یا روانی طفل و نوجوان به شدت تهدید و در معرض آسیب قرار گیرد، به‌نحوی‌که مداخله فوری و چاره‏جویی را ایجاب نماید.",
        img:danger
      },
    ],
  },
  {
    id: uuidv4(),
    name: "اصطلاحات به کار رفته در آیین نامه",
    Idioms: [
      {
        id: uuidv4(),
        idiomsName: "	طفل و نوجوان در معرض خطر",
        idiomsDescription:
          "طفل و نوجوانی‌که باتوجه به ماده (۳) قانون در معرض بزه‌دیدگی یا ورود آسیب به سلامت جسمی، روانی، اجتماعی، اخلاقی، امنیت و یا وضعیت آموزشی وی قرار گرفته است.",
        img:""
      },
      {
        id: uuidv4(),
        idiomsName: "	قانون",
        idiomsDescription: "قانون حمایت از اطفال و نوجوانان ـ مصوب 1399ـ ",
      },
      {
        id: uuidv4(),
        idiomsName: "	طفل و نوجوان",
        idiomsDescription:
          "طفل و نوجوان موضوع بندهای (الف) و (ب) ماده (۱) قانون.",
      },
      {
        id: uuidv4(),
        idiomsName: "	طفل و نوجوان بزه‌دیده",
        idiomsDescription:
          "طفل و نوجوانی‌که از وقوع جرم متحمل ضرر و زیان شده است.",
      },
      {
        id: uuidv4(),
        idiomsName: "	خانواده",
        idiomsDescription:
          "گروهی متشکل از دو نفر یا بیشتر که به دلیل قرابت سببی یا نسبی و یا براساس حکم دادگاه (درخصوص سرپرستی و قیومیت) در کنار هم زندگی می‌کنند. مسئولیت حفظ، نگهداری، تربیت، مراقبت، تغذیه و رشد طفل و نوجوان برعهده پدر و مادر است. در‌صورت جدایی والدین یا بی‌سرپرستی و یا بدسرپرستی طفل و نوجوان، مسئولیت‌های فوق حسب مورد برعهده شخصی است که به‌موجب قانون یا براساس حکم دادگاه، وظایف مزبور را برعهده ‌دارد و اعم از پدر، مادر، جد پدری، وصی منصوب از جانب ولی قهری، قیّم، پدرخوانده یا مادرخوانده می‌باشد.",
      },
      {
        id: uuidv4(),
        idiomsName: "	گروه تخصصی (اورژانس اجتماعی)",
        idiomsDescription:
          "جمعی از کارشناسان شامل مدیر مرکز، مددکار اجتماعی و روان‌شناس و حسب مورد سایر متخصصان مانند رو‌ان‌پزشک، پزشک، پرستار، کارشناس حقوقی و مربی‌که به صورت ثابت یا سیار و حضوری یا غیرحضوری به ارائه خدمات تخصصی به طفل و نوجوان در معرض خطر و یا خانواده و‌ی می‌پردازند",
      },
      {
        id: uuidv4(),
        idiomsName: "	شناسایی",
        idiomsDescription:
          "تشخیص طفل و نوجوان در معرض خطر یا بزه‌دیده، توسط مددکاران اجتماعی بهزیستی و سایر مراجع ذی‌صلاح.",
      },
      {
        id: uuidv4(),
        idiomsName: "	پذیرش",
        idiomsDescription:
          "تشکیل پرونده، بررسی وضعیت مخاطره‌آمیز و طبقه‌بندی آن، برقراری ارتباط حرفه‌ای با طفل و نوجوان و خانواده وی و جلب اعتماد آنان به‌منظور ارائه خدمات حمایتی و توانمندسازی.",
      },
      {
        id: uuidv4(),
        idiomsName: "	حمایت",
        idiomsDescription:
          "مداخله و اقدامات لازم برای رفع خطر، پیشگیری از آسیب، کاهش آسیب، پیشگیری از وقوع جرم و ارائه خدمات تخصصی به طفل و نوجوان در معرض خطر یا بزه‌دیده و خانواده وی.",
      },
      {
        id: uuidv4(),
        idiomsName: "	نگهداری",
        idiomsDescription:
          "مراقبت از طفل و نوجوان در معرض خطر یا بزه‌دیده در خانواده، خانواده جایگزین یا مراکز نگهداری.",
      },
      {
        id: uuidv4(),
        idiomsName: "	توانمندسازی",
        idiomsDescription:
          "مجموعه خدماتی‌که با هدف رشد و تکامل همه‌جانبه، تحقق زندگی شایسته یا با حداقل و‌ابستگی به منابع حمایتی و ارتقای توانایی‌ها و مهارت‌های آموزشی، اجتماعی و حرفه‌آموزی به طفل و نوجوان، خانواده یا اشخاص تأثیرگذار بر و‌ی ارائه می‌شود.  ",
      },
      {
        id: uuidv4(),
        idiomsName: "	پیگیری",
        idiomsDescription:
          "سلسله اقداماتی‌که به‌منظور پیشگیری از برو‌ز مجدد مشکل برای طفل و نوجوان پس از فرایند حمایت، توانمندسازی یا نگهداری از طریق ارتباط با وی یا خانواده و سایر اشخاص مرتبط توسط مددکار اجتماعی نهادهای حامی انجام می‌شود.",
      },
      {
        id: uuidv4(),
        idiomsName: "	نهادهای حمایتی",
        idiomsDescription:
          "کلیه دستگاه‌‌ها و سازمان‌های دولتی و غیردولتی‌که به‌موجب قانون، اساسنامه یا وظایف سازمانی، مکلف به ارائه تمام یا بخشی از خدمات موضوع این آیین‌نامه هستند، مانند سازمان بهزیستی کشور، کمیته امداد امام ‌خمینی (ره)، مؤسسات خیریه و تشکل‌های مردم‌نهاد فعال در حوزه کودکان، شهرداری، سازمان بسیج مستضعفین، بنیاد مستضعفان و ستاد اجرایی فرمان حضرت امام ‌خمینی (ره).",
      },
      {
        id: uuidv4(),
        idiomsName: "	پایگاه ملی رفاه ایرانیان",
        idiomsDescription:
          "بانک اطلاعاتی کلیه ایرانیان مستقر در وزارت تعاون، کار و رفاه اجتماعی موضوع بند (م) ماده (۱۶) قانون ساختار نظام جامع رفاه و تأمین اجتماعی ـ مصوب۱۳۸۳ ـ و آیین‌نامه اجرایی مربوط و مصوبه شماره ۱۴۳۹/۲۰۰ مورخ ۱۱/6/۱۳۹۸ کارگروه تعامل‌پذیری دولت الکترونیکی کشور که تجمیع‌کننده اطلاعات اقتصادی ـ اجتماعی ایرانیان از دستگاه‌‌های مختلف می‌باشد.",
      },
      {
        id: uuidv4(),
        idiomsName: "	سازمان بهزیستی",
        idiomsDescription: "سازمان بهزیستی کشور.",
        img:behzisti
      },
      {
        id: uuidv4(),
        idiomsName: "	نیروی انتظامی",
        idiomsDescription: "نیروی انتظامی جمهوری اسلامی ایران.",
        img:niro
      },
      {
        id: uuidv4(),
        idiomsName: "	مرجع ملی حقوق کودک",
        idiomsDescription:
          "مرجع ملی کنوانسیون حقوق کودک در ایران، مستقر در وزارت دادگستری.",
      },
      {
        id: uuidv4(),
        idiomsName: "کودک کار",
        idiomsDescription:
          "طفل یا نوجوانی که برای امرار معاش خود یا خانواده، مشغول فعالیت در ازای دریافت مزد یا بدون دریافت مزد است و این فعالیت منجر به وضعیت مخاطره‌آمیز (موضوع ماده 3 قانون) برای او می‌گردد. نوجوانانی که مطابق ماده 80  قانون کار به عنوان کارگر نوجوان مشغول فعالیت می¬باشند و اطفال و نوجوانانی که فعالیت آنها با اذن ولی یا سرپرست قانونی و با توجه به وضعیت جسمی و روحی آنان صرفاً جنبه تربیتی و آموزشی دارد، از شمول این تعریف مستثنی هستند.",
      },
      {
        id: uuidv4(),
        idiomsName: "کودک خیابانی",
        idiomsDescription:
          "طفل یا نوجوان در معرض خطر که به جهت فقر یا بی‌خانمانی به‌صورت محدود یا نامحدود در خیابان به سر می‌برد، اعم از کودکی که هنوز از خانواده و سرپناه برخوردار است یا کودکی که خیابان را خانه می‌داند و رابطه او با خانواده به حداقل رسیده یا قطع شده است.",
      },
    ],
  },
];
