import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RestPage } from '../pages/rest/rest';
import { IngresarSolicitudPage } from '../pages/ingresar-solicitud/ingresar-solicitud'
import { MostrarCapchaPage } from '../pages/mostrar-capcha/mostrar-capcha';
import { ResultadoConsultaPage } from '../pages/resultado-consulta/resultado-consulta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SoapProvider } from '../providers/soap/soap';
import { HttpProvider } from '../providers/http/http';
import { TseProvider } from '../providers/tse/tse';



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RestPage,
    IngresarSolicitudPage,
    MostrarCapchaPage,
    ResultadoConsultaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    RestPage,
    IngresarSolicitudPage,
    MostrarCapchaPage,
    ResultadoConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SoapProvider,
    HttpProvider,
    TseProvider
  ]
})
export class AppModule {}
