import './regform.css';
import Cookies from 'universal-cookie';
import React, { useState } from "react";

function RegForm() {
  const cookies = new Cookies();
  const [userEmail, setUserEmail] = useState(cookies.get('userEmail'));

  function submitForm(e){
    cookies.set('userEmail', userEmail, { path: '/' });
  }

  function handleEmailChange(e){
    // ToDo: validate email pattern.
    setUserEmail(e.target.value)
  }

  return (
    <div dir="rtl">
      <form>
        <fieldset>
        <label>
          نام و نام خانوادگی: &nbsp; 
          <input name="name" />
        </label>
        <label>
          ایمیل: &nbsp; 
          <input type="email" name="email" value={userEmail} onChange={handleEmailChange} />
        </label>
        <label>
          تحصیلات: &nbsp;
          <select name="education">
            <option value="diploma">دیپلم</option>
            <option value="bachelors">کارشناسی</option>
            <option value="masters">ارشد</option>
            <option value="phd">دکتری</option>
          </select>
        </label>
        <label>
          رشته تحصیلی: &nbsp;
          <input name="fieldofstudy" />
        </label>
        </fieldset>
        <fieldset>
          <label>
            سابقه تحلیل داده دارید? &nbsp;
            <input type="checkbox" name="studiedda" />
          </label>
          <label>
            چند سال? &nbsp;
            <input type="number" name="yearsstdda" />
          </label>
        </fieldset>
        <fieldset>
          <p> با کدام یک از این مفاهیم آشنایی دارید؟</p>
          <label>
            رگرسیون: &nbsp;
            <input type="checkbox" name="studied-regression" />
          </label>
          <label>
            میانگین هندسی: &nbsp;
            <input type="checkbox" name="studied-geometricmean" />
          </label>
          <label>
            همبستگی پیرسون: &nbsp;
            <input type="checkbox" name="studied-pearsoncorr" />
          </label>
        </fieldset>
        <button type="submit" onClick={submitForm}>ثبت</button>
      </form>
      <a class="button" href='/2'>بعدی</a>
    </div>
  );
}

export default RegForm;
