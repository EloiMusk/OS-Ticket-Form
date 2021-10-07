import {Component, Vue} from 'vue-property-decorator';

interface form {
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    issue: issues,
    issueText: string
}
interface option{
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
    private form: form = {firstName: '', lastName: '', email: '', issue:issues.other, mobile: '', issueText: ''}
    private issues: Array<option> = [
        {value:'Payment',text:'Payment'},
        {value: 'Accounting', text:'Accounting'},
        {value:'Login',text:'Login'},
        {value:'Legal_Matters',text:'Legal matters'},
        {value:'other',text:'other'}
    ]
    submit(){
        alert(Object.values(this.form))
    }
}