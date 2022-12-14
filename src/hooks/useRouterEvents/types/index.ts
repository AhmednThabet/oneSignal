export interface UseRouterEvents {
  onRouteChangeStart: (url?: string) => void;
  onRouteChangeComplete: (url?: string) => void;
  onRouteChangeError: (url?: string) => void;
}
