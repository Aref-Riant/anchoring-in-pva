
export default function Greet() {
    return (
      
        <div
          className=" container border d-flex flex-column align-items-center justify-content-center my-3 
        shadow-lg p-3 mb-5 bg-body rounded
        
        "
          style={{ height: "90vh", width: "100vw", gap: "100px" }}
        >
          <h2 dir="rtl">
            از این که در این آزمون شرکت میکنید متشکریم با زدن دکمه شروع, فرم ثبت
            نام برای شما نمایش داده خواهد شد پس از پر کردن فرم, نحوه عملکرد
            آزمون را مشاهده کرده و سپس وارد مرحله آزمون خواهید شد.  
            از شما انتظار میرود با مشاهده 4 دقیقه از داده های یک رای گیری فرضی
            مجموع تعداد آرا در انتهای 6 دقیقه را حدس بزنید.

            *ثبت اطلاعات با حفظ محرمانگی کامل انجام خواهد شد
          </h2>

          <button
            onClick={() => (window.location = "/form")}
            className="btn btn-info btn-lg"
          >
            شروع
          </button>
        </div>
    
    );
  }
