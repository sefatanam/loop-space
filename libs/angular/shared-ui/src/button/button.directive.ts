import { Directive } from "@angular/core";

@Directive({
	selector: "[libButton]",
	host: {
		class:
			"rounded-none bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
	},
	exportAs: "libButton",
})
export class ButtonDirective {}
