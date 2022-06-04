
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
            نام برای شما نمایش داده خواهد شد پس از فرم کردن فرم, نحوه عملکرد
            آزمون را مشاهده خواهد کرد سپس آزمون در حدود 10 دقیقه انجام خواهد شد
            در مرحله بعد میتوانید هدیه پنجاه هزار ریالی خود را به انتخاب, دریافت
            نمایید
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