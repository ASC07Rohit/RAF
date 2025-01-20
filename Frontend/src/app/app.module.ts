import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { RafScoreComponent } from "./raf-score/raf-score.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        AppComponent,
        RafScoreComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    bootstrap:[AppComponent],
    providers: [],
})

export class AppModule{}