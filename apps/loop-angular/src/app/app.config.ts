import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import appRoutes from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHighlightOptions } from "ngx-highlightjs";
import { provideHttpClient, withFetch } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(appRoutes),
		provideAnimationsAsync(),
		provideHighlightOptions({
			fullLibraryLoader: () => import('highlight.js'),
			lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
		}),
		provideHttpClient(withFetch())
	],
};
