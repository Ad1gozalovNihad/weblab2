document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const content = document.getElementById(targetId);
    if (!content) return;
    content.classList.toggle('closed');
    
    const arrow = this.querySelector('.arrow');
    if (content.classList.contains('closed')) {
      arrow.style.transform = "rotate(-90deg)";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }
  });
});

function addEducation() {
  const ul = document.getElementById('education-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="text" placeholder="İllər (məs. 2024 - 2028)" required />
    <input type="text" placeholder="Təhsil müəssisəsi" required />
    <input type="text" placeholder="İxtisas" required />
    <button onclick="saveEducation(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveEducation(btn) {
  const li = btn.parentElement;
  const inputs = li.querySelectorAll('input');
  if ([...inputs].some(i => i.value.trim() === "")) return alert("Bütün sahələri doldurun.");
  li.innerHTML = `<span>${inputs[0].value}<br />${inputs[1].value}<br />${inputs[2].value}</span>`;
}
function removeField(btn) {
  btn.parentElement.remove();
}

function addSkill() {
  const ul = document.getElementById('skills-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="text" placeholder="Yeni bacarıq" required />
    <button onclick="saveSkill(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveSkill(btn) {
  const li = btn.parentElement;
  const input = li.querySelector('input');
  if (!input.value.trim()) return alert("Bacarıq sahəsini doldurun.");
  li.textContent = input.value;
}

function addJob() {
  const jobsContainer = document.getElementById('jobs-container');
  const div = document.createElement('div');
  div.className = "job";
  div.innerHTML = `
    <input type="text" placeholder="Şirkət adı" required /><br>
    <input type="text" placeholder="İş dövrü (məs. Yanvar 2023 - İyun 2024)" required /><br>
    <textarea placeholder="Vəzifə və görülən işlər (hər sətrin əvvəlinə '-' qoyun)" rows="3" required></textarea>
    <br>
    <button onclick="saveJob(this)">✔</button>
    <button onclick="removeJob(this)">✖</button>
  `;
  jobsContainer.appendChild(div);
}
function saveJob(btn) {
  const jobDiv = btn.parentElement;
  const [companyInput, periodInput, tasksTextarea] = jobDiv.querySelectorAll('input, textarea');
  if (!companyInput.value.trim() || !periodInput.value.trim() || !tasksTextarea.value.trim()) {
    return alert("Bütün sahələri doldurun.");
  }
  const tasks = tasksTextarea.value.split('\n').map(l => l.replace(/^\-?/, '').trim()).filter(Boolean);
  jobDiv.innerHTML = `
    <h4>${companyInput.value}</h4>
    <div class="job-period">${periodInput.value}</div>
    <ul>
      ${tasks.map(t => `<li>${t}</li>`).join('')}
    </ul>
  `;
}
function removeJob(btn) {
  btn.parentElement.remove();
}

function addContact() {
  const ul = document.getElementById('contact-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="text" placeholder="Əlaqə məlumatı" required />
    <button onclick="saveContact(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveContact(btn) {
  const li = btn.parentElement;
  const input = li.querySelector('input');
  if (!input.value.trim()) return alert("Əlaqə məlumatını doldurun.");
  li.textContent = input.value;
}


function addLanguage() {
  const ul = document.getElementById('languages-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="text" placeholder="Dil və səviyyə" required />
    <button onclick="saveLanguage(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveLanguage(btn) {
  const li = btn.parentElement;
  const input = li.querySelector('input');
  if (!input.value.trim()) return alert("Dil sahəsini doldurun.");
  li.textContent = input.value;
}


function addProfile() {
  const ul = document.getElementById('profile-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <textarea placeholder="Profil mətni" rows="3" required></textarea>
    <button onclick="saveProfile(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveProfile(btn) {
  const li = btn.parentElement;
  const textarea = li.querySelector('textarea');
  if (!textarea.value.trim()) return alert("Profil mətnini doldurun.");
  li.innerHTML = `<span>${textarea.value}</span>`;
}

function addReference() {
  const ul = document.getElementById('references-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="text" placeholder="Ad Soyad" required /><br>
    <input type="text" placeholder="Vəzifə və şirkət" required /><br>
    <input type="text" placeholder="Ünvan və telefon" required /><br>
    <input type="text" placeholder="E-mail" required /><br>
    <button onclick="saveReference(this)">✔</button>
    <button onclick="removeField(this)">✖</button>
  `;
  ul.appendChild(li);
}
function saveReference(btn) {
  const li = btn.parentElement;
  const inputs = li.querySelectorAll('input');
  if ([...inputs].some(i => i.value.trim() === "")) return alert("Bütün sahələri doldurun.");
  li.innerHTML = `<span>
    <strong>${inputs[0].value}</strong><br />
    ${inputs[1].value}<br />
    ${inputs[2].value}<br />
    ${inputs[3].value}
  </span>`;
}