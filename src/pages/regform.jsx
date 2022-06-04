import './regform.css';
import Cookies from 'universal-cookie';
import React, { useState } from "react";

function RegForm() {
  const cookies = new Cookies();
  const [userEmail, setUserEmail] = useState(cookies.get('userEmail'));

  function submitForm(e){
    cookies.set('userEmail', userEmail, { path: '/' });
  }
function isEmail(val) {
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEmail.test(val)) {
    return true
  }
  else {
    return false
  }
}
  function handleEmailChange(e){
    // ToDo: validate email pattern.
     if ( isEmail(e.target.value)) setUserEmail(e.target.value)
  }

  return (
    <div
      dir="rtl"
      className="regform container border d-flex flex-column align-items-center justify-content-center my-3 
        shadow-lg p-3 mb-5 bg-body rounded"
    >
      <form class="my-3 mx-1">
        <div class="my-3 ">
          <label for="exampleInputEmail1" class="form-label">
            نام و نام خانوادگی: &nbsp;
          </label>
          <input type="text" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            ادرس ایمیل
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            ایمیل شما محرمانه خواهد ماند
          </div>
        </div>
        <div class="my-3 ">
          <label for="exampleInputEmail1" class="form-label">
            رشته ی تحصیلی: &nbsp;
          </label>
          <input type="text" class="form-control" id="exampleInputEmail1" />
        </div>
        <div class=" my-3 form-check " style={{ width: "50%" }}>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label  " for="exampleCheck1">
            سابقه تحلیل دارین
          </label>
          <label className="mt-3  d-flex justify-content-center align-items-baseline  ">
            تحصیلات: &nbsp;
            <select name="education" className="mx-2 form-select">
              <option value="diploma">دیپلم</option>
              <option value="bachelors">کارشناسی</option>
              <option value="masters">ارشد</option>
              <option value="phd">دکتری</option>
            </select>
          </label>
          <div className="mb-3">
            <label for="exampleInputEmail1" class=" mx-2 form-label">
              چند سال ؟ &nbsp;
            </label>
            <input type="text" class="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">با کدام یک از این مفاهیم آشنایی دارید؟</div>
          <div
            className="d-flex justify-content-between"
            style={{ minWidth: 400 }}
          >
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" for="inlineCheckbox1">
                رگرسیون
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label" for="inlineCheckbox2">
                میانگین هندسی
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="option3"
              />
              <label className="form-check-label" for="inlineCheckbox3">
                همبستگی پیرسون
              </label>
            </div>
          </div>
        </div>
      </form>
      <div style={{ width: "100%" }} className="d-flex justify-content-center">
        <button
          type="submit"
          onClick={() => (window.location.href = "/demo")}
          className="my-3 btn btn-info btn-lg"
        >
          ثبت و ادامه
        </button>
      </div>
    </div>
  );
}

export default RegForm;
