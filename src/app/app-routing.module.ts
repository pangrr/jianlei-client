import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealestateComponent } from './realestate/realestate.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { UploadRealestateComponent } from './upload-realestate/upload-realestate.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'realestate/:id', component: RealestateComponent },
  { path: 'map', component: MapComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload-realestate', component: UploadRealestateComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
