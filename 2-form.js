import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const r={form:document.querySelector(".feedback-form")};let e={email:"",message:""};const m=t=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));if(a===null)return;e=a,Object.keys(a).forEach(o=>{r.form.elements[o].value=a[o]})};m();const s=({target:t})=>{e[t.name]=t.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))},l=t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},t.currentTarget.reset()};r.form.addEventListener("input",s);r.form.addEventListener("submit",l);
//# sourceMappingURL=2-form.js.map
