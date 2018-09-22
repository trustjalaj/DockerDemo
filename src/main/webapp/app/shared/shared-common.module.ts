import { NgModule } from '@angular/core';

import { CheckingDockerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CheckingDockerSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CheckingDockerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CheckingDockerSharedCommonModule {}
