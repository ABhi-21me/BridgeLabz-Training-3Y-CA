class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.makeForm();
    }

    makeForm() {
        let html = '<form id="myForm">';
        this.fields.forEach(function(field) {
            html += `<label>${field.label}</label>`;
            html += `<input type="${field.type}" id="${field.name}" required>`;
        });
        html += '<button type="submit">Submit</button></form>';
        document.getElementById("formArea").innerHTML = html;

        document.getElementById("myForm").addEventListener("submit", (e) => {
            e.preventDefault();
            let data = this.getFormData();
            document.getElementById("result").textContent = JSON.stringify(data, null, 2);
        });
    }

    getFormData() {
        let data = {};
        this.fields.forEach(function(field) {
            data[field.name] = document.getElementById(field.name).value;
        });
        return data;
    }
}

let fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" }
];

new FormBuilder(fields);
