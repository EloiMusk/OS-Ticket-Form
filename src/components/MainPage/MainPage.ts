import {Component, Vue} from 'vue-property-decorator';
import {createLogger} from "vuex";
import axios, {AxiosRequestConfig} from "axios";

interface form {
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    issue: issues,
    issueText: string
}

interface option {
    value: string | null,
    text: string
}

enum issues {
    Payment = 'Payment',
    Accounting = 'Accounting',
    Login = 'Login',
    Legal_Matters = 'Legal matters',
    other = 'other'
}

@Component({
    components: {},
})

export default class MainPage extends Vue {
    private form: form = {firstName: '', lastName: '', email: '', issue: issues.other, mobile: '', issueText: ''}
    private ipadess = ''
    private baseURL = 'http://192.168.1.164/api/http.php/tickets.json'
    private ApiKey = '3D86F37769AB2574BE3ED40408E58017'
    private issues: Array<option> = [
        {value: 'Payment', text: 'Payment'},
        {value: 'Accounting', text: 'Accounting'},
        {value: 'Login', text: 'Login'},
        {value: 'Legal_Matters', text: 'Legal matters'},
        {value: 'other', text: 'other'}
    ]

    async mounted() {
        const response = await fetch('https://api.db-ip.com/v2/free/self').then(data => data.json())
        this.ipadess = response.ipAddress
    }

    submit() {
        const payload = {
            "alert": true,
            "autorespond": true,
            "source": "API",
            "name": this.form.firstName + " " + this.form.lastName,
            "email": this.form.email,
            "phone": this.form.mobile.replace(" ", ""),
            "subject": this.form.issue + " - " + this.form.issueText.split(" ").slice(0, 5).toString().replaceAll(",", " ") + "...",
            "ip": this.ipadess,
            "message": "data:text/html,MESSAGE <b>" + this.form.issueText + "</b>",
            "attachments": []
        }
        console.log(payload)
        const myHeaders = new Headers();
        myHeaders.append("X-API-Key", this.ApiKey);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(payload);

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://192.168.1.164:8080/http://192.168.1.164/api/http.php/tickets.json", requestOptions)
            .then(response => {
                if (!response.ok) {
                    this.$bvModal.msgBoxOk('Something went wrong. Make sure you filled out everything correctly or try again later.',
                        {
                            title: 'Error',
                            size: 'sm',
                            buttonSize: 'sm',
                            okVariant: 'danger',
                            headerClass: 'p-2 border-bottom-0',
                            footerClass: 'p-2 border-top-0',
                            centered: true
                        }).then(value => {
                        console.log(value)
                    })
                } else {
                    this.$bvModal.msgBoxOk('Data was submitted successfully',
                        {
                            title: 'Confirmation',
                            size: 'sm',
                            buttonSize: 'sm',
                            okVariant: 'success',
                            headerClass: 'p-2 border-bottom-0',
                            footerClass: 'p-2 border-top-0',
                            centered: true
                        }).then(value => {
                        console.log(value)
                    })
                    response.text()
                }

            })
            .then(res => res
            ).catch(err => {
            console.log('error', err)
        })
            .catch(error => {
                console.log('error', error)
            })
    }
}