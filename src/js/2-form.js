const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {
  email: '',
  message: '',
};

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  const formDataKeys = Object.keys(formDataFromLS);

  formDataKeys.forEach(key => {
    refs.form.elements[key].value = formDataFromLS[key];
  });
};

fillFormFields(refs.form);

const onFormFieldInput = ({ target: formField }) => {
  formData[formField.name] = formField.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  event.currentTarget.reset();
};

refs.form.addEventListener('input', onFormFieldInput);
refs.form.addEventListener('submit', onFeedbackFormSubmit);
