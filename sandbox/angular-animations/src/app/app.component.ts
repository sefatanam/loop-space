import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavData } from "./route-items.data";
import { ButtonDirective } from "@loop-space/shared-ui";
import { Highlight } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

import 'highlight.js/styles/github-dark.min.css';

@Component({
	imports: [RouterModule, ButtonDirective, Highlight, HighlightLineNumbers],
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent {

	codeForHighlight = `
	<div class="container mx-auto px-4 py-8">
		<h2 class="text-3xl font-bold text-gray-800 mb-4">Basic Panel Animation</h2>
		<p class="text-gray-600 mb-6">This section demonstrates a simple height and opacity animation for a collapsible
			panel with customizable background color.</p>
		<div class="mb-12 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
			<div>
				<div libMotion style="overflow: hidden; background-color: #f0f0f0; padding: 10px"
					[initial]="{ height: '0px', opacity: 0, backgroundColor: 'red' }"
					[animate]="{ height: '200px', opacity: 1, backgroundColor: 'blue' }"
					[exit]="{ height: '0px', opacity: 0 }" [variant]="isPanelOpen ? 'animate' : 'initial'"
					[duration]="'.5s'" [easing]="'cubic-bezier(0.68, -0.6, 0.32, 1.6)'">
					<p>This is the content inside the panel!</p>
				</div>

				<button (click)="togglePanel()">
					Toggle Panel
				</button>
			</div>
		</div>
	</div>
`;
	navItems: Readonly<NavData[]> = [
		{
			url: "basic",
			title: "Basic Animation",
		},
		{
			url: "motion",
			title: "Motion",
		},
		/* {
		url: "enable-disable",
		title: "Enable / Disable Animation",
		},
		{
		url: "enter-leave",
		title: "Enter / Leave Animation",
		},
		{
		url: "keyframe",
		title: "Keyframe Animation",
		}, */
	];
}