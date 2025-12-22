import { Routes } from '@angular/router';
import { DynamicSection } from './dynamic-section/dynamic-section';
import { TrialOne } from './trial-one/trial-one';
import { TrialThree } from './trial-three/trial-three';
import { TrialTwo } from './trial-two/trial-two';
import { TrialZero } from './trial-zero/trial-zero';

export const routes: Routes = [
  { path: '', redirectTo: 'trial-one', pathMatch: 'full' },

  { path: 'trial-one', component: TrialOne },
  { path: 'trial-two', component: TrialTwo },
  { path: 'trial-three', component: TrialThree },
  { path: 'trial-zero', component: TrialZero },
  { path: 'dynamic-section', component: DynamicSection },
];
