import axios from "axios";
const userInstance = axios.create({ baseURL: 'http://localhost:8000/', timeout: 30000, headers: { Authorization: `Bearer ${localStorage.getItem('EmployeeName')}` } });
const userClient = axios.create({ baseURL: 'http://localhost:8000/', timeout: 30000, headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('EmployeeName')}` } });
const adminInstance = axios.create({ baseURL: 'http://localhost:8000/admin/', timeout: 30000, headers: { Authorization: `Bearer ${localStorage.getItem('AdminName')}` } });
const adminClient = axios.create({ baseURL: 'http://localhost:8000/admin/', timeout: 30000, headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('AdminName')}` } });

const userLogin = (data) => userInstance.post('/', data);
const personalInfo = (data) => userInstance.post('/signup', data);
const workInfo = (data) => userInstance.patch('/signup', data);
const credentials = (data) => userInstance.put('/signup', data);
const EmployeeData = (userName) => userInstance.get(`/dashboard?user=${userName}`);
const updateEmpImage = (data) => userInstance.post('/dashboard', data);



const adminLogin = (data) => adminInstance.post('/login', data);
const adminInfo = (data) => adminInstance.post('/signup', data);
const adminCred = (data) => adminInstance.patch('/signup', data);
const personalData = (userName) => adminInstance.get(`/dashboard?user=${userName}`);
const updateAdminImage = (data) => adminInstance.post('/dashboard', data);




export {
    personalInfo,
    workInfo,
    credentials,
    userLogin,
    adminLogin,
    adminInfo,
    adminCred,
    personalData,
    EmployeeData,
    updateAdminImage,
    updateEmpImage,
}