import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Parent';
import TestArray from './NumberSample';
import JsonSample from './JSONEXample';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AxiosSample from './AxiosSample';
import DisplayValues from './DisplayNumberValues';
import DataTableSample from './DatatableSample';
import URLNOTFOUND from './samples/URLNotfound';

import UrlParamSample from './samples/UrlParamSample';
import SampleTesting from './samples/SampleTesting';
import UseNewParam from './samples/UseNewParam';
import FormikSample from './container/formikSample';
import Welcome from './Welcome';
import ErrorPage from './ErrorPage';
import UseParamSample from './UseParamsSample';
import UseNavigation from './UseNavigationTest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './reducers/CounterReducer';
import CounterComponent from './CounterComponent';
import { Spinner } from './Spinner';
import { SpinnerrDisplayReducer } from './reducers/spinnerReducer';
import axios from 'axios';
import ModalPopup from './ModalPopup';
import { ModalPopupReducer } from './reducers/modalPopupReducers';
import { SampleFormik } from './SampleFormik';
import { StepperForm } from './StepperForm';
import TabsForm from './wizardForm/TabsForm';
import { UsersListNew } from './UsersListNew';
import { UserViewNew } from './UserViewNew';
import { UserListReducer } from './reducers/userListReducer';
import { ApscheLoginPage } from './APSCHEINSPECTIONMODULE/Apscheloginpage';
import { BasicForm } from './APSCHEINSPECTIONMODULE/Example.js';
import { Affiliationhomepage } from './AFFILIATION PROJECT/Affiliationhomepage';
//import from  './reducers/C';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store=configureStore(
 { 
  reducer:{
   counter:CounterReducer,
   spinner:SpinnerrDisplayReducer,
    modalState:ModalPopupReducer,
     userListState:UserListReducer
  }

}

) 

axios.interceptors.request.use(
  (req) => {
     // Add configurations here
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
     // Add configurations here
      store.dispatch({ type:'SHOWSPINNER' });
      //alert("testing-----");
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
     return Promise.reject(err);
  }
);axios.interceptors.response.use(
  (res) => {
     // Add configurations here
     store.dispatch({ type:'HIDESPINNER' });
     if (res.status === 201) {
        console.log('Posted Successfully');
     }
     return res;
  },
  (err) => {
     return Promise.reject(err);
  }
);



root.render(
    <React.StrictMode>
    <Provider store={store}>  
  <BrowserRouter>
  {/* <Header></Header>  */}
  <Spinner></Spinner>
   <Routes>
     <Route path="/" element={<Welcome></Welcome>}> </Route>
     <Route path="*" element={<ErrorPage></ErrorPage> }></Route>
     <Route path="/formikSample" element={<FormikSample></FormikSample>}></Route>
      <Route path="/urlParamSample/:id/:name" element={<UseParamSample></UseParamSample> }></Route>
      <Route path="/usenavigationTest" element={<UseNavigation></UseNavigation>}  ></Route>
      <Route path="/counterTest" element={<CounterComponent></CounterComponent>}  ></Route>
      <Route path="/datatable" element={<DataTableSample></DataTableSample>}  ></Route>
      <Route  path="/modalPopup"  element={<ModalPopup></ModalPopup>}></Route>
      <Route path="/SampleFormik" element={<SampleFormik></SampleFormik>}></Route>
      <Route path="/StepperForm" element={<StepperForm></StepperForm>}> </Route>
      <Route path="/tabs" element={<TabsForm></TabsForm>} ></Route>
      <Route path="/UsersListNew" element={<UsersListNew></UsersListNew>}></Route>
      <Route path="/UsersView/:id" element={<UserViewNew></UserViewNew>}></Route>
      <Route path="/ApscheLoginPage" element={<ApscheLoginPage></ApscheLoginPage>}></Route>
      <Route path="/example" element={<BasicForm></BasicForm>}></Route>
      <Route path="/affiliationhomepage" element={<Affiliationhomepage></Affiliationhomepage>}></Route>

     </Routes> 
    <ModalPopup></ModalPopup>
{/* <Footer></Footer> */}
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);


reportWebVitals();
