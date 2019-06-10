import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../appSettings/settings';
import { HomePage } from '../home/home';
import { RequestPage } from '../request/request';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = RequestPage ;
  tab4Root =AboutPage ;
  tab5Root = SettingsPage;

  constructor() {

  }
}
