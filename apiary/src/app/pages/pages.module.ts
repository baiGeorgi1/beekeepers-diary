import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPagesModule } from "./user-pages/user-pages.module";
import { DetailPagesModule } from "./detail-pages/detail-pages.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        UserPagesModule,
        DetailPagesModule,
        RouterModule.forChild([
            {
                path: "user/",
                component: UserPagesModule,
            },
            { path: "details/", component: DetailPagesModule },
        ]),
    ],
    exports: [RouterModule],
})
export class PagesModule {}
