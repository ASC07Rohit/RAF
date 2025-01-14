import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { RafScoreComponent } from "./raf-score/raf-score.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MemberProfileComponent } from "./member-profile/member-profile.component";
import { CompareCodesComponent } from "./comparecodes/comparecodes.component";


@NgModule({
    declarations: [
        AppComponent,
        RafScoreComponent,
        HomeComponent,
        NavbarComponent,
        LoginComponent,
        MemberProfileComponent,
        CompareCodesComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    bootstrap:[AppComponent],
    providers: [],
})

export class AppModule{}