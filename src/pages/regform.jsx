import './regform.css';
import Cookies from 'universal-cookie';
import React, { useState } from "react";
import axios from "axios"
function RegForm() {
  const cookies = new Cookies();
  const[flag,setFlag]=useState(false);
  const [userEmail, setUserEmail] = useState(cookies.get('userEmail'));
  const [form, setForm] = useState({
    name: "",
    email: "",
    major: "",
    analizor: "",
    knowledge: "",
    experince: "",
    one: "",
    two: "",
    three: "",
  })

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
  const onSubmit = async () => {
  // window.location.href = "/demo"
    if (!isEmail(form.email)) {
      alert("لطفا ایمیل خود را به درستی وارد کنید.");
    }
    else {
      cookies.set('userEmail', form.email);
      setFlag(true);
      await axios({
        method: "post",
        url: `http://217.182.11.251/form/${form.email}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      })
        .then(function (response) {
          console.log(response.data);
          window.location.href = "/demo";
          setFlag(false);
        })
        .catch(function (error) {
          console.log(error);
          setFlag(false);
        });
     ;
    }
  
  }
  return (
    <div
      dir="rtl"
      className="regform container border d-flex flex-column align-items-center justify-content-center my-3 
        shadow-lg p-3 mb-5 bg-body rounded"
    >
      <form class="my-3 mx-1 formClass">
        <div class="my-3 ">
          <label for="exampleInputEmail1" class="form-label">
            نام و نام خانوادگی: &nbsp;
          </label>
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            ادرس ایمیل
          </label>
          <input
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
          <input
            onChange={(e) => setForm({ ...form, major: e.target.value })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
          />
        </div>

        <label className="mt-3  d-flex justify-content-center align-items-baseline  ">
          تحصیلات: &nbsp;
          <select
            onChange={(e) => setForm({ ...form, knowledge: e.target.value })}
            name="education"
            className="mx-2 form-select"
          >
            <option value="diploma">دیپلم</option>
            <option value="bachelors">کارشناسی</option>
            <option value="masters">ارشد</option>
            <option value="phd">دکتری</option>
          </select>
        </label>
        <div class=" my-3 form-check " style={{ width: "50%" }}>
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            onChange={(e) => setForm({ ...form, analizor: e.target.value })}
          />
          <label class="form-check-label  " for="exampleCheck1">
            سابقه تحلیل داده دارید؟
          </label>
          <div className="mb-3">
            <label for="exampleInputEmail1" class=" mx-2 form-label">
              چند سال ؟ &nbsp;
            </label>
            <input
              onChange={(e) => setForm({ ...form, experince: e.target.value })}
              type="number"
              class="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">با کدام یک از این مفاهیم آشنایی دارید؟</div>
          <div
            className="d-flex justify-content-between"
            style={{ minWidth: 400 }}
          >
            <div className="form-check form-check-inline">
              <input
                onChange={(e) => setForm({ ...form, one: e.target.value })}
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
                onChange={(e) => setForm({ ...form, two: e.target.value })}
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
                onChange={(e) => setForm({ ...form, three: e.target.value })}
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
          onClick={onSubmit}
          className="my-3 btn btn-info btn-lg"
        >
          {flag ? (
            <>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </>
          ) : (
            "ثبت و ادامه"
          )}
        </button>
      </div>
    </div>
  );
}

export default RegForm;
