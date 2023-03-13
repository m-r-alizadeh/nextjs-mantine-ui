export interface ILinkPath {
  breadcrumb: string;
  href: string;
}

export interface IRout {
  icon: any;
  name: any;
  path: any;
  breadcrumb?: string;
}

export interface CanvasAttributes {
  responsive?: boolean;
  withColor?: boolean;
  dimmed?: boolean;
  author: string;
  canvas: { center: boolean; maxWidth?: number };
  category: string;
  dependencies: string[];
  title: string;
  props?: Record<string, any>;
}
export interface UiComponent {
  component: string;
  slug: string;
  code: string;
  attributes: CanvasAttributes;
}

