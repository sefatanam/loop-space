import {
	Directive,
	Input,
	ElementRef,
	OnChanges,
	SimpleChanges,
	AfterViewInit,
	OnInit,
	OnDestroy,
} from "@angular/core";
import {
	AnimationBuilder,
	animate,
	style,
	AnimationMetadata,
	AnimationPlayer,
} from "@angular/animations";

@Directive({
	selector: "[libMotion]",
	standalone: true,
})
export class MotionDirective
	implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
	@Input() initial: { [key: string]: string | number } = {};
	@Input() animate: { [key: string]: string | number } = {};
	@Input() exit: { [key: string]: string | number } = {};
	@Input() onHover: { [key: string]: string | number } | undefined;
	@Input() variant: "initial" | "animate" | "exit" = "initial";
	@Input() duration = "0.5s";
	@Input() easing = "ease-out";

	private currentVariant: "initial" | "animate" | "exit" = "initial";
	private isHovered = false;
	private player: AnimationPlayer | null = null;
	private mouseEnterListener: (() => void) | null = null;
	private mouseLeaveListener: (() => void) | null = null;

	constructor(
		private builder: AnimationBuilder,
		private el: ElementRef,
	) {}

	ngOnInit() {
		this.setupHoverListeners();
	}

	ngAfterViewInit(): void {
		this.applyInitialStyles();
		if (this.variant === "animate") {
			this.runAnimation();
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["variant"] && !changes["variant"].firstChange) {
			this.runAnimation();
		}
		if (changes["onHover"]) {
			this.setupHoverListeners();
		}
	}

	ngOnDestroy() {
		//this.removeHoverListeners();
		//
		console.log("destroyed");
	}

	private setupHoverListeners() {
		//this.removeHoverListeners();

		if (this.onHover && Object.keys(this.onHover).length > 0) {
			this.mouseEnterListener = () => this.onMouseEnter();
			this.mouseLeaveListener = () => this.onMouseLeave();
			this.el.nativeElement.addEventListener(
				"mouseenter",
				this.mouseEnterListener,
			);
			this.el.nativeElement.addEventListener(
				"mouseleave",
				this.mouseLeaveListener,
			);
		}
	}

	private onMouseEnter() {
		if (this.onHover) {
			this.isHovered = true;
			this.updateAnimation();
		}
	}

	private onMouseLeave() {
		if (this.onHover) {
			this.isHovered = false;
			this.updateAnimation();
		}
	}

	private applyInitialStyles() {
		Object.assign(this.el.nativeElement.style, this.initial);
	}

	private runAnimation(): void {
		let animationMetadata: AnimationMetadata[] = [];

		if (this.variant === "initial" && this.currentVariant !== "initial") {
			animationMetadata = [
				style(this.animate),
				animate(`${this.duration} ${this.easing}`, style(this.initial)),
			];
		} else if (this.variant === "animate") {
			animationMetadata = [
				style(this.initial),
				animate(`${this.duration} ${this.easing}`, style(this.animate)),
			];
		} else if (this.variant === "exit") {
			animationMetadata = [
				style(this.animate),
				animate(`${this.duration} ${this.easing}`, style(this.exit)),
			];
		}

		if (animationMetadata.length > 0) {
			this.playAnimation(animationMetadata);
			this.currentVariant = this.variant;
		}
	}

	private updateAnimation() {
		if (this.onHover) {
			const targetStyles = this.isHovered
				? { ...this.animate, ...this.onHover }
				: this.animate;
			const animationMetadata: AnimationMetadata[] = [
				style(this.el.nativeElement.style),
				animate(`${this.duration} ${this.easing}`, style(targetStyles)),
			];
			this.playAnimation(animationMetadata);
		}
	}

	private playAnimation(metadata: AnimationMetadata[]): void {
		if (this.player) {
			this.player.destroy();
		}
		const factory = this.builder.build(metadata);
		this.player = factory.create(this.el.nativeElement);
		this.player.play();
	}
}
