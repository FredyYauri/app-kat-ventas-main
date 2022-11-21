import { NgModule } from '@angular/core'
import { ClientComponent } from './client.component'
import { DetailClientComponent } from './detail-client/detail-client.component'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        ClientComponent,
        DetailClientComponent
    ],
    exports: [
        ClientComponent,
        DetailClientComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ]
})
export class ClientModule {}
