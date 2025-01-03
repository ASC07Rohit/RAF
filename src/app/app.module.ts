import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { RafScoreComponent } from "./raf-score/raf-score.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";



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
        ReactiveFormsModule
    ],
    bootstrap:[AppComponent],
    providers: [],
})

export class AppModule{}