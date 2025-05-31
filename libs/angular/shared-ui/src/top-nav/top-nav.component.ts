import { signal } from "@angular/core";
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavItem } from "@loop-space/utils";
@Component({
  selector: 'lib-top-nav',
  imports: [RouterLink],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {

  @Input() routes: Array<NavItem<string>> = []
  showFlyOutMenu = signal(true);
	toggleFlyOutMenu() {
		this.showFlyOutMenu.update((prev) => !prev);
	}
}
