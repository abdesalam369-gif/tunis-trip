
import React, { useState } from 'react';

// Helper component for styled list items, defined outside the main component
const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="mb-2 relative pr-6">
    <span className="text-green-600 font-bold absolute right-0 top-1">•</span>
    {children}
  </li>
);

const App: React.FC = () => {
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handlePrint = () => {
    window.print();
  };


  return (
    <div className="bg-gray-100 p-4 sm:p-8 font-tajawal text-gray-800 leading-8">
      {/* Toolbar for actions - hidden on print */}
      <div className="w-210mm mx-auto mb-4 flex justify-end gap-3 print:hidden" dir="rtl">
        <button
          onClick={toggleEdit}
          className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          aria-pressed={isEditable}
        >
          {isEditable ? 'إنهاء التعديل' : 'تعديل النص'}
        </button>
        <button
          onClick={handlePrint}
          className="px-5 py-2 bg-green-700 text-white rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
        >
          طباعة التقرير
        </button>
      </div>

      {/* The report itself */}
      <div
        id="report-content"
        contentEditable={isEditable}
        suppressContentEditableWarning={true} // Important for React to avoid warnings
        className={`w-210mm min-h-297mm mx-auto p-15mm sm:p-20mm bg-white shadow-lg print:shadow-none print:m-0 transition-all duration-300 ${
          isEditable ? 'ring-2 ring-blue-500 ring-offset-4 outline-none' : 'ring-0'
        }`}
      >
        <header className="text-center mb-8 pb-5 border-b-[3px] border-green-800">
          <h1 className="text-3xl font-bold text-green-900 mb-2.5">تقرير الرحلة الدراسية إلى تونس</h1>
          <div className="text-lg text-green-800 mb-4 font-medium">9 – 13 نوفمبر 2025</div>
          <div className="text-base text-gray-600 italic p-3 bg-gray-50 border-r-4 border-green-600 my-5">
            "الإدارة الذكية للنفايات والتمويل المستدام"
          </div>
        </header>

        <main>
          <section className="my-8">
            <h2 className="text-xl font-bold text-green-900 py-2.5 mb-4 border-b-2 border-green-600">مقدمة</h2>
            <p className="mb-4">شارك وفد من عدد من البلديات الأردنية في رحلة دراسية إلى الجمهورية التونسية بتنظيم من برنامج GIZ، بهدف الاطلاع المباشر على التجارب العملية في مجال إدارة النفايات، والمحطات التحويلية، والفرز، وإشراك القطاع الخاص، والتمويل البيئي.</p>
            <p>هدفت الزيارة إلى تعزيز قدرات البلديات الأردنية وتحويل الدروس المستفادة إلى خطوات قابلة للتطبيق.</p>
          </section>

          <div className="h-px bg-gray-200 my-6"></div>

          <section className="my-8">
            <h2 className="text-lg font-bold text-green-800 mt-6 mb-4 pr-4 border-r-[3px] border-green-400">اليوم الأول – 9 نوفمبر 2025<br />الوصول والجلسة التعريفية</h2>
            
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">الوصول</h3>
              <p>وصول الوفد إلى تونس العاصمة وتسجيل الدخول في الفندق وترتيب الأمور اللوجستية.</p>
            </div>
            
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">الجلسة التعريفية</h3>
              <p>عُقد لقاء تعريفي قاده كل من:</p>
              <ul className="list-none pr-5">
                <ListItem>م. وائل الصافي</ListItem>
                <ListItem>م. سفيان</ListItem>
                <ListItem>م. رضا</ListItem>
              </ul>
              <p>وتناول:</p>
              <ul className="list-none pr-5">
                <ListItem>شرح أهداف الرحلة</ListItem>
                <ListItem>تقديم برنامج الزيارات</ListItem>
                <ListItem>توضيح الترتيبات اللوجستية والتنظيمية</ListItem>
              </ul>
            </div>
            
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">العشاء الرسمي</h3>
              <p>حضر الوفد دعوة عشاء في أحد مطاعم المدينة العتيقة، وكان فرصة للتعارف وتبادل الانطباعات الأولية.</p>
            </div>
          </section>

          <div className="h-px bg-gray-200 my-6"></div>

          <section className="my-8">
            <h2 className="text-lg font-bold text-green-800 mt-6 mb-4 pr-4 border-r-[3px] border-green-400">اليوم الثاني – 10 نوفمبر 2025<br />زيارة ANGED + "ريحة البلاد"</h2>
            
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">زيارة وكالة ANGED</h3>
              <p>التقى الوفد بالمدير العام والمهندسين الفنيين.</p>
              
              <div className="bg-green-50 border border-green-200 rounded-md p-4 my-4">
                <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">أ. إشراك القطاع الخاص</h4>
                <ul className="list-none pr-5"><ListItem>عقود تشغيل منضبطة</ListItem><ListItem>اعتماد مؤشرات أداء واضحة</ListItem><ListItem>تحسين جودة خدمة الجمع والنقل</ListItem></ul>
                
                <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">ب. معالجة "النقاط السوداء"</h4>
                <ul className="list-none pr-5"><ListItem>تقليل مواقع التجميع العشوائي</ListItem><ListItem>إنشاء محطات تحويل رسمية بدلًا منها</ListItem><ListItem>ضبط مسار النفايات ومراقبتها</ListItem></ul>

                <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">ج. التمويل عبر الرسم البيئي</h4>
                <ul className="list-none pr-5"><ListItem>فرض رسم 7% على صادرات البلاستيك</ListItem><ListItem>الرسم تتحمله الشركات وليس المواطن</ListItem><ListItem>أصبح مصدر تمويل ثابت لنفقات الوكالة</ListItem></ul>
              </div>
            </div>
            
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">زيارة "ريحة البلاد"</h3>
              <p>مشروع بيئي–تراثي يعرض منتجات تراثية تونسية ويعتمد على استخدام مواد معاد تدويرها.</p>
              <div className="bg-green-50 border border-green-200 rounded-md p-4 my-4">
                <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">القيمة المضافة:</h4>
                <ul className="list-none pr-5"><ListItem>مثال على ربط البيئة بالثقافة والسياحة</ListItem><ListItem>يعزز مفهوم الاقتصاد الدائري المحلي</ListItem></ul>
              </div>
            </div>
          </section>

          <div className="h-px bg-gray-200 my-6"></div>

          <section className="my-8">
            <h2 className="text-lg font-bold text-green-800 mt-6 mb-4 pr-4 border-r-[3px] border-green-400">اليوم الثالث – 11 نوفمبر 2025<br />مصنع السماد + المحطة التحويلية + الورشة المشتركة</h2>
            <div className="my-5">
                <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">زيارة مصنع السماد العضوي</h3>
                <p>اطّلع الوفد على طريقة تحويل المخلفات النباتية إلى سماد عبر مراحل التقطيع والتخمير.</p>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 my-4">
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">الدروس المستفادة:</h4>
                    <ul className="list-none pr-5"><ListItem>تحويل المخلفات الخضراء من عبء إلى مورد</ListItem><ListItem>تقليل كميات الطمر</ListItem><ListItem>إمكانية تطبيق تجربة مشابهة بالتعاون بين البلديات</ListItem></ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">زيارة المحطة التحويلية (مركز تجميع)</h3>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 my-4">
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">طبيعة المحطة:</h4>
                    <p>مركز تجميع فقط بدون فرز أو معالجة، يعتمد على استقبال الضواغط وتفريغها داخل حاويات كبيرة تمهيدًا لنقلها للمكب.</p>
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">مكونات المحطة كما شوهدت:</h4>
                    <ul className="list-none pr-5"><ListItem>مساحة تقريبية: 700 م²</ListItem><ListItem>ميزان (قبّان) عند المدخل</ListItem><ListItem>منصة مرتفعة لتفريغ الضاغطات</ListItem><ListItem>3 حاويات سعة كل منها 12 طن</ListItem><ListItem>آلية Hook-Lift لنقل الحاويات الممتلئة</ListItem></ul>
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">آلية العمل:</h4>
                    <ul className="list-none pr-5"><ListItem>وزن الضاغطة عند الدخول</ListItem><ListItem>تفريغ الحمولة داخل الحاويات</ListItem><ListItem>وزن الضاغطة عند الخروج</ListItem><ListItem>استبدال الحاوية الممتلئة بحاوية فارغة</ListItem><ListItem>نقل الحاوية المغلّفة إلى المكب الرئيسي</ListItem></ul>
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">الفوائد التشغيلية:</h4>
                    <ul className="list-none pr-5"><ListItem>تقليل رحلات الضاغطات للمكب</ListItem><ListItem>خفض كلف الوقود والصيانة</ListItem><ListItem>رفع كفاءة الجمع داخل المناطق</ListItem><ListItem>تكلفة إنشاء منخفضة وسهلة التشغيل</ListItem><ListItem>نموذج قابل للتطبيق فورًا في الأردن</ListItem></ul>
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">إمكانية التطبيق محليًا:</h4>
                    <ul className="list-none pr-5"><ListItem>إنشاء محطة تحويل مشتركة بين بلدية مؤتة والمزار وبلدية الكرك الكبرى</ListItem><ListItem>ربط التجربة التونسية مع فكرة المحطة المتنقلة الجاري دراستها</ListItem></ul>
                </div>
            </div>
            <div className="my-5">
                <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">الورشة المشتركة مع الخبراء التونسيين</h3>
                <p>نُظمت ورشة بعنوان:<br />"كيف نحول الدروس التونسية إلى إجراءات قابلة للتطبيق في الأردن؟"</p>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 my-4">
                    <h4 className="text-base font-semibold text-green-700 mt-4 mb-2.5">مساهمة بلدية مؤتة والمزار:</h4>
                    <ul className="list-none pr-5"><ListItem>التعاون مع بلدية الكرك الكبرى لتوريد المخلفات الخضراء لمصنع السماد لديهم.</ListItem><ListItem>إشراك القطاع الخاص تدريجيًا في الجمع والنقل بصيغة تجريبية.</ListItem><ListItem>إنشاء محطة تحويلية وفق النموذج التونسي لتقليل الكلف وتحسين التنظيم.</ListItem></ul>
                </div>
            </div>
          </section>

          <div className="h-px bg-gray-200 my-6"></div>

          <section className="my-8">
            <h2 className="text-lg font-bold text-green-800 mt-6 mb-4 pr-4 border-r-[3px] border-green-400">اليوم الرابع – 12 نوفمبر 2025<br />مصنع البطاريات + محطة الفرز + لقاء وزير سابق</h2>
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">مصنع إعادة تدوير بطاريات السيارات</h3>
              <p>اطّلع الوفد على:</p>
              <ul className="list-none pr-5"><ListItem>تفكيك البطاريات</ListItem><ListItem>استخراج الرصاص</ListItem><ListItem>إعادة استخدامه في بطاريات جديدة</ListItem></ul>
              <p><strong>القيمة:</strong><br/>إدارة المخلفات الخطرة بطريقة اقتصادية وآمنة.</p>
            </div>
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">محطة فرز صناعية (يدوية)</h3>
              <ul className="list-none pr-5"><ListItem>تعتمد على الفرز اليدوي فقط</ListItem><ListItem>مخصصة للمخلفات الصناعية</ListItem><ListItem>نموذج بسيط ومنخفض التكلفة</ListItem><ListItem>مناسب كنقطة بداية قبل فرز شامل</ListItem></ul>
            </div>
            <div className="my-5">
              <h3 className="text-base font-semibold text-green-700 mt-4 mb-2.5">لقاء وزير بيئة تونسي سابق</h3>
              <p>تمت مناقشة:</p>
              <ul className="list-none pr-5"><ListItem>التشريعات</ListItem><ListItem>مشاركة القطاع الخاص</ListItem><ListItem>تحديات البلديات</ListItem><ListItem>التمويل البيئي</ListItem><ListItem>دور المحطات التحويلية في تنظيم القطاع</ListItem></ul>
            </div>
          </section>

          <div className="h-px bg-gray-200 my-6"></div>

          <section className="my-8">
            <h2 className="text-lg font-bold text-green-800 mt-6 mb-4 pr-4 border-r-[3px] border-green-400">اليوم الخامس – 13 نوفمبر 2025<br />العودة</h2>
            <p>مغادرة الفندق والتوجه إلى المطار والعودة إلى الأردن.</p>
          </section>
          
          <div className="h-px bg-gray-200 my-6"></div>

          <div className="bg-green-100 p-5 rounded-lg my-6">
            <h3 className="text-lg font-bold text-green-900 mb-4">الخلاصة</h3>
            <p>أكدت الرحلة أن التجربة التونسية عملية وقابلة للتطبيق في الأردن، خصوصًا في:</p>
            <ul className="list-none pr-5"><ListItem>إنشاء المحطات التحويلية منخفضة التكلفة</ListItem><ListItem>تعزيز التعاون بين البلديات</ListItem><ListItem>إشراك القطاع الخاص تدريجيًا</ListItem><ListItem>تطوير آليات الفرز</ListItem><ListItem>اعتماد مصادر تمويل بيئية مبتكرة</ListItem></ul>
          </div>
      
          <div className="bg-green-50 p-5 rounded-lg my-6 border-r-4 border-green-600">
            <h3 className="text-lg font-bold text-green-900 mb-4">التوصيات المقترحة لبلدية مؤتة والمزار</h3>
            <ul className="list-none pr-5"><ListItem>إنشاء محطة تحويلية محلية أو مشتركة وفق النموذج التونسي الذي يعتمد على التجميع فقط.</ListItem><ListItem>البدء بالتعاون مع بلدية الكرك الكبرى في المخلفات الخضراء والعضوية.</ListItem><ListItem>تجربة إشراك القطاع الخاص تدريجيًا على مستوى منطقة واحدة كمرحلة أولى.</ListItem><ListItem>إعداد تصور أولي لمحطة فرز بسيطة بأسلوب يدوي قليل التكلفة.</ListItem><ListItem>دراسة فرص فرض رسوم بيئية على بعض المنتجات لتمويل القطاع، أسوة بالنموذج التونسي.</ListItem></ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
