import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'overview',
        loadChildren: () =>
        import('./app/pages/overview/overview.module').then((m) => m.OverviewModule),
    },
    {
        path: 'reservation',
        loadChildren: () =>
        import('./app/pages/reservation/reservation.module').then((m) => m.ReservationModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}