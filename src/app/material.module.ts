import { NgModule } from '@angular/core';
import { 	MatButtonModule, MatDialogModule, MatSidenavModule, MatCheckboxModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule, 
			MatPaginatorModule, MatTabsModule, MatProgressSpinnerModule
			 } from '@angular/material';

@NgModule({
	imports:[MatButtonModule, MatDialogModule, MatSidenavModule, MatCheckboxModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule
			,MatPaginatorModule, MatTabsModule, MatProgressSpinnerModule],
	exports:[MatButtonModule, MatDialogModule, MatSidenavModule, MatCheckboxModule, MatListModule, MatToolbarModule, MatInputModule, MatTableModule
			,MatPaginatorModule, MatTabsModule, MatProgressSpinnerModule]
})
export class MaterialModule {}